// Export the parsed SWF (work/movie.json) into:
//   out/data/library.js   -> window.LIB  (characters, timelines, fonts, exports)
//   work/scripts.json     -> raw AVM1 bytecode blobs referenced by id from the library
import fs from 'node:fs';

const movie = JSON.parse(fs.readFileSync('/home/claude/port/work/movie.json', 'utf8'));
const OUT = '/home/claude/port/out/data';
fs.mkdirSync(OUT, { recursive: true });

const b64 = (x) => x.$b64;
const r2 = (v) => Math.round(v * 100) / 100;
const px = (twips) => r2(twips / 20);
const fx16 = (f) => f.epsilons / 65536;
const fx8 = (f) => f.epsilons / 256;

function mat(m) {
  if (!m) return null;
  return [fx16(m.scaleX), fx16(m.rotateSkew0), fx16(m.rotateSkew1), fx16(m.scaleY), px(m.translateX), px(m.translateY)].map((v) => Math.round(v * 100000) / 100000);
}
function matTw(m) { // keeps twips for gradients/bitmaps (converted later)
  return mat(m);
}
const rgba = (c) => [c.r, c.g, c.b, c.a];

// ------------------------------------------------------------------ scripts
const scripts = [];
function addScript(where, bytesField) {
  const id = scripts.length;
  scripts.push({ id, where, b64: b64(bytesField) });
  return id;
}

// ------------------------------------------------------------------ shapes
const fmat = (m) => { const a = mat(m); return [a[0] / 20, a[1] / 20, a[2] / 20, a[3] / 20, a[4], a[5]].map((v) => Math.round(v * 100000) / 100000); };
function fillSpec(f) {
  switch (f.type) {
    case 4: return { t: 's', c: rgba(f.color) };
    case 0: return { t: 'b', id: f.bitmapId, m: fmat(f.matrix), rep: !!f.repeating, sm: !!f.smoothed };
    case 2: case 3: case 1: {
      return {
        t: f.type === 2 ? 'l' : (f.type === 3 ? 'r' : 'f'),
        m: fmat(f.matrix),
        stops: f.gradient.colors.map((s) => [s.ratio, ...rgba(s.color)]),
        spread: f.gradient.spread,
        focal: f.focalPoint ? fx8(f.focalPoint) : 0,
      };
    }
    default: throw new Error('fill type ' + f.type);
  }
}
function lineSpec(l) {
  const fill = l.fill ? (l.fill.type === 4 ? { t: 's', c: rgba(l.fill.color) } : null) : (l.color ? { t: 's', c: rgba(l.color) } : null);
  return { w: px(l.width), fill, cap: l.startCap, join: l.join ? l.join.type : 0, miter: l.join && l.join.limit ? l.join.limit : 3, noH: !!l.noHScale, noV: !!l.noVScale };
}
const f2 = (v) => { const r = Math.round(v * 100) / 100; return Object.is(r, -0) ? 0 : r; };

// Convert shape records into drawable layers.
// A layer is {fill, d} or {line, d}; d is an SVG path string in pixel coordinates.
function buildShape(shape, morphMode) {
  const layers = [];
  let fills = shape.initialStyles.fill;
  let lines = shape.initialStyles.line;
  let pen = { x: 0, y: 0 };
  let cur = { l: 0, r: 0, line: 0 };
  // edge lists for the current style group
  let fillEdges = new Map(); // fillIdx -> list of edges
  let lineEdges = new Map(); // lineIdx -> list of edges
  const flush = () => {
    // fills in index order
    for (const [idx, edges] of [...fillEdges.entries()].sort((a, b) => a[0] - b[0])) {
      const d = stitch(edges);
      if (d) layers.push({ fill: fillSpec(fills[idx - 1]), d });
    }
    for (const [idx, edges] of [...lineEdges.entries()].sort((a, b) => a[0] - b[0])) {
      const d = strokePath(edges);
      if (d) layers.push({ line: lineSpec(lines[idx - 1]), d });
    }
    fillEdges = new Map();
    lineEdges = new Map();
  };
  const addEdge = (from, to, ctrl) => {
    const e = { x0: from.x, y0: from.y, x1: to.x, y1: to.y, cx: ctrl ? ctrl.x : null, cy: ctrl ? ctrl.y : null };
    if (cur.r) (fillEdges.get(cur.r) || fillEdges.set(cur.r, []).get(cur.r)).push(e);                   // right fill: as is
    if (cur.l) (fillEdges.get(cur.l) || fillEdges.set(cur.l, []).get(cur.l)).push(reverseEdge(e));     // left fill: reversed
    if (cur.line) (lineEdges.get(cur.line) || lineEdges.set(cur.line, []).get(cur.line)).push(e);
  };
  for (const rec of shape.records) {
    if (rec.type === 1) {
      if (rec.newStyles) {
        flush();
        fills = rec.newStyles.fill;
        lines = rec.newStyles.line;
        cur = { l: 0, r: 0, line: 0 };
      }
      if (rec.moveTo) pen = { x: rec.moveTo.x, y: rec.moveTo.y };
      if (rec.leftFill !== undefined) cur.l = rec.leftFill;
      if (rec.rightFill !== undefined) cur.r = rec.rightFill;
      if (rec.lineStyle !== undefined) cur.line = rec.lineStyle;
    } else {
      if (rec.controlDelta) {
        const c = { x: pen.x + rec.controlDelta.x, y: pen.y + rec.controlDelta.y };
        const a = { x: pen.x + rec.delta.x, y: pen.y + rec.delta.y };
        addEdge(pen, a, c);
        pen = a;
      } else {
        const a = { x: pen.x + rec.delta.x, y: pen.y + rec.delta.y };
        addEdge(pen, a, null);
        pen = a;
      }
    }
  }
  flush();
  return layers;
}
function reverseEdge(e) {
  return { x0: e.x1, y0: e.y1, x1: e.x0, y1: e.y0, cx: e.cx, cy: e.cy };
}
const key = (x, y) => x + ',' + y;
function stitch(edges) {
  // Join edges end-to-start into closed loops.
  const byStart = new Map();
  for (const e of edges) {
    const k = key(e.x0, e.y0);
    if (!byStart.has(k)) byStart.set(k, []);
    byStart.get(k).push(e);
  }
  const used = new Set();
  let d = '';
  for (const e0 of edges) {
    if (used.has(e0)) continue;
    let e = e0;
    d += `M${f2(e.x0 / 20)} ${f2(e.y0 / 20)}`;
    const startKey = key(e.x0, e.y0);
    while (e && !used.has(e)) {
      used.add(e);
      d += e.cx === null ? `L${f2(e.x1 / 20)} ${f2(e.y1 / 20)}` : `Q${f2(e.cx / 20)} ${f2(e.cy / 20)} ${f2(e.x1 / 20)} ${f2(e.y1 / 20)}`;
      const nk = key(e.x1, e.y1);
      if (nk === startKey) break;
      const cands = byStart.get(nk);
      e = cands ? cands.find((c) => !used.has(c)) : null;
    }
    d += 'Z';
  }
  return d;
}
function strokePath(edges) {
  let d = '';
  let lx = null, ly = null;
  for (const e of edges) {
    if (lx !== e.x0 || ly !== e.y0) d += `M${f2(e.x0 / 20)} ${f2(e.y0 / 20)}`;
    d += e.cx === null ? `L${f2(e.x1 / 20)} ${f2(e.y1 / 20)}` : `Q${f2(e.cx / 20)} ${f2(e.cy / 20)} ${f2(e.x1 / 20)} ${f2(e.y1 / 20)}`;
    lx = e.x1; ly = e.y1;
  }
  return d;
}
const rect = (r) => [px(r.xMin), px(r.yMin), px(r.xMax), px(r.yMax)];

// ------------------------------------------------------------------ morph shapes
// Morph shape: produce start and end versions of each layer with identical structure.
function buildMorph(t) {
  const startShape = { initialStyles: { fill: [], line: [] }, records: [] };
  const endShape = { initialStyles: { fill: [], line: [] }, records: [] };
  const mf = t.shape.initialStyles.fill;
  const ml = t.shape.initialStyles.line;
  const fillPairs = mf.map((f) => ({ a: morphFill(f, false), b: morphFill(f, true) }));
  const linePairs = ml.map((l) => ({ a: morphLine(l, false), b: morphLine(l, true) }));
  startShape.initialStyles.fill = fillPairs.map((p) => p.a);
  endShape.initialStyles.fill = fillPairs.map((p) => p.b);
  startShape.initialStyles.line = linePairs.map((p) => p.a);
  endShape.initialStyles.line = linePairs.map((p) => p.b);
  for (const r of t.shape.records) {
    if (r.type === 1) {
      const a = { type: 1 };
      const b = { type: 1 };
      if (r.moveTo) { a.moveTo = r.moveTo; b.moveTo = r.morphMoveTo; }
      if (r.leftFill !== undefined) { a.leftFill = b.leftFill = r.leftFill; }
      if (r.rightFill !== undefined) { a.rightFill = b.rightFill = r.rightFill; }
      if (r.lineStyle !== undefined) { a.lineStyle = b.lineStyle = r.lineStyle; }
      startShape.records.push(a); endShape.records.push(b);
    } else {
      const a = { type: 0 }, b = { type: 0 };
      if (r.controlDelta) {
        a.controlDelta = r.controlDelta; a.delta = r.delta;
        b.controlDelta = r.morphControlDelta; b.delta = r.morphDelta;
      } else {
        a.delta = r.delta; b.delta = r.morphDelta;
      }
      startShape.records.push(a); endShape.records.push(b);
    }
  }
  const A = buildShape(startShape);
  const B = buildShape(endShape);
  return { a: A, b: B };
}
function morphFill(f, end) {
  if (f.type === 4) return { type: 4, color: end ? f.morphColor : f.color };
  if (f.type === 0) return { type: 0, bitmapId: f.bitmapId, matrix: end ? f.morphMatrix : f.matrix, repeating: f.repeating, smoothed: f.smoothed };
  return { type: f.type, matrix: end ? f.morphMatrix : f.matrix, gradient: { spread: f.gradient.spread, colorSpace: f.gradient.colorSpace, colors: f.gradient.colors.map((s) => ({ ratio: end ? s.morphRatio : s.ratio, color: end ? s.morphColor : s.color })) }, focalPoint: f.focalPoint };
}
function morphLine(l, end) {
  return { width: end ? l.morphWidth : l.width, fill: l.fill ? morphFill(l.fill, end) : null, color: l.color, startCap: l.startCap, endCap: l.endCap, join: l.join, noHScale: l.noHScale, noVScale: l.noVScale };
}

// ------------------------------------------------------------------ fonts & text
const fonts = new Map(); // id -> font tag
for (const t of movie.tags) if (t.type === 12) fonts.set(t.id, t);

// charset for dynamic text: everything found in script strings plus Latin ranges
const strings = fs.readFileSync('/home/claude/port/work/strings.txt', 'utf8').split('\n');
const charset = new Set();
for (let c = 32; c < 127; c++) charset.add(c);
for (let c = 160; c < 384; c++) charset.add(c);
for (const line of strings) {
  const tab = line.indexOf('\t');
  if (tab < 0) continue;
  let s;
  try { s = JSON.parse(line.slice(tab + 1)); } catch { continue; }
  for (const ch of s) charset.add(ch.codePointAt(0));
}
for (const t of movie.tags) if (t.type === 11 && t.text) for (const ch of t.text) charset.add(ch.codePointAt(0));
[8211, 8212, 8216, 8217, 8220, 8221, 8226, 8230, 339, 338, 8364].forEach((c) => charset.add(c));

const f5 = (v) => { const r = Math.round(v * 20000) / 20000; return Object.is(r, -0) ? 0 : r; };
function glyphPath(glyph, scale) {
  // glyph.records are shape records in em units; build a single fill path (nonzero) scaled to px
  let d = '';
  let pen = { x: 0, y: 0 };
  let open = false;
  for (const rec of glyph.records) {
    if (rec.type === 1) {
      if (rec.moveTo) {
        if (open) d += 'Z';
        pen = { x: rec.moveTo.x, y: rec.moveTo.y };
        d += `M${f5(pen.x * scale)} ${f5(pen.y * scale)}`;
        open = true;
      }
    } else if (rec.controlDelta) {
      const c = { x: pen.x + rec.controlDelta.x, y: pen.y + rec.controlDelta.y };
      const a = { x: pen.x + rec.delta.x, y: pen.y + rec.delta.y };
      d += `Q${f5(c.x * scale)} ${f5(c.y * scale)} ${f5(a.x * scale)} ${f5(a.y * scale)}`;
      pen = a;
    } else {
      const a = { x: pen.x + rec.delta.x, y: pen.y + rec.delta.y };
      d += `L${f5(a.x * scale)} ${f5(a.y * scale)}`;
      pen = a;
    }
  }
  if (open) d += 'Z';
  return d;
}

function buildStaticText(t) {
  const m = t.matrix ? { a: fx16(t.matrix.scaleX), b: fx16(t.matrix.rotateSkew0), c: fx16(t.matrix.rotateSkew1), d: fx16(t.matrix.scaleY), e: t.matrix.translateX, f: t.matrix.translateY } : { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
  const layers = [];
  let x = 0, y = 0;
  for (const rec of t.records) {
    if (rec.offsetX !== undefined) x = rec.offsetX;
    if (rec.offsetY !== undefined) y = rec.offsetY;
    const font = fonts.get(rec.fontId);
    if (!font) continue;
    // glyph em units -> twips: size/em
    const k = rec.fontSize / font.emSquareSize;
    let d = '';
    for (const e of rec.entries) {
      const g = font.glyphs[e.index];
      if (g && g.records.length) {
        // translate glyph by pen (twips), then apply text matrix, then to px
        d += glyphToPath(g, k, x, y, m);
      }
      x += e.advance;
    }
    if (d) layers.push({ fill: { t: 's', c: rec.color ? rgba(rec.color) : [0, 0, 0, 255] }, d });
  }
  return layers;
}
function glyphToPath(glyph, k, ox, oy, m) {
  let d = '';
  let pen = { x: 0, y: 0 };
  let open = false;
  const P = (gx, gy) => {
    const tx = gx * k + ox, ty = gy * k + oy; // twips
    const X = (m.a * tx + m.c * ty + m.e) / 20;
    const Y = (m.b * tx + m.d * ty + m.f) / 20;
    return `${f2(X)} ${f2(Y)}`;
  };
  for (const rec of glyph.records) {
    if (rec.type === 1) {
      if (rec.moveTo) {
        if (open) d += 'Z';
        pen = { x: rec.moveTo.x, y: rec.moveTo.y };
        d += 'M' + P(pen.x, pen.y);
        open = true;
      }
    } else if (rec.controlDelta) {
      const c = { x: pen.x + rec.controlDelta.x, y: pen.y + rec.controlDelta.y };
      const a = { x: pen.x + rec.delta.x, y: pen.y + rec.delta.y };
      d += 'Q' + P(c.x, c.y) + ' ' + P(a.x, a.y);
      pen = a;
    } else {
      const a = { x: pen.x + rec.delta.x, y: pen.y + rec.delta.y };
      d += 'L' + P(a.x, a.y);
      pen = a;
    }
  }
  if (open) d += 'Z';
  return d;
}

function buildFontExport(font) {
  const out = { name: font.fontName, bold: font.isBold, italic: font.isItalic, em: font.emSquareSize, glyphs: {} };
  if (font.layout) {
    out.ascent = font.layout.ascent; out.descent = font.layout.descent; out.leading = font.layout.leading;
  }
  const scale = 1 / font.emSquareSize; // em-normalized coordinates
  font.codeUnits.forEach((code, idx) => {
    if (!charset.has(code) && font.codeUnits.length > 1000) return;
    const g = font.glyphs[idx];
    if (!g) return;
    const adv = font.layout ? font.layout.advances[idx] / font.emSquareSize : null;
    out.glyphs[code] = [adv === null ? null : Math.round(adv * 10000) / 10000, glyphPath(g, scale)];
  });
  // kerning table omitted for now (rarely visible)
  return out;
}

// ------------------------------------------------------------------ timelines
function timelineFrames(tags, whereName) {
  const frames = [];
  const labels = {};
  let ops = [];
  let frameNo = 1;
  let scriptCount = 0;
  for (const t of tags) {
    switch (t.type) {
      case 49: {
        const o = ['P', t.depth, t.characterId === undefined ? 0 : t.characterId, t.isUpdate ? 1 : 0];
        const ext = {};
        if (t.matrix) ext.m = mat(t.matrix);
        if (t.colorTransform) {
          const c = t.colorTransform;
          ext.cx = [fx8(c.redMult), fx8(c.greenMult), fx8(c.blueMult), fx8(c.alphaMult), c.redAdd, c.greenAdd, c.blueAdd, c.alphaAdd];
        }
        if (t.ratio !== undefined) ext.ratio = t.ratio;
        if (t.name) ext.name = t.name;
        if (t.clipDepth !== undefined) ext.clip = t.clipDepth;
        if (t.filters && t.filters.length) ext.filters = t.filters.map(filterSpec);
        if (t.blendMode) ext.blend = t.blendMode;
        if (t.clipActions && t.clipActions.length) {
          ext.clipActions = t.clipActions.map((c) => ({ ev: c.events, key: c.keyCode, script: addScript(`${whereName}#f${frameNo}#clip`, c.actions) }));
        }
        o.push(ext);
        ops.push(o);
        break;
      }
      case 54: ops.push(['R', t.depth]); break;
      case 31: ops.push(['A', addScript(`${whereName}#f${frameNo}.${scriptCount++}`, t.actions)]); break;
      case 38: labels[t.name] = frameNo; break;
      case 61: ops.push(['S', t.soundId, t.soundInfo ? { stop: !!t.soundInfo.syncStop, noMulti: !!t.soundInfo.syncNoMultiple, loops: t.soundInfo.loopCount } : {}]); break;
      case 58: frames.push(ops); ops = []; frameNo++; scriptCount = 0; break;
      default: break;
    }
  }
  if (ops.length) frames.push(ops);
  return { frames, labels };
}
function filterSpec(f) {
  const base = { type: f.filter };
  switch (f.filter) {
    case 0: return { ...base, kind: 'shadow', color: rgba(f.color), blurX: fx16(f.blurX), blurY: fx16(f.blurY), angle: fx16(f.angle), distance: fx16(f.distance), strength: fx8(f.strength), inner: f.inner, knockout: f.knockout, hide: !f.compositeSource, passes: f.passes };
    case 1: return { ...base, kind: 'blur', blurX: fx16(f.blurX), blurY: fx16(f.blurY), passes: f.passes };
    case 2: return { ...base, kind: 'glow', color: rgba(f.color), blurX: fx16(f.blurX), blurY: fx16(f.blurY), strength: fx8(f.strength), inner: f.inner, knockout: f.knockout, passes: f.passes };
    case 3: return { ...base, kind: 'bevel', shadow: rgba(f.shadowColor), highlight: rgba(f.highlightColor), blurX: fx16(f.blurX), blurY: fx16(f.blurY), angle: fx16(f.angle), distance: fx16(f.distance), strength: fx8(f.strength) };
    default: return { ...base, kind: 'other' };
  }
}

// ------------------------------------------------------------------ build library
const chars = {};
const exportsMap = {};
const sounds = {};
const usedFonts = new Set();

for (const t of movie.tags) {
  switch (t.type) {
    case 22: chars[t.id] = { k: 'shape', bounds: rect(t.bounds), layers: buildShape(t.shape) }; break;
    case 19: { const mo = buildMorph(t); chars[t.id] = { k: 'morph', bounds: rect(t.bounds), a: mo.a, b: mo.b }; break; }
    case 25: chars[t.id] = { k: 'shape', bounds: rect(t.bounds), layers: buildStaticText(t) }; break;
    case 11: {
      usedFonts.add(t.fontId);
      chars[t.id] = {
        k: 'edit', bounds: rect(t.bounds), font: t.fontId, size: px(t.fontSize), color: t.color ? rgba(t.color) : [0, 0, 0, 255],
        align: t.align, wrap: !!t.wordWrap, multi: !!t.multiline, password: !!t.password, readonly: !!t.readonly, autoSize: !!t.autoSize,
        selectable: !t.noSelect, border: !!t.border, html: !!t.html, outlines: !!t.useGlyphFont,
        ml: px(t.marginLeft || 0), mr: px(t.marginRight || 0), indent: px(t.indent || 0), leading: px(t.leading || 0),
        maxLen: t.maxLength === undefined ? null : t.maxLength, variable: t.variable || null, text: t.text || '',
      };
      break;
    }
    case 24: {
      const tl = timelineFrames(t.tags, 'sprite' + t.id);
      chars[t.id] = { k: 'sprite', n: t.frameCount, frames: tl.frames, labels: tl.labels };
      break;
    }
    case 6: {
      const states = { up: [], over: [], down: [], hit: [] };
      for (const r of t.records) {
        const rec = { id: r.characterId, depth: r.depth, m: mat(r.matrix) };
        if (r.colorTransform) { const c = r.colorTransform; rec.cx = [fx8(c.redMult), fx8(c.greenMult), fx8(c.blueMult), fx8(c.alphaMult), c.redAdd, c.greenAdd, c.blueAdd, c.alphaAdd]; }
        if (r.stateUp) states.up.push(rec);
        if (r.stateOver) states.over.push(rec);
        if (r.stateDown) states.down.push(rec);
        if (r.stateHitTest) states.hit.push(rec);
      }
      const actions = (t.actions || []).map((a) => ({ cond: Object.entries(a.conditions || {}).filter(([, v]) => v).map(([k]) => k), key: a.keyCode, script: addScript('button' + t.id, a.actions) }));
      chars[t.id] = { k: 'button', states, actions, trackAsMenu: !!t.trackAsMenu };
      break;
    }
    case 23: sounds[t.id] = { file: `assets/snd/${t.id}.mp3` }; chars[t.id] = { k: 'sound' }; break;
    case 5: chars[t.id] = { k: 'bitmap' }; break;
    case 35: for (const a of t.assets) exportsMap[a.name] = a.id; break;
    default: break;
  }
}

const mainTimeline = timelineFrames(movie.tags, 'main');

// fonts
const fontsOut = {};
for (const id of usedFonts) {
  const f = fonts.get(id);
  if (f) fontsOut[id] = buildFontExport(f);
}

const lib = {
  fps: 30,
  w: movie.header.frameSize.xMax / 20,
  h: movie.header.frameSize.yMax / 20,
  bg: (movie.tags.find((t) => t.type === 56) || {}).color || { r: 255, g: 255, b: 255 },
  main: { n: movie.header.frameCount, frames: mainTimeline.frames, labels: mainTimeline.labels },
  chars,
  fonts: fontsOut,
  exports: exportsMap,
  sounds,
};
const js = 'var LIB = ' + JSON.stringify(lib) + ';\n';
fs.writeFileSync(OUT + '/library.js', js);
fs.writeFileSync('/home/claude/port/work/scripts.json', JSON.stringify(scripts));
console.log('library.js', (js.length / 1e6).toFixed(2), 'MB;', Object.keys(chars).length, 'characters;', scripts.length, 'scripts; fonts:', Object.keys(fontsOut).map((i) => i + ':' + Object.keys(fontsOut[i].glyphs).length).join(' '));

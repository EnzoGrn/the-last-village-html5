// TextField (dynamic text) layout and drawing using the glyph outlines embedded in the SWF.
'use strict';
(function () {
  var LIB = window.LIB;
  var NF = $.NF;
  var DisplayObject = $.DisplayObject;
  var str = $.str, num = $.n;

  var FACE_TO_FONT = { 'blackadder itc': 3213, 'lithos pro regular': 233, 'lithos pro': 233, 'lithos pro black': 233, 'times new roman': 196 };

  function EditText(def, charId) {
    DisplayObject.call(this);
    this.def = def; this.charId = charId;
    this.w = def.bounds[2] - def.bounds[0];
    this.h = def.bounds[3] - def.bounds[1];
    this.x0 = def.bounds[0]; this.y0 = def.bounds[1];
    this.htmlMode = !!def.html;
    this.fmt = { font: def.font, size: def.size, color: def.color, align: def.align, bold: false, italic: false, underline: false, spacing: 0 };
    this.autoSize = def.autoSize ? 'left' : 'none';
    this.wordWrap = def.wrap; this.multiline = def.multi; this.password = def.password;
    this.border = def.border; this.background = false; this.borderColor = 0; this.backgroundColor = 0xffffff;
    this.selectable = def.selectable; this.type = def.readonly ? 'dynamic' : 'input';
    this.maxChars = def.maxLen;
    this.runs = [];
    this.layout = null;
    this.setInitial(def.text);
  }
  EditText.prototype = Object.create(DisplayObject.prototype);
  EditText.prototype.constructor = EditText;
  $.EditText = EditText;
  var EP = EditText.prototype;

  // ---------------------------------------------------------------- html parsing
  function decodeEntities(s) {
    return s.replace(/&(#x?[0-9a-fA-F]+|amp|lt|gt|quot|apos|nbsp);/g, function (m, e) {
      switch (e) { case 'amp': return '&'; case 'lt': return '<'; case 'gt': return '>'; case 'quot': return '"'; case 'apos': return "'"; case 'nbsp': return ' '; }
      if (e.charAt(1) === 'x' || e.charAt(1) === 'X') return String.fromCharCode(parseInt(e.substring(2), 16));
      return String.fromCharCode(parseInt(e.substring(1), 10));
    });
  }
  function fontFromFace(face, fallback) {
    if (!face) return fallback;
    var id = FACE_TO_FONT[face.toLowerCase()];
    return id !== undefined ? id : fallback;
  }
  function parseHtml(html, base) {
    var runs = [];
    var stack = [Object.assign({}, base)];
    var re = /<(\/?)([a-zA-Z]+)([^>]*)>|([^<]+)/g, m;
    var firstPara = true;
    function cur() { return stack[stack.length - 1]; }
    function push(text) { if (text) runs.push({ text: text, f: Object.assign({}, cur()) }); }
    while ((m = re.exec(html))) {
      if (m[4] !== undefined) { push(decodeEntities(m[4])); continue; }
      var closing = m[1] === '/', tag = m[2].toLowerCase(), attrs = m[3] || '';
      var A = {};
      attrs.replace(/([a-zA-Z]+)\s*=\s*"([^"]*)"|([a-zA-Z]+)\s*=\s*'([^']*)'/g, function (mm, k1, v1, k2, v2) { A[(k1 || k2).toLowerCase()] = v1 !== undefined ? v1 : v2; return ''; });
      if (closing) {
        if (tag === 'p') { if (runs.length) runs.push({ text: '\n', f: Object.assign({}, cur()), para: true }); if (stack.length > 1) stack.pop(); }
        else if (tag === 'font' || tag === 'b' || tag === 'i' || tag === 'u' || tag === 'a' || tag === 'li') { if (stack.length > 1) stack.pop(); }
        continue;
      }
      var f = Object.assign({}, cur());
      switch (tag) {
        case 'br': push('\n'); continue;
        case 'p': if (A.align) f.align = { left: 0, right: 1, center: 2, justify: 3 }[A.align.toLowerCase()] || 0; stack.push(f); break;
        case 'font':
          if (A.face) f.font = fontFromFace(A.face, f.font);
          if (A.size) { var s = parseFloat(A.size); if (A.size.charAt(0) === '+' || A.size.charAt(0) === '-') s = f.size + s; if (s > 0) f.size = s; }
          if (A.color) f.color = [parseInt(A.color.substr(1, 2), 16), parseInt(A.color.substr(3, 2), 16), parseInt(A.color.substr(5, 2), 16), 255];
          if (A.letterspacing) f.spacing = parseFloat(A.letterspacing) || 0;
          stack.push(f); break;
        case 'b': f.bold = true; stack.push(f); break;
        case 'i': f.italic = true; stack.push(f); break;
        case 'u': f.underline = true; stack.push(f); break;
        default: stack.push(f); break;
      }
    }
    // trailing paragraph break is not rendered
    if (runs.length && runs[runs.length - 1].para) runs.pop();
    return runs;
  }
  EP.setInitial = function (html) {
    if (this.htmlMode) {
      var runs = parseHtml(html, this.fmt);
      if (runs.length) this.fmt = Object.assign({}, runs[0].f);
      this.runs = runs;
    } else {
      this.runs = html ? [{ text: decodeEntities(html), f: Object.assign({}, this.fmt) }] : [];
    }
    this.layout = null;
  };
  EP.setText = function (t) {
    t = str(t);
    this.runs = t === '' ? [] : [{ text: t, f: Object.assign({}, this.fmt) }];
    this.layout = null;
  };
  EP.setHtml = function (html) {
    html = str(html);
    if (!this.htmlMode) { this.setText(html); return; }
    this.runs = parseHtml(html, this.fmt);
    this.layout = null;
  };
  EP.plainText = function () {
    var s = '';
    for (var i = 0; i < this.runs.length; i++) s += this.runs[i].text;
    return s;
  };
  EP.htmlOut = function () {
    var s = '';
    for (var i = 0; i < this.runs.length; i++) {
      var r = this.runs[i], f = r.f;
      var t = r.text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '</P><P ALIGN="' + ['LEFT', 'RIGHT', 'CENTER', 'JUSTIFY'][f.align] + '">');
      s += '<FONT FACE="' + (LIB.fonts[f.font] ? LIB.fonts[f.font].name : 'Times New Roman') + '" SIZE="' + f.size + '" COLOR="#' + ((1 << 24) | (f.color[0] << 16) | (f.color[1] << 8) | f.color[2]).toString(16).slice(1) + '">' + t + '</FONT>';
    }
    return '<P ALIGN="' + ['LEFT', 'RIGHT', 'CENTER', 'JUSTIFY'][this.fmt.align] + '">' + s + '</P>';
  };

  // ---------------------------------------------------------------- layout
  function glyphOf(fontId, ch) {
    var f = LIB.fonts[fontId];
    if (!f) return null;
    return f.glyphs[ch.charCodeAt(0)] || null;
  }
  function metrics(fontId, size) {
    var f = LIB.fonts[fontId];
    if (f && f.ascent !== undefined) return { asc: f.ascent / f.em * size, desc: f.descent / f.em * size, lead: f.leading / f.em * size };
    return { asc: size * 0.9, desc: size * 0.25, lead: size * 0.1 };
  }
  var measureCtx = null;
  function fallbackAdvance(ch, size) {
    if (!measureCtx) measureCtx = document.createElement('canvas').getContext('2d');
    measureCtx.font = size + 'px serif';
    return measureCtx.measureText(ch).width;
  }
  function advanceOf(r, ch) {
    var g = glyphOf(r.f.font, ch);
    var adv;
    if (g && g[0] !== null) adv = g[0] * r.f.size;
    else if (ch === ' ' || ch === ' ') adv = r.f.size * 0.3;
    else adv = fallbackAdvance(ch, r.f.size);
    return adv + (r.f.spacing || 0);
  }

  EP.doLayout = function () {
    var maxW = this.w - 4 - this.def.ml - this.def.mr;
    var wrap = this.wordWrap && this.autoSize === 'none' || (this.wordWrap && this.w > 0);
    var lines = [];
    var line = { items: [], width: 0, asc: 0, desc: 0, lead: 0, align: this.fmt.align, brk: false };
    var self = this;
    var plain = this.password ? null : null;
    function endLine(hard) {
      line.brk = hard;
      lines.push(line);
      line = { items: [], width: 0, asc: 0, desc: 0, lead: 0, align: line.align, brk: false };
    }
    var firstLine = true;
    var wordStart = -1; // index in line.items where the current word starts
    for (var ri = 0; ri < this.runs.length; ri++) {
      var r = this.runs[ri];
      var m = metrics(r.f.font, r.f.size);
      line.align = r.f.align;
      var text = this.password ? r.text.replace(/[^\n]/g, '*') : r.text;
      for (var ci = 0; ci < text.length; ci++) {
        var ch = text.charAt(ci);
        if (ch === '\n' || ch === '\r') {
          if (!this.multiline && ch === '\r' && false) continue;
          line.asc = Math.max(line.asc, m.asc); line.desc = Math.max(line.desc, m.desc); line.lead = Math.max(line.lead, m.lead);
          endLine(true); wordStart = -1; continue;
        }
        var adv = advanceOf(r, ch);
        if (wrap && line.width + adv > maxW && line.items.length && ch !== ' ') {
          // wrap at last space if any
          var cut = -1;
          for (var k = line.items.length - 1; k >= 0; k--) if (line.items[k].ch === ' ') { cut = k; break; }
          if (cut >= 0) {
            var rest = line.items.splice(cut + 1);
            line.items.pop(); // drop trailing space
            line.width = 0; for (var q = 0; q < line.items.length; q++) line.width += line.items[q].adv;
            endLine(false);
            for (var q2 = 0; q2 < rest.length; q2++) { line.items.push(rest[q2]); line.width += rest[q2].adv; }
            line.asc = Math.max(line.asc, m.asc); line.desc = Math.max(line.desc, m.desc); line.lead = Math.max(line.lead, m.lead);
          } else { endLine(false); }
        }
        line.items.push({ ch: ch, adv: adv, r: r });
        line.width += adv;
        line.asc = Math.max(line.asc, m.asc); line.desc = Math.max(line.desc, m.desc); line.lead = Math.max(line.lead, m.lead);
      }
    }
    if (line.items.length || !lines.length || line.asc) {
      if (!line.asc) { var dm = metrics(this.fmt.font, this.fmt.size); line.asc = dm.asc; line.desc = dm.desc; line.lead = dm.lead; }
      lines.push(line);
    }
    // vertical metrics
    var y = 2, tw = 0;
    for (var li = 0; li < lines.length; li++) {
      var L = lines[li];
      if (!L.asc) { var dm2 = metrics(this.fmt.font, this.fmt.size); L.asc = dm2.asc; L.desc = dm2.desc; L.lead = dm2.lead; }
      L.baseline = y + L.asc;
      y += L.asc + L.desc + L.lead + (this.def.leading || 0);
      tw = Math.max(tw, L.width);
    }
    this.layout = { lines: lines, textWidth: tw, textHeight: Math.max(0, y - 2 - 0), maxW: maxW };
    if (this.autoSize !== 'none') {
      var nw = tw + 4 + this.def.ml + this.def.mr;
      var nh = this.layout.textHeight + 4;
      if (this.autoSize === 'right') this.x0 += this.w - nw; else if (this.autoSize === 'center') this.x0 += (this.w - nw) / 2;
      this.w = nw; if (!this.wordWrap || true) this.h = nh;
    }
  };
  EP.ensureLayout = function () { if (!this.layout) this.doLayout(); return this.layout; };
  EP.localBounds = function () { this.ensureLayout(); return [this.x0, this.y0, this.x0 + this.w, this.y0 + this.h]; };
  EP.containsPoint = function (lx, ly) { var b = this.localBounds(); return lx >= b[0] && lx <= b[2] && ly >= b[1] && ly <= b[3]; };

  // ---------------------------------------------------------------- AS interface
  var TF_GET = {
    text: function (t) { return t.plainText(); },
    htmlText: function (t) { return t.htmlMode ? t.htmlOut() : t.plainText(); },
    html: function (t) { return t.htmlMode; },
    length: function (t) { return t.plainText().length; },
    textColor: function (t) { var c = t.fmt.color; return (c[0] << 16) | (c[1] << 8) | c[2]; },
    autoSize: function (t) { return t.autoSize; },
    multiline: function (t) { return t.multiline; },
    wordWrap: function (t) { return t.wordWrap; },
    selectable: function (t) { return t.selectable; },
    border: function (t) { return t.border; }, background: function (t) { return t.background; },
    borderColor: function (t) { return t.borderColor; }, backgroundColor: function (t) { return t.backgroundColor; },
    type: function (t) { return t.type; }, maxChars: function (t) { return t.maxChars; }, password: function (t) { return t.password; },
    embedFonts: function () { return true; }, variable: function () { return null; },
    textWidth: function (t) { return t.ensureLayout().textWidth; },
    textHeight: function (t) { return t.ensureLayout().textHeight; },
    scroll: function () { return 1; }, maxscroll: function () { return 1; },
    _width: function (t) { t.ensureLayout(); return t.w * t.scaleX(); }, _height: function (t) { t.ensureLayout(); return t.h * Math.abs(t.scaleY()); },
  };
  var TF_SET = {
    text: function (t, v) { t.setText(v); },
    htmlText: function (t, v) { t.setHtml(v); },
    html: function (t, v) { t.htmlMode = $.bool(v); },
    textColor: function (t, v) { v = num(v); t.fmt.color = [(v >> 16) & 255, (v >> 8) & 255, v & 255, 255]; for (var i = 0; i < t.runs.length; i++) t.runs[i].f.color = t.fmt.color; },
    autoSize: function (t, v) { t.autoSize = v === true ? 'left' : (v === false || v === 'none' ? 'none' : str(v).toLowerCase()); t.layout = null; },
    multiline: function (t, v) { t.multiline = $.bool(v); t.layout = null; },
    wordWrap: function (t, v) { t.wordWrap = $.bool(v); t.layout = null; },
    selectable: function (t, v) { t.selectable = $.bool(v); },
    border: function (t, v) { t.border = $.bool(v); }, background: function (t, v) { t.background = $.bool(v); },
    borderColor: function (t, v) { t.borderColor = num(v); }, backgroundColor: function (t, v) { t.backgroundColor = num(v); },
    type: function (t, v) { t.type = str(v); }, maxChars: function (t, v) { t.maxChars = v; }, password: function (t, v) { t.password = $.bool(v); t.layout = null; },
    embedFonts: function () { }, variable: function () { }, scroll: function () { },
    _width: function (t, v) { t.w = num(v) / (t.scaleX() || 1); t.layout = null; },
    _height: function (t, v) { t.h = num(v) / (Math.abs(t.scaleY()) || 1); t.layout = null; },
  };
  var TF_PASS = { antiAliasType: 1, gridFitType: 1, sharpness: 1, thickness: 1, condenseWhite: 1, styleSheet: 1, restrict: 1, tabEnabled: 1, tabIndex: 1 };
  var BASE_GETMEMBERRAW = DisplayObject.prototype.getMemberRaw;
  EP.getMemberRaw = function (name) {
    if (name === '_width' || name === '_height') return TF_GET[name](this);
    var g = TF_GET[name];
    if (g && !(name in this.vars)) return g(this);
    return BASE_GETMEMBERRAW.call(this, name);
  };
  EP.setMember = function (name, v) {
    if (name === '_width' || name === '_height') { TF_SET[name](this, v); return; }
    var s = TF_SET[name];
    if (s) { s(this, v); return; }
    DisplayObject.prototype.setMember.call(this, name, v);
  };
  EP.localBoundsForProps = EP.localBounds;
  var TFM = {
    setTextFormat: function (a, b, c) {
      var tf = c !== undefined ? c : (b !== undefined && typeof b === 'object' ? b : a);
      if (!tf || typeof tf !== 'object') return;
      for (var i = 0; i < this.runs.length; i++) applyFormat(this.runs[i].f, tf);
      applyFormat(this.fmt, tf);
      this.layout = null;
    },
    setNewTextFormat: function (tf) { applyFormat(this.fmt, tf); },
    getTextFormat: function () { var f = this.runs.length ? this.runs[0].f : this.fmt; return $.makeTextFormat(f); },
    getNewTextFormat: function () { return $.makeTextFormat(this.fmt); },
    removeTextField: function () { if (this.parent) this.parent.discard(this); },
    replaceText: function (b, e, t) { var s = this.plainText(); this.setText(s.substring(0, num(b)) + str(t) + s.substring(num(e))); },
    getDepth: function () { return this.depth - 16384; },
    swapDepths: $.ClipMethods.swapDepths,
    hitTest: $.ClipMethods.hitTest, getBounds: $.ClipMethods.getBounds,
    localToGlobal: $.ClipMethods.localToGlobal, globalToLocal: $.ClipMethods.globalToLocal,
    addListener: function () { }, removeListener: function () { },
  };
  EP.methods = function () { return TFM; };
  function applyFormat(f, tf) {
    if (tf.font !== undefined && tf.font !== null) f.font = fontFromFace(str(tf.font), f.font);
    if (tf.size !== undefined && tf.size !== null) f.size = num(tf.size);
    if (tf.color !== undefined && tf.color !== null) { var v = num(tf.color); f.color = [(v >> 16) & 255, (v >> 8) & 255, v & 255, 255]; }
    if (tf.align !== undefined && tf.align !== null) f.align = { left: 0, right: 1, center: 2, justify: 3 }[str(tf.align).toLowerCase()] || 0;
    if (tf.bold !== undefined && tf.bold !== null) f.bold = $.bool(tf.bold);
    if (tf.italic !== undefined && tf.italic !== null) f.italic = $.bool(tf.italic);
    if (tf.letterSpacing !== undefined && tf.letterSpacing !== null) f.spacing = num(tf.letterSpacing);
  }
  $.makeTextFormat = function (f) {
    var tf = new $.global.TextFormat();
    tf.font = LIB.fonts[f.font] ? LIB.fonts[f.font].name : 'Times New Roman';
    tf.size = f.size; tf.color = (f.color[0] << 16) | (f.color[1] << 8) | f.color[2];
    tf.align = ['left', 'right', 'center', 'justify'][f.align]; tf.bold = f.bold; tf.italic = f.italic; tf.letterSpacing = f.spacing;
    return tf;
  };

  // ---------------------------------------------------------------- drawing
  var glyphPaths = {};
  function glyphPath(fontId, code) {
    var key = fontId + ':' + code;
    var p = glyphPaths[key];
    if (p === undefined) {
      var f = LIB.fonts[fontId], g = f && f.glyphs[code];
      p = g && g[1] ? new Path2D(g[1]) : null;
      glyphPaths[key] = p;
    }
    return p;
  }
  function rgba(c, a) { return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + ((c[3] === undefined ? 255 : c[3]) / 255 * a) + ')'; }

  // ctx transform already set to the object's world matrix
  EP.draw = function (ctx, alpha) {
    var lay = this.ensureLayout();
    var x0 = this.x0, y0 = this.y0;
    if (this.background) { ctx.fillStyle = '#' + ((1 << 24) | this.backgroundColor).toString(16).slice(1); ctx.globalAlpha = alpha; ctx.fillRect(x0, y0, this.w, this.h); }
    if (this.border) { ctx.strokeStyle = '#' + ((1 << 24) | this.borderColor).toString(16).slice(1); ctx.globalAlpha = alpha; ctx.lineWidth = 1; ctx.strokeRect(x0 + 0.5, y0 + 0.5, this.w - 1, this.h - 1); }
    var availW = this.w - 4 - this.def.ml - this.def.mr;
    for (var li = 0; li < lay.lines.length; li++) {
      var L = lay.lines[li];
      var off = 0;
      if (L.align === 1) off = availW - L.width; else if (L.align === 2) off = (availW - L.width) / 2;
      var x = x0 + 2 + this.def.ml + Math.max(0, off) + (li === 0 ? this.def.indent : 0);
      var by = y0 + L.baseline;
      for (var ii = 0; ii < L.items.length; ii++) {
        var it = L.items[ii];
        var f = it.r.f;
        var code = it.ch.charCodeAt(0);
        var p = glyphPath(f.font, code);
        if (p) {
          ctx.save();
          ctx.translate(x, by);
          ctx.scale(f.size, f.size);
          ctx.globalAlpha = alpha;
          ctx.fillStyle = rgba(f.color, 1);
          ctx.fill(p);
          ctx.restore();
        } else if (it.ch !== ' ' && it.ch !== ' ') {
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = rgba(f.color, 1);
          ctx.font = (f.bold ? 'bold ' : '') + f.size + 'px serif';
          ctx.textBaseline = 'alphabetic';
          ctx.fillText(it.ch, x, by);
          ctx.restore();
        }
        x += it.adv;
      }
    }
  };
})();

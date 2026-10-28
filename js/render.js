// Canvas 2D renderer for the display list.
'use strict';
(function () {
  var LIB = window.LIB;
  var Clip = $.Clip, Shape = $.Shape, Button = $.Button, EditText = $.EditText;
  $.images = {};
  var view = $.view = { canvas: null, ctx: null, S: 1, W: LIB.w, H: LIB.h };

  // ------------------------------------------------------------ colour transforms
  function combine(p, c) {
    if (!p) return c;
    if (!c) return p;
    return [p[0] * c[0], p[1] * c[1], p[2] * c[2], p[3] * c[3],
      p[0] * c[4] + p[4], p[1] * c[5] + p[5], p[2] * c[6] + p[6], p[3] * c[7] + p[7]];
  }
  function alphaOnly(cx) { return !cx || (cx[0] === 1 && cx[1] === 1 && cx[2] === 1 && cx[4] === 0 && cx[5] === 0 && cx[6] === 0); }
  function clamp255(v) { return v < 0 ? 0 : v > 255 ? 255 : Math.round(v); }
  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function alphaOf(cx) { return cx ? clamp01(cx[3] + cx[7] / 255) : 1; }
  function tcolor(c, cx) {
    var a = (c[3] === undefined ? 255 : c[3]) / 255;
    if (!cx) return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')';
    return 'rgba(' + clamp255(c[0] * cx[0] + cx[4]) + ',' + clamp255(c[1] * cx[1] + cx[5]) + ',' + clamp255(c[2] * cx[2] + cx[6]) + ',' + clamp01(a * cx[3] + cx[7] / 255) + ')';
  }

  // ------------------------------------------------------------ offscreen layers
  var pool = [], used = 0;
  function acquire() {
    var l = pool[used];
    if (!l) { var c = document.createElement('canvas'); l = pool[used] = { c: c, x: c.getContext('2d') }; }
    used++;
    if (l.c.width !== view.canvas.width || l.c.height !== view.canvas.height) { l.c.width = view.canvas.width; l.c.height = view.canvas.height; }
    return l;
  }
  function release() { used--; }
  function deviceRect(ctx, b, margin) {
    var W = view.canvas.width, H = view.canvas.height;
    if (!b) return [0, 0, W, H];
    var t = ctx.getTransform();
    var xs = [], ys = [];
    var px = [[b[0], b[1]], [b[2], b[1]], [b[0], b[3]], [b[2], b[3]]];
    for (var i = 0; i < 4; i++) { xs.push(t.a * px[i][0] + t.c * px[i][1] + t.e); ys.push(t.b * px[i][0] + t.d * px[i][1] + t.f); }
    var x0 = Math.max(0, Math.floor(Math.min.apply(null, xs) - margin)), y0 = Math.max(0, Math.floor(Math.min.apply(null, ys) - margin));
    var x1 = Math.min(W, Math.ceil(Math.max.apply(null, xs) + margin)), y1 = Math.min(H, Math.ceil(Math.max.apply(null, ys) + margin));
    if (x1 <= x0 || y1 <= y0) return null;
    return [x0, y0, x1 - x0, y1 - y0];
  }

  // ------------------------------------------------------------ paths & fills
  function pathOf(L) { return L.$p || (L.$p = new Path2D(L.d)); }
  var numRe = /-?\d*\.?\d+(?:e[-+]?\d+)?/gi;
  function lerpPath(da, db, t) {
    var na = da.match(numRe), i = 0;
    var nb = db.match(numRe);
    if (!na || na.length !== nb.length) return da;
    return da.replace(numRe, function () { var v = +na[i] + (+nb[i] - +na[i]) * t; i++; return Math.round(v * 100) / 100; });
  }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function lerpArr(a, b, t) { var r = []; for (var i = 0; i < a.length; i++) r.push(lerp(a[i], b[i], t)); return r; }
  function lerpFill(fa, fb, t) {
    if (!fa) return fa;
    var f = { t: fa.t };
    if (fa.t === 's') f.c = lerpArr(fa.c, fb.c, t);
    else if (fa.t === 'b') { f.id = fa.id; f.rep = fa.rep; f.sm = fa.sm; f.m = lerpArr(fa.m, fb.m, t); }
    else { f.m = lerpArr(fa.m, fb.m, t); f.spread = fa.spread; f.focal = fa.focal; f.stops = fa.stops.map(function (s, i) { return lerpArr(s, fb.stops[i], t); }); }
    return f;
  }
  function morphLayers(def, ratio) {
    var key = ratio;
    if (def.$mk === key) return def.$ml;
    var t = ratio / 65535, out = [];
    for (var i = 0; i < def.a.length; i++) {
      var A = def.a[i], B = def.b[i];
      var L = { d: lerpPath(A.d, B.d, t) };
      if (A.fill) L.fill = lerpFill(A.fill, B.fill, t);
      if (A.line) { L.line = { w: lerp(A.line.w, B.line.w, t), fill: lerpFill(A.line.fill, B.line.fill, t), cap: A.line.cap, join: A.line.join, miter: A.line.miter }; }
      out.push(L);
    }
    def.$mk = key; def.$ml = out;
    return out;
  }

  var GR = 16384;
  function makeGradient(ctx, f, cx) {
    var g = f.t === 'l' ? ctx.createLinearGradient(-GR, 0, GR, 0) : ctx.createRadialGradient(f.focal ? f.focal * GR : 0, 0, 0, 0, 0, GR);
    for (var i = 0; i < f.stops.length; i++) {
      var s = f.stops[i];
      g.addColorStop(Math.max(0, Math.min(1, s[0] / 255)), tcolor([s[1], s[2], s[3], s[4]], cx));
    }
    return g;
  }
  var tmpMat = typeof DOMMatrix !== 'undefined' ? null : null;
  function fillLayer(ctx, L, path, f, cx, tinted) {
    switch (f.t) {
      case 's':
        ctx.fillStyle = tcolor(f.c, cx);
        ctx.fill(path);
        break;
      case 'b': {
        var img = $.images[f.id];
        if (!img) return;
        var pat = ctx.createPattern(img, f.rep ? 'repeat' : 'no-repeat');
        if (!pat) return;
        pat.setTransform(new DOMMatrix(f.m));
        ctx.fillStyle = pat;
        ctx.imageSmoothingEnabled = true;
        ctx.fill(path);
        break;
      }
      default: {
        var m = new DOMMatrix(f.m);
        var ip = new Path2D();
        ip.addPath(path, m.inverse());
        ctx.save();
        ctx.transform(f.m[0], f.m[1], f.m[2], f.m[3], f.m[4], f.m[5]);
        ctx.fillStyle = makeGradient(ctx, f, cx);
        ctx.fill(ip);
        ctx.restore();
      }
    }
  }
  var CAPS = ['round', 'butt', 'square'], JOINS = ['round', 'bevel', 'miter'];
  function strokeLayer(ctx, L, path, cx) {
    var ln = L.line;
    if (!ln.fill || ln.fill.t !== 's') return;
    ctx.strokeStyle = tcolor(ln.fill.c, cx);
    ctx.lineWidth = Math.max(ln.w, 1 / view.S);
    ctx.lineCap = CAPS[ln.cap] || 'round';
    ctx.lineJoin = JOINS[ln.join] || 'round';
    ctx.miterLimit = ln.miter || 3;
    ctx.stroke(path);
  }
  // does this shape need an offscreen pass for its colour transform? (bitmap fills + tint)
  function drawShape(ctx, o, cx) {
    var def = o.def;
    var layers = def.k === 'morph' ? morphLayers(def, o.ratio) : def.layers;
    var a = alphaOf(cx);
    if (a <= 0) return;
    var simple = alphaOnly(cx);
    ctx.globalAlpha = simple ? a : 1;
    var ccx = simple ? (cx ? [1, 1, 1, 1, 0, 0, 0, 0] : null) : cx;
    for (var i = 0; i < layers.length; i++) {
      var L = layers[i];
      var path = def.k === 'morph' ? new Path2D(L.d) : pathOf(L);
      if (L.fill) {
        if (!simple && L.fill.t === 'b') drawTintedBitmap(ctx, L, path, cx);
        else fillLayer(ctx, L, path, L.fill, simple ? null : ccx);
      } else if (L.line) strokeLayer(ctx, L, path, simple ? null : ccx);
    }
    ctx.globalAlpha = 1;
  }
  function drawTintedBitmap(ctx, L, path, cx) {
    var b = L.bb || (L.bb = (function () { var t = new Path2D(); return null; })());
    var r = deviceRect(ctx, null, 0);
    var la = acquire();
    la.x.setTransform(ctx.getTransform());
    la.x.globalAlpha = 1;
    la.x.clearRect(-1e5, -1e5, 2e5, 2e5);
    la.x.setTransform(1, 0, 0, 1, 0, 0); la.x.clearRect(0, 0, la.c.width, la.c.height);
    la.x.setTransform(ctx.getTransform());
    fillLayer(la.x, L, path, L.fill, null);
    // multiply/add
    var lb = acquire();
    lb.x.setTransform(1, 0, 0, 1, 0, 0);
    lb.x.globalCompositeOperation = 'source-over'; lb.x.globalAlpha = 1;
    lb.x.clearRect(0, 0, lb.c.width, lb.c.height);
    lb.x.drawImage(la.c, 0, 0);
    lb.x.globalCompositeOperation = 'multiply';
    lb.x.fillStyle = 'rgb(' + clamp255(cx[0] * 255) + ',' + clamp255(cx[1] * 255) + ',' + clamp255(cx[2] * 255) + ')';
    lb.x.fillRect(0, 0, lb.c.width, lb.c.height);
    if (cx[4] > 0 || cx[5] > 0 || cx[6] > 0) {
      lb.x.globalCompositeOperation = 'lighter';
      lb.x.fillStyle = 'rgb(' + clamp255(cx[4]) + ',' + clamp255(cx[5]) + ',' + clamp255(cx[6]) + ')';
      lb.x.fillRect(0, 0, lb.c.width, lb.c.height);
    }
    lb.x.globalCompositeOperation = 'destination-in';
    lb.x.drawImage(la.c, 0, 0);
    lb.x.globalCompositeOperation = 'source-over';
    var t = ctx.getTransform();
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = alphaOf(cx);
    ctx.drawImage(lb.c, 0, 0);
    ctx.restore();
    release(); release();
  }

  // ------------------------------------------------------------ scripted drawing (MovieClip.lineTo etc.)
  function rgbHex(n, a) { return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + (a / 100) + ')'; }
  function drawGfx(ctx, g, cx) {
    var cmds = g.cmds, path = null, fillStyle = null, line = null, filled = false;
    var a = alphaOf(cx);
    ctx.globalAlpha = a;
    function flushFill() { if (path && fillStyle) { ctx.fillStyle = fillStyle; ctx.fill(path); } }
    function flushLine() { if (path && line) { ctx.strokeStyle = line.s; ctx.lineWidth = Math.max(line.w, 1 / view.S); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.stroke(path); } }
    var segPath = null;
    for (var i = 0; i < cmds.length; i++) {
      var c = cmds[i];
      switch (c[0]) {
        case 'ls': flushLine(); path = null; line = c[1] > 0 ? { w: c[1], s: rgbHex(c[2], c[3]) } : null; break;
        case 'm': if (!path) path = new Path2D(); path.moveTo(c[1], c[2]); break;
        case 'l': if (!path) { path = new Path2D(); path.moveTo(0, 0); } path.lineTo(c[1], c[2]); break;
        case 'q': if (!path) { path = new Path2D(); path.moveTo(0, 0); } path.quadraticCurveTo(c[1], c[2], c[3], c[4]); break;
        case 'bf': flushFill(); flushLine(); path = null; fillStyle = rgbHex(c[1], c[2]); break;
        case 'ef': flushFill(); flushLine(); path = null; fillStyle = null; break;
      }
    }
    flushFill(); flushLine();
    ctx.globalAlpha = 1;
  }

  // ------------------------------------------------------------ display list
  function drawChildren(ctx, clip, cx) {
    var list = clip.list;
    for (var i = 0; i < list.length; i++) {
      var o = list[i];
      if (o.clipDepth) {
        // mask: everything with depth in (o.depth, o.clipDepth] is clipped by o
        var j = i + 1, group = [];
        while (j < list.length && list[j].depth <= o.clipDepth) { group.push(list[j]); j++; }
        drawMasked(ctx, o, group, cx);
        i = j - 1;
        continue;
      }
      drawObj(ctx, o, cx);
    }
  }
  function drawMasked(ctx, mask, group, cx) {
    var la = acquire(), lb = acquire();
    var t = ctx.getTransform();
    la.x.setTransform(1, 0, 0, 1, 0, 0); la.x.globalCompositeOperation = 'source-over'; la.x.globalAlpha = 1; la.x.clearRect(0, 0, la.c.width, la.c.height);
    lb.x.setTransform(1, 0, 0, 1, 0, 0); lb.x.globalCompositeOperation = 'source-over'; lb.x.globalAlpha = 1; lb.x.clearRect(0, 0, lb.c.width, lb.c.height);
    la.x.setTransform(t); lb.x.setTransform(t);
    for (var i = 0; i < group.length; i++) drawObj(la.x, group[i], cx);
    drawObj(lb.x, mask, null, true);
    la.x.setTransform(1, 0, 0, 1, 0, 0);
    la.x.globalCompositeOperation = 'destination-in';
    la.x.drawImage(lb.c, 0, 0);
    la.x.globalCompositeOperation = 'source-over';
    ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.drawImage(la.c, 0, 0); ctx.restore();
    release(); release();
  }

  function drawBody(ctx, o, cx) {
    if (o instanceof Clip) {
      if (o.gfx && o.gfx.cmds.length) drawGfx(ctx, o.gfx, cx);
      drawChildren(ctx, o, cx);
    } else if (o instanceof Shape) {
      drawShape(ctx, o, cx);
    } else if (o instanceof Button) {
      var kids = o.visibleKids();
      for (var i = 0; i < kids.length; i++) drawObj(ctx, kids[i], cx);
    } else if (o instanceof EditText) {
      o.draw(ctx, alphaOf(cx));
    }
  }

  var dbgCount = 0;
  function drawObj(ctx, o, pcx, ignoreVisible) {
    if (!o.visible && !ignoreVisible) return;
    var cx = combine(pcx, o.cx);
    if (cx && cx[3] <= 0 && cx[7] <= 0) return;
    ctx.save();
    var m = o.m;
    ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
    if (o.filters && o.filters.length) drawFiltered(ctx, o, cx);
    else drawBody(ctx, o, cx);
    ctx.restore();
  }


  // draw a rectangle of `src` blurred; large blurs are done on a downscaled copy (much cheaper)
  var lowCanvas = null;
  function blurDraw(ctx, src, r, dx, dy, blur, times) {
    if (blur <= 0.3) { for (var k = 0; k < times; k++) ctx.drawImage(src, r[0], r[1], r[2], r[3], r[0] + dx, r[1] + dy, r[2], r[3]); return; }
    var f = Math.max(1, Math.floor(blur / 3));
    if (f === 1) {
      ctx.filter = 'blur(' + blur.toFixed(2) + 'px)';
      for (var k2 = 0; k2 < times; k2++) ctx.drawImage(src, r[0], r[1], r[2], r[3], r[0] + dx, r[1] + dy, r[2], r[3]);
      ctx.filter = 'none';
      return;
    }
    var w = Math.max(1, Math.ceil(r[2] / f)), h = Math.max(1, Math.ceil(r[3] / f));
    if (!lowCanvas) lowCanvas = document.createElement('canvas');
    if (lowCanvas.width < w || lowCanvas.height < h) { lowCanvas.width = Math.max(lowCanvas.width, w); lowCanvas.height = Math.max(lowCanvas.height, h); }
    var lx = lowCanvas.getContext('2d');
    lx.setTransform(1, 0, 0, 1, 0, 0); lx.globalAlpha = 1; lx.filter = 'none';
    lx.clearRect(0, 0, lowCanvas.width, lowCanvas.height);
    lx.imageSmoothingEnabled = true;
    lx.drawImage(src, r[0], r[1], r[2], r[3], 0, 0, w, h);
    // blur in place within the low-res canvas via a second pass
    var tmp = lx.getImageData ? null : null;
    lx.globalCompositeOperation = 'copy';
    lx.filter = 'blur(' + (blur / f).toFixed(2) + 'px)';
    lx.drawImage(lowCanvas, 0, 0, w, h, 0, 0, w, h);
    lx.filter = 'none'; lx.globalCompositeOperation = 'source-over';
    ctx.imageSmoothingEnabled = true;
    for (var k3 = 0; k3 < times; k3++) ctx.drawImage(lowCanvas, 0, 0, w, h, r[0] + dx, r[1] + dy, r[2], r[3]);
  }

  function drawFiltered(ctx, o, cx) {
    var S = view.S;
    var margin = 4;
    var fl = o.filters;
    for (var i = 0; i < fl.length; i++) margin = Math.max(margin, (Math.max(fl[i].blurX || 0, fl[i].blurY || 0) + (fl[i].distance || 0)) * S * 1.5 + 2);
    var b = o.localBounds();
    var r = deviceRect(ctx, b, margin);
    if (!r) return;
    var la = acquire();
    var t = ctx.getTransform();
    la.x.setTransform(1, 0, 0, 1, 0, 0); la.x.globalCompositeOperation = 'source-over'; la.x.globalAlpha = 1;
    la.x.clearRect(r[0], r[1], r[2], r[3]);
    la.x.setTransform(t);
    la.x.save(); la.x.beginPath();
    la.x.setTransform(1, 0, 0, 1, 0, 0); la.x.rect(r[0], r[1], r[2], r[3]); la.x.clip(); la.x.setTransform(t);
    drawBody(la.x, o, cx);
    la.x.restore();
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    var hideContent = false;
    for (i = 0; i < fl.length; i++) {
      var f = fl[i];
      if (f.kind === 'glow' || f.kind === 'shadow') {
        if (f.inner) continue;
        var lb = acquire();
        lb.x.setTransform(1, 0, 0, 1, 0, 0); lb.x.globalCompositeOperation = 'source-over'; lb.x.globalAlpha = 1;
        lb.x.clearRect(r[0], r[1], r[2], r[3]);
        lb.x.drawImage(la.c, r[0], r[1], r[2], r[3], r[0], r[1], r[2], r[3]);
        lb.x.globalCompositeOperation = 'source-in';
        lb.x.fillStyle = tcolor(f.color, null);
        lb.x.fillRect(r[0], r[1], r[2], r[3]);
        lb.x.globalCompositeOperation = 'source-over';
        var dx = 0, dy = 0;
        if (f.kind === 'shadow') { dx = Math.cos(f.angle) * f.distance * S; dy = Math.sin(f.angle) * f.distance * S; }
        var blur = Math.max(f.blurX, f.blurY) * S * 0.5;
        var times = Math.max(1, Math.ceil((f.strength || 1) * (f.passes >= 2 ? 1.6 : 1.2)));
        blurDraw(ctx, lb.c, r, dx, dy, blur, times);
        release();
        if (f.hide) hideContent = true;
      }
    }
    if (!hideContent) ctx.drawImage(la.c, r[0], r[1], r[2], r[3], r[0], r[1], r[2], r[3]);
    // bevel: simple highlight/shadow edges
    for (i = 0; i < fl.length; i++) {
      var bf = fl[i];
      if (bf.kind !== 'bevel') continue;
      var d = Math.max(1, bf.distance * 0.5) * S;
      var dxx = Math.cos(bf.angle) * d, dyy = Math.sin(bf.angle) * d;
      var edges = [[bf.highlight, -dxx, -dyy], [bf.shadow, dxx, dyy]];
      for (var e = 0; e < 2; e++) {
        var lc = acquire();
        lc.x.setTransform(1, 0, 0, 1, 0, 0); lc.x.globalCompositeOperation = 'source-over'; lc.x.globalAlpha = 1;
        lc.x.clearRect(r[0], r[1], r[2], r[3]);
        // edge = content minus content shifted
        lc.x.drawImage(la.c, r[0], r[1], r[2], r[3], r[0], r[1], r[2], r[3]);
        lc.x.globalCompositeOperation = 'destination-out';
        lc.x.drawImage(la.c, r[0], r[1], r[2], r[3], r[0] + edges[e][1], r[1] + edges[e][2], r[2], r[3]);
        lc.x.globalCompositeOperation = 'source-in';
        lc.x.fillStyle = tcolor(edges[e][0], null); lc.x.fillRect(r[0], r[1], r[2], r[3]);
        lc.x.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 0.6;
        ctx.drawImage(lc.c, r[0], r[1], r[2], r[3], r[0], r[1], r[2], r[3]);
        ctx.globalAlpha = 1;
        release();
      }
    }
    ctx.restore();
    release();
  }

  // ------------------------------------------------------------ entry point
  $.drawObj = drawObj;
  $.setupView = function (canvas) {
    view.canvas = canvas; view.ctx = canvas.getContext('2d');
  };
  $.resizeView = function (cssW) {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var S = Math.max(0.25, cssW * dpr / LIB.w);
    view.S = S;
    view.canvas.width = Math.round(LIB.w * S);
    view.canvas.height = Math.round(LIB.h * S);
  };
  $.render = function () {
    dbgCount = 0;
    var ctx = view.ctx, S = view.S;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'rgb(' + LIB.bg.r + ',' + LIB.bg.g + ',' + LIB.bg.b + ')';
    ctx.fillRect(0, 0, view.canvas.width, view.canvas.height);
    ctx.setTransform(S, 0, 0, S, 0, 0);
    ctx.save();
    ctx.beginPath(); ctx.rect(0, 0, LIB.w, LIB.h); ctx.clip();
    if ($.root) drawChildren(ctx, $.root, null);
    ctx.restore();
    used = 0;
  };
})();

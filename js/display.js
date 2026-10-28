// Display list, timelines and mouse interaction for the HTML5 port.
'use strict';
(function () {
  var LIB = window.LIB;
  var NF = $.NF = { nf: true };       // "not found" sentinel
  var DEPTH_BASE = 16384;
  var tickId = 0;
  function bornId() { return $.inTick ? tickId : tickId + 1; }
  var queue = [];
  $.queue = queue;
  $.cur = null;                        // clip whose script is running

  var ID = [1, 0, 0, 1, 0, 0];
  function mul(p, c) { // p * c  (apply c first, then p)
    return [p[0] * c[0] + p[2] * c[1], p[1] * c[0] + p[3] * c[1], p[0] * c[2] + p[2] * c[3], p[1] * c[2] + p[3] * c[3],
      p[0] * c[4] + p[2] * c[5] + p[4], p[1] * c[4] + p[3] * c[5] + p[5]];
  }
  function inv(m) {
    var det = m[0] * m[3] - m[1] * m[2];
    if (!det) return [1, 0, 0, 1, -m[4], -m[5]];
    var a = m[3] / det, b = -m[1] / det, c = -m[2] / det, d = m[0] / det;
    return [a, b, c, d, -(a * m[4] + c * m[5]), -(b * m[4] + d * m[5])];
  }
  function apply(m, x, y) { return [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]]; }
  $.mat = { mul: mul, inv: inv, apply: apply, ID: ID };
  function str(v) { return $.str(v); }
  function num(v) { return $.n(v); }

  function callHandler(obj, name, args) {
    var f = obj.vars[name];
    if (typeof f !== 'function') return undefined;
    var prev = $.cur;
    try { return f.apply(obj, args || []); }
    catch (e) { console.error('Error in ' + name + ' of ' + (obj.targetPath ? obj.targetPath() : '?') + ':', e); }
    finally { $.cur = prev; }
  }
  $.callHandler = callHandler;

  // ================================================================ DisplayObject
  function DisplayObject() {
    this.parent = null;
    this.depth = 0;
    this.name = '';
    this.m = [1, 0, 0, 1, 0, 0];
    this.cx = null;
    this.visible = true;
    this.clipDepth = 0;
    this.ratio = 0;
    this.filters = null;
    this.blend = 0;
    this.charId = 0;
    this.scripted = false;
    this.removed = false;
    this.vars = Object.create(null);
    this.$root = null;
    this.born = 0;
  }
  $.DisplayObject = DisplayObject;
  var DP = DisplayObject.prototype;

  DP.targetPath = function () {
    if (!this.parent) return '_level0';
    var p = this.parent.targetPath();
    return p + '.' + this.name;
  };
  DP.toString = function () { return this.targetPath(); };
  DP.valueOf = function () { return this; };
  DP.getScope = function () { return this.$scope || (this.$scope = $.clipScope(this)); };

  // transform helpers
  DP.rotationRad = function () { return Math.atan2(this.m[1], this.m[0]); };
  DP.scaleX = function () { return Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]); };
  DP.scaleY = function () { var s = Math.sqrt(this.m[2] * this.m[2] + this.m[3] * this.m[3]); return (this.m[0] * this.m[3] - this.m[1] * this.m[2]) < 0 ? -s : s; };
  DP.setScale = function (sx, sy, rot) {
    var c = Math.cos(rot), s = Math.sin(rot);
    this.m[0] = sx * c; this.m[1] = sx * s; this.m[2] = -sy * s; this.m[3] = sy * c;
  };
  DP.alpha = function () { return this.cx ? this.cx[3] : 1; };

  DP.localBounds = function () { return null; };
  // bounds of this object in its parent's coordinate space
  DP.boundsInParent = function () {
    var b = this.localBounds();
    if (!b) return null;
    var m = this.m;
    var pts = [apply(m, b[0], b[1]), apply(m, b[2], b[1]), apply(m, b[0], b[3]), apply(m, b[2], b[3])];
    return [Math.min(pts[0][0], pts[1][0], pts[2][0], pts[3][0]), Math.min(pts[0][1], pts[1][1], pts[2][1], pts[3][1]),
      Math.max(pts[0][0], pts[1][0], pts[2][0], pts[3][0]), Math.max(pts[0][1], pts[1][1], pts[2][1], pts[3][1])];
  };
  DP.worldMatrix = function () {
    var m = this.m, p = this.parent;
    return p ? mul(p.worldMatrix(), m) : m;
  };

  // ---- AS property access
  var BUILTIN_PROPS = {
    _x: 1, _y: 1, _xscale: 1, _yscale: 1, _rotation: 1, _alpha: 1, _visible: 1, _width: 1, _height: 1, _name: 1, _parent: 1, _root: 1,
    _target: 1, _xmouse: 1, _ymouse: 1, _url: 1, _currentframe: 1, _totalframes: 1, _framesloaded: 1, _droptarget: 1, _focusrect: 1,
    _quality: 1, _highquality: 1, _lockroot: 1, _level0: 1,
  };
  DP.getProp = function (name) {
    switch (name) {
      case '_x': return this.m[4];
      case '_y': return this.m[5];
      case '_xscale': return this.scaleX() * 100;
      case '_yscale': return this.scaleY() * 100;
      case '_rotation': return this.rotationRad() * 180 / Math.PI;
      case '_alpha': return this.alpha() * 100;
      case '_visible': return this.visible;
      case '_width': { var b = this.boundsInParent(); return b ? b[2] - b[0] : 0; }
      case '_height': { var b2 = this.boundsInParent(); return b2 ? b2[3] - b2[1] : 0; }
      case '_name': return this.name;
      case '_parent': return this.parent || undefined;
      case '_root': case '_level0': return this.$root;
      case '_target': return '/' + this.targetPath().replace(/^_level0\.?/, '').replace(/\./g, '/');
      case '_xmouse': { var w = inv(this.worldMatrix()); return apply(w, $.mouse.x, $.mouse.y)[0]; }
      case '_ymouse': { var w2 = inv(this.worldMatrix()); return apply(w2, $.mouse.x, $.mouse.y)[1]; }
      case '_url': return $.pageUrl;
      case '_currentframe': return this.frame || 1;
      case '_totalframes': return this.nFrames || 1;
      case '_framesloaded': return this.nFrames || 1;
      case '_droptarget': return '';
      case '_focusrect': return false;
      case '_quality': return 'HIGH';
      case '_highquality': return 1;
      case '_lockroot': return false;
      default: return undefined;
    }
  };
  DP.setProp = function (name, v) {
    switch (name) {
      case '_x': this.scripted = true; v = num(v); if (v === v) this.m[4] = v; break;
      case '_y': this.scripted = true; v = num(v); if (v === v) this.m[5] = v; break;
      case '_xscale': this.scripted = true; v = num(v); if (v === v) this.setScale(v / 100, this.scaleY(), this.rotationRad()); break;
      case '_yscale': this.scripted = true; v = num(v); if (v === v) this.setScale(this.scaleX(), v / 100, this.rotationRad()); break;
      case '_rotation': this.scripted = true; v = num(v); if (v === v) this.setScale(this.scaleX(), this.scaleY(), v * Math.PI / 180); break;
      case '_alpha': this.scripted = true; v = num(v); if (v === v) { if (!this.cx) this.cx = [1, 1, 1, 1, 0, 0, 0, 0]; else this.cx = this.cx.slice(); this.cx[3] = v / 100; } break;
      case '_visible': this.visible = $.bool(v); break;
      case '_width': { this.scripted = true; v = num(v); var b = this.localBounds(); if (b && v === v) { var w = b[2] - b[0]; if (w) { var sx = v / w; this.setScale(sx * (this.m[0] < 0 ? -1 : 1), this.scaleY(), this.rotationRad()); } } break; }
      case '_height': { this.scripted = true; v = num(v); var b3 = this.localBounds(); if (b3 && v === v) { var h = b3[3] - b3[1]; if (h) this.setScale(this.scaleX(), v / h, this.rotationRad()); } break; }
      case '_name': this.rename(str(v)); break;
      default: break;
    }
  };
  DP.rename = function (nm) {
    if (this.parent && this.parent.byName && this.parent.byName[this.name] === this) delete this.parent.byName[this.name];
    this.name = nm;
    if (this.parent && this.parent.byName) this.parent.byName[nm] = this;
  };
  DP.methods = function () { return null; };
  DP.getMemberRaw = function (name) {
    if (BUILTIN_PROPS[name] === 1) return this.getProp(name);
    var v = this.vars[name];
    if (v !== undefined || name in this.vars) return v;
    var ch = this.childByName(name);
    if (ch) return ch;
    var mt = this.methods();
    if (mt && name in mt) return mt[name];
    return NF;
  };
  DP.childByName = function () { return null; };
  DP.getMember = function (name) { var r = this.getMemberRaw(name); return r === NF ? undefined : r; };
  DP.hasMember = function (name) { return this.getMemberRaw(name) !== NF; };
  DP.setMember = function (name, v) {
    if (name === 'filters') { this.filters = $.convertFilters(v); this.vars.filters = v; return; }
    if (BUILTIN_PROPS[name] === 1) { this.setProp(name, v); return; }
    this.vars[name] = v;
  };
  DP.deleteMember = function (name) { if (name in this.vars) { delete this.vars[name]; return true; } return false; };
  DP.$enumerate = function () { var ks = Object.keys(this.vars), out = []; for (var i = ks.length - 1; i >= 0; i--) out.push(ks[i]); return out; };

  // handlers that make an object react to the mouse
  var MOUSE_HANDLERS = ['onPress', 'onRelease', 'onReleaseOutside', 'onRollOver', 'onRollOut', 'onDragOver', 'onDragOut'];
  DP.isInteractive = function () {
    if (this.vars.enabled === false) return false;
    for (var i = 0; i < MOUSE_HANDLERS.length; i++) if (typeof this.vars[MOUSE_HANDLERS[i]] === 'function') return true;
    return false;
  };
  DP.containsPoint = function () { return false; }; // overridden

  // ================================================================ Shape / static graphics
  function Shape(def, charId) {
    DisplayObject.call(this);
    this.def = def; this.charId = charId;
  }
  Shape.prototype = Object.create(DP);
  Shape.prototype.constructor = Shape;
  Shape.prototype.localBounds = function () { return this.def.bounds; };
  Shape.prototype.containsPoint = function (lx, ly) {
    var d = this.def, b = d.bounds;
    if (lx < b[0] || lx > b[2] || ly < b[1] || ly > b[3]) return false;
    var layers = d.k === 'morph' ? d.a : d.layers;
    var ctx = $.hitCtx();
    for (var i = 0; i < layers.length; i++) {
      var L = layers[i];
      if (!L.fill) continue;
      if (!L.$p) L.$p = new Path2D(L.d);
      if (ctx.isPointInPath(L.$p, lx, ly)) return true;
    }
    return false;
  };
  Shape.prototype.getMember = function () { return undefined; };
  $.Shape = Shape;

  var hitCanvas = null;
  $.hitCtx = function () { if (!hitCanvas) { hitCanvas = document.createElement('canvas'); hitCanvas.width = 4; hitCanvas.height = 4; } return hitCanvas.getContext('2d'); };

  // ================================================================ MovieClip
  function Clip(def, charId) {
    DisplayObject.call(this);
    this.def = def;
    this.charId = charId;
    this.frame = 0;
    this.nFrames = def.n || def.frames.length || 1;
    this.playing = true;
    this.list = [];
    this.byDepth = Object.create(null);
    this.byName = Object.create(null);
    this.gfx = null;           // drawing API commands
    this.dragLock = false;
  }
  Clip.prototype = Object.create(DP);
  Clip.prototype.constructor = Clip;
  $.Clip = Clip;
  var CP = Clip.prototype;

  CP.childByName = function (name) { return this.byName[name] || null; };
  CP.methods = function () { return ClipMethods; };

  CP.put = function (obj, depth) {
    var old = this.byDepth[depth];
    if (old) this.discard(old);
    obj.parent = this; obj.depth = depth; obj.$root = this.$root;
    this.byDepth[depth] = obj;
    var l = this.list, i = l.length;
    while (i > 0 && l[i - 1].depth > depth) i--;
    l.splice(i, 0, obj);
    if (obj.name) this.byName[obj.name] = obj;
  };
  CP.discard = function (obj) {
    if (this.byDepth[obj.depth] === obj) delete this.byDepth[obj.depth];
    var i = this.list.indexOf(obj);
    if (i >= 0) this.list.splice(i, 1);
    if (obj.name && this.byName[obj.name] === obj) delete this.byName[obj.name];
    obj.kill();
  };
  DP.kill = function () { this.removed = true; };
  CP.kill = function () {
    this.removed = true;
    if ($.drag && $.drag.clip === this) $.drag = null;
    for (var i = 0; i < this.list.length; i++) this.list[i].kill();
    if ($.pressed === this) $.pressed = null;
    if ($.hover === this) $.hover = null;
  };
  CP.removeFromParent = function () { if (this.parent) this.parent.discard(this); };
  CP.localBounds = function () {
    var r = null;
    for (var i = 0; i < this.list.length; i++) {
      var o = this.list[i];
      if (o.clipDepth) continue;
      var b = o.boundsInParent();
      if (!b) continue;
      if (!r) r = b.slice(); else { r[0] = Math.min(r[0], b[0]); r[1] = Math.min(r[1], b[1]); r[2] = Math.max(r[2], b[2]); r[3] = Math.max(r[3], b[3]); }
    }
    if (this.gfx && this.gfx.bounds) { var g = this.gfx.bounds; if (!r) r = g.slice(); else { r[0] = Math.min(r[0], g[0]); r[1] = Math.min(r[1], g[1]); r[2] = Math.max(r[2], g[2]); r[3] = Math.max(r[3], g[3]); } }
    return r;
  };
  CP.containsPoint = function (lx, ly) {
    // lx, ly in this clip's local coordinates; only visible shapes count
    for (var i = this.list.length - 1; i >= 0; i--) {
      var o = this.list[i];
      if (!o.visible || o.clipDepth) continue;
      var p = apply(inv(o.m), lx, ly);
      if (o.containsPoint(p[0], p[1])) return true;
    }
    return false;
  };

  // ---- timeline
  function cloneExt(e) { var o = {}; for (var k in e) o[k] = e[k]; return o; }
  function applyExt(obj, e, isNew) {
    if (!e) return;
    if (!obj.scripted || isNew) {
      if (e.m) obj.m = e.m.slice();
      if (e.cx) obj.cx = e.cx.slice();
    }
    if (e.ratio !== undefined) obj.ratio = e.ratio;
    if (e.name !== undefined && isNew) obj.name = e.name;
    if (e.clip !== undefined) obj.clipDepth = e.clip;
    if (e.filters !== undefined) obj.filters = e.filters;
    if (e.blend !== undefined) obj.blend = e.blend;
  }

  // current timeline state of this clip: depth -> {id, ext}
  CP.timelineState = function () {
    var st = {};
    for (var i = 0; i < this.list.length; i++) {
      var o = this.list[i];
      if (o.tl) st[o.depth] = { id: o.charId, ext: o.tlExt, obj: o, pf: o.tlPf };
    }
    return st;
  };

  CP.runOps = function (frameNo, st, scriptsToo) {
    var ops = this.def.frames[frameNo - 1];
    if (!ops) return;
    for (var i = 0; i < ops.length; i++) {
      var op = ops[i];
      switch (op[0]) {
        case 'P': {
          var depth = op[1], id = op[2], isUpd = op[3], ext = op[4] || {};
          var cur = st[depth];
          if (!isUpd) {
            st[depth] = { id: id, ext: cloneExt(ext), obj: null, fresh: true, pf: frameNo };
          } else if (cur) {
            if (id && id !== cur.id) { st[depth] = { id: id, ext: Object.assign({}, cur.ext || {}, ext), obj: null, fresh: true, pf: frameNo }; }
            else { cur.ext = Object.assign({}, cur.ext || {}, ext); cur.upd = true; }
          }
          break;
        }
        case 'R': delete st[op[1]]; break;
        case 'A': if (scriptsToo) queue.push({ id: op[1], clip: this }); break;
        case 'S': if (scriptsToo && $.startTimelineSound) $.startTimelineSound(op[1], op[2]); break;
        default: break;
      }
    }
  };

  CP.reconcile = function (st) {
    var d, cur, i;
    // remove timeline children not in the new state
    var existing = this.list.slice();
    for (i = 0; i < existing.length; i++) {
      var o = existing[i];
      if (!o.tl) continue;
      var s = st[o.depth];
      if (!s || (s.obj !== o && !(s.id === o.charId && !s.fresh))) this.discard(o);
    }
    var depths = Object.keys(st).map(Number).sort(function (a, b) { return a - b; });
    for (i = 0; i < depths.length; i++) {
      d = depths[i]; cur = st[d];
      var obj = this.byDepth[d];
      if (obj && obj.tl && obj.charId === cur.id && !cur.fresh) {
        if (cur.ext !== obj.tlExt) { applyExt(obj, cur.ext, false); obj.tlExt = cur.ext; }
        cur.obj = obj;
      } else {
        var nobj = $.instantiate(cur.id);
        if (!nobj) continue;
        nobj.tl = true; nobj.tlExt = cur.ext; nobj.tlPf = cur.pf;
        nobj.name = (cur.ext && cur.ext.name) || '';
        applyExt(nobj, cur.ext, true);
        this.put(nobj, d);
        cur.obj = nobj; cur.fresh = false;
        nobj.born = bornId();
        if (nobj.start) nobj.start();
      }
    }
  };

  // Jump to a frame (1-based). Queues the target frame's scripts.
  CP.gotoFrame = function (target) {
    target = Math.max(1, Math.min(this.nFrames, target | 0));
    var cur = this.frame;
    if (target === cur) return;
    var st;
    var scriptsOnlyAtTarget = true;
    if (cur === 0 || target < cur) {
      st = {};
      for (var f = 1; f < target; f++) this.runOps(f, st, false);
      scriptsOnlyAtTarget = true;
    } else {
      st = this.timelineState();
      for (var f2 = cur + 1; f2 < target; f2++) this.runOps(f2, st, false);
    }
    this.runOps(target, st, scriptsOnlyAtTarget);
    // Jumping backwards replays the timeline from frame 1, but (as in Flash) an instance whose
    // placement is still the same one keeps its state (_visible, variables...) instead of being recreated.
    for (var dk in st) {
      var ex = this.byDepth[dk], en = st[dk];
      if (en.fresh && ex && ex.tl && ex.charId === en.id && ex.tlPf !== undefined && ex.tlPf === en.pf) en.fresh = false;
    }
    this.frame = target;
    this.reconcile(st);
  };

  // start (first frame) - called when the clip enters the display list
  CP.start = function () {
    this.frame = 0;
    if (this.nFrames >= 1) this.gotoFrame(1);
  };

  CP.runFrame = function () { // advance playhead (called once per tick)
    if (this.born === tickId) return;
    if (this.playing && this.nFrames > 1) {
      var next = this.frame + 1;
      if (next > this.nFrames) next = 1;
      this.gotoFrame(next);
    }
    var kids = this.list.slice();
    for (var i = 0; i < kids.length; i++) {
      var k = kids[i];
      if (!k.removed && k.runFrame) k.runFrame();
    }
  };
  CP.enterFrameEvents = function () {
    if (this.removed) return;
    if (typeof this.vars.onEnterFrame === 'function') callHandler(this, 'onEnterFrame');
    var kids = this.list.slice();
    for (var i = 0; i < kids.length; i++) {
      var k = kids[i];
      if (!k.removed && k.enterFrameEvents) k.enterFrameEvents();
    }
  };

  function frameFromArg(clip, f) {
    if (typeof f === 'string') {
      var lab = clip.def.labels && clip.def.labels[f];
      if (lab) return lab;
      var nn = +f; if (nn === nn && f !== '') return nn;
      return -1;
    }
    f = num(f);
    return f === f ? f : -1;
  }

  // ---- script-created clips
  function nextDepth(clip) {
    var max = DEPTH_BASE - 1;
    for (var i = 0; i < clip.list.length; i++) if (clip.list[i].depth > max) max = clip.list[i].depth;
    return max + 1;
  }
  $.instantiate = function (id) {
    var c = LIB.chars[id];
    if (!c) return null;
    switch (c.k) {
      case 'sprite': return new Clip(c, id);
      case 'shape': case 'morph': return new Shape(c, id);
      case 'button': return new $.Button(c, id);
      case 'edit': return new $.EditText(c, id);
      default: return null;
    }
  };
  function initClipVars(c, init) {
    if (init && typeof init === 'object') for (var k in init) { if (BUILTIN_PROPS[k]) c.setMember(k, init[k]); else c.vars[k] = init[k]; }
  }

  var ClipMethods = {
    play: function () { this.playing = true; },
    stop: function () { this.playing = false; },
    gotoAndPlay: function (f) { var n = frameFromArg(this, f); if (n > 0) { this.gotoFrame(n); this.playing = true; } },
    gotoAndStop: function (f) { var n = frameFromArg(this, f); if (n > 0) { this.gotoFrame(n); this.playing = false; } },
    nextFrame: function () { this.gotoFrame(Math.min(this.nFrames, this.frame + 1)); this.playing = false; },
    prevFrame: function () { this.gotoFrame(Math.max(1, this.frame - 1)); this.playing = false; },
    attachMovie: function (id, name, depth, init) {
      id = str(id); name = str(name);
      var cid = LIB.exports[id];
      if (cid === undefined) return undefined;
      var c = $.instantiate(cid);
      if (!c) return undefined;
      c.name = name;
      c.born = bornId();
      depth = num(depth) + DEPTH_BASE;
      this.put(c, depth);
      initClipVars(c, init);
      if (c.start) c.start();
      return c;
    },
    createEmptyMovieClip: function (name, depth) {
      var c = new Clip({ n: 1, frames: [[]], labels: {} }, 0);
      c.name = str(name); c.born = bornId();
      this.put(c, num(depth) + DEPTH_BASE);
      c.start();
      return c;
    },
    duplicateMovieClip: function (name, depth, init) {
      if (!this.parent) return undefined;
      var c = $.instantiate(this.charId);
      if (!c) return undefined;
      c.name = str(name); c.born = bornId();
      c.m = this.m.slice(); if (this.cx) c.cx = this.cx.slice();
      c.visible = this.visible;
      this.parent.put(c, num(depth) + DEPTH_BASE);
      initClipVars(c, init);
      if (c.start) c.start();
      return c;
    },
    removeMovieClip: function () { this.removeFromParent(); },
    getNextHighestDepth: function () { return nextDepth(this) - DEPTH_BASE; },
    getDepth: function () { return this.depth - DEPTH_BASE; },
    swapDepths: function (t) {
      if (!this.parent) return;
      var p = this.parent, other;
      if (typeof t === 'number') {
        var d = t + DEPTH_BASE; other = p.byDepth[d];
        if (other === this) return;
        var old = this.depth;
        delete p.byDepth[old]; this.depth = d;
        if (other) { delete p.byDepth[d]; other.depth = old; p.byDepth[old] = other; }
        p.byDepth[d] = this;
      } else if (t instanceof DisplayObject && t.parent === p) {
        other = t; var a = this.depth, b = other.depth;
        p.byDepth[a] = other; p.byDepth[b] = this; this.depth = b; other.depth = a;
      } else return;
      p.list.sort(function (x, y) { return x.depth - y.depth; });
    },
    hitTest: function (a, b, shape) {
      if (a instanceof DisplayObject) {
        var b1 = $.worldBounds(this), b2 = $.worldBounds(a);
        if (!b1 || !b2) return false;
        return !(b1[2] < b2[0] || b2[2] < b1[0] || b1[3] < b2[1] || b2[3] < b1[1]);
      }
      var x = num(a), y = num(b);
      if ($.bool(shape)) {
        var w = inv(this.worldMatrix()); var p = apply(w, x, y);
        return this.containsPoint(p[0], p[1]);
      }
      var wb = $.worldBounds(this);
      return !!wb && x >= wb[0] && x <= wb[2] && y >= wb[1] && y <= wb[3];
    },
    getBounds: function (space) {
      var b = this.localBounds();
      if (!b) return { xMin: 0, xMax: 0, yMin: 0, yMax: 0 };
      var wm = this.worldMatrix();
      var tm = space instanceof DisplayObject ? mul(inv(space.worldMatrix()), wm) : (space === undefined ? this.m : wm);
      var pts = [apply(tm, b[0], b[1]), apply(tm, b[2], b[1]), apply(tm, b[0], b[3]), apply(tm, b[2], b[3])];
      return { xMin: Math.min(pts[0][0], pts[1][0], pts[2][0], pts[3][0]), xMax: Math.max(pts[0][0], pts[1][0], pts[2][0], pts[3][0]),
        yMin: Math.min(pts[0][1], pts[1][1], pts[2][1], pts[3][1]), yMax: Math.max(pts[0][1], pts[1][1], pts[2][1], pts[3][1]) };
    },
    localToGlobal: function (pt) { var r = apply(this.worldMatrix(), num(pt.x), num(pt.y)); pt.x = r[0]; pt.y = r[1]; },
    globalToLocal: function (pt) { var r = apply(inv(this.worldMatrix()), num(pt.x), num(pt.y)); pt.x = r[0]; pt.y = r[1]; },
    startDrag: function (lock, l, t, r, b) { $.startDrag(this, lock, l === undefined ? null : [l, t, r, b]); },
    stopDrag: function () { $.stopDrag(); },
    getBytesLoaded: function () { return 1000; },
    getBytesTotal: function () { return 1000; },
    loadMovie: function () { }, unloadMovie: function () { }, loadVariables: function () { },
    getSWFVersion: function () { return 8; },
    getInstanceAtDepth: function (d) { return this.byDepth[num(d) + DEPTH_BASE]; },
    createTextField: function (name, depth, x, y, w, h) {
      var def = { k: 'edit', bounds: [0, 0, w, h], font: 233, size: 12, color: [0, 0, 0, 255], align: 0, wrap: false, multi: false, password: false, readonly: true, autoSize: false, selectable: false, border: false, html: false, outlines: true, ml: 0, mr: 0, indent: 0, leading: 0, maxLen: null, variable: null, text: '' };
      var t = new $.EditText(def, 0);
      t.name = str(name); t.m = [1, 0, 0, 1, num(x), num(y)];
      this.put(t, num(depth) + DEPTH_BASE);
      return t;
    },
    // drawing API
    clear: function () { this.gfx = null; },
    lineStyle: function (w, c, a) { G(this).style = { w: num(w), c: num(c), a: a === undefined ? 100 : num(a) }; G(this).cmds.push(['ls', num(w), num(c), a === undefined ? 100 : num(a)]); },
    moveTo: function (x, y) { var g = G(this); g.cmds.push(['m', num(x), num(y)]); gfxBounds(g, num(x), num(y)); },
    lineTo: function (x, y) { var g = G(this); g.cmds.push(['l', num(x), num(y)]); gfxBounds(g, num(x), num(y)); },
    curveTo: function (cx, cy, x, y) { var g = G(this); g.cmds.push(['q', num(cx), num(cy), num(x), num(y)]); gfxBounds(g, num(cx), num(cy)); gfxBounds(g, num(x), num(y)); },
    beginFill: function (c, a) { G(this).cmds.push(['bf', num(c), a === undefined ? 100 : num(a)]); },
    endFill: function () { G(this).cmds.push(['ef']); },
    toString: function () { return this.targetPath(); },
  };
  function G(c) { if (!c.gfx) c.gfx = { cmds: [], bounds: null, style: null }; return c.gfx; }
  function gfxBounds(g, x, y) { if (!g.bounds) g.bounds = [x, y, x, y]; else { g.bounds[0] = Math.min(g.bounds[0], x); g.bounds[1] = Math.min(g.bounds[1], y); g.bounds[2] = Math.max(g.bounds[2], x); g.bounds[3] = Math.max(g.bounds[3], y); } }
  $.ClipMethods = ClipMethods;

  $.worldBounds = function (o) {
    var b = o.localBounds();
    if (!b) return null;
    var m = o.worldMatrix();
    var pts = [apply(m, b[0], b[1]), apply(m, b[2], b[1]), apply(m, b[0], b[3]), apply(m, b[2], b[3])];
    return [Math.min(pts[0][0], pts[1][0], pts[2][0], pts[3][0]), Math.min(pts[0][1], pts[1][1], pts[2][1], pts[3][1]),
      Math.max(pts[0][0], pts[1][0], pts[2][0], pts[3][0]), Math.max(pts[0][1], pts[1][1], pts[2][1], pts[3][1])];
  };

  // ================================================================ Button
  function Button(def, charId) {
    DisplayObject.call(this);
    this.def = def; this.charId = charId;
    this.state = 'up';
    this.stateKids = {};
  }
  Button.prototype = Object.create(DP);
  Button.prototype.constructor = Button;
  $.Button = Button;
  Button.prototype.methods = function () { return ButtonMethods; };
  Button.prototype.isInteractive = function () { return this.vars.enabled !== false; };
  Button.prototype.kidsFor = function (state) {
    var k = this.stateKids[state];
    if (k) return k;
    var recs = this.def.states[state] || [];
    k = [];
    for (var i = 0; i < recs.length; i++) {
      var o = $.instantiate(recs[i].id);
      if (!o) continue;
      o.m = recs[i].m.slice(); if (recs[i].cx) o.cx = recs[i].cx.slice();
      o.parent = this; o.depth = recs[i].depth; o.$root = this.$root;
      if (o.start) o.start();
      k.push(o);
    }
    k.sort(function (a, b) { return a.depth - b.depth; });
    this.stateKids[state] = k;
    return k;
  };
  Button.prototype.visibleKids = function () {
    var s = this.state === 'down' ? 'down' : (this.state === 'over' ? 'over' : 'up');
    var k = this.kidsFor(s);
    if (!k.length && s !== 'up') return this.kidsFor('up');
    return k;
  };
  Button.prototype.localBounds = function () {
    var kids = this.kidsFor('hit'); if (!kids.length) kids = this.kidsFor('up');
    var r = null;
    for (var i = 0; i < kids.length; i++) { var b = kids[i].boundsInParent(); if (!b) continue; if (!r) r = b.slice(); else { r[0] = Math.min(r[0], b[0]); r[1] = Math.min(r[1], b[1]); r[2] = Math.max(r[2], b[2]); r[3] = Math.max(r[3], b[3]); } }
    return r;
  };
  Button.prototype.containsPoint = function (lx, ly) {
    var kids = this.kidsFor('hit'); if (!kids.length) kids = this.kidsFor('up');
    for (var i = kids.length - 1; i >= 0; i--) { var o = kids[i]; var p = apply(inv(o.m), lx, ly); if (o.containsPoint(p[0], p[1])) return true; }
    return false;
  };
  Button.prototype.runFrame = function () {
    var kids = this.visibleKids();
    for (var i = 0; i < kids.length; i++) if (kids[i].runFrame) kids[i].runFrame();
  };
  Button.prototype.kill = function () { this.removed = true; if ($.pressed === this) $.pressed = null; if ($.hover === this) $.hover = null; };
  Button.prototype.fireActions = function (event) {
    var acts = this.def.actions;
    for (var i = 0; i < acts.length; i++) {
      if (acts[i].cond.indexOf(event) >= 0) {
        var ctx = this.parent || this;
        $.cur = ctx;
        try { S[acts[i].script](ctx.getScope(), ctx); } catch (e) { console.error('button action error', e); }
      }
    }
  };
  var ButtonMethods = {
    getDepth: function () { return this.depth - DEPTH_BASE; },
    removeMovieClip: function () { if (this.parent) this.parent.discard(this); },
    swapDepths: ClipMethods.swapDepths,
    getBounds: ClipMethods.getBounds, hitTest: ClipMethods.hitTest,
    localToGlobal: ClipMethods.localToGlobal, globalToLocal: ClipMethods.globalToLocal,
  };

  // ================================================================ input dispatch
  $.mouse = { x: 0, y: 0, down: false };
  $.hover = null; $.pressed = null; $.drag = null;

  function findInteractive(clip, gx, gy, wm) {
    // topmost interactive object under (gx, gy); wm = world matrix of clip
    var list = clip.list;
    for (var i = list.length - 1; i >= 0; i--) {
      var o = list[i];
      if (!o.visible || o.clipDepth) continue;
      var om = mul(wm, o.m);
      var iv = inv(om);
      var p = apply(iv, gx, gy);
      if (o instanceof Button) {
        if (o.isInteractive() && o.containsPoint(p[0], p[1]) && !o.isMasked) return o;
      } else if (o instanceof Clip) {
        if (o.isInteractive()) { if (o.containsPoint(p[0], p[1])) return o; }
        else { var r = findInteractive(o, gx, gy, om); if (r) return r; }
      }
    }
    return null;
  }
  // buttons placed inside Button states are not hit-tested separately
  $.hitInteractive = function (gx, gy) { return findInteractive($.root, gx, gy, ID); };

  function broadcast(clip, name, args) {
    var kids = clip.list.slice();
    for (var i = 0; i < kids.length; i++) {
      var k = kids[i];
      if (k.removed) continue;
      if (typeof k.vars[name] === 'function') callHandler(k, name, args);
      if (k.list) broadcast(k, name, args);
    }
  }
  $.broadcast = broadcast;
  function notifyListeners(listeners, name, args) {
    var l = listeners.slice();
    for (var i = 0; i < l.length; i++) { var o = l[i]; if (o && typeof o[name] === 'function') { try { o[name].apply(o, args || []); } catch (e) { console.error(e); } } }
  }
  $.mouseListeners = [];

  function fire(obj, ev) {
    if (!obj || obj.removed) return;
    if (obj instanceof Button) {
      var map = { onPress: 'idleToOverDown', onRelease: 'overDownToOverUp', onRollOver: 'idleToOverUp', onRollOut: 'overUpToIdle', onReleaseOutside: 'overDownToIdle' };
      if (map[ev]) obj.fireActions(map[ev]);
    }
    callHandler(obj, ev);
  }

  $.mouseMove = function (x, y) {
    $.mouse.x = x; $.mouse.y = y;
    if ($.drag) {
      var d = $.drag, c = d.clip;
      if (c.parent) {
        var pm = inv(c.parent.worldMatrix());
        var p = apply(pm, x, y);
        var nx = d.lock ? p[0] : p[0] + d.offX, ny = d.lock ? p[1] : p[1] + d.offY;
        if (d.box) { nx = Math.max(d.box[0], Math.min(d.box[2], nx)); ny = Math.max(d.box[1], Math.min(d.box[3], ny)); }
        c.m[4] = nx; c.m[5] = ny; c.scripted = true;
      }
    }
    var over = $.hitInteractive(x, y);
    if (over !== $.hover) {
      var prev = $.hover;
      $.hover = over;
      if (prev) { prev.state = 'up'; if ($.pressed === prev) { fire(prev, 'onDragOut'); } else fire(prev, 'onRollOut'); }
      if (over) { over.state = $.pressed === over ? 'down' : 'over'; if ($.pressed && $.pressed !== over) { fire(over, 'onDragOver'); } else if (!$.pressed) fire(over, 'onRollOver'); }
    }
    broadcast($.root, 'onMouseMove');
    notifyListeners($.mouseListeners, 'onMouseMove');
    runQueue();
  };
  $.mouseDown = function () {
    $.mouse.down = true;
    broadcast($.root, 'onMouseDown');
    notifyListeners($.mouseListeners, 'onMouseDown');
    var over = $.hitInteractive($.mouse.x, $.mouse.y);
    $.hover = over;
    if (over) { $.pressed = over; over.state = 'down'; fire(over, 'onPress'); }
    runQueue();
  };
  $.mouseUp = function () {
    $.mouse.down = false;
    broadcast($.root, 'onMouseUp');
    notifyListeners($.mouseListeners, 'onMouseUp');
    var pr = $.pressed;
    $.pressed = null;
    if (pr && !pr.removed) {
      var over = $.hitInteractive($.mouse.x, $.mouse.y);
      pr.state = over === pr ? 'over' : 'up';
      if (over === pr) fire(pr, 'onRelease'); else fire(pr, 'onReleaseOutside');
    }
    runQueue();
  };

  // ================================================================ AS helpers used by transpiled code
  $.resolveTarget = function (base, t) {
    if (t instanceof DisplayObject) return t;
    if (t === undefined || t === null) return base;
    t = str(t);
    if (t === '' || t === 'this') return base || $.cur;
    var cur = t.charAt(0) === '/' ? $.root : (base || $.cur || $.root);
    var parts = t.split(/[\/.]/);
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      if (p === '' || p === '_level0' || p === '_root') { if (p === '_root' || p === '_level0') cur = $.root; continue; }
      if (p === '..' || p === '_parent') cur = cur && cur.parent ? cur.parent : cur;
      else if (p === 'this') continue;
      else { cur = cur && cur.byName ? cur.byName[p] || (cur.vars[p] instanceof DisplayObject ? cur.vars[p] : null) : null; }
      if (!cur) return null;
    }
    return cur;
  };
  $.target = function (base, t) { return $.resolveTarget(base, t) || base; };
  function tgt(t) { return t instanceof Clip ? t : $.resolveTarget($.cur, t); }
  $.play = function (t) { t = tgt(t); if (t && t.playing !== undefined) t.playing = true; };
  $.stop = function (t) { t = tgt(t); if (t && t.playing !== undefined) t.playing = false; };
  $.nextFrame = function (t) { t = tgt(t); if (t && t.gotoFrame) ClipMethods.nextFrame.call(t); };
  $.prevFrame = function (t) { t = tgt(t); if (t && t.gotoFrame) ClipMethods.prevFrame.call(t); };
  $.gotoFrame = function (t, f) { t = tgt(t); if (t && t.gotoFrame) { var n = frameFromArg(t, f); if (n > 0) t.gotoFrame(n); } };
  $.callFrame = function () { };
  $.cloneSprite = function (src, name, depth) { src = tgt(src); if (src) ClipMethods.duplicateMovieClip.call(src, name, depth); };
  $.removeSprite = function (t) { t = tgt(t); if (t && t.parent) t.parent.discard(t); };
  $.gp = function (t, prop) { t = tgt(t); return t ? t.getProp(prop) : undefined; };
  $.gpi = function (t, i) { return $.gp(t, ['_x', '_y', '_xscale', '_yscale', '_currentframe', '_totalframes', '_alpha', '_visible', '_width', '_height', '_rotation', '_target', '_framesloaded', '_name', '_droptarget', '_url', '_highquality', '_focusrect', '_soundbuftime', '_quality', '_xmouse', '_ymouse'][num(i)]); };
  $.sp = function (t, prop, v) { t = tgt(t); if (t) t.setProp(prop, v); };
  $.spi = function (t, i, v) { $.sp(t, ['_x', '_y', '_xscale', '_yscale', '_currentframe', '_totalframes', '_alpha', '_visible', '_width', '_height', '_rotation', '_target', '_framesloaded', '_name', '_droptarget', '_url', '_highquality', '_focusrect', '_soundbuftime', '_quality', '_xmouse', '_ymouse'][num(i)], v); };
  $.startDrag = function (t, lock, box) {
    t = tgt(t); if (!t || !t.parent) return;
    var pm = inv(t.parent.worldMatrix()); var p = apply(pm, $.mouse.x, $.mouse.y);
    $.drag = { clip: t, lock: $.bool(lock), offX: t.m[4] - p[0], offY: t.m[5] - p[1], box: box ? box.map(num) : null };
  };
  $.stopDrag = function () { $.drag = null; };
  $.getURL = function (url, target) { console.log('[getURL blocked]', url, target); };
  $.getURL2 = function (url, target, flags) { console.log('[getURL2 blocked]', url, target); };
  $.stopAllSounds = function () { if ($.Sound && $.Sound.stopAll) $.Sound.stopAll(); };

  // ================================================================ main loop pieces
  function runQueue() {
    var guard = 0;
    while (queue.length && guard++ < 100000) {
      var q = queue.shift();
      if (q.clip.removed) continue;
      $.cur = q.clip;
      var prev = q.clip;
      try { S[q.id](q.clip.getScope(), q.clip); }
      catch (e) { console.error('Script error in S[' + q.id + ']:', e); }
    }
  }
  $.runQueue = runQueue;
  $.tick = function () {
    tickId++;
    $.inTick = true;
    try {
      if ($.runTimers) $.runTimers();
      runQueue();
      $.root.enterFrameEvents();
      runQueue();
      $.root.runFrame();
      runQueue();
    } finally { $.inTick = false; }
  };
  $.createRoot = function () {
    var root = new Clip(LIB.main, 0);
    root.$root = root;
    root.name = '';
    $.root = root;
    root.born = bornId();
    root.start();
    runQueue();
    return root;
  };
})();

// AS2 built-in classes and global functions.
'use strict';
(function () {
  var G = $.global;
  var str = $.str, num = $.n;

  // ------------------------------------------------------------ primitives
  var SM = $.StringMethods;
  ['charAt', 'indexOf', 'lastIndexOf', 'toLowerCase', 'toUpperCase', 'concat', 'slice', 'substr', 'substring', 'split'].forEach(function (k) {
    SM[k] = function () {
      var s = String(this), a = [];
      for (var i = 0; i < arguments.length; i++) a.push(arguments[i]);
      if (k === 'charAt') return s.charAt(num(a[0]));
      if (k === 'indexOf' || k === 'lastIndexOf') return s[k](str(a[0]), a.length > 1 ? num(a[1]) : undefined);
      if (k === 'split') { if (a[0] === undefined) return [s]; var r = s.split(str(a[0])); if (a[1] !== undefined) r.length = Math.min(r.length, num(a[1])); return r; }
      if (k === 'concat') return s + a.map(str).join('');
      if (k === 'toLowerCase' || k === 'toUpperCase') return s[k]();
      return s[k].apply(s, a.map(function (x) { return x === undefined ? undefined : num(x); }));
    };
  });
  SM.charCodeAt = function (i) { var s = String(this); var c = s.charCodeAt(num(i)); return c; };
  SM.toString = function () { return String(this); };
  SM.valueOf = SM.toString;
  $.NumberMethods.toString = function (radix) { return radix === undefined ? str(Number(this)) : Number(this).toString(num(radix)); };
  $.NumberMethods.valueOf = function () { return Number(this); };

  G.Math = Math;
  G.NaN = NaN; G.Infinity = Infinity;
  G.parseInt = function (s, r) {
    s = str(s); r = r === undefined ? undefined : num(r);
    var v = parseInt(s, r);
    return v;
  };
  G.parseFloat = function (s) { return parseFloat(str(s)); };
  G.isNaN = function (v) { return num(v) !== num(v); };
  G.isFinite = function (v) { return isFinite(num(v)); };
  G.escape = function (s) { return escape(str(s)); };
  G.unescape = function (s) { return unescape(str(s)); };
  G.ASSetPropFlags = function () { };
  G.updateAfterEvent = function () { };
  G.trace = $.trace;

  function ctor(fn, constructFn) { fn.$construct = constructFn; return fn; }
  G.Object = ctor(function (v) { return v === undefined || v === null ? {} : v; }, function () { return {}; });
  G.Array = ctor(function () { return G.Array.$construct(Array.prototype.slice.call(arguments)); }, function (a) {
    if (a.length === 1 && typeof a[0] === 'number') return new Array(a[0]);
    return a.slice();
  });
  G.String = function (v) { return str(v); };
  G.String.fromCharCode = function () { var s = ''; for (var i = 0; i < arguments.length; i++) s += String.fromCharCode(num(arguments[i]) & 0xffff); return s; };
  G.String.$construct = function (a) { return str(a[0]); };
  G.Number = function (v) { return num(v); };
  G.Number.$construct = function (a) { return num(a[0]); };
  G.Number.MAX_VALUE = Number.MAX_VALUE; G.Number.MIN_VALUE = Number.MIN_VALUE; G.Number.NaN = NaN;
  G.Number.POSITIVE_INFINITY = Infinity; G.Number.NEGATIVE_INFINITY = -Infinity;
  G.Boolean = function (v) { return $.bool(v); };
  G.Boolean.$construct = function (a) { return $.bool(a[0]); };
  G.Date = ctor(function () { return String(new Date()); }, function (a) { var d = a.length ? new (Function.prototype.bind.apply(Date, [null].concat(a)))() : new Date(); return d; });
  G.Function = function () { };

  // ------------------------------------------------------------ intervals (virtual clock driven by the frame loop)
  $.vtime = 0;
  $.getTimer = function () { return Math.floor($.vtime); };
  var timers = [], nextInterval = 1;
  function addTimer(fn, ms, rest, once) {
    var t = { id: nextInterval++, fn: fn, ms: Math.max(1, ms), rest: rest, next: $.vtime + Math.max(1, ms), once: once, dead: false };
    timers.push(t);
    return t.id;
  }
  G.setInterval = function (a, b, c) {
    var args = Array.prototype.slice.call(arguments), fn, ms, rest;
    if (typeof a === 'function') { fn = a; ms = num(b); rest = args.slice(2); }
    else { var obj = a, name = str(b); ms = num(c); rest = args.slice(3); fn = function () { var f = $.gm(obj, name); if (typeof f === 'function') return f.apply(obj, arguments); }; }
    return addTimer(fn, ms, rest, false);
  };
  G.clearInterval = function (id) { for (var i = 0; i < timers.length; i++) if (timers[i].id === id) { timers[i].dead = true; } };
  G.setTimeout = function (fn, ms) { return addTimer(fn, num(ms), Array.prototype.slice.call(arguments, 2), true); };
  G.clearTimeout = G.clearInterval;
  $.runTimers = function () {
    $.vtime += 1000 / LIB.fps;
    var list = timers.slice();
    for (var i = 0; i < list.length; i++) {
      var t = list[i], guard = 0;
      while (!t.dead && t.next <= $.vtime && guard++ < 20) {
        t.next += t.ms;
        if (t.once) t.dead = true;
        try { t.fn.apply(undefined, t.rest); } catch (e) { console.error('interval error', e); }
        $.runQueue();
      }
    }
    if (timers.some(function (t) { return t.dead; })) timers = timers.filter(function (t) { return !t.dead; });
  };

  // ------------------------------------------------------------ Stage / Mouse / Key
  G.Stage = { width: 800, height: 600, align: '', scaleMode: 'noScale', showMenu: false, addListener: function () { }, removeListener: function () { } };
  var cursorHidden = false;
  $.mouseHidden = function () { return cursorHidden; };
  G.Mouse = {
    hide: function () { cursorHidden = true; if ($.view.canvas) $.view.canvas.style.cursor = 'none'; return 0; },
    show: function () { cursorHidden = false; if ($.view.canvas) $.view.canvas.style.cursor = ''; return 0; },
    addListener: function (o) { if ($.mouseListeners.indexOf(o) < 0) $.mouseListeners.push(o); },
    removeListener: function (o) { var i = $.mouseListeners.indexOf(o); if (i >= 0) { $.mouseListeners.splice(i, 1); return true; } return false; },
  };
  var keysDown = {}, lastCode = 0, lastAscii = 0, keyListeners = [];
  G.Key = {
    BACKSPACE: 8, CAPSLOCK: 20, CONTROL: 17, DELETEKEY: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37,
    PGDN: 34, PGUP: 33, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38,
    isDown: function (c) { return !!keysDown[num(c)]; },
    isToggled: function () { return false; },
    getCode: function () { return lastCode; },
    getAscii: function () { return lastAscii; },
    addListener: function (o) { if (keyListeners.indexOf(o) < 0) keyListeners.push(o); },
    removeListener: function (o) { var i = keyListeners.indexOf(o); if (i >= 0) { keyListeners.splice(i, 1); return true; } return false; },
  };
  function fireKey(name) {
    keyListeners.slice().forEach(function (o) { var f = o && o[name]; if (typeof f === 'function') { try { f.call(o); } catch (e) { console.error(e); } } });
    if ($.root) $.broadcast($.root, name);
  }
  $.keyDown = function (code, ascii) { keysDown[code] = true; lastCode = code; lastAscii = ascii || 0; fireKey('onKeyDown'); };
  $.keyUp = function (code, ascii) { keysDown[code] = false; lastCode = code; lastAscii = ascii || 0; fireKey('onKeyUp'); };

  // ------------------------------------------------------------ SharedObject (localStorage)
  var shared = {}, KEY = 'tlv-port:so:';
  function SO(name) {
    this.name = name; this.data = {};
    try { var raw = localStorage.getItem(KEY + name); if (raw) this.data = JSON.parse(raw); } catch (e) { }
    this.$last = JSON.stringify(this.data);
  }
  SO.prototype.flush = function () {
    try { var s = JSON.stringify(this.data); if (s !== this.$last) { localStorage.setItem(KEY + this.name, s); this.$last = s; } } catch (e) { }
    return true;
  };
  SO.prototype.clear = function () { this.data = {}; this.flush(); };
  SO.prototype.getSize = function () { return this.$last.length; };
  G.SharedObject = { getLocal: function (name) { name = str(name); return shared[name] || (shared[name] = new SO(name)); } };
  function flushAll() { for (var k in shared) shared[k].flush(); }
  $.flushAll = flushAll;
  setInterval(flushAll, 1500);
  window.addEventListener('pagehide', flushAll);
  document.addEventListener('visibilitychange', function () { if (document.hidden) flushAll(); });

  // ------------------------------------------------------------ Sound
  var active = [];     // currently playing audio elements
  var pendingGesture = [];
  function playAudio(a) {
    var p;
    try { p = a.play(); } catch (e) { p = null; }
    if (p && p.catch) p.catch(function () { if (pendingGesture.indexOf(a) < 0) pendingGesture.push(a); });
  }
  $.unlockAudio = function () {
    var l = pendingGesture.splice(0);
    l.forEach(function (a) { if (active.indexOf(a) >= 0) playAudio(a); });
  };
  function mkAudio(file) {
    var a = new Audio(file);
    a.preload = 'auto';
    return a;
  }
  function Sound(target) { this.$vol = 100; this.$a = null; this.$file = null; }
  Sound.prototype.attachSound = function (id) {
    var cid = $.exportsOf(str(id));
    this.$file = cid !== undefined && LIB.sounds[cid] ? LIB.sounds[cid].file : null;
    return !!this.$file;
  };
  Sound.prototype.start = function (off, loops) {
    if (!this.$file) return;
    this.stop();
    var a = mkAudio(this.$file);
    a.volume = Math.max(0, Math.min(1, this.$vol / 100));
    loops = loops === undefined ? 1 : num(loops);
    var self = this;
    var remaining = Math.max(1, loops);
    a.onended = function () {
      if (--remaining > 0 && active.indexOf(a) >= 0) { a.currentTime = 0; playAudio(a); }
      else { var i = active.indexOf(a); if (i >= 0) active.splice(i, 1); if (typeof self.onSoundComplete === 'function') { try { self.onSoundComplete(); } catch (e) { } } }
    };
    if (loops > 1000) { a.loop = true; remaining = 1e9; }
    if (off) { try { a.currentTime = num(off); } catch (e) { } }
    this.$a = a; active.push(a);
    playAudio(a);
  };
  Sound.prototype.stop = function () {
    var a = this.$a;
    if (a) { a.onended = null; a.pause(); var i = active.indexOf(a); if (i >= 0) active.splice(i, 1); this.$a = null; }
  };
  Sound.prototype.setVolume = function (v) { this.$vol = num(v); if (this.$a) this.$a.volume = Math.max(0, Math.min(1, this.$vol / 100)); };
  Sound.prototype.getVolume = function () { return this.$vol; };
  Sound.prototype.setPan = function () { }; Sound.prototype.getPan = function () { return 0; };
  Sound.prototype.setTransform = function () { }; Sound.prototype.getTransform = function () { return {}; };
  Sound.prototype.loadSound = function () { };
  Sound.prototype.getBytesLoaded = function () { return 1; }; Sound.prototype.getBytesTotal = function () { return 1; };
  Object.defineProperty(Sound.prototype, 'position', { get: function () { return this.$a ? this.$a.currentTime * 1000 : 0; } });
  Object.defineProperty(Sound.prototype, 'duration', { get: function () { return this.$a && this.$a.duration ? this.$a.duration * 1000 : 0; } });
  Sound.stopAll = function () { var l = active.splice(0); l.forEach(function (a) { a.onended = null; a.pause(); }); timelineSounds = {}; };
  G.Sound = Sound; $.Sound = Sound;
  $.exportsOf = function (name) { return LIB.exports[name]; };

  var timelineSounds = {};
  $.startTimelineSound = function (id, info) {
    var snd = LIB.sounds[id];
    if (!snd) return;
    if (info && info.stop) { var o = timelineSounds[id]; if (o) { o.stop(); delete timelineSounds[id]; } return; }
    if (info && info.noMulti && timelineSounds[id] && timelineSounds[id].$a && !timelineSounds[id].$a.ended) return;
    var s = new Sound(); s.$file = snd.file; s.start(0, info && info.loops ? info.loops : 1);
    timelineSounds[id] = s;
  };

  // ------------------------------------------------------------ dead network stuff: stubs
  function later(fn) { setTimeout(function () { try { fn(); } catch (e) { console.error(e); } }, 30); }
  function MovieClipLoader() { this.$l = []; }
  MovieClipLoader.prototype.addListener = function (o) { this.$l.push(o); return true; };
  MovieClipLoader.prototype.removeListener = function (o) { var i = this.$l.indexOf(o); if (i >= 0) this.$l.splice(i, 1); return true; };
  MovieClipLoader.prototype.loadClip = function (url, target) {
    var self = this;
    console.log('[network blocked] loadClip', url);
    later(function () { self.$l.slice().forEach(function (o) { if (o && typeof o.onLoadError === 'function') o.onLoadError(target, 'URLNotFound', 404); }); });
    return false;
  };
  MovieClipLoader.prototype.unloadClip = function () { return true; };
  MovieClipLoader.prototype.getProgress = function () { return { bytesLoaded: 0, bytesTotal: 0 }; };
  G.MovieClipLoader = MovieClipLoader;

  function XML() { this.firstChild = null; this.childNodes = []; this.ignoreWhite = false; this.loaded = false; }
  XML.prototype.load = function (url) { var self = this; console.log('[network blocked] XML.load', url); later(function () { if (typeof self.onLoad === 'function') self.onLoad(false); }); return true; };
  XML.prototype.sendAndLoad = XML.prototype.load;
  XML.prototype.send = function () { return false; };
  XML.prototype.parseXML = function () { };
  G.XML = XML;
  function LoadVars() { }
  LoadVars.prototype.load = function (url) { var self = this; console.log('[network blocked] LoadVars.load', url); later(function () { if (typeof self.onLoad === 'function') self.onLoad(false); }); return true; };
  LoadVars.prototype.sendAndLoad = LoadVars.prototype.load;
  LoadVars.prototype.send = function () { return false; };
  G.LoadVars = LoadVars;

  // Anything else that calls out (Kongregate / playedonline score senders...) simply does nothing
  G.System = { capabilities: { language: 'en', os: 'HTML5' }, security: { allowDomain: function () { } }, useCodepage: false };

  function TextFormat(font, size, color, bold, italic, underline) {
    this.font = font; this.size = size; this.color = color; this.bold = bold; this.italic = italic; this.underline = underline;
    this.align = 'left'; this.letterSpacing = 0;
  }
  G.TextFormat = TextFormat;

  // flash.filters.GlowFilter (used by the potion ability) -> renderer filter spec
  function GlowFilter(color, alpha, blurX, blurY, strength, quality, inner, knockout) {
    this.color = color; this.alpha = alpha; this.blurX = blurX; this.blurY = blurY; this.strength = strength; this.quality = quality; this.inner = inner; this.knockout = knockout;
  }
  G.flash = { filters: { GlowFilter: GlowFilter } };
  $.convertFilters = function (arr) {
    if (!Array.isArray(arr) || !arr.length) return null;
    var out = [];
    arr.forEach(function (f) {
      if (f instanceof GlowFilter) {
        var c = num(f.color);
        out.push({ kind: 'glow', color: [(c >> 16) & 255, (c >> 8) & 255, c & 255, Math.round(255 * (f.alpha === undefined ? 1 : num(f.alpha)))],
          blurX: num(f.blurX), blurY: num(f.blurY), strength: num(f.strength) || 1, inner: !!f.inner, knockout: !!f.knockout, passes: num(f.quality) || 1 });
      }
    });
    return out.length ? out : null;
  };

  G.ExternalInterface = { call: function () { }, addCallback: function () { }, available: false };
})();

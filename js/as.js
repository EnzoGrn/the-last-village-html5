// ActionScript 2 value semantics and object model (the small subset the game needs).
// The transpiled game code (data/scripts.js) calls into this namespace as `$`.
'use strict';
var $ = {};

(function () {
  var hasOwn = Object.prototype.hasOwnProperty;
  var startTime = Date.now();

  // ------------------------------------------------------------ scopes
  // A scope is {v: variables object, p: parent scope, k: 'fn'|'clip'|'global', th: this value, c: clip}
  function Scope(v, p, k, th, c) { this.v = v; this.p = p; this.k = k; this.th = th; this.c = c || null; }
  $.Scope = Scope;
  $.global = {};          // _global
  $.globalScope = new Scope($.global, null, 'global', undefined, null);
  $.clipScope = function (clip) { return new Scope(clip, $.globalScope, 'clip', clip, clip); };

  // ------------------------------------------------------------ conversions
  function isClipLike(v) { return v instanceof $.DisplayObject; }
  function toPrimitive(v) {
    if (v !== null && typeof v === 'object') {
      if (isClipLike(v)) return v;
      if (typeof v.valueOf === 'function') {
        var p = v.valueOf();
        if (p === null || typeof p !== 'object') return p;
      }
      if (typeof v.toString === 'function') {
        var s = v.toString();
        if (s === null || typeof s !== 'object') return s;
      }
      return undefined;
    }
    return v;
  }
  $.toPrimitive = toPrimitive;
  function n(v) {
    switch (typeof v) {
      case 'number': return v;
      case 'boolean': return v ? 1 : 0;
      case 'string':
        if (v === '') return NaN;
        return Number(v);
      case 'undefined': return NaN;
      case 'object':
        if (v === null) return NaN;
        if (isClipLike(v)) return NaN;
        var p = toPrimitive(v);
        return p === v || p === undefined ? NaN : n(p);
      default: return NaN;
    }
  }
  $.n = n;
  function fmtNum(v) {
    if (v !== v) return 'NaN';
    if (v === Infinity) return 'Infinity';
    if (v === -Infinity) return '-Infinity';
    return String(v);
  }
  function str(v) {
    switch (typeof v) {
      case 'string': return v;
      case 'number': return fmtNum(v);
      case 'boolean': return v ? 'true' : 'false';
      case 'undefined': return 'undefined';
      case 'function': return '[type Function]';
      case 'object':
        if (v === null) return 'null';
        if (isClipLike(v)) return v.targetPath ? v.targetPath() : '[object Object]';
        if (Array.isArray(v)) return v.map(function (x) { return x === undefined || x === null ? '' : str(x); }).join(',');
        if (typeof v.toString === 'function' && v.toString !== Object.prototype.toString) return str(v.toString());
        return '[object Object]';
      default: return String(v);
    }
  }
  $.str = str;
  function bool(v) {
    switch (typeof v) {
      case 'boolean': return v;
      case 'number': return v !== 0 && v === v;
      case 'string': return v.length > 0;
      case 'undefined': return false;
      case 'object': return v !== null;
      default: return true;
    }
  }
  $.bool = bool;
  $.toInt = function (v) { v = n(v); return v !== v ? 0 : (v < 0 ? Math.ceil(v) : Math.floor(v)); };
  $.add = function (a, b) {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    a = toPrimitive(a); b = toPrimitive(b);
    if (typeof a === 'string' || typeof b === 'string') return str(a) + str(b);
    return n(a) + n(b);
  };
  $.lt = function (a, b) {
    a = toPrimitive(a); b = toPrimitive(b);
    if (typeof a === 'string' && typeof b === 'string') return a < b;
    a = n(a); b = n(b);
    return a < b;
  };
  $.gt = function (a, b) { return $.lt(b, a); };
  $.eq = function (a, b) {
    var ta = typeof a, tb = typeof b;
    if (ta === tb) {
      if (ta === 'object') { return a === b; }
      if (ta === 'undefined') return true;
      return a === b;
    }
    if ((a === null || a === undefined) && (b === null || b === undefined)) return true;
    if (a === null || a === undefined || b === null || b === undefined) return false;
    if (ta === 'boolean') return $.eq(a ? 1 : 0, b);
    if (tb === 'boolean') return $.eq(a, b ? 1 : 0);
    if (ta === 'number' && tb === 'string') return a === n(b);
    if (ta === 'string' && tb === 'number') return n(a) === b;
    if (ta === 'object' || ta === 'function') { var pa = toPrimitive(a); if (pa === a) return false; return $.eq(pa, b); }
    if (tb === 'object' || tb === 'function') { var pb = toPrimitive(b); if (pb === b) return false; return $.eq(a, pb); }
    return false;
  };
  $.seq = function (a, b) { return a === b; };
  $.typeOf = function (v) {
    switch (typeof v) {
      case 'undefined': return 'undefined';
      case 'number': return 'number';
      case 'string': return 'string';
      case 'boolean': return 'boolean';
      case 'function': return 'function';
      case 'object':
        if (v === null) return 'null';
        if (v instanceof $.Clip) return 'movieclip';
        return 'object';
      default: return 'undefined';
    }
  };
  $.rand = function (v) { v = n(v); return v > 0 ? Math.floor(Math.random() * v) : 0; };
  $.getTimer = function () { return Date.now() - startTime; };
  $.chr = function (v) { return String.fromCharCode(n(v) & 0xffff); };
  $.ord = function (v) { var s = str(v); return s.length ? s.charCodeAt(0) : 0; };
  $.substringOld = function (s, i, c) { s = str(s); i = n(i); c = n(c); return s.substr(Math.max(0, i - 1), c); };
  $.instanceOf = function (o, c) {
    if (typeof c !== 'function' || o === null || o === undefined) return false;
    if (c === $.global.Object) return typeof o === 'object' || typeof o === 'function';
    if (c === $.global.Array) return Array.isArray(o);
    if (c === $.global.String) return typeof o === 'string';
    if (c === $.global.Number) return typeof o === 'number';
    if (c === $.global.Boolean) return typeof o === 'boolean';
    return typeof o === 'object' && o instanceof c;
  };
  $.extend = function (sub, sup) {
    var proto = Object.create(sup.prototype);
    proto.constructor = sup;
    sub.prototype = proto;
  };
  $.targetPath = function (v) { return v && v.targetPath ? v.targetPath() : str(v); };
  $.trace = function (v) { if (typeof console !== 'undefined') console.log('[trace] ' + str(v)); };

  // ------------------------------------------------------------ objects
  $.mkobj = function (pairs) {
    var o = {};
    for (var i = 0; i < pairs.length; i++) o[str(pairs[i][0])] = pairs[i][1];
    return o;
  };
  $.enumerate = function (o) {
    var keys = [];
    if (o !== null && o !== undefined) {
      if (Array.isArray(o)) { for (var i = o.length - 1; i >= 0; i--) keys.push(String(i)); }
      else if (o.$enumerate) keys = o.$enumerate();
      else if (typeof o === 'object' || typeof o === 'function') {
        var ks = Object.keys(o);
        for (var j = ks.length - 1; j >= 0; j--) if (ks[j].charAt(0) !== '$') keys.push(ks[j]);
      }
    }
    keys.push(null);
    return keys;
  };

  var StringMethods = {};
  var NumberMethods = {};
  $.StringMethods = StringMethods;
  $.NumberMethods = NumberMethods;

  // member read
  function gm(o, name) {
    if (o === null || o === undefined) return undefined;
    var t = typeof o;
    if (t === 'object') {
      if (o instanceof $.DisplayObject) return o.getMember(typeof name === 'string' ? name : str(name));
      if (Array.isArray(o)) {
        if (typeof name === 'number') return o[name];
        if (name === 'length') return o.length;
        var ix = +name; if (ix === ix && String(ix) === name) return o[ix];
        return o[name];
      }
      if (typeof name !== 'string') name = str(name);
      if (name === '__proto__') return Object.getPrototypeOf(o);
      return o[name];
    }
    if (t === 'string') {
      if (name === 'length') return o.length;
      if (typeof name === 'number') return o.charAt(name);
      return StringMethods[name];
    }
    if (t === 'number') return NumberMethods[name];
    if (t === 'function') {
      if (typeof name !== 'string') name = str(name);
      return o[name];
    }
    return undefined;
  }
  $.gm = gm;
  $.sm = function (o, name, v) {
    if (o === null || o === undefined) return;
    if (typeof o === 'object' || typeof o === 'function') {
      if (o instanceof $.DisplayObject) { o.setMember(typeof name === 'string' ? name : str(name), v); return; }
      if (Array.isArray(o)) {
        if (typeof name === 'number') { o[name] = v; return; }
        if (name === 'length') { o.length = n(v); return; }
      }
      if (typeof name !== 'string') name = str(name);
      o[name] = v;
    }
  };
  $.delMember = function (o, name) {
    if (o === null || o === undefined) return false;
    if (o instanceof $.DisplayObject) return o.deleteMember(str(name));
    if (typeof o === 'object') { delete o[str(name)]; return true; }
    return false;
  };
  $.cm = function (o, name, args) {
    var f;
    if (name === '' || name === undefined || name === null) { f = o; return typeof f === 'function' ? f.apply(undefined, args) : undefined; }
    f = gm(o, name);
    if (typeof f !== 'function') return undefined;
    return f.apply(o, args);
  };
  $.construct = function (F, args) {
    if (typeof F !== 'function') return undefined;
    if (F.$construct) return F.$construct(args);
    var o = Object.create(F.prototype && typeof F.prototype === 'object' ? F.prototype : Object.prototype);
    var r = F.apply(o, args);
    return r !== null && (typeof r === 'object' || typeof r === 'function') ? r : o;
  };
  $.nm = function (o, name, args) { return $.construct(gm(o, name), args); };

  // ------------------------------------------------------------ functions
  $.fn = function (spec, defSc, impl) {
    var flags = spec.f | 0, regCount = spec.r | 0, params = spec.p;
    var f = function () {
      var self = this;
      var args = Array.prototype.slice.call(arguments);
      var vars = Object.create(null);
      var act = new Scope(vars, defSc, 'fn', self, null);
      var regs = [];
      var next = 1;
      var i, p;
      var ar = null;
      function getArgs() { if (!ar) { ar = args.slice(); ar.callee = f; } return ar; }
      if (regCount > 0) {
        if (flags & 0x01) regs[next++] = self;
        if (flags & 0x04) regs[next++] = getArgs();
        if (flags & 0x10) regs[next++] = undefined; // super
        if (flags & 0x40) regs[next++] = $.rootOf(defSc);
        if (flags & 0x80) regs[next++] = $.parentOf(defSc);
        if (flags & 0x100) regs[next++] = $.global;
      }
      if (!(flags & 0x08) && !(flags & 0x04)) vars.arguments = getArgs();
      for (i = 0; i < params.length; i++) {
        p = params[i];
        if (p[0]) regs[p[0]] = args[i]; else vars[p[1]] = args[i];
      }
      return impl(act, self, args, regs);
    };
    f.$spec = spec;
    return f;
  };
  $.rootOf = function (sc) { var c = $.clipOf(sc); return c ? c.$root : undefined; };
  $.parentOf = function (sc) { var c = $.clipOf(sc); return c ? c.parent : undefined; };
  $.clipOf = function (sc) { for (; sc; sc = sc.p) if (sc.c) return sc.c; return null; };

  // ------------------------------------------------------------ variable lookup
  var owner;
  function hasPathChars(name) { return name.indexOf('.') >= 0 || name.indexOf('/') >= 0 || name.indexOf(':') >= 0; }

  function lookup(sc, name) {
    owner = undefined;
    if (name === 'this') { for (var t = sc; t; t = t.p) { if (t.k === 'fn') { return t.th; } if (t.k === 'clip') return t.th; } return undefined; }
    for (var s = sc; s; s = s.p) {
      var v = s.v;
      if (s.k === 'fn') {
        if (name in v) { owner = undefined; return v[name]; }
      } else if (s.k === 'clip') {
        if (v.hasMember(name)) { owner = v; return v.getMember(name); }
      } else { // global
        if (name in v) { owner = undefined; return v[name]; }
      }
    }
    return undefined;
  }
  $.lookup = lookup;

  function pathGet(sc, path) {
    var parts = path.split(/[.\/:]/);
    var cur;
    var i = 0;
    if (path.charAt(0) === '/') { cur = $.rootOf(sc); i = 1; while (parts[i] === '' && i < parts.length) i++; }
    else { cur = lookup(sc, parts[0]); i = 1; }
    for (; i < parts.length; i++) { if (parts[i] === '') continue; cur = gm(cur, parts[i]); }
    return cur;
  }
  $.get = function (sc, name) {
    if (typeof name !== 'string') name = str(name);
    if (hasPathChars(name)) return pathGet(sc, name);
    return lookup(sc, name);
  };
  $.set = function (sc, name, val) {
    if (typeof name !== 'string') name = str(name);
    if (hasPathChars(name)) {
      var i = Math.max(name.lastIndexOf('.'), name.lastIndexOf(':'));
      if (i >= 0) { $.sm(pathGet(sc, name.substring(0, i)), name.substring(i + 1), val); return; }
    }
    var firstClip = null;
    for (var s = sc; s; s = s.p) {
      var v = s.v;
      if (s.k === 'fn') { if (name in v) { v[name] = val; return; } }
      else if (s.k === 'clip') { if (!firstClip) firstClip = v; if (v.hasMember(name)) { v.setMember(name, val); return; } }
      else if (name in v) { v[name] = val; return; }
    }
    if (firstClip) firstClip.setMember(name, val);
  };
  $.def = function (sc, name, val) {
    name = typeof name === 'string' ? name : str(name);
    if (sc.k === 'clip') sc.v.setMember(name, val); else sc.v[name] = val;
  };
  $.def2 = function (sc, name) {
    name = typeof name === 'string' ? name : str(name);
    if (sc.k === 'clip') { if (!sc.v.hasMember(name)) sc.v.setMember(name, undefined); } else if (!(name in sc.v)) sc.v[name] = undefined;
  };
  $.del = function (sc, name) {
    name = str(name);
    for (var s = sc; s; s = s.p) {
      if (s.k === 'fn') { if (name in s.v) { delete s.v[name]; return true; } }
      else if (s.k === 'clip') { if (s.v.hasMember(name)) return s.v.deleteMember(name); }
      else if (name in s.v) { delete s.v[name]; return true; }
    }
    return false;
  };
  $.cf = function (sc, name, args) {
    var f;
    if (typeof name !== 'string') name = str(name);
    if (hasPathChars(name)) {
      var i = Math.max(name.lastIndexOf('.'), name.lastIndexOf(':'));
      if (i >= 0) { var o = pathGet(sc, name.substring(0, i)); return $.cm(o, name.substring(i + 1), args); }
      f = pathGet(sc, name); owner = undefined;
    } else f = lookup(sc, name);
    if (typeof f !== 'function') return undefined;
    return f.apply(owner, args);
  };
  $.nw = function (sc, name, args) {
    var F = $.get(sc, name);
    return $.construct(F, args);
  };
})();

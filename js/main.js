// Bootstrap: asset preloading, main loop, input.
'use strict';
(function () {
  var canvas = document.getElementById('stage');
  var bar = document.getElementById('bar'), label = document.getElementById('loadlabel'), loading = document.getElementById('loading');
  $.pageUrl = 'http://thelastvillage.local/the-last-village.swf';
  $.setupView(canvas);

  function fit() {
    var w = Math.min(window.innerWidth, window.innerHeight * LIB.w / LIB.h);
    canvas.style.width = Math.floor(w) + 'px';
    canvas.style.height = Math.floor(w * LIB.h / LIB.w) + 'px';
    $.resizeView(w);
  }
  window.addEventListener('resize', fit);
  fit();

  // ---- assets
  function loadImages(done) {
    var xhrless = window.ASSET_INDEX;
    var ids = Object.keys(xhrless.images), total = ids.length, n = 0;
    ids.forEach(function (id) {
      var im = new Image();
      im.onload = im.onerror = function () {
        n++; bar.style.width = (100 * n / total) + '%'; label.textContent = n + ' / ' + total;
        if (n === total) done();
      };
      im.src = 'assets/img/' + id + '.webp';
      $.images[id] = im;
    });
  }

  // ---- input
  function toStage(ev) {
    var r = canvas.getBoundingClientRect();
    return [(ev.clientX - r.left) * LIB.w / r.width, (ev.clientY - r.top) * LIB.h / r.height];
  }
  canvas.addEventListener('mousemove', function (e) { var p = toStage(e); $.mouseMove(p[0], p[1]); });
  canvas.addEventListener('mousedown', function (e) { $.unlockAudio(); var p = toStage(e); $.mouseMove(p[0], p[1]); $.mouseDown(); e.preventDefault(); });
  window.addEventListener('mouseup', function (e) { var p = toStage(e); $.mouseMove(p[0], p[1]); $.mouseUp(); });
  canvas.addEventListener('touchstart', function (e) { $.unlockAudio(); var t = e.changedTouches[0], p = toStage(t); $.mouseMove(p[0], p[1]); $.mouseDown(); e.preventDefault(); }, { passive: false });
  canvas.addEventListener('touchmove', function (e) { var t = e.changedTouches[0], p = toStage(t); $.mouseMove(p[0], p[1]); e.preventDefault(); }, { passive: false });
  canvas.addEventListener('touchend', function (e) { $.mouseUp(); e.preventDefault(); }, { passive: false });
  var GAMEKEYS = { 37: 1, 38: 1, 39: 1, 40: 1, 32: 1 };
  window.addEventListener('keydown', function (e) { if (GAMEKEYS[e.keyCode]) e.preventDefault(); if (!e.repeat) $.keyDown(e.keyCode, e.key && e.key.length === 1 ? e.key.charCodeAt(0) : 0); });
  window.addEventListener('keyup', function (e) { $.keyUp(e.keyCode, 0); });
  window.addEventListener('blur', function () { $.mouse.down = false; });

  // ---- main loop (30 fps logic, display refresh rate rendering)
  var FRAME = 1000 / LIB.fps, last = 0, acc = 0, started = false;
  window.__frames = 0;
  function loop(ts) {
    requestAnimationFrame(loop);
    if (!last) last = ts;
    acc += Math.min(ts - last, 250); last = ts;
    var steps = 0;
    while (acc >= FRAME && steps < 4) { acc -= FRAME; steps++; try { $.tick(); } catch (e) { console.error('tick error', e); } window.__frames++; }
    if (steps) $.render();
  }
  $.stepFrames = function (n) { for (var i = 0; i < n; i++) { $.tick(); window.__frames++; } $.render(); };

  loadImages(function () {
    loading.style.display = 'none';
    canvas.style.visibility = 'visible';
    $.createRoot();
    $.render();
    if (!/manual/.test(location.search)) requestAnimationFrame(loop);
  });
})();

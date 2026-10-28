# The Last Village — HTML5 port

A Flash-free port of *The Last Village* (RapidoJeux / Belugerin Studios, 2009–2010), made for preservation.
No Flash, no emulator (Ruffle is not used): the original ActionScript 2 bytecode was decompiled and
transpiled to JavaScript, the library assets were extracted, and a small custom runtime draws everything on a `<canvas>`.

## Run it

Open `index.html` in a recent browser (it also works from `file://`). Saves are stored in `localStorage`.

## How it works

- `tools/extract_assets.py`, `tools/node/export_library.mjs`: extract shapes, sprites, fonts, images and sounds from the SWF.
- `tools/node/avm1.mjs`, `tools/node/transpile.mjs`, `tools/node/gen_scripts.mjs`: AVM1 bytecode → JavaScript (`data/scripts.js`).
- `js/`: runtime (AS2 value semantics, display list and timelines, canvas renderer, text engine, built-ins such as Sound, SharedObject, Key, Mouse).
- `tools/browser/`: headless-Chromium test harness.

## Differences from the original

- Online services (portal checks, sponsor links, remote loading) are neutralized; they no longer exist anyway.
- Saves use `localStorage` instead of Flash SharedObjects.
- Some filters (e.g. bevel) are approximations; the look is intentionally close to the original, including its dated visuals and occasional lag.

## Fixes of bugs present in the original game

- **Medals**: the original tests the medal thresholds in the wrong order (10 days first), so only medal 5 could ever be awarded. The port awards every medal whose threshold was reached (10/25/40/50/75 days → medals 5/4/3/2/1).
- **`gameSpeedelX` typo**: some unit movement read an undefined variable (`gameSpeedelX`) instead of `gameSpeed`, producing `NaN` positions. It now uses `gameSpeed`.
- **Tooltips / battle camera**: fixed in the runtime (correct mouse coordinates and script timing).
- **Tiles showing everything**: jumping backwards on a timeline recreated every instance, resetting `_visible` set by the game (flower, enemy army, buildings). Instances now persist across backward jumps as in Flash.

All game content and branding belong to their original authors.

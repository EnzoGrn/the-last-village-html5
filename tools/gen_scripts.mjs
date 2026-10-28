import fs from 'node:fs';
import { transpileScript } from './transpile.mjs';
const scripts = JSON.parse(fs.readFileSync('/home/claude/port/work/scripts.json', 'utf8'));
let out = '// Transpiled ActionScript 2 code of "The Last Village" (RapidoJeux, 2009-2010)\n// Generated from the original SWF bytecode. Each S[n] is a frame/button script.\nvar S = {};\n';
let ok = 0, fail = 0, bytes = 0;
for (const s of scripts) {
  try {
    const buf = Uint8Array.from(Buffer.from(s.b64, 'base64'));
    out += transpileScript(buf, s.id, s.where);
    ok++;
  } catch (e) {
    fail++;
    console.log('FAIL', s.id, s.where, e.message);
    out += `// ${s.where}\nS[${s.id}] = function() { throw new Error(${JSON.stringify('transpile failure: ' + e.message)}); };\n`;
  }
}

// ---- bug fix of the original game (documented): the medal chain tests the thresholds in ascending order
// (`if (days>=10) medal5 else if (days>=25) medal4 ...`), so only medal 5 could ever be awarded.
// We award every medal whose threshold has been reached (newMedals() ignores medals already owned).
{
  const a = out.indexOf('      if (!!$.lt($.get($sc, "days"), 10)) { $b = 20; continue; }');
  const endMark = '    case 28:\n      $.set($sc, "haveMove", false);';
  const b = out.indexOf(endMark, a);
  if (a < 0 || b < 0) throw new Error('medal patch: anchor not found');
  const repl = [[75, 1], [50, 2], [40, 3], [25, 4], [10, 5]].map(([d, m]) => `      if (!$.lt($.get($sc, "days"), ${d})) { $.cf($sc, "newMedals", [${m}]); }\n`).join('') + '      $b = 28; continue;\n';
  out = out.slice(0, a) + repl + out.slice(b);
}
// ---- bug fix of the original game (documented): a typo reads the undefined variable `gameSpeedelX`
// instead of `gameSpeed`, so some units' x movement became NaN. Point it at `gameSpeed`.
out = out.split('"gameSpeedelX"').join('"gameSpeed"');
fs.mkdirSync('/home/claude/port/out/data', { recursive: true });
fs.writeFileSync('/home/claude/port/out/data/scripts.js', out);
console.log('ok', ok, 'fail', fail, 'size', (out.length / 1024).toFixed(0), 'KB');

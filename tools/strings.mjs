import fs from 'node:fs';
import { Avm1Parser } from 'avm1-parser';
const m = JSON.parse(fs.readFileSync('/home/claude/port/work/movie.json','utf8'));
const b = (x)=>Uint8Array.from(Buffer.from(x.$b64,'base64'));
const freq = new Map();
function scan(bytes){
  const p = new Avm1Parser(bytes);
  while (p.getBytePos() < bytes.length){
    const a = p.readNext();
    if (a.action===136) for (const s of a.pool) freq.set(s,(freq.get(s)||0)+1); // ConstantPool
    if (a.action===150) for (const v of a.values) if (v.type==='String') freq.set(v.value,(freq.get(v.value)||0)+1);
    if (a.action===142 || a.action===155) { scan(a.body ?? new Uint8Array()); }
  }
}
let n=0;
function collect(tags){
  for (const t of tags){
    if (t.type===31) { try{ scan(b(t.actions)); n++; }catch(e){ console.error('err',e.message) } }
    if (t.type===24) collect(t.tags);
    if (t.type===6) for (const c of t.actions||[]) scan(b(c.actions));
  }
}
collect(m.tags);
const all = [...freq.entries()].sort((a,b)=>b[1]-a[1]);
fs.writeFileSync('/home/claude/port/work/strings.txt', all.map(([s,c])=>`${c}\t${JSON.stringify(s)}`).join('\n'));
console.log('scripts', n, 'distinct strings', all.length);

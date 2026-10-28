import fs from 'node:fs';
import { parseSwf } from 'swf-parser';
const bytes = new Uint8Array(fs.readFileSync(process.argv[2]));
const movie = parseSwf(bytes);
const replacer = (k, v) => {
  if (v instanceof Uint8Array) return { $b64: Buffer.from(v).toString('base64') };
  if (typeof v === 'bigint') return Number(v);
  return v;
};
fs.writeFileSync(process.argv[3], JSON.stringify(movie, replacer));
console.log('ok', movie.tags.length);

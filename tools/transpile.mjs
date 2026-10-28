// AVM1 bytecode -> JavaScript transpiler.
// Every code unit (frame script, button action, function body) becomes a JS function.
// Stack slots that live across basic blocks are named s0..sN; temporaries are t1..tN.
// Control flow is emitted as a block state machine; a later pass (structure.mjs) can prettify it.
import { decode } from './avm1.mjs';

const Q = (s) => JSON.stringify(s).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
const PROPS = ['_x', '_y', '_xscale', '_yscale', '_currentframe', '_totalframes', '_alpha', '_visible', '_width', '_height', '_rotation', '_target', '_framesloaded', '_name', '_droptarget', '_url', '_highquality', '_focusrect', '_soundbuftime', '_quality', '_xmouse', '_ymouse'];

class Elem {
  constructor(code, o = {}) {
    this.code = code;
    this.lit = o.lit;            // numeric literal value
    this.slit = o.slit;          // string literal value
    this.stable = !!o.stable;    // value cannot change later (literal / temp / stack slot var)
    this.reg = o.reg ?? null;    // register read (number) if depends on a register
    this.bool = !!o.bool;
    this.num = !!o.num;
    this.str = !!o.str;
    this.enumSlot = !!o.enumSlot;
    this.fnLit = !!o.fnLit;
  }
}

export function compileUnit(instrs, opts) {
  // opts: {kind:'script'|'fn', regCount, indent}
  const body = instrs.filter((i) => i.op !== 'End');
  const codeEnd = instrs.length ? instrs[instrs.length - 1].next : 0;
  const posToIdx = new Map();
  body.forEach((ins, i) => posToIdx.set(ins.pos, i));
  posToIdx.set(codeEnd, body.length);
  for (const i of instrs) if (i.op === 'End') posToIdx.set(i.pos, body.length);
  // leaders
  const leaders = new Set([0]);
  body.forEach((ins, i) => {
    if (ins.op === 'Jump' || ins.op === 'If') {
      const ti = posToIdx.get(ins.target);
      if (ti === undefined) throw new Error('bad jump target ' + ins.target + ' at ' + ins.pos);
      leaders.add(ti);
      leaders.add(i + 1);
    }
    if (ins.op === 'Return' || ins.op === 'Throw') leaders.add(i + 1);
  });
  const sorted = [...leaders].filter((x) => x <= body.length).sort((a, b) => a - b);
  const blockOfIdx = new Map();
  sorted.forEach((s, bi) => blockOfIdx.set(s, bi));
  const blocks = sorted.map((s, bi) => ({ id: bi, start: s, end: bi + 1 < sorted.length ? sorted[bi + 1] : body.length }));
  // exit pseudo-block when jumping to codeEnd (index body.length) or falling off the end
  const EXIT = blocks.length;
  const idxToBlock = (idx) => (idx >= body.length ? EXIT : blockOfIdx.get(idx));

  let tmp = 0;
  const decls = [];
  const newTmp = () => { const n = 't' + (++tmp); decls.push(n); return n; };
  let enumCount = 0;
  const usage = { tgt: false, args: false };

  const entry = new Map(); // block id -> array of 's'|'e' flags (stack template)
  const emitted = new Map(); // block id -> string[] lines
  const work = [];
  entry.set(0, []);
  work.push(0);
  const maxSlots = { n: 0 };

  while (work.length) {
    const bid = work.shift();
    if (emitted.has(bid) || bid === EXIT) continue;
    const blk = blocks[bid];
    const tmpl = entry.get(bid);
    const lines = [];
    const st = tmpl.map((f, i) => new Elem('s' + i, { stable: true, enumSlot: f === 'e' }));
    maxSlots.n = Math.max(maxSlots.n, st.length);
    let terminated = false;
    const emit = (l) => lines.push(l);
    const pop = () => { const e = st.pop(); if (!e) throw new Error('stack underflow in block ' + bid); return e; };
    const push = (e) => { st.push(e); };
    const nn = (e) => (e.num ? e.code : `$.n(${e.code})`);
    const bl = (e) => (e.bool ? e.code : `$.bool(${e.code})`);
    const tg = (e) => (e.code === '""' ? (usage.tgt = true, { ...e, code: '$tgt', reg: undefined }) : e);
    const spillHeap = () => { // before an effectful statement: freeze pending heap-dependent expressions
      for (let i = 0; i < st.length; i++) {
        const e = st[i];
        if (!e.stable && !e.fnLit) { const t = newTmp(); emit(`${t} = ${e.code};`); st[i] = new Elem(t, { stable: true, num: e.num, bool: e.bool, str: e.str, enumSlot: e.enumSlot }); }
      }
    };
    const spillReg = (r) => {
      for (let i = 0; i < st.length; i++) {
        const e = st[i];
        if (!e.stable && e.reg === r) { const t = newTmp(); emit(`${t} = ${e.code};`); st[i] = new Elem(t, { stable: true, num: e.num, bool: e.bool, str: e.str }); }
      }
    };
    const freeze = (e) => { // make a single element stable
      if (e.stable) return e;
      const t = newTmp(); emit(`${t} = ${e.code};`);
      return new Elem(t, { stable: true, num: e.num, bool: e.bool, str: e.str, enumSlot: e.enumSlot });
    };
    const lit = (e, what) => { if (e.lit === undefined) throw new Error('non-constant ' + what + ': ' + e.code); return e.lit; };
    const popN = (n) => { const a = []; for (let i = 0; i < n; i++) a.push(pop()); return a; };
    const argList = (list) => '[' + list.map((e) => e.code).join(', ') + ']';

    const exitFlush = () => {
      const pairs = [];
      st.forEach((e, i) => { if (e.code !== 's' + i) pairs.push([i, e]); });
      if (!pairs.length) return '';
      if (pairs.length === 1) return `s${pairs[0][0]} = ${pairs[0][1].code};`;
      return `[${pairs.map((p) => 's' + p[0]).join(', ')}] = [${pairs.map((p) => p[1].code).join(', ')}];`;
    };
    const setEntry = (target, flagsArr) => {
      if (target === EXIT) return;
      if (!entry.has(target)) { entry.set(target, flagsArr); work.push(target); }
      else if (entry.get(target).length !== flagsArr.length) throw new Error(`inconsistent stack depth at block ${target}: ${entry.get(target).length} vs ${flagsArr.length} (from block ${bid}; block ${target} starts at byte ${body[blocks[target].start]?.pos}, source block spans ${body[blk.start].pos}..${body[blk.end-1].pos})`);
    };
    const gotoCode = (target) => `$b = ${target}; continue;`;

    for (let idx = blk.start; idx < blk.end; idx++) {
      const ins = body[idx];
      switch (ins.op) {
        case 'ConstantPool': break;
        case 'Push':
          if (st.length && st[st.length - 1].enumSlot && ins.values.length === 1 && ins.values[0].t === 'null') {
            // cleanup loop after "break" inside for..in: Push null; Equals2; Not; If ->self  (pops remaining keys up to the terminator)
            const n1 = body[idx + 1], n2 = body[idx + 2], n3 = body[idx + 3];
            if (n1 && n1.op === 'Equals2' && n2 && n2.op === 'Not' && n3 && n3.op === 'If' && n3.target === ins.pos) {
              const slot = pop();
              spillHeap();
              emit(`while (${slot.code}.shift() !== null) ;`);
              idx += 3;
              break;
            }
          }
          for (const v of ins.values) {
            switch (v.t) {
              case 'str': push(new Elem(Q(v.v), { stable: true, slit: v.v, str: true })); break;
              case 'num': {
                const x = v.v;
                const code = Number.isNaN(x) ? 'NaN' : (x === Infinity ? 'Infinity' : (x === -Infinity ? '-Infinity' : (Object.is(x, -0) ? '-0' : String(x))));
                push(new Elem(x < 0 ? `(${code})` : code, { stable: true, lit: x, num: true })); break;
              }
              case 'null': push(new Elem('null', { stable: true })); break;
              case 'undef': push(new Elem('undefined', { stable: true })); break;
              case 'bool': push(new Elem(v.v ? 'true' : 'false', { stable: true, bool: true })); break;
              case 'reg': push(new Elem(`$r[${v.v}]`, { reg: v.v })); break;
              default: throw new Error('push ' + v.t);
            }
          }
          break;
        case 'Pop': { const e = pop(); if (!e.stable && !e.fnLit && /\(/.test(e.code)) { spillHeap(); emit(`${e.code};`); } break; }
        case 'StoreRegister': {
          const top = st[st.length - 1];
          if (top && top.enumSlot) {
            // for..in loop head: StoreRegister r; Push null; Equals2; If end
            const n1 = body[idx + 1], n2 = body[idx + 2], n3 = body[idx + 3];
            if (n1 && n1.op === 'Push' && n1.values.length === 1 && n1.values[0].t === 'null' && n2 && n2.op === 'Equals2' && n3 && n3.op === 'If') {
              // consume the key (and possibly the terminator) from the virtual enumeration stack
              spillHeap();
              emit(`$r[${ins.reg}] = ${top.code}.shift();`);
              const target = idxToBlock(posToIdx.get(n3.target));
              const exitStack = st.slice(0, st.length - 1);
              // fallthrough keeps enumeration slot, branch removes it
              const flagsFall = st.map((e) => (e.enumSlot ? 'e' : 's'));
              const flagsTaken = exitStack.map((e) => (e.enumSlot ? 'e' : 's'));
              const pairs = [];
              st.forEach((e, i) => { if (e.code !== 's' + i) pairs.push([i, e]); });
              if (pairs.length) emit(pairs.length === 1 ? `s${pairs[0][0]} = ${pairs[0][1].code};` : `[${pairs.map((p) => 's' + p[0]).join(', ')}] = [${pairs.map((p) => p[1].code).join(', ')}];`);
              const fall = idxToBlock(idx + 4);
              emit(`if ($r[${ins.reg}] === null) { ${gotoCode(target)} }`);
              emit(gotoCode(fall));
              setEntry(target, flagsTaken);
              setEntry(fall, flagsFall);
              idx += 3;
              terminated = true;
              break;
            }
            throw new Error('unsupported enumeration pattern at ' + ins.pos);
          }
          const e = freeze(pop());
          emit(`$r[${ins.reg}] = ${e.code};`);
          spillReg(ins.reg);
          push(e);
          break;
        }
        case 'PushDuplicate': { const e = freeze(pop()); push(e); push(e); break; }
        case 'StackSwap': { const a = pop(), b = pop(); push(a); push(b); break; }
        // ---- arithmetic
        case 'Add': case 'Add2': { const b = pop(), a = pop(); if (a.num && b.num) push(new Elem(`(${a.code} + ${b.code})`, { num: true, reg: a.reg ?? b.reg, stable: a.stable && b.stable })); else push(new Elem(`$.add(${a.code}, ${b.code})`, { reg: a.reg ?? b.reg, stable: a.stable && b.stable })); break; }
        case 'Subtract': { const b = pop(), a = pop(); push(new Elem(`(${nn(a)} - ${nn(b)})`, { num: true, reg: a.reg ?? b.reg, stable: a.stable && b.stable })); break; }
        case 'Multiply': { const b = pop(), a = pop(); push(new Elem(`(${nn(a)} * ${nn(b)})`, { num: true, reg: a.reg ?? b.reg, stable: a.stable && b.stable })); break; }
        case 'Divide': { const b = pop(), a = pop(); push(new Elem(`(${nn(a)} / ${nn(b)})`, { num: true, reg: a.reg ?? b.reg, stable: a.stable && b.stable })); break; }
        case 'Modulo': { const b = pop(), a = pop(); push(new Elem(`(${nn(a)} % ${nn(b)})`, { num: true, reg: a.reg ?? b.reg, stable: a.stable && b.stable })); break; }
        case 'Increment': { const a = pop(); push(new Elem(`(${nn(a)} + 1)`, { num: true, reg: a.reg, stable: a.stable })); break; }
        case 'Decrement': { const a = pop(); push(new Elem(`(${nn(a)} - 1)`, { num: true, reg: a.reg, stable: a.stable })); break; }
        case 'ToNumber': { const a = pop(); push(new Elem(nn(a), { num: true, reg: a.reg, stable: a.stable })); break; }
        case 'ToString': { const a = pop(); push(new Elem(a.str ? a.code : `$.str(${a.code})`, { str: true, reg: a.reg, stable: a.stable })); break; }
        case 'ToInteger': { const a = pop(); push(new Elem(`$.toInt(${a.code})`, { num: true, reg: a.reg, stable: a.stable })); break; }
        case 'BitAnd': case 'BitOr': case 'BitXor': case 'BitLShift': case 'BitRShift': case 'BitURShift': {
          const b = pop(), a = pop();
          const op = { BitAnd: '&', BitOr: '|', BitXor: '^', BitLShift: '<<', BitRShift: '>>', BitURShift: '>>>' }[ins.op];
          push(new Elem(`((${nn(a)} | 0) ${op} (${nn(b)} | 0))`, { num: true, reg: a.reg ?? b.reg, stable: a.stable && b.stable })); break;
        }
        case 'Less': { const b = pop(), a = pop(); push(new Elem(`(${nn(a)} < ${nn(b)})`, { bool: true, reg: a.reg ?? b.reg, stable: a.stable && b.stable })); break; }
        case 'Less2': { const b = pop(), a = pop(); push(new Elem(a.num && b.num ? `(${a.code} < ${b.code})` : `$.lt(${a.code}, ${b.code})`, { bool: true, reg: a.reg ?? b.reg, stable: a.stable && b.stable })); break; }
        case 'Greater': { const b = pop(), a = pop(); push(new Elem(a.num && b.num ? `(${a.code} > ${b.code})` : `$.gt(${a.code}, ${b.code})`, { bool: true, reg: a.reg ?? b.reg, stable: a.stable && b.stable })); break; }
        case 'Equals': { const b = pop(), a = pop(); push(new Elem(`(${nn(a)} === ${nn(b)})`, { bool: true, reg: a.reg ?? b.reg, stable: a.stable && b.stable })); break; }
        case 'Equals2': { const b = pop(), a = pop(); push(new Elem(`$.eq(${a.code}, ${b.code})`, { bool: true, reg: a.reg ?? b.reg, stable: a.stable && b.stable })); break; }
        case 'StrictEquals': { const b = pop(), a = pop(); push(new Elem(`$.seq(${a.code}, ${b.code})`, { bool: true, reg: a.reg ?? b.reg, stable: a.stable && b.stable })); break; }
        case 'Not': { const a = pop(); push(new Elem(`!${a.bool ? a.code : `$.bool(${a.code})`}`.replace(/^!(\(.*\))$/, '!$1'), { bool: true, reg: a.reg, stable: a.stable })); break; }
        case 'And': { const b = pop(), a = pop(); push(new Elem(`(${bl(a)} && ${bl(b)})`, { bool: true, reg: a.reg ?? b.reg, stable: a.stable && b.stable })); break; }
        case 'Or': { const b = pop(), a = pop(); push(new Elem(`(${bl(a)} || ${bl(b)})`, { bool: true, reg: a.reg ?? b.reg, stable: a.stable && b.stable })); break; }
        case 'StringEquals': { const b = pop(), a = pop(); push(new Elem(`($.str(${a.code}) === $.str(${b.code}))`, { bool: true, reg: a.reg ?? b.reg, stable: a.stable && b.stable })); break; }
        case 'StringLess': { const b = pop(), a = pop(); push(new Elem(`($.str(${a.code}) < $.str(${b.code}))`, { bool: true, reg: a.reg ?? b.reg, stable: a.stable && b.stable })); break; }
        case 'StringGreater': { const b = pop(), a = pop(); push(new Elem(`($.str(${a.code}) > $.str(${b.code}))`, { bool: true, reg: a.reg ?? b.reg, stable: a.stable && b.stable })); break; }
        case 'StringAdd': { const b = pop(), a = pop(); push(new Elem(`($.str(${a.code}) + $.str(${b.code}))`, { str: true, reg: a.reg ?? b.reg, stable: a.stable && b.stable })); break; }
        case 'StringLength': case 'MBStringLength': { const a = pop(); push(new Elem(`$.str(${a.code}).length`, { num: true, reg: a.reg, stable: a.stable })); break; }
        case 'StringExtract': case 'MBStringExtract': { const c = pop(), i = pop(), s = pop(); push(new Elem(`$.substringOld(${s.code}, ${i.code}, ${c.code})`, { str: true })); break; }
        case 'CharToAscii': case 'MBCharToAscii': { const a = pop(); push(new Elem(`$.ord(${a.code})`, { num: true })); break; }
        case 'AsciiToChar': case 'MBAsciiToChar': { const a = pop(); push(new Elem(`$.chr(${a.code})`, { str: true })); break; }
        case 'RandomNumber': { const a = pop(); spillHeap(); const t = newTmp(); emit(`${t} = $.rand(${a.code});`); push(new Elem(t, { stable: true, num: true })); break; }
        case 'GetTime': { spillHeap(); const t = newTmp(); emit(`${t} = $.getTimer();`); push(new Elem(t, { stable: true, num: true })); break; }
        case 'TypeOf': { const a = pop(); push(new Elem(`$.typeOf(${a.code})`, { str: true, reg: a.reg, stable: a.stable })); break; }
        case 'TargetPath': { const a = pop(); push(new Elem(`$.targetPath(${a.code})`, { str: true })); break; }
        case 'InstanceOf': { const c = pop(), o = pop(); push(new Elem(`$.instanceOf(${o.code}, ${c.code})`, { bool: true })); break; }
        case 'Extends': { const sup = pop(), sub = pop(); spillHeap(); emit(`$.extend(${sub.code}, ${sup.code});`); break; }
        // ---- variables & members
        case 'GetVariable': { const n = pop(); push(new Elem(`$.get($sc, ${n.code})`, { reg: n.reg })); break; }
        case 'SetVariable': { const v = pop(), n = pop(); spillHeap(); emit(`$.set($sc, ${n.code}, ${v.code});`); break; }
        case 'DefineLocal': { const v = pop(), n = pop(); spillHeap(); emit(`$.def($sc, ${n.code}, ${v.code});`); break; }
        case 'DefineLocal2': { const n = pop(); spillHeap(); emit(`$.def2($sc, ${n.code});`); break; }
        case 'Delete2': { const n = pop(); spillHeap(); const t = newTmp(); emit(`${t} = $.del($sc, ${n.code});`); push(new Elem(t, { stable: true, bool: true })); break; }
        case 'Delete': { const n = pop(), o = pop(); spillHeap(); const t = newTmp(); emit(`${t} = $.delMember(${o.code}, ${n.code});`); push(new Elem(t, { stable: true, bool: true })); break; }
        case 'GetMember': { const n = pop(), o = pop(); push(new Elem(`$.gm(${o.code}, ${n.code})`, { reg: o.reg ?? n.reg })); break; }
        case 'SetMember': { const v = pop(), n = pop(), o = pop(); spillHeap(); emit(`$.sm(${o.code}, ${n.code}, ${v.code});`); break; }
        case 'GetProperty': { const i = pop(), t = tg(pop()); const idx = i.lit; push(new Elem(idx !== undefined && PROPS[idx] ? `$.gp(${t.code}, ${Q(PROPS[idx])})` : `$.gpi(${t.code}, ${i.code})`, { reg: t.reg ?? i.reg })); break; }
        case 'SetProperty': { const v = pop(), i = pop(), t = tg(pop()); spillHeap(); const idx = i.lit; emit(idx !== undefined && PROPS[idx] ? `$.sp(${t.code}, ${Q(PROPS[idx])}, ${v.code});` : `$.spi(${t.code}, ${i.code}, ${v.code});`); break; }
        // ---- calls
        case 'CallFunction': {
          const name = pop(), n = lit(pop(), 'numArgs'); const args = popN(n); spillHeap();
          const t = newTmp(); emit(`${t} = $.cf($sc, ${name.code}, ${argList(args)});`); push(new Elem(t, { stable: true })); break;
        }
        case 'CallMethod': {
          const name = pop(), obj = pop(), n = lit(pop(), 'numArgs'); const args = popN(n); spillHeap();
          const t = newTmp(); emit(`${t} = $.cm(${obj.code}, ${name.code}, ${argList(args)});`); push(new Elem(t, { stable: true })); break;
        }
        case 'NewObject': {
          const name = pop(), n = lit(pop(), 'numArgs'); const args = popN(n); spillHeap();
          const t = newTmp(); emit(`${t} = $.nw($sc, ${name.code}, ${argList(args)});`); push(new Elem(t, { stable: true })); break;
        }
        case 'NewMethod': {
          const name = pop(), obj = pop(), n = lit(pop(), 'numArgs'); const args = popN(n); spillHeap();
          const t = newTmp(); emit(`${t} = $.nm(${obj.code}, ${name.code}, ${argList(args)});`); push(new Elem(t, { stable: true })); break;
        }
        case 'InitArray': {
          const n = lit(pop(), 'array length'); const items = popN(n);
          push(new Elem(`[${items.map((e) => e.code).join(', ')}]`, { stable: items.every((e) => e.stable), reg: items.find((e) => e.reg != null)?.reg })); break;
        }
        case 'InitObject': {
          const n = lit(pop(), 'object size'); const parts = [];
          for (let i = 0; i < n; i++) { const v = pop(), k = pop(); parts.push(`[${k.code}, ${v.code}]`); }
          spillHeap();
          const t = newTmp(); emit(`${t} = $.mkobj([${parts.join(', ')}]);`); push(new Elem(t, { stable: true })); break;
        }
        case 'Enumerate2': {
          const o = pop(); spillHeap(); const t = 'en' + (++enumCount); decls.push(t);
          emit(`${t} = $.enumerate(${o.code});`);
          push(new Elem(t, { stable: true, enumSlot: true })); break;
        }
        case 'DefineFunction': case 'DefineFunction2': {
          const inner = compileFunction(ins);
          if (ins.name) { spillHeap(); emit(`$.def($sc, ${Q(ins.name)}, ${inner});`); }
          else push(new Elem(inner, { fnLit: true, stable: false })); break;
        }
        case 'Return': { const v = pop(); emit(`return ${v.code};`); terminated = true; break; }
        // ---- timeline
        case 'Play': usage.tgt = true; spillHeap(); emit('$.play($tgt);'); break;
        case 'Stop': usage.tgt = true; spillHeap(); emit('$.stop($tgt);'); break;
        case 'NextFrame': usage.tgt = true; spillHeap(); emit('$.nextFrame($tgt);'); break;
        case 'PrevFrame': usage.tgt = true; spillHeap(); emit('$.prevFrame($tgt);'); break;
        case 'GotoFrame': usage.tgt = true; spillHeap(); emit(`$.gotoFrame($tgt, ${ins.frame + 1});`); break;
        case 'GotoLabel': usage.tgt = true; spillHeap(); emit(`$.gotoFrame($tgt, ${Q(ins.label)});`); break;
        case 'GotoFrame2': { usage.tgt = true; const f = pop(); spillHeap(); emit(`$.gotoFrame($tgt, ${f.code}${ins.bias ? ' + ' + ins.bias : ''}); ${ins.flags & 1 ? '$.play($tgt);' : '$.stop($tgt);'}`); break; }
        case 'SetTarget': usage.tgt = true; emit(ins.target ? `$tgt = $.target($this, ${Q(ins.target)});` : '$tgt = $this;'); break;
        case 'SetTarget2': { usage.tgt = true; const t = pop(); spillHeap(); emit(`$tgt = $.target($this, ${t.code});`); break; }
        case 'Call': { const f = pop(); spillHeap(); usage.tgt = true; emit(`$.callFrame($tgt, ${f.code});`); break; }
        case 'StopSounds': spillHeap(); emit('$.stopAllSounds();'); break;
        case 'ToggleQuality': break;
        case 'CloneSprite': { const d = pop(), n = pop(), s = tg(pop()); spillHeap(); emit(`$.cloneSprite(${s.code}, ${n.code}, ${d.code});`); break; }
        case 'RemoveSprite': { const s = tg(pop()); spillHeap(); emit(`$.removeSprite(${s.code});`); break; }
        case 'StartDrag': {
          const target = pop(), lock = pop(), constrain = pop();
          let c = 'null';
          if (constrain.lit) { const y2 = pop(), x2 = pop(), y1 = pop(), x1 = pop(); c = `[${x1.code}, ${y1.code}, ${x2.code}, ${y2.code}]`; }
          spillHeap(); emit(`$.startDrag(${target.code}, ${lock.code}, ${c});`); break;
        }
        case 'EndDrag': spillHeap(); emit('$.stopDrag();'); break;
        case 'Trace': { const a = pop(); spillHeap(); emit(`$.trace(${a.code});`); break; }
        case 'GetURL': spillHeap(); emit(`$.getURL(${Q(ins.url)}, ${Q(ins.target)});`); break;
        case 'GetURL2': { const t = pop(), u = pop(); spillHeap(); emit(`$.getURL2(${u.code}, ${t.code}, ${ins.flags});`); break; }
        case 'WaitForFrame': case 'WaitForFrame2': if (ins.op === 'WaitForFrame2') pop(); break; // everything is "loaded"
        case 'Throw': { const v = pop(); emit(`throw ${v.code};`); terminated = true; break; }
        // ---- control flow
        case 'Jump': {
          const target = idxToBlock(posToIdx.get(ins.target));
          const fl = exitFlush(); if (fl) emit(fl);
          emit(gotoCode(target));
          setEntry(target, st.map((e) => (e.enumSlot ? 'e' : 's')));
          terminated = true; break;
        }
        case 'If': {
          const c = pop();
          const target = idxToBlock(posToIdx.get(ins.target));
          const fall = idxToBlock(idx + 1);
          const flags = st.map((e) => (e.enumSlot ? 'e' : 's'));
          let cond = bl(c);
          const fl = exitFlush();
          if (fl) { const t = newTmp(); emit(`${t} = ${cond};`); cond = t; emit(fl); }
          emit(`if (${cond}) { ${gotoCode(target)} }`);
          emit(gotoCode(fall));
          setEntry(target, flags);
          setEntry(fall, flags);
          terminated = true; break;
        }
        default: throw new Error('unsupported op ' + ins.op + ' at ' + ins.pos);
      }
      if (terminated) break;
    }
    if (!terminated) {
      // fall through to next block
      const next = blk.end >= body.length ? EXIT : idxToBlock(blk.end);
      const fl = exitFlush(); if (fl) emit(fl);
      emit(gotoCode(next));
      setEntry(next, st.map((e) => (e.enumSlot ? 'e' : 's')));
    }
    emitted.set(bid, lines);
  }

  // assemble
  const out = [];
  const slotVars = [];
  for (let i = 0; i < maxSlots.n; i++) slotVars.push('s' + i);
  const allDecls = [...slotVars, ...decls];
  if (allDecls.length) out.push(`var ${allDecls.join(', ')};`);
  const bids = [...emitted.keys()].sort((a, b) => a - b);
  const trivial = bids.length === 1 && !emitted.get(bids[0]).some((l) => l.includes('$b = '));
  if (bids.length === 1) {
    // straight line code: strip the trailing "$b = EXIT; continue;"
    const ls = emitted.get(bids[0]).filter((l) => !/^\$b = \d+; continue;$/.test(l));
    out.push(...ls);
  } else {
    out.push('var $b = 0;');
    out.push('for (;;) switch ($b) {');
    for (const b of bids) {
      out.push(`case ${b}:`);
      for (const l of emitted.get(b)) out.push('  ' + l);
    }
    out.push(`case ${EXIT}: return;`);
    out.push('}');
  }
  return { lines: out, usage };

  function compileFunction(f) {
    const regCount = f.op === 'DefineFunction2' ? f.regCount : 0;
    const sub = compileUnit(f.body, { kind: 'fn', regCount });
    const spec = { n: f.name, p: f.params.map((p) => [p.reg, p.name]), r: regCount, f: f.flags || 0 };
    const pre = [];
    if (sub.usage.tgt) pre.push('var $tgt = $.clipOf($sc);');
    const inner = [...pre, ...sub.lines].map((l) => '    ' + l).join('\n');
    return `$.fn(${JSON.stringify(spec)}, $sc, function($sc, $this, $args, $r) {\n${inner}\n  })`;
  }
}

export function transpileScript(bytes, id, where) {
  const instrs = decode(bytes);
  const { lines, usage } = compileUnit(instrs, { kind: 'script' });
  const pre = ['var $r = [];'];
  pre.push('var $tgt = $this;');
  const body = [...pre, ...lines].map((l) => '  ' + l).join('\n');
  return `// ${where}\nS[${id}] = function($sc, $this) {\n${body}\n};\n`;
}

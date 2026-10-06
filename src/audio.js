// Tiny WebAudio synth: everything is generated, no sound files.
let ctx = null;
let master = null;
let noiseBuf = null;

export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  try {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
  } catch { return; }
  master = ctx.createGain();
  master.gain.value = 0.5;
  master.connect(ctx.destination);
  noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
  const d = noiseBuf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
}

function tone(freq, dur, { type = 'sine', vol = 0.2, delay = 0, slide = 0 } = {}) {
  if (!ctx) return;
  const t = ctx.currentTime + delay;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), t + dur);
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(vol, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(master);
  o.start(t);
  o.stop(t + dur + 0.05);
}

function noise(dur, { vol = 0.2, freq = 1000, q = 1, delay = 0, type = 'bandpass', slide = 0 } = {}) {
  if (!ctx) return;
  const t = ctx.currentTime + delay;
  const s = ctx.createBufferSource();
  s.buffer = noiseBuf;
  const f = ctx.createBiquadFilter();
  f.type = type;
  f.frequency.setValueAtTime(freq, t);
  if (slide) f.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t + dur);
  f.Q.value = q;
  const g = ctx.createGain();
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  s.connect(f).connect(g).connect(master);
  s.start(t, Math.random());
  s.stop(t + dur + 0.05);
}

export const sfx = {
  pager() { for (let i = 0; i < 3; i++) tone(2900, 0.09, { type: 'square', vol: 0.08, delay: i * 0.14 }); },
  ring() { for (let i = 0; i < 2; i++) { tone(440, 0.35, { type: 'triangle', vol: 0.07, delay: i * 0.45 }); tone(480, 0.35, { type: 'triangle', vol: 0.07, delay: i * 0.45 }); } },
  thud(v = 1) { tone(90, 0.18, { type: 'sine', vol: 0.25 * Math.min(1, v), slide: -50 }); noise(0.08, { vol: 0.12 * Math.min(1, v), freq: 400 }); },
  clang() { tone(620, 0.6, { type: 'triangle', vol: 0.12 }); tone(1240, 0.4, { type: 'sine', vol: 0.06 }); tone(933, 0.5, { type: 'sine', vol: 0.05 }); },
  whoosh() { noise(0.25, { vol: 0.12, freq: 600, slide: 1600, q: 0.7 }); },
  ding() { tone(1320, 0.8, { type: 'sine', vol: 0.12 }); },
  click() { tone(1800, 0.03, { type: 'square', vol: 0.05 }); },
  sign() { tone(660, 0.1, { vol: 0.1 }); tone(990, 0.15, { vol: 0.1, delay: 0.1 }); },
  wrong() { tone(220, 0.25, { type: 'sawtooth', vol: 0.06 }); tone(180, 0.3, { type: 'sawtooth', vol: 0.06, delay: 0.15 }); },
  ow() { tone(420 + Math.random() * 200, 0.25, { type: 'sawtooth', vol: 0.07, slide: -250 }); },
  scream() {
    const f = 500 + Math.random() * 400;
    tone(f, 0.7, { type: 'sawtooth', vol: 0.05, slide: 300 });
    tone(f * 1.5, 0.7, { type: 'square', vol: 0.02, slide: 400 });
  },
  flick() { noise(0.05, { vol: 0.2, freq: 3000 }); tone(2400, 0.04, { type: 'square', vol: 0.03 }); },
  spray() { noise(0.18, { vol: 0.1, freq: 2500, q: 0.4, type: 'highpass' }); },
  sparks() { for (let i = 0; i < 6; i++) noise(0.04, { vol: 0.15, freq: 4000, delay: i * 0.07 + Math.random() * 0.05 }); },
  whoomph() { noise(0.8, { vol: 0.35, freq: 200, slide: 600, q: 0.5, type: 'lowpass' }); },
  hiss() { noise(4, { vol: 0.35, freq: 3000, q: 0.3, type: 'highpass' }); },
  munch() { for (let i = 0; i < 3; i++) noise(0.07, { vol: 0.15, freq: 900, delay: i * 0.18 }); },
  meow() { tone(700, 0.35, { type: 'triangle', vol: 0.08, slide: 400 }); },
  honk() { tone(440, 0.5, { type: 'sawtooth', vol: 0.18 }); tone(554, 0.5, { type: 'square', vol: 0.12 }); tone(220, 0.5, { type: 'sawtooth', vol: 0.1 }); },
};

// Looping ambience: fire alarm, crackle, sprinklers.
let alarmTimer = null;
export function setAlarm(on) {
  if (on && !alarmTimer) {
    const hit = () => { tone(960, 0.45, { type: 'square', vol: 0.05 }); tone(720, 0.45, { type: 'square', vol: 0.05, delay: 0.5 }); };
    hit();
    alarmTimer = setInterval(hit, 1000);
  } else if (!on && alarmTimer) {
    clearInterval(alarmTimer);
    alarmTimer = null;
  }
}

let crackleT = 0;
export function crackle(intensity, dt) {
  if (!ctx || intensity <= 0) return;
  crackleT -= dt;
  if (crackleT <= 0) {
    crackleT = 0.03 + Math.random() * 0.12 / Math.min(4, intensity);
    noise(0.03 + Math.random() * 0.04, { vol: Math.min(0.25, 0.04 * intensity), freq: 800 + Math.random() * 2500, q: 2 });
    if (Math.random() < 0.05) noise(0.5, { vol: Math.min(0.2, 0.03 * intensity), freq: 150, type: 'lowpass' });
  }
}

let rainT = 0;
export function rain(on, dt) {
  if (!ctx || !on) return;
  rainT -= dt;
  if (rainT <= 0) { rainT = 0.25; noise(0.3, { vol: 0.05, freq: 5000, type: 'highpass', q: 0.3 }); }
}

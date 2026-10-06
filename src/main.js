import * as THREE from 'three';
import './style.css';
import { W, ZONES, zoneAtWorld, regionAt } from './map.js';
import { buildWorld } from './world.js';
import { Fire } from './fire.js';
import { Particles } from './particles.js';
import { Props } from './props.js';
import { NPC, LINES } from './npc.js';
import { Player } from './player.js';
import { Pacs } from './pacs.js';
import { makeCase, FINDINGS } from './cases.js';
import { showForm, hideForm, minutesToClock } from './form.js';
import { initAudio, sfx, setAlarm, crackle, rain } from './audio.js';
import { isTouchDevice, setupTouch } from './touch.js';
import { startArgument } from './argue.js';
import { Scanning } from './scanning.js';
import { Cars } from './cars.js';
import { openRiskman, reportAboutYou, RISKMAN_OUTCOMES, deliverOrders } from './riskman.js';

const $ = (id) => document.getElementById(id);
const pick = (a) => a[Math.floor(Math.random() * a.length)];
const rand = (a, b) => a + Math.random() * (b - a);

// ---------------------------------------------------------------- setup
const canvas = $('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene();
scene.background = new THREE.Color('#0d1320');
scene.fog = new THREE.FogExp2('#2a2522', 0.004);
const camera = new THREE.PerspectiveCamera(72, 1, 0.05, 200);

const SHIFT_MINUTES = 600; // 22:00 -> 08:00
const GAME_MIN_PER_SEC = 0.5; // 20 real minutes per shift

const G = {
  scene, camera,
  mode: 'start',
  time: 0,
  cases: [],
  npcs: [],
  alarm: false,
  alarmT: 0,
  noFireT: 0,
  wanted: 0,
  complaints: 0,
  pacsWet: 0,
  quenched: false,
  jetpack: false,
  playerCausedFire: false,
  T: { queue: 4, chase: 10, flood: 15, beds: 18, phone: 20, consultant: 22, dms: 32 },
  stats: {
    reported: 0, correct: 0, nailed: 0, wrong: [], speed: 0,
    fires: 0, alarms: 0, hits: 0, throws: 0, bedsLaunched: 0, bedCrashes: 0, npcsIgnited: 0, pages: 0, nags: 0,
    argumentsWon: 0, clinicalCalls: 0, kicks: 0, tackles: 0, zaps: 0, slips: 0, bonks: 0,
    radiationDoses: 0, scanned: 0, pinned: 0, pagesMissed: 0,
    carsSmashed: 0, carsJacked: 0, carCrashes: 0, ranOver: 0, golfBalls: 0, honks: 0, batHits: 0, ordersPlaced: 0, orderSpend: 0,
    riskmansFiled: 0, riskmansUpheld: 0, vexatious: 0, standDowns: 0, argumentsLost: 0, wildWins: 0, wildUsed: null, consultantCalls: 0, rumors: 0,
    hides: 0, timesFound: 0, searchesEvaded: 0, knocks: 0, liftRides: 0, roofFalls: 0, roofThrows: 0, boilers: 0, helis: 0, ghostChats: 0, ancient: 0, foundIn: null,
    caught: 0, sandwiches: 0, catPets: 0, quenches: 0, mriStuck: 0, rockets: 0, peakList: 0, formsBounced: 0, goodCatches: 0, naps: 0, selfIgnitions: 0, ctJokes: 0,
  },
};
window.RADSSIM = G; // handy for poking at things in devtools

G.world = buildWorld(scene);
G.fire = new Fire(G.world.baseFuel);
G.fire.onIgnite = (x, y) => G.world.scorch(x, y, 0.3);
G.fire.onBurnout = (x, y) => G.world.scorch(x, y, 0.8);
G.flameFx = new Particles(scene, { max: 7000, additive: true });
G.smokeFx = new Particles(scene, { max: 3500 });
G.sprayFx = new Particles(scene, { max: 3000 });
G.props = new Props(scene);
G.player = new Player(camera, canvas);
G.pacs = new Pacs(G);
G.scan = new Scanning(G);
G.cars = new Cars(G);
G.orders = [];

const fireLights = [];
for (let i = 0; i < 4; i++) {
  const l = new THREE.PointLight(0xff7a1a, 0, 9, 1.4);
  scene.add(l);
  fireLights.push(l);
}

// ---------------------------------------------------------------- helpers used by NPCs / props
G.isOpen = (c) => !c.reported && !c.cancelled && c.status !== 'toScan';
G.openCases = () => G.cases.filter(G.isOpen);
G.list = () => G.cases.reduce((n, c) => n + (G.isOpen(c) ? 1 : 0), 0);
G.pendingFor = (npc) => G.cases.filter((c) => G.isOpen(c) && c.requester === npc.name && (!c.snoozeUntil || c.snoozeUntil < G.time));
G.lastSeen = { x: 3.2, z: 4.2, region: 'main', lift: false };
G.rerequests = [];
G.playerVisible = () => !G.player.hidden;
G.playerRegion = () => regionAt(G.player.pos.x, G.player.pos.z);
const queueSlots = [];
G.queueIndex = (npc) => {
  let i = queueSlots.indexOf(npc);
  if (i >= 0) return i;
  i = queueSlots.indexOf(null);
  if (i < 0) { if (queueSlots.length >= G.world.queueSpots.length) return -1; queueSlots.push(npc); return queueSlots.length - 1; }
  queueSlots[i] = npc;
  return i;
};
G.leaveQueue = (npc) => { const i = queueSlots.indexOf(npc); if (i >= 0) queueSlots[i] = null; };
G.nearestFire = (x, z) => {
  let best = null, bd = 1e9;
  for (const i of G.fire.burning) {
    if (i % W > 63) continue; // firefighters don't do roofs or basements
    const cx = (i % W) + 0.5, cz = Math.floor(i / W) + 0.5;
    const d = (cx - x) ** 2 + (cz - z) ** 2;
    if (d < bd) { bd = d; best = { x: cx, z: cz }; }
  }
  return best;
};
G.flames = (x, y, z, s = 1) => {
  if (Math.random() < 0.6) G.flameFx.emit(x + rand(-0.2, 0.2), y + rand(-0.3, 0.3), z + rand(-0.2, 0.2), rand(-0.3, 0.3), rand(1, 2), rand(-0.3, 0.3), rand(0.4, 0.7), 0.5 * s, 0.1, 1, rand(0.35, 0.7), 0.1, 0.9);
};
G.spray = (x, y, z, dx, dy, dz, big) => {
  for (let i = 0; i < (big ? 4 : 3); i++) {
    const sp = big ? rand(7, 10) : rand(5, 8);
    G.sprayFx.emit(x, y, z, dx * sp + rand(-0.8, 0.8), dy * sp + rand(-0.5, 0.8), dz * sp + rand(-0.8, 0.8), rand(0.5, 0.9), 0.12, 0.9, 0.95, 0.97, 1, 0.55, 2, 1.5);
  }
};
G.caught = (sec) => {
  if (G.mode !== 'play') return;
  G.stats.caught++;
  G.wanted = 0;
  sec.say('Gotcha. Back to your room, doc.', 3);
  const fade = $('fade');
  $('fade-text').textContent = `Security escorts you back to the reading room. Incident report #${1000 + G.stats.caught * 37} filed.`;
  fade.hidden = false;
  setTimeout(() => {
    if (G.player.held) dropHeld();
    if (G.player.pushing) releaseBed(false);
    G.player.pos.x = 3.2; G.player.pos.z = 4.5; G.player.yaw = Math.PI;
    fade.hidden = true;
  }, 1800);
};
G.riskman = { filed: [], aboutYou: [] };
G.spills = [];
G.onAssault = (npc) => {
  G.complaints++;
  if (npc && npc.role !== 'cat' && npc.anger >= 2 && !npc.filedOnYou && Math.random() < 0.6) {
    npc.filedOnYou = true;
    const cat = pick(['Assault by a radiologist', 'Physical intimidation', 'Unprofessional conduct', 'Being kicked (again)']);
    reportAboutYou(G, npc.name, cat, pick(['"I was just asking about my scan."', '"They didn\'t even say sorry."', '"There were witnesses."', '"My scrubs are ruined."']));
    toast(`${npc.name} has filed a RiskMann about you.`, 'bad');
  }
  if (G.complaints >= 4 && G.wanted <= 0) {
    G.wanted = 40;
    G.complaints = 0;
    toast('Complaints are piling up. Security has been called.', 'bad');
  }
};
G.onVexatious = () => {
  G.complaints += 2;
  if (G.complaints >= 4 && G.wanted <= 0) { G.wanted = 40; G.complaints = 0; toast('Complaints are piling up. Security has been called.', 'bad'); }
};
// Upheld RiskMann: the person is pulled into a meeting; twice and they're stood down.
G.riskmanUpheld = (n) => {
  n.reportedCount = (n.reportedCount || 0) + 1;
  if (n.role === 'cat') return RISKMAN_OUTCOMES.cat();
  if (n.role === 'dms') { n.dismiss = true; return RISKMAN_OUTCOMES.dms(); }
  if (n.role === 'patient') { n.detachBed(); n.goTo(10.5, 27.5); n.setState('leave'); return RISKMAN_OUTCOMES.patient(n); }
  G.leaveQueue(n);
  if (n.reportedCount >= 2) {
    G.stats.standDowns++;
    n.goTo(10.5, 27.5);
    n.setState('leave');
    n.say('This is so unfair.', 3);
    const others = G.npcs.filter((x) => (x.role === 'registrar' || x.role === 'surgreg') && x !== n && x.state !== 'leave');
    for (const c of G.cases) if (c.requester === n.name && others.length) c.requester = pick(others).name;
    return RISKMAN_OUTCOMES.stoodDown(n);
  }
  n.meetingT = 90;
  n.meetingSpot = null;
  n.say('I\'ve been called into a meeting?!', 3);
  n.setState('meeting');
  return RISKMAN_OUTCOMES.meeting(n);
};
G.onStuck = (p) => {
  G.stats.mriStuck++;
  G.scan.onMetalInBore?.(p);
  if (p.type === 'pager') return;
  if (p.rider) { const r = p.rider; r.detachBed(); r.knock(-3, 0, true); }
  toast(pick([`The ${p.T.name.toLowerCase()} is now part of the MRI.`, 'CLANG. The magnet claims another.', `A ${p.T.name.toLowerCase()} achieved escape velocity.`]));
};
G.onImpact = (p, speed) => {
  if (p.rider && speed > 3.5) {
    const r = p.rider;
    r.detachBed();
    r.knock(p.vel.x * 0.8 + rand(-1, 1), p.vel.z * 0.8 + rand(-1, 1), true);
    r.say('WHEEEE—OW', 2, true);
    G.stats.bedCrashes++;
  }
};

// ---------------------------------------------------------------- hiding
function hide(spot) {
  const P = G.player;
  if (P.pushing) releaseBed(false);
  P.hidden = spot;
  if (P.held) P.held.mesh.visible = false;
  G.hideT = 0;
  G.sneezeT = rand(25, 55);
  G.stats.hides++;
  $('hide-overlay').dataset.kind = spot.overlay;
  $('hide-overlay').hidden = false;
  toast(spot.note);
}
function unhide(msg) {
  const P = G.player, h = P.hidden;
  if (!h) return;
  P.hidden = null;
  P.pos.x = h.exit.x; P.pos.z = h.exit.z;
  if (P.held) P.held.mesh.visible = true;
  $('hide-overlay').hidden = true;
  if (msg) toast(msg);
}
G.foundPlayer = (npc) => {
  const h = G.player.hidden;
  if (!h) return;
  G.stats.timesFound++;
  G.stats.foundIn = h.label;
  unhide(`${npc.name} found you ${h.label}.`);
  npc.say(pick(LINES.found), 3, true);
  sfx.ow();
  if (npc.role === 'security') { G.caught(npc); return; }
  npc.setState(npc.role === 'consultant' || npc.role === 'dms' ? 'stalk' : npc.role === 'registrar' || npc.role === 'surgreg' ? 'chase' : 'idle', 1);
};
G.onKnock = (npc) => {
  G.stats.knocks++;
  if (Math.hypot(G.player.pos.x - npc.pos.x, G.player.pos.z - npc.pos.y) < 14) sfx.thud(0.5);
};
G.startRumor = (w) => {
  G.rumor = { id: w.id, text: w.rumor, t: 150 };
  G.rumorT = 3;
  G.stats.rumors++;
};

function useLift() {
  G.mode = 'form';
  G.player.unlock();
  $('lift-modal').hidden = false;
  G.liftOpenedAt = performance.now();
}
function rideLift(floor) {
  if (performance.now() - (G.liftOpenedAt || 0) < 450) return;
  $('lift-modal').hidden = true;
  const P = G.player;
  const here = G.playerRegion();
  if (!floor || floor === here) { resumePlay(); if (floor === here) toast('The lift doors open. You are exactly where you started.'); return; }
  if (P.pushing) releaseBed(false);
  const L = G.world.lifts[floor];
  G.stats.liftRides++;
  G.lastSeen = { x: 61.2, z: 10.5, region: 'main', lift: here === 'main' };
  const fade = $('fade');
  $('fade-text').textContent = pick(['*lift music*', 'Ding. The lift smells faintly of hot chips.', 'The lift stops at every floor. Nobody gets on.', '*a smooth jazz rendition of Wonderwall*']);
  fade.hidden = false;
  setTimeout(() => {
    P.pos.x = L.x; P.pos.z = L.z; P.yaw = L.yaw; P.y = 0; P.vy = 0;
    if (P.held) { P.held.pos.set(L.x, 1.2, L.z); }
    fade.hidden = true;
    sfx.ding();
    toast({ roof: 'Roof. The helipad. The wind. The city asleep below.', basement: 'Basement. It\'s cold and something is humming.', main: 'Ground floor. The ED noise washes back over you.' }[floor]);
    resumePlay();
  }, 1300);
}
for (const b of document.querySelectorAll('[data-floor]')) b.onclick = () => rideLift(b.dataset.floor);

// ---------------------------------------------------------------- HUD
const toastsEl = $('toasts');
function toast(text, kind = '') {
  const d = document.createElement('div');
  d.className = 'toast ' + kind;
  d.textContent = text;
  toastsEl.prepend(d);
  setTimeout(() => d.classList.add('out'), 5200);
  setTimeout(() => d.remove(), 5800);
  while (toastsEl.children.length > 5) toastsEl.lastChild.remove();
}
G.toast = toast;

G.page = (t) => page(t);
G.reportAboutYou = (from, cat, note) => { reportAboutYou(G, from, cat, note); toast(`${from} has filed a RiskMann about you.`, 'bad'); };
G.onDelivery = (o) => {
  const spot = { x: 10 + rand(-2, 2), z: 27 };
  if (!o.give.length) { toast(`A courier drone drops your "${o.name}" at the ambulance bay. The box is empty. Of course it is.`); sfx.ding(); return; }
  for (let i = 0; i < o.give.length; i++) G.props.spawn(o.give[i], spot.x + i * 0.5, 1.2, spot.z).vel.set(rand(-1, 1), 1, rand(-1, 1));
  sfx.ding();
  toast(`Delivery! Your ${o.name} has landed in the ambulance bay.`, 'good');
};
function page(text) {
  if (G.pagerStuck) { G.stats.pagesMissed++; return; } // it's stuck to the MRI. Bliss.
  G.stats.pages++;
  sfx.pager();
  toast(`PAGER · ${text}`, 'pager');
}

let hudCache = {};
function setText(id, t) { if (hudCache[id] !== t) { hudCache[id] = t; $(id).textContent = t; } }

function updateHud() {
  setText('clock', minutesToClock(G.time));
  const n = G.list();
  setText('wl-count', String(n));
  const oldest = G.openCases().reduce((m, c) => Math.max(m, G.time - c.arrived), 0);
  const sq = G.scan.queued('ct') + G.scan.queued('mri') + G.scan.queued('xr');
  setText('wl-oldest', (n ? `oldest ${Math.floor(oldest / 60)}h ${String(Math.floor(oldest % 60)).padStart(2, '0')}m` : 'list clear') + (sq ? ` · ${sq} being scanned` : ''));
  const lvl = n >= G.T.dms ? 4 : n >= G.T.consultant ? 3 : n >= G.T.chase ? 2 : n >= G.T.queue ? 1 : 0;
  $('worklist').dataset.level = lvl;
  setText('wl-status', ['Quiet. Suspiciously quiet.', 'Registrars are queuing at your door', 'Registrars are hunting you', 'The ED consultant is looking for you', 'The Director of Medical Services is here'][lvl]);
  const held = G.player.held ? G.player.held.T.name : G.player.pushing ? 'Pushing a hospital bed' : '';
  setText('held', held);
  let hint = '';
  if (G.player.held) {
    const u = G.player.held.T.use;
    hint = 'LMB throw · Q drop' + (u === 'spray' ? ' · RMB spray (look down to fly)' : u === 'ignite' ? ' · RMB flick lighter' : u === 'eat' ? ' · RMB eat' : u === 'drink' ? ' · RMB drink' : u === 'zap' ? ' · RMB "CLEAR!"' : u === 'golf' ? ' · RMB swing a golf ball' : u === 'bat' ? ' · RMB swing the bat' : u === 'honk' ? ' · RMB honk' : '');
  } else if (G.player.pushing) hint = 'LMB launch bed · E let go';
  setText('held-hint', hint);
  $('alarm-vignette').hidden = !G.alarm;
  $('fire-overlay').hidden = !(G.player.onFire > 0);
  $('wanted').hidden = !(G.wanted > 0);
  if (G.wanted > 0) setText('wanted', `SECURITY IS LOOKING FOR YOU · ${Math.ceil(G.wanted)}s`);
}

function drawTVs() {
  const n = G.list();
  const oldest = G.openCases().reduce((m, c) => Math.max(m, G.time - c.arrived), 0);
  const g = G.world.tvCanvas.getContext('2d');
  g.fillStyle = '#081018'; g.fillRect(0, 0, 512, 288);
  g.fillStyle = '#7fd3ff'; g.font = 'bold 28px monospace'; g.fillText('RADIOLOGY WORKLIST', 24, 44);
  g.fillStyle = n >= 20 ? '#ff4040' : n >= 10 ? '#ffb347' : '#8cff9a';
  g.font = 'bold 110px monospace'; g.fillText(String(n), 24, 170);
  g.font = '24px monospace'; g.fillStyle = '#d6e6f2';
  g.fillText('UNREPORTED', 24 + String(n).length * 66 + 20, 150);
  g.fillText(`Oldest: ${Math.floor(oldest / 60)}h ${Math.floor(oldest % 60)}m   Queue CT ${G.scan.queued('ct')} · MRI ${G.scan.queued('mri')} · XR ${G.scan.queued('xr')}`, 24, 220);
  g.fillText(`On-call radiologist: ${G.player.pos.z < 8 && G.player.pos.x < 9 ? 'IN ROOM' : 'WHEREABOUTS UNKNOWN'}`, 24, 258);
  G.world.tvTex.needsUpdate = true;
  const w = G.world.waitCanvas.getContext('2d');
  w.fillStyle = '#10243a'; w.fillRect(0, 0, 512, 256);
  w.fillStyle = '#fff'; w.font = 'bold 30px Arial'; w.fillText('Welcome to RadsSim General ED', 20, 50);
  w.font = '26px Arial'; w.fillStyle = '#ffd35c';
  w.fillText(`Estimated wait: ${(2 + n * 0.45).toFixed(1)} hours`, 20, 110);
  w.fillStyle = '#cfe3ff'; w.font = '22px Arial';
  w.fillText(G.alarm ? 'PLEASE EVACUATE CALMLY. (Nobody is calm.)' : 'Please be kind to our staff.', 20, 160);
  w.fillText('The radiologist has been notified.', 20, 200);
  G.world.waitTex.needsUpdate = true;
}

// ---------------------------------------------------------------- population
const REG_NAMES = ['Dr Priya Nakamura', 'Dr Tomasz Okafor', 'Dr Freya Lindqvist', 'Dr Kofi Abernathy', 'Dr Mei Castellano', 'Dr Declan Haddad', 'Dr Zara Thistlewood', 'Dr Luca Wibberley', 'Dr Ingrid Moreau', 'Dr Rahul Bishop'];
const PT_NAMES = ['Mr Crumble', 'Mrs Pemberton', 'Ms Quill', 'Mr Sprocket', 'Mrs Van Dyke', 'Mr Ferreira', 'Ms Oyelaran', 'Mr Kowalczyk', 'Mrs Tanaka', 'Mr Mbeki', 'Ms Haddad', 'Mr Abernathy'];

function spawnNpc(opts) {
  const n = new NPC(G, opts);
  G.npcs.push(n);
  return n;
}

function populate() {
  const P = G.props;
  // Reading room
  P.spawn('chair', 3.2, null, 2.7, { yaw: Math.PI });
  for (let i = 0; i < 7; i++) P.spawn('paper', rand(1.4, 8.5), null, rand(2.3, 7.5));
  P.spawn('paper', 1.8, 0.8, 1.5); P.spawn('paper', 4.4, 0.8, 1.6);
  P.spawn('bin', 5.9, null, 1.5);
  P.spawn('coffee', 1.5, 0.82, 1.4); P.spawn('coffee', 5.0, 0.82, 1.8);
  P.spawn('extinguisher', 1.4, null, 7.5);
  // Tea room
  for (const [x, z] of [[12.2, 4.6], [15.2, 4.6], [13.7, 3.5], [13.7, 5.7]]) P.spawn('chair', x, null, z);
  P.spawn('foil', 13.3, 0.82, 4.5);
  P.spawn('coffee', 14.2, 0.82, 4.8);
  P.spawn('bin', 10.5, null, 7.3);
  P.spawn('box', 15.2, 0.95, 1.4);
  P.spawn('extinguisher', 17.5, null, 7.4);
  // CT
  P.spawn('wheelchair', 27.5, null, 6.6);
  P.spawn('box', 20.2, null, 7.3);
  // Corridor
  for (const x of [8.5, 27, 40.5]) P.spawn('extinguisher', x, null, x === 40.5 ? 12.6 : 9.35);
  P.spawn('wheelchair', 15.5, null, 12.4);
  P.spawn('o2', 30.2, null, 9.4);
  P.spawn('bin', 19.6, null, 9.35);
  // Resus
  for (const b of G.world.bays) {
    const bed = P.spawn('bed', b.x, null, b.z, { yaw: 0 });
    P.spawn('ivpole', b.x + 0.9, null, b.z - 1.2);
    const pt = spawnNpc({ role: 'patient', name: pick(PT_NAMES), x: b.x, z: b.z, home: { zone: 'resus' } });
    pt.attachBed(bed);
  }
  P.spawn('o2', 1.6, null, 20.2); P.spawn('o2', 19.6, null, 19.6);
  P.spawn('defib', 1.5, 1.1, 17.9); P.spawn('defib', 12.5, 1.15, 15.9);
  P.spawn('bedpan', 4.5, null, 20.5); P.spawn('bedpan', 16.3, null, 21); P.spawn('bedpan', 46.6, null, 5.5);
  P.spawn('bucket', 49.2, null, 11.9); P.spawn('bucket', 54.8, null, 21.6); P.spawn('bucket', 20.5, null, 23.8);
  P.spawn('box', 9.5, 1.1, 15.9); P.spawn('paper', 10.6, 1.1, 15.8); P.spawn('paper', 12.1, 1.1, 16.1);
  P.spawn('bin', 14.2, null, 14.6);
  // Waiting
  P.spawn('bin', 24, null, 23.8); P.spawn('bin', 40.5, null, 23.8);
  P.spawn('coffee', 28.5, 0.5, 19.6); P.spawn('paper', 36.3, 0.5, 22.0);
  // Outside
  P.spawn('lighter', 17.3, 0.5, 28.2);
  P.spawn('coffee', 16.4, 0.5, 28.2);

  // People
  const seats = [...G.world.seats].sort(() => Math.random() - 0.5);
  for (let i = 0; i < 9; i++) {
    const s = seats[i];
    const p = spawnNpc({ role: 'patient', name: pick(PT_NAMES), x: s.x, z: s.z, home: { zone: 'waiting' }, special: i === 0 ? 'sandwich' : null });
    p.seat = s;
    p.setState('sit');
    if (i === 0) p.name = 'Sandwich Guy';
  }
  spawnNpc({ role: 'patient', name: 'Confused Mr Pemberton', x: 12, z: 11, home: { zone: 'corridor' } });
  for (let i = 0; i < 3; i++) spawnNpc({ role: 'nurse', name: pick(['Nurse Jo', 'Nurse Sipho', 'Nurse Aroha', 'Nurse Dev', 'Nurse Bel']), x: rand(3, 18), z: rand(14.5, 19), home: { zone: 'resus' } });
  spawnNpc({ role: 'nic', name: 'Deb (Nurse in Charge)', x: 10, z: 17, home: { zone: 'resus' } });
  for (let i = 0; i < 4; i++) spawnNpc({ role: 'registrar', name: REG_NAMES[i], x: rand(3, 18), z: rand(14.5, 19), home: { zone: i % 2 ? 'resus' : 'corridor' } });
  spawnNpc({ role: 'security', name: 'Big Steve', x: 23.5, z: 16, home: { zone: 'waiting' } });
  spawnNpc({ role: 'cat', name: 'Dr Whiskers', x: 20, z: 11, home: { zone: 'corridor' } });
  spawnNpc({ role: 'chaplain', name: 'Reverend Pat', x: 48, z: 21.5, home: { zone: 'chapel' } });
  spawnNpc({ role: 'cleaner', name: 'Marguerite (Cleaner)', x: 50, z: 10.5, home: { zone: 'corridor' } });
  for (const [id, name, x, z, zone] of [['ct', 'Radiographer Nikhil (CT)', 20.5, 5.5, 'ctctl'], ['mri', 'Radiographer Siobhan (MRI)', 31.5, 5.2, 'mrictl'], ['xr', 'Radiographer Tui (X-ray)', 52.8, 3.4, 'xray']]) {
    const r = spawnNpc({ role: 'radiographer', name, x, z, home: { zone } });
    r.scanner = id;
  }
  // East wing, roof, basement props
  for (const g of G.world.gelSpots) P.spawn('gel', g.x, null, g.z);
  P.spawn('box', 60.4, null, 23); P.spawn('box', 61.6, null, 21.6); P.spawn('paper', 59.6, null, 21.6);
  for (const [x, z] of G.world.cafeChairs) P.spawn('chair', x, null, z);
  P.spawn('coffee', 58, 0.8, 15.4); P.spawn('bin', 62.3, null, 16);
  P.spawn('paper', 60.5, 0.55, 2.2); P.spawn('coffee', 62.4, 0.62, 4.6);
  P.spawn('paper', 46.5, null, 16.3); P.spawn('bin', 44.6, null, 14.6);
  P.spawn('chair', 76, null, 4); P.spawn('box', 88, null, 10); P.spawn('bin', 70, null, 11);
  for (let i = 0; i < 6; i++) P.spawn('paper', rand(80, 93), null, rand(18.2, 19.6));
  P.spawn('o2', 67.5, null, 27.8); P.spawn('box', 75, null, 21.4); P.spawn('chair', 90, null, 27);
}

function registrars() { return G.npcs.filter((n) => n.role === 'registrar' || n.role === 'surgreg'); }

function addCase(opts = {}) {
  const regs = registrars();
  const req = opts.requester || pick(regs)?.name;
  const c = makeCase({ requester: req, gameMinutes: G.time, forced: opts.forced });
  if (opts.location) c.location = opts.location;
  if (opts.clinical) c.clinical = opts.clinical;
  if (opts.study) c.study = opts.study;
  G.cases.push(c);
  // Most requests have to be scanned first; they reach the worklist when the radiographer finishes.
  if (!opts.prescanned && G.scan.enqueue(c, opts.urgent)) return c;
  G.stats.peakList = Math.max(G.stats.peakList, G.list());
  if (!opts.silent) toast(`New request: ${c.study} · ${c.location}`);
  if (G.mode === 'pacs') G.pacs.renderList();
  return c;
}

G.onScanned = (c) => {
  c.status = 'done';
  c.arrived = G.time;
  G.stats.scanned++;
  G.stats.peakList = Math.max(G.stats.peakList, G.list());
  toast(`On PACS: ${c.study} · ${c.location}`);
  if (G.mode === 'pacs') G.pacs.renderList();
};

// ---------------------------------------------------------------- reporting
G.onReport = (c, finding, correct, nailed, speed = false) => {
  c.reported = true;
  c.finding = finding;
  G.stats.reported++;
  if (speed) G.stats.speed++;
  if (correct) G.stats.correct++;
  else G.stats.wrong.push(c);
  if (nailed) G.stats.nailed++;
  if (!speed) (correct ? sfx.sign : sfx.wrong)();
  const reg = G.npcs.find((n) => n.name === c.requester);
  if (reg && !G.pendingFor(reg).length && ['chase', 'queued', 'toQueue'].includes(reg.state)) {
    G.leaveQueue(reg);
    reg.say(pick(LINES.thanks), 2.5);
    reg.cooldown = 30;
    reg.think();
  }
};

// ---------------------------------------------------------------- interactions
function lookBed() {
  const h = G.props.raycast(G.player.eye(), G.player.lookDir(), 2.8, (p) => p.T.bed && !p.stuck);
  return h?.prop || null;
}

function lookTarget(maxD = 2.6) {
  const eye = G.player.eye();
  const dir = G.player.lookDir();
  let best = null, bd = maxD;
  for (const n of G.npcs) {
    const cy = n.state === 'lie' ? 0.95 : n.state === 'knocked' ? 0.3 : n.role === 'cat' ? 0.35 : 1.2;
    const lx = n.pos.x - eye.x, ly = cy - eye.y, lz = n.pos.y - eye.z;
    const t = lx * dir.x + ly * dir.y + lz * dir.z;
    if (t < 0 || t > bd) continue;
    const q = lx * lx + ly * ly + lz * lz - t * t;
    const r = n.role === 'cat' ? 0.4 : 0.55;
    if (q < r * r) { bd = t; best = { npc: n, dist: t }; }
  }
  const ph = G.props.raycast(eye, dir, maxD);
  if (ph && ph.dist < bd) best = { prop: ph.prop, dist: ph.dist };
  return best;
}

function nearInteractable() {
  const p = G.player.pos, f = G.player.forward();
  let best = null, bs = -1;
  for (const it of G.world.interactables) {
    const dx = it.x - p.x, dz = it.z - p.z;
    const d = Math.hypot(dx, dz);
    if (d > it.r) continue;
    const facing = d < 0.3 ? 1 : (dx * f.x + dz * f.z) / d;
    if (facing < 0.2) continue;
    const s = facing - d * 0.2;
    if (s > bs) { bs = s; best = it; }
  }
  return best;
}

function currentPrompt() {
  if (G.player.hidden) return '';
  if (G.player.inCar) return `Driving ${G.player.inCar.owner}\nWASD drive · Shift floor it · E — get out`;
  if (G.player.pushing) return 'E — let go of the bed';
  const car = G.cars.nearest(G.player.pos.x, G.player.pos.z, 2.6);
  if (car) return `${car.owner[0].toUpperCase() + car.owner.slice(1)} (${car.plate})\nE — break in and hotwire it${car.smashed ? '' : ' · LMB/kick to smash a window'}`;
  const t = lookTarget();
  if (t?.npc) {
    const n = t.npc;
    const pending = G.pendingFor(n).length;
    const verb = (n.role === 'registrar' || n.role === 'surgreg') && pending ? `E — take their request form (${pending} waiting)` : n.role === 'cat' ? 'E — pet the cat' : 'E — talk';
    return `${n.name} · ${n.title}\n${verb}${!G.player.held && n.state !== 'lie' ? ' · LMB shove' : ''}`;
  }
  const it = nearInteractable();
  if (it) return `E — ${it.id === 'door' ? (G.world.doorLocked ? 'Unlock the reading-room door' : 'Lock the reading-room door') : it.label}`;
  const bed = lookBed();
  if (bed && !G.player.held && !(t?.prop && !t.prop.T.bed && t.dist < 1.2)) return `${bed.T.name}${bed.rider ? ` (${bed.rider.name} aboard)` : ''}\nE — push it${t?.prop && !t.prop.T.bed ? ` · LMB pick up ${t.prop.T.name.toLowerCase()}` : ''}`;
  if (t?.prop) {
    const p = t.prop;
    if (p.T.bed) return `${p.T.name}${p.rider ? ' (occupied)' : ''}\nE — push it`;
    if (!G.player.held && p.T.mass <= 20 && !p.stuck) return `${p.T.name}\nLMB — pick up`;
    return p.T.name;
  }
  return '';
}

function interact() {
  const P = G.player;
  if (P.hidden) { unhide('You come out of hiding.'); return; }
  if (P.inCar) { G.cars.exit(); return; }
  if (P.pushing) { releaseBed(false); return; }
  const t = lookTarget();
  if (t?.npc) { talk(t.npc); return; }
  const car = G.cars.nearest(P.pos.x, P.pos.z, 2.6);
  if (car && !(t?.prop && t.dist < 1.6) && !nearInteractable()) { G.cars.enter(car); return; }
  const it = nearInteractable();
  if (it?.hide) { hide(it.hide); return; }
  if (it) { useStation(it.id); return; }
  const bed = lookBed();
  if (bed) {
    P.pushing = bed;
    bed.pushed = true;
    if (P.held) dropHeld();
  }
}

function releaseBed(launch) {
  const P = G.player, b = P.pushing;
  if (!b) return;
  b.pushed = false;
  const f = P.forward();
  if (launch) {
    b.vel.set(P.vel.x * 1.3 + f.x * 7, 0, P.vel.z * 1.3 + f.z * 7);
    G.stats.bedsLaunched++;
    sfx.whoosh();
    if (b.rider) b.rider.say(pick(['WHEEEE', 'NOT AGAIN', 'Is this... physio?', 'I SAID I NEEDED A WEE']), 2, true);
  } else b.vel.set(P.vel.x, 0, P.vel.z);
  P.pushing = null;
}

function dropHeld() {
  const h = G.player.held;
  if (!h) return;
  h.held = false;
  h.vel.set(G.player.vel.x, 0, G.player.vel.z);
  G.player.held = null;
}

function giveItem(type) {
  if (G.player.held) dropHeld();
  const p = G.props.spawn(type, G.player.pos.x, 1.2, G.player.pos.z);
  p.held = true;
  G.player.held = p;
  return p;
}

function talk(n) {
  const P = G.player;
  if ((n.role === 'registrar' || n.role === 'surgreg') && G.pendingFor(n).length) {
    const c = G.pendingFor(n).sort((a, b) => a.arrived - b.arrived)[0];
    openForm(c, n);
    return;
  }
  switch (n.role) {
    case 'cat': n.say('purrrrr', 2); G.stats.catPets++; sfx.meow(); break;
    case 'consultant': n.say('...', 3); toast('The consultant stares at you until you look away.'); break;
    case 'dms': n.say('Let\'s schedule a meeting about this meeting.', 3); break;
    case 'security': n.say(G.wanted > 0 ? 'Oh, it\'s YOU.' : 'Keep your nose clean, doc.', 3); if (G.wanted > 0) G.caught(n); break;
    case 'firefighter': n.say('Stand back, doc!', 2); break;
    case 'radiographer': {
      const q = G.scan.queued(n.scanner);
      n.say(pick([q ? `${q} in my queue. Report faster, doc.` : 'Quiet for once. Don\'t jinx it.', 'Please don\'t stand in the room during a scan.', 'Who keeps ordering scans on sandwiches?', n.scanner === 'mri' ? 'NO METAL past that line.' : 'Lead aprons are on the hook if you\'re staying.']), 3);
      break;
    }
    case 'chaplain': n.say(pick(LINES.chaplain), 3); if (G.list() > 10) toast('The chaplain offers to pray for your worklist.'); break;
    case 'cleaner': n.say(pick(LINES.cleaner), 3); break;
    case 'ghost': n.say(pick(LINES.ghost), 3.5); G.stats.ghostChats++; if (G.stats.ghostChats === 1) toast('The ghost passes through you. You feel a sudden urge to report something.'); break;
    case 'nic': n.say(G.playerCausedFire ? 'I KNOW it was you.' : pick(['Can you please just report the scans?', 'Resus is full. Do your job.', 'Do NOT touch my whiteboard.']), 3); break;
    case 'nurse': n.say(pick(['Can you not? I\'m busy.', 'Are you... lost?', 'The radiologist! In the wild!', 'Your pager\'s going off, by the way.']), 3); break;
    case 'registrar': case 'surgreg': n.say(pick(['All good for now!', 'Thanks for earlier!', 'Nothing pending, promise.']), 2.5); break;
    default:
      if (n.special === 'sandwich') n.say(P.held?.type === 'sandwich' ? 'Is... is that MY sandwich?' : 'No, you can\'t have my sandwich.', 3);
      else n.say(pick(['Are you my doctor?', 'I\'ve been waiting SO long', 'Can I have some water?', 'Where\'s the toilet?', 'Is it bad, doc? Be honest.', 'Nice lanyard']), 3);
  }
}

function openForm(c, reg) {
  G.mode = 'form';
  G.player.unlock();
  showForm(c, {
    mode: 'registrar',
    onAccept: () => {
      c.accepted = true;
      c.snoozeUntil = G.time + 40;
      reg.say(pick(LINES.thanks), 2.5);
      reg.cooldown = 45;
      G.leaveQueue(reg);
      reg.think();
      toast(`You promised to look at ${c.patient}'s ${c.study} "now". The clock is ticking.`);
      resumePlay();
    },
    onBounce: () => {
      G.stats.formsBounced++;
      G.mode = 'form';
      const accept = (forced) => {
        c.accepted = true;
        c.snoozeUntil = G.time + 40;
        reg.say(forced ? pick(['Told you.', 'Thank you. Finally.', '*smug face*']) : pick(LINES.thanks), 2.5);
        reg.cooldown = 45;
        G.leaveQueue(reg);
        reg.think();
        toast(`You're doing ${c.patient}'s ${c.study}. It's on you now.`);
        resumePlay();
      };
      startArgument(G, c, reg, {
        onWin: (kind) => {
          c.cancelled = kind;
          if (kind === 'clinical') {
            reg.say('Theatre it is. Thanks!', 3);
            reg.cooldown = 40;
            G.leaveQueue(reg);
            reg.think();
            toast(`${c.patient} goes straight to theatre. No scan needed. Good call.`, 'good');
            resumePlay();
            return;
          }
          reg.say(kind === 'wild' ? 'I need to go tell everyone.' : pick(LINES.bounce), 3);
          reg.anger++;
          reg.cooldown = 40;
          G.leaveQueue(reg);
          reg.think();
          if (Math.random() < 0.4) G.rerequests.push({ c, at: G.time + rand(40, 90) });
          toast(`${c.study} for ${c.patient} withdrawn. The list shrinks by one.`, 'good');
          resumePlay();
        },
        onLose: () => accept(true),
        onAccept: () => accept(false),
      });
    },
    onNod: () => {
      reg.say('...so is that a yes?', 2.5);
      reg.cooldown = 12;
      G.leaveQueue(reg);
      reg.think();
      resumePlay();
    },
  });
}

function useStation(id) {
  const P = G.player;
  switch (id) {
    case 'pacs':
      if (G.pacsWet > 0) { toast('PACS is soaked. It makes a sad fizzing noise.'); return; }
      G.mode = 'pacs';
      P.unlock();
      G.pacs.open();
      $('hud').classList.add('dim');
      break;
    case 'phone':
      if (G.phoneRinging) {
        G.phoneRinging = false;
        G.phoneQuiet = 45;
        toast(`"Hi, it's ${pick(REG_NAMES)}. Just wondering about ${pick(G.openCases())?.patient || 'nothing'}..." You hang up.`);
      } else toast('Dial tone. You consider calling your mum. You don\'t.');
      break;
    case 'couch': {
      G.stats.naps++;
      const fade = $('fade');
      $('fade-text').textContent = 'You nap for 45 minutes. The pager does not.';
      fade.hidden = false;
      const mins = 45;
      G.time += mins;
      const n = Math.round(mins / 12);
      for (let i = 0; i < n; i++) addCase({ silent: true });
      setTimeout(() => { fade.hidden = true; toast(`You wake up to ${n} new requests and ${n + 3} pages.`); G.stats.pages += n + 3; }, 1600);
      break;
    }
    case 'microwave': {
      const h = P.held;
      if (G.microwaveBusy) { toast('The microwave is busy. Something is sparking.'); return; }
      if (h && (h.T.metal || h.type === 'paper' || h.type === 'lighter')) {
        const what = h.T.name.toLowerCase();
        P.held = null;
        G.props.remove(h);
        G.microwaveBusy = 3.5;
        G.microwaveFire = true;
        G.world.microwaveGlow.material.color.set('#ffb347');
        toast(`You microwave the ${what}. This is fine.`);
      } else if (h && h.type === 'sandwich') {
        toast('You warm the sandwich. 10/10 decision.');
        G.microwaveBusy = 2; G.microwaveFire = false;
        G.world.microwaveGlow.material.color.set('#ffb347');
      } else {
        toast('You microwave nothing for 30 seconds. The hum is soothing.');
        G.microwaveBusy = 2; G.microwaveFire = false;
        G.world.microwaveGlow.material.color.set('#ffb347');
      }
      break;
    }
    case 'toaster':
      G.toast_n = (G.toastT > 0 ? G.toast_n : 0) + 1;
      G.toastT = 20;
      if (G.toast_n >= 3) {
        toast('The toast has become charcoal. The charcoal has become fire.', 'bad');
        igniteByPlayer(13.2, 1.5, 0.6);
        G.toast_n = 0;
      } else toast(G.toast_n === 1 ? 'Toast: golden. Perfect.' : 'Toast again? It\'s getting quite dark...');
      break;
    case 'fridge':
      giveItem('sandwich');
      toast('A sandwich labelled "DO NOT TOUCH — CT RADIOGRAPHER". You take it.');
      break;
    case 'kettle':
      giveItem('coffee');
      toast('Instant coffee. The taste of 3am.');
      break;
    case 'vending': {
      sfx.thud(1);
      const r = Math.random();
      if (r < 0.45) {
        const p = G.props.spawn(Math.random() < 0.6 ? 'sandwich' : 'coffee', 42.1, 0.6, 15.6);
        p.vel.set(rand(-1, 1), 2, 2);
        toast('The machine drops something. Free food!');
      } else if (r < 0.6) {
        toast('You shake it harder. Security is watching.');
        G.onAssault();
      } else toast('The machine eats your coins. It is not sorry.');
      break;
    }
    case 'ctconsole': {
      const t = G.world.ctTable;
      const victim = G.npcs.find((n) => Math.hypot(n.pos.x - t.x, n.pos.y - t.z) < 2.3);
      const thing = G.props.list.find((p) => Math.hypot(p.pos.x - t.x, p.pos.z - t.z) < 2 && !p.held);
      if (victim || thing) {
        G.stats.ctJokes++;
        const path = thing?.type === 'sandwich' ? 'sandwich' : pick(['fork', 'pager', 'sandwich', 'normal']);
        const who = victim ? victim.name : `a ${thing.T.name.toLowerCase()}`;
        addCase({ prescanned: true, forced: { modality: 'abdo', path }, location: 'CT Room', study: 'CT Whole Body (unrequested)', clinical: `Scanned ${who} because they were near the scanner. No clinical indication whatsoever.` });
        if (victim) victim.say('Did... did you just scan me?', 3);
        toast(`You CT'd ${who}. It's on the worklist now. You'll have to report it.`);
      } else toast('You scan an empty table. That\'s 1 mSv of nothing.');
      break;
    }
    case 'door': {
      const on = !G.world.doorLocked;
      G.world.setDoorLocked(on);
      sfx.click();
      toast(on ? 'You lock the reading-room door. Registrars will have to knock. (Forms still fit under it.)' : 'You unlock the door. Brace yourself.');
      break;
    }
    case 'lift':
      useLift();
      break;
    case 'riskman':
      G.mode = 'form';
      P.unlock();
      openRiskman(G, { onClose: () => resumePlay() });
      break;
    case 'mirror':
      toast(G.sootT > 0 ? 'You are covered in soot. Your eyebrows are gone.' : G.list() > 20 ? 'You look like someone with ' + G.list() + ' unreported scans.' : pick(['You look like you\'ve been awake for 19 hours. Because you have.', 'Lanyard: crooked. Soul: tired.', 'You practise saying "no acute abnormality" in the mirror.']));
      break;
    case 'bed': {
      G.stats.naps++;
      const fade = $('fade');
      $('fade-text').textContent = 'You sleep in the on-call bed for 90 glorious minutes.';
      fade.hidden = false;
      G.time += 90;
      const n = 8;
      for (let i = 0; i < n; i++) addCase({ silent: true });
      setTimeout(() => { fade.hidden = true; toast(`You wake up to ${n} new requests, ${n + 6} pages and a registrar asleep outside the door.`, 'bad'); G.stats.pages += n + 6; }, 1800);
      break;
    }
    case 'candles': {
      G.candlesLit = (G.candlesLit || 0) + 1;
      const c = G.world.candles;
      if (G.candlesLit <= c.length) { c[G.candlesLit - 1].visible = true; sfx.flick(); toast(G.candlesLit === 1 ? 'You light a candle for your worklist.' : G.candlesLit === c.length ? 'All the candles are lit. It\'s very atmospheric.' : 'Another candle. For the registrars.'); }
      else { toast('You reach for another candle and knock the whole stand over.', 'bad'); for (const f of c) f.visible = false; G.candlesLit = 0; igniteByPlayer(45, 23.4, 0.7); }
      break;
    }
    case 'espresso':
      giveItem('coffee');
      toast('You hit the closed coffee machine. It dispenses one perfect espresso. Nobody must know.');
      break;
    case 'heli':
      if (G.heliT > 0) { toast('The rotor is already going. You press more buttons. A light comes on that says "NO".'); return; }
      G.heliT = 16;
      G.stats.helis++;
      toast('You press buttons in the helicopter. The rotor starts spinning. You do not know how to stop it.', 'bad');
      break;
    case 'boiler': {
      G.boilerN = (G.boilerN || 0) + 1;
      G.boilerT = 30;
      sfx.clang();
      G.world.gauge.rotation.z = -G.boilerN * 0.9;
      if (G.boilerN < 3) toast(G.boilerN === 1 ? 'You crank the boiler. The needle rises. It feels nice and warm.' : 'The needle is in the red. The boiler is making a noise like a whale.');
      else {
        G.boilerN = 0;
        G.world.gauge.rotation.z = 0;
        G.stats.boilers++;
        sfx.whoomph(); sfx.hiss();
        for (let i = 0; i < 250; i++) G.smokeFx.emit(69.5 + rand(-1, 1), rand(0.5, 2.5), 26.5 + rand(-1, 1), rand(-3, 3), rand(0, 2), rand(-3, 3), rand(2, 4), 0.8, 3, 0.9, 0.9, 0.92, 0.6);
        igniteByPlayer(69.5, 25.3, 0.9); igniteByPlayer(72, 26.5, 0.7);
        toast('The boiler bursts. Steam everywhere. Also fire. The morning maintenance team will be thrilled.', 'bad');
      }
      break;
    }
    case 'oldbox':
      if (G.stats.ancient) { toast('The old lightbox flickers. There\'s nothing else on it.'); return; }
      G.stats.ancient = 1;
      {
        const c = addCase({ silent: true, prescanned: true, forced: { modality: 'chest', path: pick(['ptx', 'mass', 'consolidation', 'normal']) }, study: 'CT Chest (1987, never reported)', location: 'Basement (lost)', clinical: 'Handwritten in fountain pen: "?something. Pls report. Urgent." Dated 14/3/1987.' });
        c.arrived = G.time - 39 * 365 * 24 * 60;
        c.patient = 'UNKNOWN, 1987';
      }
      toast('You switch on the old lightbox. A film from 1987 is still clipped to it. It was never reported. It\'s on your list now.', 'bad');
      break;
    case 'quench':
      if (G.quenched) { toast('Already quenched. The physicist is still crying.'); return; }
      G.quenched = true;
      G.stats.quenches++;
      sfx.hiss();
      for (const p of G.props.list) if (p.stuck) { p.stuck = false; p.vel.set(rand(-2, 2), 1, rand(-2, 2)); }
      for (const n of G.npcs) if (n.state === 'pinned') n.release();
      for (let i = 0; i < 400; i++) G.smokeFx.emit(rand(31, 42), rand(0.5, 2.8), rand(1.5, 7.5), rand(-1, 1), rand(-0.2, 0.5), rand(-1, 1), rand(3, 6), 1, 3, 0.95, 0.97, 1, 0.5);
      toast('You quenched the MRI. That was about $1.2 million of helium. Somewhere, a physicist wakes up screaming.', 'bad');
      break;
  }
}

function igniteByPlayer(x, z, amt = 0.5) {
  if (G.fire.ignite(x, z, amt)) {
    G.stats.fires++;
    G.playerCausedFire = true;
    G.lastFireByPlayer = G.time;
    sfx.whoomph();
    return true;
  }
  return false;
}

// ---------------------------------------------------------------- input
window.addEventListener('keydown', (e) => {
  if (e.code === 'KeyH' && (G.mode === 'play' || G.mode === 'paused')) $('help').hidden = !$('help').hidden;
  if (G.mode !== 'play') return;
  if (e.code === 'KeyE') interact();
  if (e.code === 'KeyF') kick();
  if (e.code === 'KeyQ') { if (G.player.held) dropHeld(); else if (G.player.pushing) releaseBed(false); }
  if (e.code === 'KeyL') { for (let i = 0; i < 5; i++) addCase({ silent: true }); toast('Cheat: +5 requests dumped on the list.'); }
  if (e.code === 'KeyT') { G.time = Math.min(SHIFT_MINUTES - 1, G.time + 60); toast('Cheat: skipped an hour.'); }
});

function kick() {
  const P = G.player;
  if (P.hidden || G.kickT > 0) return;
  G.kickT = 0.5;
  G.kickAnim = 0.25;
  const f = P.forward();
  const t = lookTarget(2.2);
  sfx.whoosh();
  if (t?.npc && t.npc.state !== 'lie') {
    G.stats.kicks++;
    sfx.thud(1);
    t.npc.knock(f.x * 9, f.z * 9, true, 4.5, pick(['OOF!', 'MY SPLEEN!', 'WHAT WAS THAT FOR?!', 'OW OW OW']));
  } else if (t?.prop && !t.prop.stuck && !t.prop.T.bed) {
    const p = t.prop;
    const k = 12 / Math.sqrt(Math.max(1, p.T.mass / 2));
    p.vel.set(f.x * k, 4, f.z * k);
    p.spin = rand(-15, 15);
    sfx.thud(0.7);
  } else if (t?.prop?.T.bed) {
    t.prop.vel.set(f.x * 6, 0, f.z * 6);
    sfx.thud(0.8);
    if (t.prop.rider) t.prop.rider.say('HEY! I\'m a patient!', 2, true);
  } else {
    const c = G.cars.nearest(P.pos.x + f.x * 1.6, P.pos.z + f.z * 1.6, 2);
    if (c) G.cars.smash(c, 'You');
  }
}
G.kick = kick;

function spill(p) {
  p.spilled = true;
  G.spills.push({ x: p.pos.x, z: p.pos.z, r: 1.7, t: 120 });
  for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) G.world.puddle(Math.floor(p.pos.x) + dx, Math.floor(p.pos.z) + dz);
  for (let i = 0; i < 60; i++) G.sprayFx.emit(p.pos.x, 0.4, p.pos.z, rand(-3, 3), rand(1, 3), rand(-3, 3), 0.6, 0.12, 0.05, 0.55, 0.6, 0.55, 0.8, 9);
  toast('The mop bucket goes over. Grey water everywhere. Wet floor, no sign.');
}

function handleMouse(dt) {
  const P = G.player;
  if (P.hidden || P.inCar) { P.mouse.leftPressed = false; G.jetpack = false; return; }
  if (P.mouse.leftPressed) {
    P.mouse.leftPressed = false;
    if (P.held) {
      const h = P.held;
      const d = P.lookDir();
      const sp = 15 / Math.sqrt(Math.max(1, h.T.mass / 1.5));
      h.held = false;
      h.vel.set(d.x * sp + P.vel.x, d.y * sp + 2, d.z * sp + P.vel.z);
      h.spin = rand(-12, 12);
      P.held = null;
      G.stats.throws++;
      sfx.whoosh();
    } else if (P.pushing) {
      releaseBed(true);
    } else {
      const t = lookTarget();
      if (t?.prop?.type === 'pager' && !t.prop.stuck) {
        G.props.remove(t.prop);
        G.pagerStuck = false;
        sfx.pager();
        toast('You clip your pager back on. It immediately goes off.', 'bad');
      } else if (t?.prop && !t.prop.T.bed && t.prop.T.mass <= 20 && !t.prop.stuck) {
        t.prop.held = true;
        t.prop.vel.set(0, 0, 0);
        P.held = t.prop;
        sfx.click();
      } else if (t?.npc && t.dist < 2 && t.npc.state !== 'lie') {
        const f = P.forward();
        t.npc.knock(f.x * 5, f.z * 5, true);
      }
    }
  }
  G.jetpack = false;
  const h = P.held;
  if (P.mouse.right && h) {
    const f = P.forward();
    const d = P.lookDir();
    if (h.T.use === 'spray') {
      G.sprayT = (G.sprayT || 0) - dt;
      if (G.sprayT <= 0) { sfx.spray(); G.sprayT = 0.18; }
      G.fire.suppressCone(P.pos.x, P.pos.z, f.x, f.z, 5, 3, dt);
      const e = P.eye();
      G.spray(e.x + d.x * 0.6, e.y - 0.3 + d.y * 0.6, e.z + d.z * 0.6, d.x, d.y, d.z);
      if (P.pitch < -0.9) {
        G.jetpack = true;
        if (!G.flewOnce) { G.flewOnce = true; toast('You are flying on a fire extinguisher. This is not in the fire safety training.'); }
      } else {
        P.vel.x -= f.x * 3 * dt; P.vel.z -= f.z * 3 * dt;
      }
      for (const n of G.npcs) {
        const dx = n.pos.x - P.pos.x, dz = n.pos.y - P.pos.z, dd = Math.hypot(dx, dz);
        if (dd < 3 && (dx * f.x + dz * f.z) / dd > 0.8) {
          if (n.state === 'onfire') { n.stateT = 0; }
          else if (n.sayT <= 0) n.say(pick(['HEY!', 'I\'m not on fire!', 'Is this foam?!', '*spluttering*']), 1.5, true);
        }
      }
    } else if (!G.rightWas) {
      if (h.T.use === 'zap') {
        if (G.defibT > 0) { toast('Charging… (the paddles whine ominously)'); }
        else {
          G.defibT = 2.5;
          const t = lookTarget(2.4);
          const e = P.eye();
          sfx.sparks(); sfx.clang();
          for (let i = 0; i < 25; i++) G.flameFx.emit(e.x + d.x * 0.9, e.y - 0.2 + d.y, e.z + d.z * 0.9, rand(-2, 2), rand(-1, 2), rand(-2, 2), 0.3, 0.1, 0.02, 0.5, 0.8, 1, 1);
          if (t?.npc) {
            G.stats.zaps++;
            toast(t.npc.state === 'lie' ? '"CLEAR!" The patient was not in cardiac arrest. They are now very awake.' : '"CLEAR!"');
            t.npc.zap(f.x, f.z);
          } else toast('"CLEAR!" You shock the air. Everybody looks at you.');
        }
      } else if (h.T.use === 'ignite') {
        sfx.flick();
        const e = P.eye();
        let done = false;
        const t = lookTarget(3);
        if (t?.npc) { t.npc.ignite(); G.stats.fires++; G.playerCausedFire = true; done = true; }
        else if (t?.prop && (t.prop.T.fuel || 0) > 0) { done = igniteByPlayer(t.prop.pos.x, t.prop.pos.z, 0.6); }
        else if (d.y < -0.05) {
          const tt = e.y / -d.y;
          if (tt < 3.5) done = igniteByPlayer(e.x + d.x * tt, e.z + d.z * tt, 0.45);
        }
        for (let i = 0; i < 6; i++) G.flameFx.emit(e.x + d.x * 0.7, e.y - 0.25, e.z + d.z * 0.7, rand(-0.1, 0.1), 0.6, rand(-0.1, 0.1), 0.3, 0.12, 0.04, 1, 0.6, 0.15, 1);
        if (!done && Math.random() < 0.3) toast('*flick* Nothing flammable there. Yet.');
      } else if (h.T.use === 'golf') {
        const e = P.eye();
        sfx.whoosh();
        const ball = G.props.spawn('golfball', e.x + d.x * 0.7, e.y - 0.05, e.z + d.z * 0.7);
        const power = 36;
        ball.vel.set(d.x * power + P.vel.x, Math.max(5, d.y * power + 8), d.z * power + P.vel.z);
        ball.spin = rand(-20, 20);
        G.stats.golfBalls++;
        if (G.stats.golfBalls === 1) toast('FORE! Each swing tees up a fresh ball. Try it off the roof.');
        const balls = G.props.list.filter((b) => b.type === 'golfball');
        if (balls.length > 25) G.props.remove(balls[0]);
      } else if (h.T.use === 'bat') {
        sfx.whoosh();
        const f = P.forward();
        const t2 = lookTarget(2.6);
        if (t2?.npc && t2.npc.state !== 'lie') { sfx.thud(1); G.stats.batHits++; t2.npc.knock(f.x * 11, f.z * 11, true, 4, pick(['HOWZAT!', 'OOF', 'NOT CRICKET', 'MY RIBS'])); }
        else if (t2?.prop && !t2.prop.T.bed && !t2.prop.stuck) { const kk = 15 / Math.sqrt(Math.max(1, t2.prop.T.mass / 2)); t2.prop.vel.set(f.x * kk, 4, f.z * kk); t2.prop.spin = rand(-15, 15); sfx.thud(0.8); G.stats.batHits++; }
        else { const c = G.cars.nearest(P.pos.x + f.x * 1.8, P.pos.z + f.z * 1.8, 2.2); if (c) { G.cars.smash(c, 'You'); G.stats.batHits++; } }
      } else if (h.T.use === 'honk') {
        sfx.honk();
        G.stats.honks++;
        for (const n of G.npcs) {
          const dx = n.pos.x - P.pos.x, dz = n.pos.y - P.pos.z, dd = Math.hypot(dx, dz);
          if (dd < 7 && dd > 0.1 && !['knocked', 'lie', 'pinned'].includes(n.state)) n.knock((dx / dd) * 2, (dz / dd) * 2, false, 2.2, pick(['AAH!', 'WHAT THE—', 'MY EARS', 'NOT FUNNY']));
        }
        toast('You blast the air horn. Everyone within earshot leaves the ground.');
      } else if (h.T.use === 'eat') {
        P.held = null; G.props.remove(h); sfx.munch(); G.stats.sandwiches++;
        toast(pick(['Delicious. Someone is going to be furious.', 'You eat the sandwich. Sandwich Guy saw that.', 'Best sandwich of your career.']));
      } else if (h.T.use === 'drink') {
        P.held = null; G.props.remove(h);
        toast(pick(['Cold coffee. Tastes like 2019.', 'Caffeine level: critical.', 'That was someone\'s. Oh well.']));
      } else if (h.type === 'paper') {
        toast(pick(['It\'s a request for a CT brain for "headache x3 years".', '"?PE ?pneumonia ?anything ?everything"', 'It just says "SCAN PLS" and a smiley face.']));
      }
    }
  }
  G.rightWas = P.mouse.right;
}

// ---------------------------------------------------------------- game systems
let caseT = 8;
let pageT = 30;
let floodT = 0;
let bedSpawnT = 20;
let regSpawnT = 0;
let tvT = 0;
let burnT = 0;
let ringT = 0;
let smoke = 0;
const traumaTimes = [90, 250, 420].map((t) => ({ t, done: false }));
const zoneFire = Object.fromEntries(ZONES.map((z) => [z.id, { t: 0, sprinkle: 0 }]));
G.zoneFire = zoneFire;
let corridorBeds = 0;
let floodCount = 0;
let consultant = null, dms = null;

function updateSystems(dt) {
  const n = G.list();
  const P0 = G.player;
  if (!P0.hidden) G.lastSeen = { x: P0.pos.x, z: P0.pos.z, region: G.playerRegion(), lift: false };
  // Hiding timers
  if (P0.hidden) {
    G.hideT += dt;
    const h = P0.hidden;
    const searchers = G.npcs.filter((x) => x.state === 'search' || x.state === 'knock').length;
    setText('hide-text', `Hiding ${h.label} · ${searchers ? `${searchers} searching for you` : 'nobody nearby'} · E to come out`);
    if (h.maxTime && G.hideT > h.maxTime) unhide('Too cold! You burst out of the fridge, covered in frost.');
    G.sneezeT -= dt;
    if (P0.hidden && G.sneezeT <= 0) {
      G.sneezeT = rand(30, 60);
      sfx.ow();
      toast('*ACHOO*', 'bad');
      const near = G.npcs.find((x) => x.state === 'search' && x.region() === G.playerRegion() && Math.hypot(x.pos.x - h.x, x.pos.y - h.z) < 8);
      if (near && Math.random() < 0.6) { near.say('Bless you! ...wait.', 2); G.foundPlayer(near); }
    }
  }
  // Rumours from wild arguments
  if (G.rumor) {
    G.rumor.t -= dt;
    G.rumorT -= dt;
    if (G.rumorT <= 0) {
      G.rumorT = rand(6, 11);
      const gossip = G.npcs.filter((x) => ['nurse', 'registrar', 'surgreg', 'nic', 'patient', 'cleaner'].includes(x.role) && x.sayT <= 0 && x.distToPlayer() < 14);
      const who = pick(gossip);
      if (who) who.say('Did you hear? ' + G.rumor.text, 3.5);
    }
    if (G.rumor.t <= 0) G.rumor = null;
  }
  // Withdrawn requests sometimes come back
  for (const r of G.rerequests.slice()) {
    if (G.time < r.at) continue;
    G.rerequests.splice(G.rerequests.indexOf(r), 1);
    const nc = addCase({ silent: true, requester: r.c.requester, forced: { modality: r.c.modality, path: r.c.path }, location: r.c.location });
    nc.patient = r.c.patient;
    nc.clinical = 'RE-REQUEST. ' + r.c.clinical + ' Now "much worse".';
    toast(`${r.c.requester} is back with a re-request for ${r.c.patient}. Now "much worse".`, 'bad');
  }
  // Ghost appears at 3am
  if (G.time >= 300 && !G.ghost) {
    G.ghost = spawnNpc({ role: 'ghost', name: 'Mr Nobody (1987)', x: 80, z: 22.5, home: { zone: 'basement' } });
  }
  // Helicopter rotor wash
  if (G.heliT > 0) {
    G.heliT -= dt;
    const spin = Math.min(1, G.heliT / 3, (16 - G.heliT) / 3 + 0.2);
    G.world.rotor.rotation.y += dt * 30 * spin;
    const cx = 81, cz = 7;
    for (const p of G.props.list) {
      if (p.held || p.stuck || p.pos.x < 64.5 || p.pos.z > 15) continue;
      const dx = p.pos.x - cx, dz = p.pos.z - cz, d = Math.hypot(dx, dz) || 1;
      if (d > 12) continue;
      const f = (40 * spin) / Math.max(2, d) / Math.max(1, p.T.mass / 3);
      p.vel.x += (dx / d) * f * dt; p.vel.z += (dz / d) * f * dt; p.vel.y += f * 0.4 * dt;
    }
    const P = G.player;
    if (G.playerRegion() === 'roof' && !P.hidden) {
      const dx = P.pos.x - cx, dz = P.pos.z - cz, d = Math.hypot(dx, dz) || 1;
      if (d < 10) { P.vel.x += (dx / d) * 18 * spin * dt / Math.max(1, d / 3); P.vel.z += (dz / d) * 18 * spin * dt / Math.max(1, d / 3); }
    }
    if (Math.random() < 0.1) sfx.whoosh();
  }
  if (G.boilerT > 0) { G.boilerT -= dt; if (G.boilerT <= 0) { G.boilerN = 0; G.world.gauge.rotation.z = 0; } }
  G.world.beacon.intensity = Math.sin(performance.now() / 300) > 0.6 ? 6 : 0;
  // Falling off the roof
  if (G.player.y < -6) {
    G.stats.roofFalls++;
    const P = G.player;
    const fade = $('fade');
    $('fade-text').textContent = 'You fell off the roof. You wake up in Resus with a mild headache and a CT brain request with your name on it.';
    fade.hidden = false;
    P.y = 0; P.vy = 0; P.pos.x = 10; P.pos.z = 18; P.yaw = 0;
    addCase({ silent: true, urgent: true, forced: { modality: 'head', path: 'normal' }, study: 'CT Brain (you)', location: 'Resus 3', clinical: 'Radiologist fell off the roof. Somehow fine. Insists on reporting own scan.' });
    setTimeout(() => (fade.hidden = true), 2500);
  }
  // New requests
  caseT -= dt;
  if (caseT <= 0) {
    addCase();
    caseT = rand(16, 30) * (G.time > 480 ? 0.8 : 1);
  }
  for (const tr of traumaTimes) {
    if (!tr.done && G.time >= tr.t) {
      tr.done = true;
      const opts = { head: ['edh', 'sdh', 'normal'], chest: ['ptx', 'pe', 'normal'], abdo: ['freeair', 'collection', 'normal'] };
      for (const m of ['head', 'chest', 'abdo']) addCase({ location: `Resus ${1 + Math.floor(Math.random() * 4)}`, silent: true, forced: { modality: m, path: pick(opts[m]) } });
      page('TRAUMA CALL: MBA x3, pan-scans incoming NOW');
      toast('TRAUMA CALL: 3 pan-scans jump the CT queue.', 'bad');
    }
  }
  // Pages
  if (n >= 6) {
    pageT -= dt;
    if (pageT <= 0) {
      pageT = rand(22, 45) * (n >= 20 ? 0.6 : 1);
      const c = pick(G.openCases());
      page(`${c.requester}: "Any update on ${c.patient.split(',')[0]}'s ${c.study.split(' ')[1] || 'scan'}?"`);
    }
  }
  // More registrars appear as the list grows
  regSpawnT -= dt;
  const want = Math.min(10, 4 + Math.floor(n / 5));
  if (regSpawnT <= 0 && registrars().length < want) {
    regSpawnT = 8;
    const name = REG_NAMES.find((nm) => !G.npcs.some((x) => x.name === nm)) || `Dr ${pick(['Smith', 'Jones'])}`;
    const r = spawnNpc({ role: 'surgreg', name, x: 10.5, z: 27, home: { zone: 'resus' } });
    for (let i = 0; i < 2; i++) addCase({ requester: name, silent: true });
    toast(`${name} (Surgical Registrar) has arrived with requests.`);
    r.think();
  }
  // Forms under the door
  if (n >= G.T.flood) {
    floodT -= dt;
    if (floodT <= 0 && floodCount < 70) {
      floodT = rand(3, 7);
      floodCount++;
      const p = G.props.spawn('paper', rand(4.3, 5.7), 0.05, 8.3);
      p.vel.set(rand(-1.5, 1.5), 0.5, rand(-5, -3));
      if (floodCount === 1) toast('Request forms are being slid under your door.', 'bad');
    }
  }
  // Phone
  if (G.phoneQuiet > 0) G.phoneQuiet -= dt;
  if (n >= G.T.phone && !(G.phoneQuiet > 0)) G.phoneRinging = true;
  if (G.phoneRinging) {
    ringT -= dt;
    if (ringT <= 0) {
      ringT = 3;
      if (G.player.pos.z < 13) sfx.ring();
      G.world.phone.position.y = 0.8 + 0.03;
      setTimeout(() => (G.world.phone.position.y = 0.8), 150);
    }
  }
  // Corridor beds (bed block)
  if (n >= G.T.beds) {
    bedSpawnT -= dt;
    if (bedSpawnT <= 0 && corridorBeds < G.world.corridorBedSpots.length) {
      bedSpawnT = 22;
      const s = G.world.corridorBedSpots[corridorBeds++];
      const bed = G.props.spawn('bed', s.x, null, s.z, { yaw: Math.PI / 2 });
      const pt = spawnNpc({ role: 'patient', name: pick(PT_NAMES), x: s.x, z: s.z, home: { zone: 'corridor' } });
      pt.attachBed(bed);
      if (corridorBeds === 1) toast('Bed block. Patients are now lining the corridor, waiting on imaging.', 'bad');
    }
  }
  // VIP visitors
  if (n >= G.T.consultant && !consultant) {
    consultant = spawnNpc({ role: 'consultant', name: 'Dr Harrow (ED Consultant)', x: 10, z: 20, home: { zone: 'resus' } });
    consultant.setState('stalk');
    toast('The ED consultant has started looking for you personally.', 'bad');
  }
  if (consultant && n < G.T.consultant - 6) { consultant.dismiss = true; consultant = null; }
  if (n >= G.T.dms && !dms) {
    dms = spawnNpc({ role: 'dms', name: 'Gary from Executive', x: 31.5, z: 27, home: { zone: 'waiting' } });
    dms.setState('stalk');
    toast('The Director of Medical Services has entered the building. At 3am. In a suit.', 'bad');
  }
  if (dms && n < G.T.dms - 8) { dms.dismiss = true; dms = null; }

  // Microwave / toaster timers
  if (G.toastT > 0) G.toastT -= dt;
  if (G.microwaveBusy > 0) {
    G.microwaveBusy -= dt;
    if (G.microwaveFire && Math.random() < 0.3) { sfx.sparks(); for (let i = 0; i < 3; i++) G.flameFx.emit(11.55 + rand(-0.15, 0.15), 1.1, 1.62, rand(-1, 1), rand(0, 2), rand(0.5, 1.5), 0.25, 0.08, 0.02, 1, 0.9, 0.5, 1); }
    if (G.microwaveBusy <= 0) {
      G.world.microwaveGlow.material.color.set('#222');
      if (G.microwaveFire) { igniteByPlayer(11.6, 1.6, 0.8); toast('The microwave is on fire. Classic.', 'bad'); }
      else sfx.ding();
    }
  }

  // Fire
  G.scan.update(dt);
  deliverOrders(G);
  G.fire.update(dt);
  const burning = G.fire.burning.length > 0;
  if (burning) { G.alarmT += dt; G.noFireT = 0; } else G.noFireT += dt;
  if (!G.alarm && burning && G.alarmT > 2) {
    G.alarm = true;
    G.stats.alarms++;
    setAlarm(true);
    toast('CODE RED. FIRE ALARM. Everyone is evacuating (loudly).', 'bad');
    if (G.playerCausedFire) {
      G.wanted = 55;
      const nic = G.npcs.find((x) => x.role === 'nic');
      nic?.say('WHO DID THIS?! SECURITY!', 3, true);
    }
  }
  if (G.alarm && G.noFireT > 8) {
    G.alarm = false;
    G.alarmT = 0;
    G.playerCausedFire = false;
    setAlarm(false);
    toast('All clear. Everyone shuffles back inside, glaring at you.');
  }
  if (G.alarm && G.alarmT > 25 && !G.npcs.some((x) => x.role === 'firefighter')) {
    for (let i = 0; i < 3; i++) spawnNpc({ role: 'firefighter', name: pick(['Firefighter Kev', 'Firefighter Mo', 'Firefighter Tash', 'Firefighter Ange']), x: 9.5 + i, z: 27.5, home: { zone: 'outside' } }).setState('fight');
    toast('The fire brigade has arrived. They look tired of this hospital.');
  }
  // Sprinklers per zone
  let raining = false;
  const zoneBurning = {};
  for (const i of G.fire.burning) { const z = zoneAtWorld((i % W) + 0.5, Math.floor(i / W) + 0.5); if (z) zoneBurning[z.id] = true; }
  for (const z of ZONES) {
    if (z.id === 'outside') continue;
    const zf = zoneFire[z.id];
    zf.t = zoneBurning[z.id] ? zf.t + dt : Math.max(0, zf.t - dt);
    if (zf.t > 22 && zf.sprinkle <= 0) {
      zf.sprinkle = 20;
      toast(`Sprinklers activated in ${z.name}.`);
      if (z.id === 'reading') { G.pacsWet = 90; toast('Water is pouring onto PACS. That can\'t be good.', 'bad'); }
    }
    if (zf.sprinkle > 0) {
      zf.sprinkle -= dt;
      raining = true;
      G.fire.soakZone(z, dt);
      for (let k = 0; k < 6; k++) G.sprayFx.emit(rand(z.x0, z.x1 + 1), 2.9, rand(z.y0, z.y1 + 1), 0, -6, 0, 0.45, 0.05, 0.05, 0.6, 0.75, 1, 0.5);
      if (Math.random() < 0.05) G.world.puddle(Math.floor(rand(z.x0, z.x1 + 1)), Math.floor(rand(z.y0, z.y1 + 1)));
    }
  }
  rain(raining, dt);
  if (G.pacsWet > 0) G.pacsWet -= dt;

  // Burning cells -> particles, lights, curtains/benches/props
  let lightIdx = 0;
  const sorted = G.fire.burning.slice().sort((a, b) => G.fire.int[b] - G.fire.int[a]);
  const chosen = [];
  for (const i of sorted) {
    const I = G.fire.int[i];
    const x = (i % W) + 0.5, z = Math.floor(i / W) + 0.5;
    const rate = I * 16 * dt;
    const cnt = Math.min(6, Math.floor(rate) + (Math.random() < rate % 1 ? 1 : 0));
    for (let k = 0; k < cnt; k++) {
      G.flameFx.emit(x + rand(-0.45, 0.45), rand(0.05, 0.4), z + rand(-0.45, 0.45), rand(-0.2, 0.2), rand(1.2, 2.6) * (0.5 + I), rand(-0.2, 0.2), rand(0.5, 0.9), 0.7 + I * 0.6, 0.15, 1, rand(0.3, 0.65), 0.08, 0.85);
    }
    if (Math.random() < I * 3 * dt) G.smokeFx.emit(x + rand(-0.4, 0.4), 1.2 + I, z + rand(-0.4, 0.4), rand(-0.3, 0.3), rand(0.4, 0.9), rand(-0.3, 0.3), rand(4, 7), 0.8, 3.2, 0.13, 0.12, 0.12, 0.55, 0, 0.3);
    if (lightIdx < fireLights.length && !chosen.some((c) => Math.hypot(c.x - x, c.z - z) < 4)) {
      chosen.push({ x, z });
      const L = fireLights[lightIdx++];
      L.position.set(x, 1.3, z);
      L.intensity = (4 + Math.random() * 3) * I;
    }
  }
  for (; lightIdx < fireLights.length; lightIdx++) fireLights[lightIdx].intensity = 0;
  crackle(G.fire.total, dt);

  burnT -= dt;
  if (burnT <= 0) {
    burnT = 0.25;
    for (const b of G.world.burnables) {
      if (b.gone) continue;
      let I = 0;
      for (const c of b.cells) I = Math.max(I, G.fire.int[c]);
      if (I > 0.3) {
        b.char = Math.min(1.2, b.char + 0.06);
        b.mesh.material.color.lerp(new THREE.Color('#15110e'), 0.08);
        if (b.kind === 'curtain' && b.char >= 1) { b.mesh.visible = false; b.gone = true; }
      }
    }
  }
  // Props: burning, O2 rockets, hitting people
  for (const p of G.props.list.slice()) {
    if (p.pos.y < -8) {
      if (G.player.held === p) G.player.held = null;
      G.props.remove(p);
      if (p.T.light) toast(pick(['The golf ball sails off into the dark. A distant car alarm answers.', 'FORE! A faint tinkle of broken glass somewhere below.', 'The ball vanishes over the edge. A seagull files a complaint.']));
      else { G.stats.roofThrows++; toast(pick([`The ${p.T.name.toLowerCase()} falls six storeys. A car alarm goes off.`, `The ${p.T.name.toLowerCase()} disappears into the night. Someone below shouts.`, 'A distant crunch. You decide not to look.'])); }
      continue;
    }
    const I = G.fire.at(p.pos.x, p.pos.z);
    if (p.type === 'gel' && I > 0.2 && !p.held) {
      sfx.whoomph();
      for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) { G.fire.addFuel(p.pos.x + dx, p.pos.z + dz, 1.2); G.fire.ignite(p.pos.x + dx, p.pos.z + dz, 0.9); }
      toast('The hand sanitiser goes WHOOMPH. It is 70% alcohol, after all.', 'bad');
      G.props.remove(p);
      continue;
    }
    if (p.fuel > 0 && I > 0.3 && !p.held) {
      p.fuel -= 0.12 * dt;
      G.fire.addFuel(p.pos.x, p.pos.z, 0.3 * dt);
      G.props.charTo(p, p.char + 0.25 * dt);
      G.flames(p.pos.x, p.pos.y + 0.2, p.pos.z, 0.7);
      if (p.fuel <= 0 && (p.type === 'paper' || p.type === 'box' || p.type === 'sandwich')) { G.props.remove(p); continue; }
    }
    if (p.T.explosive && !p.spent && (I > 0.3 || (p.fuse || 0) > 0)) {
      p.fuse = (p.fuse || 0) + dt;
      if (p.fuse > 2.5) {
        p.spent = true;
        p.stuck = false; p.held = false;
        if (G.player.held === p) G.player.held = null;
        const a = Math.random() * Math.PI * 2;
        p.vel.set(Math.cos(a) * 16, 7, Math.sin(a) * 16);
        p.spin = 20;
        p.rocket = 2.5;
        G.stats.rockets++;
        sfx.whoomph();
        toast('An oxygen cylinder has become a rocket.', 'bad');
      }
    }
    if (p.T.spill && !p.spilled && !p.held && Math.hypot(p.vel.x, p.vel.z) > 3.5) spill(p);
    if (p.rocket > 0) { p.rocket -= dt; for (let k = 0; k < 3; k++) G.flames(p.pos.x, p.pos.y, p.pos.z, 1.2); if (Math.random() < 0.2) G.fire.ignite(p.pos.x, p.pos.z, 0.3); }
    const sp = p.pushed ? Math.hypot(G.player.vel.x, G.player.vel.z) : Math.hypot(p.vel.x, p.vel.z, p.vel.y * 0.5);
    // Fast projectile smashes a car window.
    if (sp > 5 && !p.held && !p.pushed && p.pos.y < 1.6 && G.cars.hitAt(p.pos.x, p.pos.z, p.pos.y)) p.vel.multiplyScalar(-0.3);
    if (sp > 3.2 && !p.held) {
      for (const n of G.npcs) {
        if (n === p.rider || n.state === 'knocked' || n.state === 'lie') continue;
        const dx = n.pos.x - p.pos.x, dz = n.pos.y - p.pos.z;
        if (dx * dx + dz * dz < (p.T.r + 0.4) ** 2 && p.pos.y < n.hitH) {
          const vx = p.pushed ? G.player.vel.x : p.vel.x, vz = p.pushed ? G.player.vel.z : p.vel.z;
          if (p.T.light) { sfx.ow(); n.knock(vx * 0.12, vz * 0.12, false, 0.4, pick(['OW!', 'OI!', 'MY EYE!', 'FORE?!'])); p.vel.multiplyScalar(0.4); }
          else if (p.T.bonk) { sfx.clang(); G.stats.bonks++; n.knock(vx * 0.7, vz * 0.7, true, 2, pick(['BONK', '*CLANG*', 'IS THAT A BEDPAN?!'])); }
          else n.knock(vx * 0.7, vz * 0.7, true);
          if (!p.pushed && !p.T.bed && !p.T.light) p.vel.multiplyScalar(0.3);
        }
      }
    }
  }
  // Player vs fire / props / npcs
  const P = G.player;
  if (G.fire.at(P.pos.x, P.pos.z) > 0.45 && P.y < 1 && !(P.onFire > 0)) {
    P.onFire = 4;
    G.stats.selfIgnitions++;
    sfx.scream();
    toast('YOU ARE ON FIRE. Stop, drop and... keep running, apparently.', 'bad');
  }
  if (P.onFire > 0) {
    P.onFire -= dt;
    const f = P.forward();
    G.flames(P.pos.x + f.x * 0.4, 1.0, P.pos.z + f.z * 0.4, 0.6);
    if (G.fire.wet[Math.floor(P.pos.z) * W + Math.floor(P.pos.x)] > 0) P.onFire = 0;
    if (P.onFire <= 0) { G.sootT = 25; $('soot').hidden = false; }
  }
  if (G.sootT > 0) { G.sootT -= dt; if (G.sootT <= 0) $('soot').hidden = true; }
  for (const p of G.props.list) {
    if (p.held || p.pushed || p.stuck || p.pos.y > p.T.h / 2 + 0.3) continue;
    const dx = p.pos.x - P.pos.x, dz = p.pos.z - P.pos.z;
    const rr = p.T.r + 0.3;
    const d2 = dx * dx + dz * dz;
    if (d2 < rr * rr && d2 > 1e-6) {
      const d = Math.sqrt(d2);
      const push = (rr - d) * (p.T.mass > 20 ? 0.5 : 1);
      p.pos.x += (dx / d) * push; p.pos.z += (dz / d) * push;
      const kick = p.T.mass < 3 ? 1.4 : p.T.mass < 20 ? 0.9 : 0.4;
      p.vel.x += (P.vel.x * kick - p.vel.x) * 0.3; p.vel.z += (P.vel.z * kick - p.vel.z) * 0.3;
    }
  }
  // Walking into the MRI scan room with metal on you
  const inMri = zoneAtWorld(P.pos.x, P.pos.z)?.id === 'mri' && !P.hidden;
  if (inMri && !G.quenched) {
    const rad = G.npcs.find((n) => n.role === 'radiographer' && n.scanner === 'mri');
    if (!G.wasInMri && rad && (P.held?.T.metal || P.pushing?.T.metal || !G.pagerGone)) rad.say(pick(['STOP! METAL!', 'Did you fill in the safety questionnaire?!', 'NOT WITH THAT! ZONE FOUR!']), 3, true);
    if (!G.pagerGone && P.pos.x > 35) {
      G.pagerGone = true;
      G.pagerStuck = true;
      const pg = G.props.spawn('pager', P.pos.x, 1.0, P.pos.z);
      pg.vel.set(3, 1, 0);
      toast('Your pager rips off your belt and flies into the magnet. The pages have stopped. This might be the best night of your life.', 'good');
      if (!G.cardsWiped) { G.cardsWiped = true; setTimeout(() => toast('Also, your bank cards have been wiped. And your hospital ID. The door readers no longer know you.'), 3500); }
    }
  }
  G.wasInMri = inMri;
  // MRI yanks metal out of your hands
  if (!G.quenched && zoneAtWorld(P.pos.x, P.pos.z)?.id === 'mri') {
    const m = G.world.magnet;
    const d = Math.hypot(m.x - P.pos.x, m.z - P.pos.z);
    const held = P.held || P.pushing;
    if (held && held.T.metal && d < 6.5) {
      if (P.pushing) releaseBed(false); else dropHeld();
      held.vel.set((m.x - held.pos.x) * 2, 1, (m.z - held.pos.z) * 2);
      toast(`The magnet yanks the ${held.T.name.toLowerCase()} out of your hands.`);
    }
  }
  // NPC separation
  const N = G.npcs;
  for (let i = 0; i < N.length; i++) {
    const a = N[i];
    if (a.state === 'lie' || a.state === 'sit' || a.state === 'pinned') continue;
    const dxp = a.pos.x - P.pos.x, dzp = a.pos.y - P.pos.z, dp = Math.hypot(dxp, dzp);
    const pSpeed = Math.hypot(P.vel.x, P.vel.z);
    if (dp < 0.75 && pSpeed > 5 && !P.hidden && a.state !== 'knocked' && a.role !== 'ghost') {
      G.stats.tackles++;
      if (G.stats.tackles === 1) toast('TACKLE. That is not in your job description.');
      sfx.thud(1);
      a.knock(P.vel.x * 1.2, P.vel.z * 1.2, true, 2, pick(['TACKLED!', 'OOOF', 'WHAT THE—']));
      P.vel.x *= 0.4; P.vel.z *= 0.4;
    }
    if (dp < 0.6 && dp > 1e-4) { a.pos.x += (dxp / dp) * (0.6 - dp); a.pos.y += (dzp / dp) * (0.6 - dp); }
    if (G.spills.length && a.state !== 'knocked' && a.role !== 'ghost' && a.vel.lengthSq() > 0.5) {
      for (const sp of G.spills) {
        if (Math.hypot(a.pos.x - sp.x, a.pos.y - sp.z) < sp.r) {
          G.stats.slips++;
          a.knock(a.vel.x * 2.5, a.vel.y * 2.5, false, 2.5, pick(['WHOA—', 'WET FLOOR!!', 'NO SIGN?!', 'AAAH—']));
          break;
        }
      }
    }
    for (let j = i + 1; j < N.length; j++) {
      const b = N[j];
      if (b.state === 'lie' || b.state === 'sit' || b.state === 'pinned') continue;
      const dx = b.pos.x - a.pos.x, dz = b.pos.y - a.pos.y, d = Math.hypot(dx, dz);
      if (d < 0.55 && d > 1e-4) {
        const k = (0.55 - d) / 2;
        a.pos.x -= (dx / d) * k; a.pos.y -= (dz / d) * k;
        b.pos.x += (dx / d) * k; b.pos.y += (dz / d) * k;
      }
    }
  }
  if (G.wanted > 0) G.wanted -= dt;
  if (G.kickT > 0) G.kickT -= dt;
  if (G.defibT > 0) G.defibT -= dt;
  for (const sp of G.spills.slice()) { sp.t -= dt; if (sp.t <= 0) G.spills.splice(G.spills.indexOf(sp), 1); }

  // Smoke haze
  smoke += (Math.min(1, G.fire.total / 30) - smoke) * Math.min(1, dt * 0.5);
  scene.fog.density = 0.004 + smoke * 0.07;
  G.world.panelMat.color.setScalar(1 - smoke * 0.6);
  const t = performance.now() / 1000;
  G.world.alarmLight.intensity = G.alarm ? (Math.sin(t * 8) > 0 ? 7 : 0) : 0;
  G.world.ambulanceBar.material.color.set(Math.sin(t * 6) > 0 ? '#ff2a2a' : '#2a5bff');

  tvT -= dt;
  if (tvT <= 0) { tvT = 1; drawTVs(); if (G.mode !== 'pacs') G.pacs.drawMonitors(); else G.pacs.renderList(); }
}

// ---------------------------------------------------------------- flow
function resumePlay() {
  G.mode = 'play';
  $('hud').classList.remove('dim');
  if (!G.touch) G.player.lock();
}
G.closePacs = () => {
  G.pacs.close();
  hideForm();
  resumePlay();
};

document.addEventListener('pointerlockchange', () => {
  if (!document.pointerLockElement && G.mode === 'play' && !G.player.freeLook && !G.touch) {
    G.mode = 'paused';
    $('paused').hidden = false;
  }
});
document.addEventListener('pointerlockerror', () => {
  if (G.touch) return;
  if (G.player.everLocked) {
    if (G.mode === 'play') { G.mode = 'paused'; $('paused').hidden = false; }
    return;
  }
  if (G.mode === 'play' || G.mode === 'paused') {
    G.player.freeLook = true;
    $('paused').hidden = true;
    G.mode = 'play';
    toast('Mouse capture is unavailable here: drag with the left button to look around, click to act.');
  }
});
$('paused').addEventListener('click', () => { $('paused').hidden = true; resumePlay(); });
$('start-btn').addEventListener('click', () => {
  initAudio();
  $('start').hidden = true;
  $('hud').hidden = false;
  G.player.pitch = -0.05;
  resumePlay();
  toast('Your shift has started. 3 requests are already waiting. Your pager is at 100%.');
});
canvas.addEventListener('click', () => { if (G.mode === 'play' && !G.touch && !G.player.locked && !G.player.freeLook) G.player.lock(); });
G.touch = isTouchDevice();
if (G.touch) setupTouch(G);

function endShift() {
  G.mode = 'morning';
  if (G.cars.driving) G.cars.exit();
  G.player.unlock();
  setAlarm(false);
  G.world.alarmLight.intensity = 0;
  for (const id of ['alarm-vignette', 'fire-overlay', 'soot', 'help', 'paused', 'hide-overlay', 'lift-modal', 'argue-modal', 'riskman']) $(id).hidden = true;
  const s = G.stats;
  const unrep = G.list();
  const argued = G.cases.filter((c) => c.cancelled && c.cancelled !== 'clinical' && c.path !== 'normal');
  const chaos = s.kicks * 2 + s.tackles * 2 + s.zaps * 4 + s.slips + s.bonks + s.standDowns * 5 + s.wildWins * 4 + s.roofFalls * 5 + s.boilers * 6 + s.helis * 3 + s.roofThrows + s.fires * 3 + s.hits + s.bedsLaunched * 2 + s.npcsIgnited * 4 + s.mriStuck * 2 + s.quenches * 10 + s.rockets * 5 + s.caught * 3 + s.ctJokes * 2 + s.sandwiches + s.carsJacked * 4 + s.carsSmashed * 2 + s.ranOver * 3 + s.golfBalls + s.honks;
  const clinical = s.correct * 10 + s.nailed * 5 - s.wrong.length * 8 - unrep * 5 + s.goodCatches * 4 - argued.length * 6 + s.clinicalCalls * 8;
  const headlines = [];
  if (s.standDowns) headlines.push(`${s.standDowns} DOCTOR${s.standDowns > 1 ? 'S' : ''} STOOD DOWN AFTER NIGHT-LONG RISKMANN BLITZ BY RADIOLOGIST`);
  else if (s.riskmansFiled >= 5) headlines.push(`RADIOLOGIST FILES ${s.riskmansFiled} INCIDENT REPORTS IN ONE NIGHT`);
  if (s.ranOver >= 2) headlines.push(`CAR DRIVEN THROUGH ED; ${s.ranOver} "CARTOONISHLY" INJURED`);
  else if (s.carsJacked) headlines.push('STAFF CAR PARK "NO LONGER SAFE", RADIOLOGIST SUSPECTED');
  if (s.carsSmashed >= 3) headlines.push(`${s.carsSmashed} CARS VANDALISED IN ONE NIGHT; ALARMS "WENT ON FOR HOURS"`);
  if (s.golfBalls >= 20) headlines.push('GOLF BALLS RAINING ON CAR PARK; "IS SOMEONE ON THE ROOF?"');
  if (s.orderSpend >= 2000) headlines.push(`RADIOLOGY COST CENTRE $${s.orderSpend.toLocaleString()} OVER ON "EQUIPMENT"`);
  if (s.pinned) headlines.push(`${s.pinned} STAFF PINNED TO MRI MAGNET; PHYSICIST "NOT SURPRISED"`);
  if (G.pagerGone) headlines.push('RADIOLOGIST\'S PAGER FOUND STUCK TO MRI; "FIRST QUIET NIGHT IN YEARS"');
  if (s.radiationDoses >= 3) headlines.push(`RADIOLOGIST STANDS IN SCAN ROOM ${s.radiationDoses} TIMES; RADIOGRAPHERS UNION CONSULTED`);
  if (s.zaps) headlines.push(`${s.zaps} PEOPLE DEFIBRILLATED "FOR NO CLINICAL REASON"`);
  if (s.kicks + s.tackles >= 5) headlines.push('ED STAFF REQUEST SHIN GUARDS FOR NIGHT SHIFT');
  if (s.wildWins) headlines.push(`RADIOLOGIST TELLS ED: ${(s.wildUsed || '').replace(/\(.*?\)/g, '').replace(/"/g, '').trim().replace(/\.$/, '').toUpperCase()}`);
  if (s.roofFalls) headlines.push('RADIOLOGIST FLIES OFF ROOF ON FIRE EXTINGUISHER, REPORTS OWN CT');
  if (s.timesFound) headlines.push(`RADIOLOGIST FOUND HIDING ${String(s.foundIn).toUpperCase()}`);
  else if (s.hides >= 3) headlines.push('ON-CALL RADIOLOGIST "IMPOSSIBLE TO FIND", SAY REGISTRARS');
  if (s.boilers) headlines.push('BASEMENT BOILER EXPLODES; "SOMEONE CRANKED IT", SAYS MAINTENANCE');
  if (s.ancient) headlines.push('1987 SCAN FINALLY ON A WORKLIST');
  if (s.quenches) headlines.push('MRI QUENCHED AT 3AM: "$1.2 MILLION OF HELIUM, GONE"');
  if (s.fires >= 3) headlines.push(`${s.fires} FIRES IN ONE NIGHT: MICROWAVE NOW BANNED HOSPITAL-WIDE`);
  else if (s.fires) headlines.push('FIRE IN ED. RADIOLOGIST "NOWHERE NEAR IT", SAYS RADIOLOGIST');
  if (unrep >= 20) headlines.push(`${unrep} SCANS UNREPORTED AT HANDOVER: DAY TEAM WEEPS`);
  if (s.bedsLaunched >= 3) headlines.push('PATIENTS REPORT "RIDES" DOWN ED CORRIDOR');
  if (s.npcsIgnited) headlines.push(`${s.npcsIgnited} STAFF/PATIENTS BRIEFLY ON FIRE ("FINE NOW, JUST SOOTY")`);
  if (s.rockets) headlines.push('OXYGEN CYLINDER REACHES LOW EARTH ORBIT');
  if (s.ctJokes) headlines.push('VISITORS SCANNED "FOR NO REASON", CONFIRMS CT');
  if (s.correct >= 15 && !s.fires) headlines.push('RADIOLOGIST ACTUALLY DOES JOB; HOSPITAL STUNNED');
  if (!headlines.length) headlines.push('QUIET NIGHT IN ED (NOBODY BELIEVES IT)');
  const grade = clinical >= 80 ? (chaos >= 30 ? 'Brilliant but Banned' : 'Model Consultant') : clinical >= 20 ? (chaos >= 30 ? 'Chaotic Neutral' : 'Solid Registrar Energy') : chaos >= 30 ? 'Deregistered (Legendary)' : 'Asleep on the Couch';
  $('m-headline').textContent = headlines[0];
  $('m-sub').innerHTML = headlines.slice(1, 4).map((h) => `<li>${h}</li>`).join('');
  $('m-grade').textContent = grade;
  const rows = [
    ['Studies reported', s.reported], ['Correct diagnoses', s.correct], ['Lesions nailed', s.nailed], ['Speed-reported "normal"', s.speed],
    ['Unreported at handover', unrep], ['Peak worklist', s.peakList], ['Pages received', s.pages], ['Nags endured', s.nags],
    ['Forms bounced (good catches)', `${s.formsBounced} (${s.goodCatches})`], ['Fires started', s.fires], ['Fire alarms', s.alarms], ['People knocked over', s.hits],
    ['Beds launched', s.bedsLaunched], ['People set on fire', s.npcsIgnited], ['Items lost to the MRI', s.mriStuck], ['O2 rockets', s.rockets],
    ['Caught by security', s.caught], ['Sandwiches stolen', s.sandwiches], ['Cat pets', s.catPets], ['Naps', s.naps],
    ['Arguments won / lost', `${s.argumentsWon} / ${s.argumentsLost}`], ['Wild arguments that worked', s.wildWins], ['Times hidden', s.hides], ['Times found hiding', s.timesFound],
    ['Kicks / tackles', `${s.kicks} / ${s.tackles}`], ['Defibrillated (not in arrest)', s.zaps], ['Slipped on your spill', s.slips], ['Bedpan bonks', s.bonks],
    ['RiskManns filed / upheld', `${s.riskmansFiled} / ${s.riskmansUpheld}`], ['Vexatious reports', s.vexatious], ['Colleagues stood down', s.standDowns], ['RiskManns about you', G.riskman.aboutYou.length],
    ['Patients scanned tonight', s.scanned], ['People pinned to the MRI', s.pinned], ['Pages missed (pager in magnet)', s.pagesMissed], ['Times you stood in the room during a scan', s.radiationDoses],
    ['Straight-to-theatre calls', s.clinicalCalls], ['Searches evaded', s.searchesEvaded], ['Knocks on your door', s.knocks], ['Lift rides', s.liftRides], ['Things thrown off the roof', s.roofThrows],
    ['Cars broken into', s.carsJacked], ['Car windows smashed', s.carsSmashed], ['Car crashes', s.carCrashes], ['People run over (cartoonishly)', s.ranOver],
    ['Golf balls hit', s.golfBalls], ['Air horn blasts', s.honks], ['RiskBay orders', s.ordersPlaced], ['Spent on RiskBay', `$${s.orderSpend.toLocaleString()}`],
  ];
  $('m-stats').innerHTML = rows.map(([k, v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('');
  const mm = s.wrong.slice(0, 8).map((c) => `<li><b>${c.patient}</b>, ${c.study}: you said "${FINDINGS[c.modality][c.finding]}". It was <b>${FINDINGS[c.modality][c.path]}</b>.</li>`);
  for (const c of argued.slice(0, 5)) mm.push(`<li><b>${c.patient}</b>, ${c.study}: you argued it out of existence${c.cancelled === 'wild' ? ' with a completely made-up reason' : ''}. It was <b>${FINDINGS[c.modality][c.path]}</b>.</li>`);
  $('m-mm').innerHTML = mm.length ? mm.join('') : '<li>No misses. Suspicious, but well done.</li>';
  $('m-scores').textContent = `Clinical ${clinical} · Chaos ${chaos}`;
  $('morning').hidden = false;
  $('hud').hidden = true;
  G.pacs.close();
  hideForm();
}
$('again-btn').addEventListener('click', () => location.reload());

// ---------------------------------------------------------------- loop
function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  const scale = (h * renderer.getPixelRatio()) / 2 / Math.tan((camera.fov * Math.PI) / 360);
  for (const p of [G.flameFx, G.smokeFx, G.sprayFx]) p.uniforms.uScale.value = scale;
}
window.addEventListener('resize', resize);
resize();

populate();
for (let i = 0; i < 3; i++) addCase({ silent: true, prescanned: true });
G.time = 0;
drawTVs();
G.pacs.drawMonitors();

let last = performance.now();
let promptT = 0;
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  const active = G.mode === 'play' || G.mode === 'pacs' || G.mode === 'form';
  if (active) {
    G.time += dt * GAME_MIN_PER_SEC;
    if (G.time >= SHIFT_MINUTES) endShift();
    G.player.enabled = G.mode === 'play';
    if (G.mode === 'play') G.cars.update(dt);
    G.player.update(dt, G);
    if (G.mode === 'play') handleMouse(dt);
    G.props.update(dt, G);
    for (const n of G.npcs) n.update(dt);
    for (const n of G.npcs.filter((x) => x.remove)) { n.dispose(); G.npcs.splice(G.npcs.indexOf(n), 1); G.leaveQueue(n); }
    updateSystems(dt);
    promptT -= dt;
    if (promptT <= 0) { promptT = 0.1; setText('prompt', G.mode === 'play' ? currentPrompt() : ''); }
    updateHud();
  } else if (G.mode === 'start') {
    // Slow orbit over the ED behind the title card.
    const t = now / 1000;
    camera.position.set(22 + Math.sin(t * 0.07) * 14, 9, 13 + Math.cos(t * 0.07) * 10);
    camera.lookAt(20, 0, 14);
    for (const n of G.npcs) n.update(dt * 0.5);
  }
  G.flameFx.update(dt);
  G.smokeFx.update(dt);
  G.sprayFx.update(dt, 3.5);
  renderer.render(scene, camera);
}
requestAnimationFrame(frame);

// Bouncing a request turns into an argument. The registrar has "resolve"; your arguments wear it down.
// Every reply answers what you actually said, and depends on the case: if the patient really is sick
// (the scan will show something), sensible arguments bounce off. Read the form: form-based arguments are
// devastating when the form really has that problem and embarrassing when it doesn't.
import { sfx } from './audio.js';

const $ = (id) => document.getElementById(id);
const pick = (a) => a[Math.floor(Math.random() * a.length)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// What the registrar is worried about. If the patient really is sick, they've usually guessed right;
// otherwise it comes from the question on the form.
const SUS_BY_PATH = {
  freeair: 'a perforation', collection: 'a collection', sbo: 'a bowel obstruction', aaa: 'a leaking aneurysm',
  appendicitis: 'appendicitis', renal_stone: 'an obstructing kidney stone', edh: 'a bleed', sdh: 'a bleed',
  infarct: 'a stroke', sah: 'a subarachnoid bleed', pe: 'a PE', ptx: 'a pneumothorax', mass: 'a tumour',
  consolidation: 'a pneumonia, or maybe a PE', necfasc: 'necrotising fasciitis', effusion: 'a septic joint',
};
function suspicion(c) {
  if (SUS_BY_PATH[c.path]) return SUS_BY_PATH[c.path];
  const q = c.question.toLowerCase();
  if (c.joke) return 'a swallowed foreign body';
  if (c.modality === 'us' || q.includes('septic')) return 'a septic joint';
  if (q.includes('nec fasc')) return 'necrotising fasciitis';
  if (q.includes('perforation')) return 'a perforation';
  if (q.includes('collection')) return 'a collection';
  if (q.includes('sbo')) return 'a bowel obstruction';
  if (q.includes('aaa')) return 'a leaking aneurysm';
  if (q.includes('append')) return 'appendicitis';
  if (q.includes('renal')) return 'a kidney stone';
  if (q.includes('stroke')) return 'a stroke';
  if (q.includes('sah')) return 'a subarachnoid bleed';
  if (q.includes('bleed') || q.includes('haemorrhage')) return 'a bleed';
  if (q.includes('pe')) return 'a PE';
  if (c.modality === 'head') return 'something intracranial';
  return 'something serious';
}

// The clinical fact that makes a real case convincing (only true when the scan is actually positive).
const FACTS = {
  freeair: ['They\'re rigid, febrile and their heart rate is 130.', 'They had a colonoscopy two days ago and now it hurts everywhere.'],
  collection: ['Swinging fevers and a CRP of 240.', 'They\'re five days post-op and getting worse, not better.'],
  sbo: ['They\'re vomiting and haven\'t passed wind for two days.', 'Their belly is like a drum and they\'ve had three laparotomies.'],
  aaa: ['Their BP is 90 systolic and I can feel a pulsatile mass.', 'They\'re pale, sweaty, and the pain goes straight through to their back.'],
  appendicitis: ['Rebound tenderness in the right iliac fossa and a white count of 15.', 'The pain started around the belly button and moved to the right. Classic.'],
  renal_stone: ['They\'re writhing in pain with blood in their urine.', 'Their creatinine is climbing, so I\'m worried it\'s obstructing.'],
  edh: ['Their GCS dropped from 15 to 12 in the last hour.', 'They were talking fine, then they weren\'t. Lucid interval.'],
  sdh: ['They\'re on apixaban and getting more confused by the minute.', 'Three falls this week and they\'re drowsier every time I check.'],
  infarct: ['New arm weakness and they can\'t get their words out. It\'s a code stroke.', 'Onset was 40 minutes ago. We\'re inside the window for treatment.'],
  sah: ['Worst headache of their life and a stiff neck.', 'It came on like a thunderclap, mid-sentence.'],
  pe: ['Sats are 89% and they\'re tachycardic, four days post-op.', 'Their calf is swollen and the D-dimer is sky high.'],
  ptx: ['Sudden pleuritic pain and reduced air entry on one side.', 'Tall, thin, young, and they can\'t catch their breath.'],
  mass: ['Forty pack-years and they\'re coughing up blood.', 'They\'ve lost ten kilos without trying.'],
  consolidation: ['Febrile with crackles, and the X-ray is equivocal.', 'They\'re getting more short of breath despite antibiotics.'],
  fork: ['They swallowed a fork. A whole fork.', 'It was a dare. The fork is now inside them.'],
  pager: ['The pager is still beeping. From inside them.', 'It went off twice while I was examining them.'],
  sandwich: ['There is a sandwich somewhere a sandwich should not be.', 'They say it "went down wrong". They want it back.'],
  necfasc: ['Pain way out of proportion, and I think I can feel crepitus.', 'The redness has spread past the line I drew an hour ago.'],
  effusion: ['Hot, swollen hip, a fever of 39 and a CRP of 180.', 'They won\'t let me move it at all. It\'s held flexed and externally rotated.'],
};
const VAGUE = {
  abdo: 'Their abdomen is soft, but they say it really hurts.',
  head: 'They bumped their head and the family is very worried.',
  chest: 'Some chest pain. Obs are normal, but I just want to be sure.',
  us: 'Their hip is sore. They did walk in, to be fair.',
};

// Your sensible arguments. `weak` reply = the request really is flimsy; `strong` = the patient is actually sick.
const SENSIBLE = [
  { id: 'question', text: '"What\'s the actual clinical question?"', weakPower: 1.6, strongPower: 0.5,
    weak: (c, s) => `Honestly? To rule out ${s}. They look... fine-ish.`,
    strong: (c, s) => `Whether this is ${s}. If it is, they need treatment tonight.` },
  { id: 'senior', text: '"Has a senior actually examined them?"', weakPower: 1.3, strongPower: 0.4,
    weak: () => 'Not yet. The consultant is stuck in resus with a trauma.',
    strong: () => 'Yes. My consultant examined them and wants the scan tonight.' },
  { id: 'manage', text: '"How will this scan change what you do tonight?"', weakPower: 1.6, strongPower: 0.5,
    weak: () => 'It would... reassure everyone? Mostly me.',
    strong: (c) => ({ abdo: 'If it\'s positive they go to theatre tonight. If not, the surgeons won\'t even see them.', head: 'If there\'s a bleed, neurosurgery needs to know now.', chest: 'If it\'s a PE they need anticoagulation now. If it\'s not, we keep looking.', us: 'If there\'s pus, it needs washing out tonight.' })[c.modality] },
  { id: 'previous', text: '"Have you checked their previous imaging?"', weakPower: 1.8, strongPower: 0.3,
    weak: () => 'Oh. They had the same scan last month. It was normal.',
    strong: () => 'Nothing recent. Their last scan was years ago.' },
  { id: 'details', text: '"The clinical details on this form are pretty thin."', weakPower: 1.2, strongPower: 0.4,
    weak: () => 'Fair. I wrote it in a hurry at handover. There isn\'t much more to add.',
    strong: (c) => `I wrote it fast. What I didn't write down: ${FACTS[c.path][1]}` },
];
const ALT = {
  abdo: { id: 'alt', text: '"Could we ultrasound first?"', weakPower: 1.5, strongPower: 0.4,
    weak: () => 'I suppose we could. The sonographer is in at 8.',
    strong: (c, s) => `Ultrasound won't rule out ${s}, and the sonographer went home at 5.` },
  chest: { id: 'alt', text: '"Would a chest X-ray answer this?"', weakPower: 1.5, strongPower: 0.4,
    weak: () => 'The X-ray was normal, actually. Maybe that\'s enough.',
    strong: (c) => (c.path === 'pe' ? 'The X-ray was clear. That\'s exactly why I\'m worried about a PE.' : 'The X-ray looks odd and we need to know what it is.') },
  us: { id: 'alt', text: '"Have they had an X-ray of the hip?"', weakPower: 1.4, strongPower: 0.4,
    weak: () => 'Yes. Normal. Bit of arthritis, that\'s all.',
    strong: () => 'Normal. Which doesn\'t rule out a septic joint, as you know.' },
  head: { id: 'alt', text: '"Does this even meet the CT head rules?"', weakPower: 1.6, strongPower: 0.4,
    weak: () => 'Um. Not strictly. They\'re GCS 15 and chatting away.',
    strong: (c) => `It does. ${FACTS[c.path][1]}` },
};

// Arguments that only make sense for particular requests. `clinical` means that, if the patient really is
// sick, the argument wins by sending them straight to theatre (no scan needed, and no M&M for you).
const SPECIAL = [
  { id: 'alvarado', when: (c, s) => s === 'appendicitis', text: '"What\'s the Alvarado?"', weakPower: 2.0, strongPower: 0.3,
    weak: () => 'Um... about a 3? Mild tenderness, no fever, normal white count.',
    strong: () => 'Eight. Migratory pain, anorexia, RIF tenderness, rebound, a fever and a white count of 15.' },
  { id: 'clinapp', when: (c, s) => s === 'appendicitis', after: 'alvarado', clinical: true,
    text: '"So you\'ve got clinically diagnosed appendicitis. Do they need a scan?"',
    weak: () => 'Well... it\'s not really a clinical diagnosis. That\'s the whole point of the scan.',
    strongWin: '...Huh. The surgeons did say they\'d take a high Alvarado straight to theatre. I\'ll call them.',
    strongNotYet: 'It\'s not THAT clear-cut. It could be a collection or something else.' },
  { id: 'effusion', when: (c) => c.modality === 'us', text: '"You want a joint aspirate. How do you know there\'s an effusion?"', weakPower: 2.2, strongPower: 0.3,
    weak: () => '...I don\'t, really. I couldn\'t feel one. I just assumed.',
    strong: () => 'Bedside ultrasound in ED showed a big effusion. I just can\'t get the needle in.' },
  { id: 'ortho', when: (c) => c.modality === 'us', clinical: true,
    text: '"If you\'re suspecting a septic joint, why aren\'t ortho taking them to theatre?"',
    weak: () => 'Because... it\'s probably not septic. Their CRP is 12.', weakPower: 1.8,
    strongWin: '...Ortho did say they\'d wash it out if it\'s pus. Fine. I\'ll push them to take it straight to theatre.' },
  { id: 'necfasc', when: (c, s) => s === 'necrotising fasciitis', clinical: true,
    text: '"Nec fasc is a clinical diagnosis."',
    weak: () => 'Honestly, it\'s probably just cellulitis. I wanted to be sure.', weakPower: 1.8,
    strongWin: '...You\'re right. If I\'m this worried, they need theatre, not CT. I\'m calling the surgeons.' },
];

// Form-based arguments: only strong if the form actually has the problem.
function formArguments(c) {
  const out = [];
  const flagged = (k) => c.redFlags.includes(k);
  if (c.sex === 'F' && c.age < 55) {
    out.push({ id: 'preg', text: '"Pregnancy status isn\'t documented."', valid: flagged('Pregnancy status not documented'),
      yes: 'Oh no. You\'re right, I didn\'t ask. I\'ll get a pregnancy test first.',
      no: 'It is. It\'s ticked "No" on the form. Right there.' });
  } else {
    out.push({ id: 'preg', text: '"Is there any chance they\'re pregnant?"', valid: false,
      no: c.sex === 'M' ? 'The patient is a man.' : `She's ${c.age}. It's not a concern.` });
  }
  out.push({ id: 'egfr', text: '"Has anyone checked their kidney function for contrast?"', valid: flagged('eGFR 24, contrast not approved'),
    yes: 'Oh. eGFR 24. I didn\'t see that. I\'ll speak to the renal team first.',
    no: c.modality === 'head' ? 'It\'s a non-contrast CT head. There\'s no contrast.' : c.modality === 'us' ? 'It\'s an ultrasound. There\'s no contrast.' : `Their eGFR is ${70 + (c.seed % 25)}. It's fine.` });
  out.push({ id: 'pager', text: '"There\'s no pager number. How would I call you with the result?"', valid: flagged('Pager field blank (mandatory)'),
    yes: 'Oops. I left it blank. I\'ll fix the form and come back.',
    no: `It's on the form. ${c.pager}. Bottom right.` });
  return out;
}

// Wild arguments. `win`/`fail` reply to that specific claim.
const WILD = [
  { id: 'radiation', text: '"We\'re out of radiation tonight."', rumor: 'Apparently we\'re out of radiation??',
    win: 'You can run OUT? Oh no. I\'ll tell the others.', fail: 'The scanner makes X-rays from electricity. You can\'t run out.' },
  { id: 'odd', text: '"After midnight the scanner only does patients with odd hospital numbers."', rumor: 'CT only does odd hospital numbers at night now?',
    win: '', fail: '' },
  { id: 'mercury', text: '"Mercury is in retrograde. The contrast won\'t flow."', rumor: 'Contrast doesn\'t flow during Mercury retrograde, did you know?', skip: (c) => c.modality === 'head',
    win: 'Is THAT why the pump alarmed earlier? Okay. I\'ll wait.', fail: 'That\'s astrology. The contrast pump doesn\'t care.' },
  { id: 'quota', text: '"The physicist says we\'ve used up this month\'s X-rays."', rumor: 'We\'ve used up this month\'s X-rays apparently.',
    win: 'There\'s a monthly allowance? Nobody told ED. I\'ll let them know.', fail: 'There\'s no monthly quota. The physicist literally told us that at teaching.' },
  { id: 'abdomen', text: '"I\'m legally not allowed to look at abdomens after 2am."', rumor: 'Radiology can\'t look at abdomens after 2am. Legal thing.', skip: (c) => c.modality !== 'abdo',
    win: 'Is that a college rule? I don\'t want to get you in trouble.', fail: 'You reported an abdomen at 3am last week. I was there.' },
  { id: 'haunted', text: '"The CT is haunted. I\'m not going in there."', rumor: 'The CT scanner is haunted. Radiology confirmed it.',
    win: 'The radiographers DID say the table moves on its own... Okay.', fail: 'It\'s not haunted. That noise is the cooling fan.' },
  { id: 'aura', text: '"I checked their aura from the corridor. It\'s fine."', rumor: 'Radiology is triaging by aura now.',
    win: 'Their aura did look calm, now you mention it. I\'ll observe them.', fail: 'You haven\'t even seen the patient.' },
  { id: 'emotional', text: '"I already reported it. Emotionally."', rumor: 'Radiology reported a scan... emotionally?',
    win: 'Is that the new reporting system? I\'ll check PACS later then.', fail: 'That\'s not how reporting works. There\'s nothing on PACS.' },
  { id: 'union', text: '"The scanner is on its union-mandated break."', rumor: 'The CT scanner is on a union break.',
    win: 'I\'m not crossing a picket line. I\'ll wait.', fail: 'Scanners can\'t join unions.' },
  { id: 'powers', text: '"That much radiation could give them superpowers. Liability issue."', rumor: 'Too much CT gives you superpowers. Liability thing.',
    win: 'That\'s a lawsuit waiting to happen. Good point.', fail: 'If that were true, the radiographers could fly by now.' },
  { id: 'helium', text: '"We\'re low on helium." (That\'s the MRI. They won\'t know.)', rumor: 'Radiology is out of helium, so no CTs tonight?',
    win: 'Oh no, the helium. Okay, I\'ll hold off.', fail: 'Helium is for the MRI. This is a CT.' },
];

export function startArgument(G, c, reg, { onWin, onLose, onAccept }) {
  const modal = $('argue-modal');
  const log = $('argue-log');
  const opts = $('argue-opts');
  const bar = $('argue-bar');
  $('argue-name').textContent = reg.name;
  $('argue-title').textContent = `${reg.title} · ${c.study} for ${c.patient}`;
  log.innerHTML = '';
  opts.innerHTML = '';

  const strong = c.path !== 'normal'; // the scan really will show something
  const sus = suspicion(c);
  const first = c.patient.split(', ')[1] || c.patient;
  const gullible = reg.role === 'registrar' ? 0.12 : -0.1;
  const max = (strong ? 4 : 3) + (reg.role === 'surgreg' ? 1 : 0) + Math.min(2, reg.anger * 0.5);
  let resolve = max;
  let round = 0;
  const used = new Set();
  let alive = true;
  let settled = false;

  const line = (who, text) => {
    const d = document.createElement('div');
    d.className = 'argue-line ' + who;
    d.innerHTML = `<span>${esc(text)}</span>`;
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
    return d;
  };
  // The other person "types" before a line appears.
  const reply = async (who, text) => {
    const t = line(who + ' typing', '');
    t.firstChild.innerHTML = '<i></i><i></i><i></i>';
    await wait(Math.min(2200, 700 + text.length * 22));
    t.remove();
    if (alive) line(who, text);
    await wait(250);
  };
  const setBar = () => { bar.style.width = `${Math.max(0, Math.min(1, resolve / max)) * 100}%`; };

  const finish = (text, cls, fn) => {
    if (text) line('sys ' + cls, text);
    opts.innerHTML = '';
    const b = document.createElement('button');
    b.className = 'primary';
    b.textContent = 'Continue';
    b.onclick = () => { alive = false; modal.hidden = true; fn(); };
    opts.appendChild(b);
    armButtons();
  };

  // Ignore taps for a moment after new buttons appear, so a tap meant for the last screen can't land on them.
  const armButtons = () => {
    const bs = [...opts.querySelectorAll('button')];
    for (const b of bs) b.disabled = true;
    setTimeout(() => { for (const b of bs) b.disabled = false; bs[0]?.focus({ preventScroll: true }); }, 450);
  };

  // Play one exchange: your line, their reply, then decide.
  const exchange = async (fn) => {
    opts.innerHTML = '';
    await fn();
    if (!alive || settled) return;
    round++;
    setBar();
    if (resolve <= 0) {
      await reply('reg', pick(['...Fine. You\'re right. I\'ll hold off.', 'Ugh. Okay. I\'ll re-think the plan.', 'Alright. I\'ll discuss it with my consultant and come back if it changes.']));
      G.stats.argumentsWon++;
      finish('You won the argument. The request is withdrawn.', 'win', () => onWin('argued'));
      return;
    }
    if (round >= 4) {
      await reply('reg', strong ? 'I\'ve answered everything. This patient needs a scan. I\'m not leaving.' : 'Look, I\'m not going away. Can you just do it?');
      G.stats.argumentsLost++;
      finish('You lost the argument. You\'re doing the scan.', 'lose', onLose);
      return;
    }
    const pushes = (strong ? ['So can you do it?', 'I really think this one needs scanning.', 'Please. I\'m genuinely worried about them.'] : ['So... is that a no?', 'Can we meet halfway?', 'I just don\'t want to miss anything.']).filter((p) => !used.has(p));
    if (pushes.length && Math.random() < 0.35) { const p = pick(pushes); used.add(p); await reply('reg', p); }
    render();
  };

  const render = () => {
    if (!alive) return;
    opts.innerHTML = '';
    const choices = [];
    // Case-specific arguments first (at most two).
    for (const a of SPECIAL.filter((x) => x.when(c, sus) && !used.has(x.id)).slice(0, 2)) {
      choices.push({ id: a.id, text: a.text, fn: () => exchange(async () => {
        used.add(a.id);
        line('you', a.text);
        if (a.clinical && strong) {
          if (!a.after || used.has(a.after) || Math.random() < 0.5) {
            await reply('reg', a.strongWin);
            settled = true;
            G.stats.argumentsWon++;
            G.stats.clinicalCalls++;
            finish('Good call. The patient goes straight to theatre without a scan.', 'win', () => onWin('clinical'));
          } else {
            await reply('reg', a.strongNotYet);
            resolve -= 0.5;
          }
          return;
        }
        if (a.clinical) { await reply('reg', a.weak(c, sus)); resolve -= a.weakPower || -0.5; return; }
        await reply('reg', strong ? a.strong(c, sus) : a.weak(c, sus));
        resolve -= strong ? a.strongPower : a.weakPower;
      }) });
    }
    const sensible = SENSIBLE.filter((a) => !used.has(a.id)).sort(() => Math.random() - 0.5);
    for (const a of (choices.length ? [used.has('alt') ? sensible[0] : ALT[c.modality]] : [sensible[0], used.has('alt') ? sensible[1] : ALT[c.modality]]).filter(Boolean)) {
      choices.push({ id: a.id, text: a.text, fn: () => exchange(async () => {
        used.add(a.id);
        line('you', a.text);
        await reply('reg', strong ? a.strong(c, sus) : a.weak(c, sus));
        resolve -= strong ? a.strongPower : a.weakPower;
      }) });
    }
    const f = pick(formArguments(c).filter((x) => !used.has(x.id)));
    if (f) choices.push({ id: f.id, text: f.text, fn: () => exchange(async () => {
      used.add(f.id);
      line('you', f.text);
      if (f.valid) {
        await reply('reg', f.yes);
        resolve -= 4;
        G.stats.goodCatches++;
      } else {
        await reply('reg', f.no);
        resolve += 1;
      }
    }) });
    const w = pick(WILD.filter((x) => !used.has(x.id) && !(x.skip && x.skip(c))));
    if (w) choices.push({ id: w.id, text: w.text, wild: true, fn: () => exchange(async () => {
      used.add(w.id);
      line('you', w.text);
      let ok, text;
      if (w.id === 'odd') {
        // They check the hospital number on the form.
        const d = +c.urn.slice(-1);
        ok = d % 2 === 0 && Math.random() < 0.75;
        text = d % 2 === 0
          ? (ok ? `Their number ends in ${d}. That's even... Okay. Tomorrow, then.` : `Their number ends in ${d}. Also, that rule isn't real.`)
          : `Their hospital number ends in ${d}. That's odd. So you can scan them.`;
      } else {
        const boost = G.rumor && G.rumor.id === w.id ? 0.25 : 0;
        ok = Math.random() < 0.28 + gullible + boost;
        text = ok ? (boost ? `Everyone's been saying that tonight! ${w.win}` : w.win) : w.fail;
      }
      await reply('reg', text);
      if (ok) {
        G.stats.wildWins++;
        G.stats.wildUsed = G.stats.wildUsed || w.text;
        G.startRumor(w);
        sfx.sign();
        settled = true;
        finish('It worked. Somehow. The rumour is spreading through the ED.', 'win', () => onWin('wild', w));
      } else {
        resolve += 1;
        reg.anger++;
        sfx.wrong();
      }
    }) });
    choices.push({ id: 'cons', text: '"Call your consultant, then."', fn: async () => {
      opts.innerHTML = '';
      line('you', '"Call your consultant, then."');
      G.stats.consultantCalls++;
      await reply('reg', 'Fine. I\'m putting them on speaker.');
      line('sys', '*It rings for a long time. Someone answers, very asleep.*');
      await wait(900);
      await reply('reg', `Sorry to wake you. The radiologist wants to know why ${first} needs a ${c.study}.`);
      if (c.joke) { G.stats.argumentsLost++; await reply('cons', 'They swallowed a WHAT? Scan them. Obviously.'); finish('The consultant sided with the registrar.', 'lose', onLose); }
      else if (strong) { G.stats.argumentsLost++; await reply('cons', `${sus[0].toUpperCase() + sus.slice(1)}? With that history? Yes, scan them tonight. And who is this radiologist?`); finish('The consultant sided with the registrar. Awkward.', 'lose', onLose); }
      else if (Math.random() < 0.65) { G.stats.argumentsWon++; await reply('cons', 'Soft abdomen, normal obs? Yeah, fair enough. Review them in the morning.'.replace('Soft abdomen', c.modality === 'head' ? 'GCS 15' : c.modality === 'chest' ? 'Low risk' : c.modality === 'us' ? 'Walked in with a CRP of 12' : 'Soft abdomen')); finish('The consultant agreed with you. The request is withdrawn.', 'win', () => onWin('consultant')); }
      else { G.stats.argumentsLost++; await reply('cons', 'It\'s 3am. I don\'t care. Just do the scan, please.'); finish('The consultant just wants to go back to sleep. You\'re doing it.', 'lose', onLose); }
    } });
    choices.push({ id: 'fine', text: '"Fine. I\'ll do it."', ghost: true, fn: async () => {
      opts.innerHTML = '';
      line('you', '"Fine. I\'ll do it."');
      await reply('reg', 'Thank you!! I owe you a coffee.');
      finish('', '', onAccept);
    } });
    for (const ch of choices) {
      const b = document.createElement('button');
      b.textContent = ch.text;
      if (ch.wild) b.className = 'wild';
      if (ch.ghost) b.className = 'ghost';
      b.onclick = () => { if (b.disabled) return; sfx.click(); ch.fn(); };
      opts.appendChild(b);
    }
    armButtons();
  };

  modal.hidden = false;
  setBar();
  (async () => {
    line('you', '"Before I scan this: what\'s the indication?"');
    await reply('reg', `I need a ${c.study} on ${first}. I'm worried about ${sus}.`);
    await reply('reg', strong ? FACTS[c.path][0] : VAGUE[c.modality]);
    render();
  })();
}

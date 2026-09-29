// Bouncing a request turns into an argument. The registrar has "resolve"; your arguments wear it down.
// Real arguments work better when you've actually read the form. Wild arguments are a gamble.
import { sfx } from './audio.js';

const $ = (id) => document.getElementById(id);
const pick = (a) => a[Math.floor(Math.random() * a.length)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

const OPENERS = {
  any: ['They\'re really unwell. Please.', 'My consultant specifically asked for this.', 'The surgeons won\'t come down without a CT.', 'It\'ll take you five minutes. Tops.', 'The family is getting... loud.', 'I already told the patient they\'re getting a scan.', 'It\'s 3am. I just need a plan.'],
  head: ['Time is brain! TIME IS BRAIN!', 'They hit their head. Hard. On a bus.'],
  chest: ['Their Wells score is... high-ish?', 'Sats are 91% and I\'m scared.'],
  abdo: ['The lactate is up.', 'They\'re peritonitic. Probably. I pressed quite hard.'],
};
const COUNTERS = ['Their lactate just came back at 5.', 'I\'ve examined them twice. It\'s bad.', 'The D-dimer is through the roof.', 'The ultrasound was "non-diagnostic".', 'ED policy says CT. I don\'t make the rules.', 'They\'re on warfarin AND apixaban. Don\'t ask.', 'If this goes wrong I\'m writing your name in the notes.', 'Bed manager says no scan, no bed.'];
const LEGIT = [
  { text: '"What\'s the actual clinical question?"', power: 1.3, reply: 'The question is... is there something wrong?' },
  { text: '"Has a senior actually examined them?"', power: 1.1, reply: 'My consultant is... aware of the patient.' },
  { text: '"The clinical details don\'t match the question."', power: 1.2, reply: 'I wrote it fast! It was a busy handover!' },
  { text: '"How will this scan change your management?"', power: 1.4, reply: 'It will... give us... management.' },
  { text: '"Have you looked at their previous imaging?"', power: 1.0, reply: 'They have previous imaging?' },
];
const ALT = {
  abdo: { text: '"Could we do an ultrasound first?"', power: 1.5, reply: 'The sonographer went home at 5.' },
  chest: { text: '"Would a chest X-ray answer this?"', power: 1.5, reply: 'We did one. It was... a chest.' },
  head: { text: '"Does this even meet the head CT rules?"', power: 1.5, reply: 'The rules are more like guidelines.' },
};
const WILD = [
  { id: 'radiation', text: '"We\'re out of radiation tonight."', rumor: 'Apparently we\'re out of radiation??' },
  { id: 'odd', text: '"After midnight the scanner only does odd-numbered patients."', rumor: 'CT only does odd-numbered patients at night now?' },
  { id: 'mercury', text: '"Mercury is in retrograde. Contrast won\'t flow."', rumor: 'Contrast doesn\'t work during Mercury retrograde, did you know?' },
  { id: 'quota', text: '"The physicist says we\'ve used up this month\'s X-rays."', rumor: 'We used up this month\'s X-rays apparently.' },
  { id: 'abdomen', text: '"I\'m legally not allowed to look at abdomens after 2am."', rumor: 'Radiology can\'t look at abdomens after 2am. Legal thing.' },
  { id: 'haunted', text: '"The CT is haunted. I\'m not going in there."', rumor: 'The CT scanner is haunted. Radiology confirmed it.' },
  { id: 'aura', text: '"I checked their aura from the corridor. It\'s fine."', rumor: 'Radiology is triaging by aura now.' },
  { id: 'emotional', text: '"I already reported it. Emotionally."', rumor: 'They said they reported it... emotionally?' },
  { id: 'union', text: '"The scanner is on its union-mandated break."', rumor: 'The CT scanner is on a union break.' },
  { id: 'powers', text: '"That much radiation gives people superpowers. Liability issue."', rumor: 'Too much CT gives you superpowers. Liability thing.' },
  { id: 'helium', text: '"We\'re low on helium." (That\'s the MRI. They won\'t know.)', rumor: 'Radiology is out of helium, so no CTs?' },
];
const WILD_WIN = ['Wait, really? Oh no. I\'ll... tell the others.', 'Is THAT why the scanner was making that noise?', 'Oh! That explains so much. Sorry!', 'Right. I\'ll tell my consultant it\'s a... radiation shortage thing.', 'I did NOT learn that in med school. Okay.'];
const WILD_FAIL = ['That\'s not a thing.', 'I did physics too, you know.', 'Nice try. I can literally hear the scanner humming.', 'I\'m writing that down for the complaint.', 'Are you... okay?'];

export function startArgument(G, c, reg, { onWin, onLose, onAccept }) {
  const modal = $('argue-modal');
  const log = $('argue-log');
  const opts = $('argue-opts');
  const bar = $('argue-bar');
  $('argue-name').textContent = reg.name;
  $('argue-title').textContent = `${reg.title} · ${c.study} for ${c.patient}`;
  log.innerHTML = '';
  const gullible = reg.role === 'registrar' ? 0.12 : -0.1;
  const max = 3 + (c.path !== 'normal' ? 1 : 0) + (reg.role === 'surgreg' ? 1 : 0) + Math.min(2, reg.anger * 0.5);
  let resolve = max;
  let round = 0;
  const usedLegit = new Set();
  const usedWild = new Set();
  const weak = c.path === 'normal' ? 0.8 : 0;

  const say = (who, text) => {
    const d = document.createElement('div');
    d.className = 'argue-line ' + who;
    d.innerHTML = `<span>${esc(text)}</span>`;
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
  };
  const setBar = () => { bar.style.width = `${Math.max(0, Math.min(1, resolve / max)) * 100}%`; };

  const finish = (text, cls, fn) => {
    if (text) say('sys ' + cls, text);
    opts.innerHTML = '';
    const b = document.createElement('button');
    b.className = 'primary';
    b.textContent = 'Continue';
    b.onclick = () => { modal.hidden = true; fn(); };
    opts.appendChild(b);
    b.focus();
  };

  const nextRound = () => {
    round++;
    setBar();
    if (resolve <= 0) {
      say('reg', pick(['Fine. FINE. I\'ll re-think it.', 'Ugh. You\'re right. I hate that you\'re right.', 'I\'ll... discuss with my consultant.']));
      G.stats.argumentsWon++;
      finish('You won the argument. The request is withdrawn.', 'win', () => onWin('argued'));
      return;
    }
    if (round >= 4) {
      say('reg', pick(['I\'m not leaving. I will stand here all night.', 'I\'m calling your consultant at home.', 'I\'m just going to stand here. Breathing.']));
      G.stats.argumentsLost++;
      finish('You lost the argument. You\'re doing the scan.', 'lose', onLose);
      return;
    }
    say('reg', pick(COUNTERS));
    resolve += 0.25;
    setBar();
    render();
  };

  const render = () => {
    opts.innerHTML = '';
    const choices = [];
    const legit = LEGIT.filter((l) => !usedLegit.has(l.text));
    const l1 = pick(legit);
    if (l1) choices.push({ text: l1.text, fn: () => { usedLegit.add(l1.text); say('you', l1.text); resolve -= l1.power + weak; say('reg', l1.reply); nextRound(); } });
    const alt = ALT[c.modality];
    if (!usedLegit.has(alt.text)) choices.push({ text: alt.text, fn: () => { usedLegit.add(alt.text); say('you', alt.text); resolve -= alt.power + weak; say('reg', alt.reply); nextRound(); } });
    // A form-based argument: strong if the form really has that problem, embarrassing if it doesn't.
    const flagOpts = [];
    if (c.sex === 'F' || Math.random() < 0.3) flagOpts.push({ key: 'Pregnancy status not documented', text: '"Pregnancy status isn\'t documented."', bad: c.sex === 'M' ? 'He\'s a man.' : 'It\'s ticked. Right there. "No".' });
    if (c.modality !== 'head') flagOpts.push({ key: 'eGFR 24, contrast not approved', text: '"Their eGFR is terrible and nobody approved contrast."', bad: 'eGFR is 88. Did you even read the form?' });
    else flagOpts.push({ key: 'eGFR 24, contrast not approved', text: '"What about their kidneys? Contrast?"', bad: 'It\'s a NON-CONTRAST head CT.' });
    flagOpts.push({ key: 'Pager field blank (mandatory)', text: '"There\'s no pager number. How would I even call you?"', bad: `It\'s right there. ${c.pager}.` });
    const f = pick(flagOpts.filter((x) => !usedLegit.has(x.text)));
    if (f) choices.push({ text: f.text, fn: () => {
      usedLegit.add(f.text);
      say('you', f.text);
      if (c.redFlags.includes(f.key)) {
        resolve -= 3.5;
        say('reg', pick(['...Oh. Oh no. You\'re right.', 'I... might have missed that.', 'Okay that one\'s fair.']));
        G.stats.goodCatches++;
      } else {
        resolve += 1;
        say('reg', f.bad);
      }
      nextRound();
    } });
    const w = pick(WILD.filter((x) => !usedWild.has(x.id)));
    if (w) choices.push({ text: w.text, wild: true, fn: () => {
      usedWild.add(w.id);
      say('you', w.text);
      const rumorBoost = G.rumor && G.rumor.id === w.id ? 0.25 : 0;
      if (Math.random() < 0.28 + gullible + rumorBoost) {
        say('reg', rumorBoost ? 'Everyone\'s been saying that! Okay!' : pick(WILD_WIN));
        G.stats.wildWins++;
        G.stats.wildUsed = G.stats.wildUsed || w.text;
        G.startRumor(w);
        sfx.sign();
        finish('It worked. Somehow. The rumour is spreading through the ED.', 'win', () => onWin('wild', w));
      } else {
        say('reg', pick(WILD_FAIL));
        resolve += 1;
        reg.anger++;
        sfx.wrong();
        nextRound();
      }
    } });
    choices.push({ text: '"Call your consultant, then."', fn: () => {
      say('you', '"Call your consultant, then."');
      G.stats.consultantCalls++;
      say('sys', '*The registrar calls their consultant on speaker. It rings for a long time.*');
      if (c.joke) { G.stats.argumentsLost++; say('cons', 'They swallowed a WHAT? Scan them. Obviously.'); finish('The consultant sided with the registrar.', 'lose', onLose); }
      else if (c.path !== 'normal') { G.stats.argumentsLost++; say('cons', 'Scan them. And who is this radiologist?'); finish('The consultant sided with the registrar. Awkward.', 'lose', onLose); }
      else if (Math.random() < 0.65) { say('cons', 'Yeah... fair enough. Discharge them with a leaflet.'); G.stats.argumentsWon++; finish('The consultant agreed with you. The request is withdrawn.', 'win', () => onWin('consultant')); }
      else { G.stats.argumentsLost++; say('cons', 'It\'s 3am. Just do the scan. Please.'); finish('The consultant just wants to go back to sleep. You\'re doing it.', 'lose', onLose); }
    } });
    choices.push({ text: '"Fine. I\'ll do it."', ghost: true, fn: () => { say('you', '"Fine. I\'ll do it."'); say('reg', 'Thank you!!'); finish('', '', onAccept); } });
    for (const ch of choices) {
      const b = document.createElement('button');
      b.textContent = ch.text;
      if (ch.wild) b.className = 'wild';
      if (ch.ghost) b.className = 'ghost';
      b.onclick = () => { sfx.click(); ch.fn(); };
      opts.appendChild(b);
    }
  };

  const op = [...OPENERS.any, ...(OPENERS[c.modality] || [])];
  say('you', '"What\'s the actual indication for this?"');
  say('reg', pick(op));
  setBar();
  modal.hidden = false;
  render();
}

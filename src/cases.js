// Case / request-form generator. All patients and staff are fictional.
import { createStudy } from './ctgen.js';

export const STUDY_NAMES = { abdo: 'CT Abdomen/Pelvis', head: 'CT Brain (non-con)', chest: 'CT Pulmonary Angiogram', us: 'US-guided hip aspirate', xr: 'Chest X-ray (PA erect)', mr: 'MRI Brain (stroke protocol)' };

export const FINDINGS = {
  abdo: {
    normal: 'No acute abnormality',
    freeair: 'Pneumoperitoneum (perforation)',
    collection: 'Intra-abdominal collection',
    sbo: 'Small bowel obstruction',
    aaa: 'Abdominal aortic aneurysm',
    appendicitis: 'Acute appendicitis',
    renal_stone: 'Obstructing ureteric calculus',
    necfasc: 'Soft-tissue gas (necrotising fasciitis)',
    fork: 'Ingested foreign body: fork',
    pager: 'Ingested foreign body: pager',
    sandwich: 'Intragastric sandwich',
  },
  head: {
    normal: 'No acute intracranial abnormality',
    edh: 'Extradural haematoma',
    sdh: 'Subdural haematoma',
    infarct: 'Acute territorial infarct',
    sah: 'Subarachnoid haemorrhage',
  },
  chest: {
    normal: 'No pulmonary embolism',
    pe: 'Pulmonary emboli',
    ptx: 'Pneumothorax',
    mass: 'Spiculated lung mass',
    consolidation: 'Consolidation / pneumonia',
  },
  xr: {
    normal: 'No acute cardiopulmonary abnormality',
    ptx: 'Pneumothorax',
    consolidation: 'Consolidation',
    freeair: 'Free gas under the diaphragm',
    pleural: 'Pleural effusion',
  },
  mr: {
    normal: 'No acute intracranial abnormality',
    infarct: 'Acute infarct (bright on T2/DWI)',
  },
  us: {
    normal: 'No effusion: aspirate not indicated',
    effusion: 'Hip effusion: aspirated (it\'s pus)',
  },
};
const JOKE = new Set(['fork', 'pager', 'sandwich']);

const CLINICAL = {
  abdo: {
    freeair: ['2/7 post colonoscopy, now rigid abdo + tachy', 'known PUD, sudden severe epigastric pain, board-like abdo'],
    collection: ['5/7 post lap chole, fevers, RUQ/RIF pain, CRP 240', 'post appendicectomy D6, swinging fevers'],
    sbo: ['vomiting x2/7, not passing flatus, distended. Multiple prev laparotomies', 'colicky pain + faeculent vomit (sorry)'],
    aaa: ['sudden back pain radiating to groin, BP 95/60, ?pulsatile mass', 'known 4.8cm AAA, now tearing back pain'],
    appendicitis: ['periumbilical pain migrating to RIF, anorexic, WCC 15', 'RIF pain, rebound, Rovsing +ve'],
    renal_stone: ['loin to groin pain, writhing, haematuria', 'colicky flank pain, can\'t sit still, microscopic haematuria'],
    necfasc: ['diabetic, R groin/flank pain out of proportion, crepitus?, HR 125', 'rapidly spreading erythema R flank, dusky skin, septic, pain >> signs'],
    normal: ['vague abdo pain x3 weeks, "just want a scan"', 'abdo pain, LFTs mildly deranged, ?anything'],
  },
  head: {
    edh: ['fell off e-scooter, lucid interval, now GCS 12', 'hit by cricket ball to temple, vomiting'],
    sdh: ['on apixaban, fall from standing, new confusion', 'recurrent falls, increasingly drowsy x3 days'],
    infarct: ['CODE STROKE: sudden R arm weakness + aphasia, onset 1h', 'facial droop + slurred speech, LKW 22:40'],
    sah: ['thunderclap headache, "worst of my life", neck stiffness', 'sudden headache during exertion (don\'t ask)'],
    normal: ['headache, wants a scan "just to be safe"', 'minor head knock, GCS 15, on no anticoags, family insisting'],
  },
  chest: {
    pe: ['post-op D4, tachycardic, SpO2 89% RA, D-dimer ++', 'long-haul flight, pleuritic pain, calf swelling'],
    ptx: ['tall thin male, sudden pleuritic pain + SOB', 'pleuritic CP after coughing fit, reduced AE R'],
    mass: ['smoker 40 pack yrs, haemoptysis, weight loss', 'incidental opacity on CXR, ?PE while we\'re at it'],
    consolidation: ['fever, productive cough, crackles R base', 'SOB + febrile, ?PE ?pneumonia ?both'],
    normal: ['chest pain, trop neg x2, "just rule it out"', 'pleuritic pain, Wells low, D-dimer 0.6 (age-adjusted fine?)'],
  },
  xr: {
    ptx: ['sudden pleuritic pain + SOB, tall and thin', 'pleuritic pain after coughing, reduced AE'],
    consolidation: ['fever, productive cough, crackles L base', 'febrile, SOB, CRP 180'],
    freeair: ['sudden epigastric pain, board-like abdo, ?perf', 'known PUD, now severe pain. Erect CXR please'],
    pleural: ['SOB, orthopnoea, known heart failure', 'dull to percussion R base, SOB'],
    normal: ['cough x2 weeks, afebrile, sats 98%', '"pre-op" CXR. At 3am. For a toenail.'],
  },
  mr: {
    infarct: ['CT brain normal, persistent dysphasia, ?stroke', 'wake-up stroke, CT normal, R arm weakness'],
    normal: ['dizzy, CT brain normal, ?posterior circulation stroke', 'headache, CT normal, neuro "want an MRI tonight"'],
  },
  us: {
    effusion: ['hot swollen R hip, febrile 39.2, can\'t weight bear, CRP 180', 'R hip held flexed + ext rotated, rigors, CRP 220'],
    normal: ['R hip pain after gardening, afebrile, walked in, CRP 12', '"hip feels funny", mobilising, bloods normal'],
  },
};
const QUESTIONS = {
  abdo: ['Exclude perforation', 'Exclude collection', '?SBO', 'Exclude AAA / rupture', '?Appendicitis', '?Renal colic', '?Nec fasc', '?Cause'],
  us: ['?Septic arthritis: aspirate please', 'US hip + aspirate ?effusion'],
  xr: ['?Pneumonia', '?Pneumothorax', 'Erect CXR ?free gas', '?Effusion', 'CXR please'],
  mr: ['?Stroke (CT negative)', 'MRI brain ?posterior circulation stroke'],
  head: ['Exclude bleed', 'Exclude haemorrhage', 'Code stroke: ?infarct ?bleed', '?SAH', 'Exclude intracranial pathology'],
  chest: ['Exclude PE', '?PE', 'Exclude PE ?other cause', 'CTPA please'],
};
const JOKE_CLINICAL = {
  fork: ['swallowed a fork on a dare. "It was a small fork."', 'ate dinner "too enthusiastically", now 1 fork missing'],
  pager: ['swallowed the ED registrar\'s pager "to make it stop"', 'pt states pager "fell in". Pager still beeping.'],
  sandwich: ['states sandwich "went down wrong". Wants it back.', 'ate sandwich whole in 1 bite for TikTok'],
};

const FIRST = ['Alex', 'Sam', 'Jordan', 'Robin', 'Casey', 'Morgan', 'Priya', 'Tomasz', 'Mei', 'Oluwaseun', 'Freya', 'Dmitri', 'Ana', 'Keanu', 'Niamh', 'Rahul', 'Zara', 'Bartholomew', 'Ingrid', 'Kofi', 'Luca', 'Yuki', 'Fatima', 'Declan'];
const LAST = ['Pemberton', 'Nakamura', 'Okafor', 'Quill', 'Van Dyke', 'Ferreira', 'Kowalczyk', 'Abernathy', 'Lindqvist', 'Moreau', 'Tanaka', 'Haddad', 'Bishop', 'Crumble', 'Wibberley', 'Sprocket', 'Oyelaran', 'Thistlewood', 'Mbeki', 'Castellano'];
const LOCATIONS = ['ED Bed 3', 'ED Bed 7', 'ED Bed 11', 'Resus 1', 'Resus 2', 'Resus 4', 'Fast Track 2', 'Corridor 6', 'Short Stay 9', 'Waiting Room (chair 14)'];

const pick = (a, r = Math.random) => a[Math.floor(r() * a.length)];
let nextId = 1;
let caseSeed = 1000;

export function patientName() { return `${pick(LAST).toUpperCase()}, ${pick(FIRST)}`; }

function weighted(list) {
  let t = 0;
  for (const [, w] of list) t += w;
  let r = Math.random() * t;
  for (const [k, w] of list) { if ((r -= w) <= 0) return k; }
  return list[0][0];
}

export function makeCase({ requester, gameMinutes, forced } = {}) {
  let modality, path;
  if (forced) ({ modality, path } = forced);
  else {
    modality = weighted([['abdo', 40], ['head', 25], ['chest', 20], ['xr', 18], ['us', 7], ['mr', 5]]);
    const paths = Object.keys(FINDINGS[modality]).filter((p) => !JOKE.has(p));
    path = Math.random() < 0.28 ? 'normal' : pick(paths.filter((p) => p !== 'normal'));
    if (modality === 'abdo' && Math.random() < 0.06) path = pick(['fork', 'pager', 'sandwich']);
  }
  const sex = Math.random() < 0.5 ? 'F' : 'M';
  const age = path === 'ptx' ? 19 + Math.floor(Math.random() * 12) : 18 + Math.floor(Math.random() * 72);
  let clinical, question;
  if (JOKE.has(path)) {
    clinical = pick(JOKE_CLINICAL[path]);
    question = 'Exclude foreign body (please)';
  } else {
    // Clinical history usually fits the finding, but not always. You have to look.
    const key = Math.random() < 0.65 ? path : pick(Object.keys(CLINICAL[modality]));
    clinical = pick(CLINICAL[modality][key]);
    question = pick(QUESTIONS[modality]);
    // Some questions only make sense with the matching history.
    if (key === 'necfasc') question = '?Nec fasc (urgent)';
    else if (key === 'appendicitis' && Math.random() < 0.7) question = '?Appendicitis';
  }
  const redFlags = [];
  if (sex === 'F' && age < 50 && Math.random() < 0.35) redFlags.push('Pregnancy status not documented');
  if ((modality === 'abdo' || modality === 'chest') && Math.random() < 0.12) redFlags.push('eGFR 24, contrast not approved');
  if (Math.random() < 0.12) redFlags.push('Pager field blank (mandatory)');
  const c = {
    id: nextId++,
    patient: patientName(),
    age, sex,
    urn: 'URN ' + (1000000 + Math.floor(Math.random() * 8999999)),
    modality, path,
    study: STUDY_NAMES[modality],
    clinical: `${age}${sex} ${clinical}`,
    question,
    location: pick(LOCATIONS),
    requester: requester || 'Dr ' + pick(FIRST) + ' ' + pick(LAST),
    consultant: 'Dr ' + pick(LAST),
    pager: redFlags.includes('Pager field blank (mandatory)') ? '' : String(4000 + Math.floor(Math.random() * 999)),
    arrived: gameMinutes || 0,
    redFlags,
    pregnantTicked: sex === 'F' && age < 50 && !redFlags.includes('Pregnancy status not documented'),
    seed: caseSeed++ * 7919,
    reported: false,
    study3d: null,
  };
  c.joke = JOKE.has(path);
  return c;
}

export function studyFor(c) {
  if (!c.study3d) c.study3d = createStudy({ modality: c.modality, path: c.path, seed: c.seed });
  return c.study3d;
}

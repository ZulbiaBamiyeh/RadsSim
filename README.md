# RadsSim: Night Shift

A joke sandbox built with three.js. You're the on-call radiologist in an overnight emergency department. You can report the scans, or you can not report them and watch the worklist blow out. You can also microwave a foil tray.

## Run it

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # static build in dist/
npm run build:single # one self-contained HTML file in dist-single/
```

It works best in a desktop browser with a mouse and keyboard. Click the view to capture the mouse. If mouse capture isn't available (some embedded frames), drag with the left button to look around.

## Play online

Hosted on GitHub Pages: **https://zulbiabamiyeh.github.io/RadsSim/**

Every push to `main` (or the dev branch) rebuilds the game and publishes `dist/` to the `gh-pages` branch (`.github/workflows/gh-pages.yml`). If the site doesn't show up, go to Settings → Pages and set the source to "Deploy from a branch", with branch `gh-pages` and folder `/ (root)`.

## Controls

| Key | Action |
| --- | --- |
| WASD / mouse | Move / look (Shift sprints, Space jumps; you can jump onto desks and benches) |
| E | Interact: sit at PACS, take a registrar's request form, push a bed, microwave, toaster, fridge, CT console, MRI quench button, nap couch |
| Left click | Pick up / throw · shove someone · launch the bed you're pushing |
| Right click | Use the held item: extinguisher (look down to fly on it), lighter, eat, drink |
| Q | Drop |
| H | Controls overlay |
| L / T | Cheats: +5 requests / skip an hour |

On a phone or tablet, on-screen controls appear automatically:
- **Moving and looking:** the left stick moves you (push it all the way to run), and dragging anywhere else looks around.
- **Buttons:** **Grab/Throw/Launch**, **E Use** (talk, take forms, push beds, use stations), an item button (**Spray/Flick/Eat/Drink**) that shows up when you're holding something, **Jump**, **Drop**, and **?** for help.
- **Screen orientation:** landscape works best. PACS has a compact three-column layout for landscape phones and a stacked layout for portrait.

At the PACS workstation:
- Scroll wheel or drag to page through slices.
- Right-drag adjusts window/level; 1–4 switch presets (soft tissue, lung, bone, brain).
- M marks the lesion. Pick a finding and sign.
- Esc stands you up.

## What's in the prototype

- **Scrollable CT stacks.** `src/ctgen.js` paints CT stacks procedurally in Hounsfield units: 64-slice abdo/pelvis, 36-slice head and 56-slice CTPA. Anatomy is built from analytic shapes, with partial-volume blur and noise. Windowing is real (the W/L maths is the same as on a real workstation).
  - **Abdomen:** free air, collection, SBO, AAA, appendicitis, obstructing ureteric stone, plus joke foreign bodies (a fork or a pager with metal streak artifact, and an intragastric sandwich).
  - **Head:** EDH, SDH, infarct, SAH.
  - **Chest:** PE, pneumothorax, spiculated mass, consolidation.
- **Request forms.** Paper forms (`src/form.js`) with handwriting and tick boxes, modelled on a real ED imaging request. Some carry red flags, such as missing pregnancy status, eGFR 24 with no contrast approval, or a blank pager field. Bounce those for a "good catch".
- **The worklist is the doom clock.** Ignoring it escalates in stages:
  - **4+:** registrars queue at your door.
  - **10+:** they chase you around the ED.
  - **15+:** forms get slid under your door.
  - **18+:** the corridor fills with beds (bed block).
  - **20+:** the reading-room phone rings nonstop.
  - **22+:** the ED consultant stalks you.
  - **32+:** the Director of Medical Services shows up in a suit.
  - **Also:** pagers go off and trauma calls dump 3 scans at once.
- **Fire.** A cellular fire sim on the floor-plan grid (`src/fire.js`):
  - **Fuel:** paper, curtains, benches, beds and bins burn.
  - **Spread:** fire moves through doors and floors get scorched.
  - **Alarm:** evacuation to the ambulance bay, with patients hopping off their beds ("I CAN WALK!").
  - **Sprinklers:** they fire per room and short out PACS if the reading room gets wet.
  - **Firefighters:** they arrive if the fire keeps going.
  - **Security:** it hunts you if you started it.
  - **O2 cylinders:** they become rockets.
- **Sandbox toys:**
  - Throwable props.
  - Pushable, launchable beds, and patients fly off if the bed hits a wall.
  - An MRI that yanks metal out of your hands, with a quench button.
  - The fridge (with someone's sandwich), and a CT console that scans whoever is standing nearest the table and adds them to your worklist.
  - A hospital cat.
- **Morning handover.** At 08:00 you get a tabloid front page, a performance-review stamp, stats, and an M&M list of your misses.

## Hiding, new areas, and arguing

- **Hiding:** press E at a hiding spot to hide, and E again to come out. Registrars and the consultant who lose sight of you search where you were last seen.
  - **Spots:** under the reading-room desk, inside the staff fridge, the CT gantry, the MRI bore, among the waiting-room patients, a toilet stall, the supply shelves, under the on-call bed, the wardrobe, behind the chapel altar or the cafe counter, the laundry hamper, the helicopter, a morgue drawer, the film archive, behind the boiler, and the old darkroom.
  - **Getting found:** searchers who come close can find you. Worse spots are more likely to be checked, and you might sneeze.
  - **Locking the door:** you can lock the reading-room door. Registrars knock and wait, but forms still get slid under it. Security has a key.
- **New areas:**
  - **East wing:** staff toilets, supply cupboard (hand sanitiser is 70% alcohol, so it burns), the on-call room with a real bed, the chapel (candles), and the closed cafe.
  - **Lift** at the east end of the corridor, which leads to:
    - **The roof:** a helipad and a helicopter you shouldn't start. The rotor wash blows things off the roof, and you can fly off it on an extinguisher.
    - **The basement:** morgue, film archive (very flammable), a boiler you can crank until it bursts, and the abandoned 1972–1999 radiology department with a lightbox holding a never-reported 1987 film.
    - **After 03:00,** a ghost wanders the basement.
- **Arguing:** Bounce on a request form starts an argument with the registrar. You get four rounds to wear down their resolve.
  - **Sensible arguments:** "What's the actual clinical question?", "Ultrasound first?". They land harder when the request really is weak.
  - **Form-based arguments:** missing pregnancy status, eGFR, pager. These are very strong if the form really has that problem, and embarrassing if it doesn't, so read the form.
  - **Wild arguments:** "We're out of radiation tonight", "The CT is haunted". These are a gamble. When one works, the rumour spreads around the ED.
  - **"Call your consultant":** this goes badly if the scan was actually needed.
  - **Consequences:** winning withdraws the request, though it may come back later "much worse". Arguing away a scan that had real pathology shows up at the morning M&M.

## Violence, RiskMann, and case-specific arguments

- **Violence:**
  - **Kick:** press F, or the Kick button on phones. It launches people, props and beds.
  - **Tackle:** sprint into someone.
  - **Defibrillator paddles:** they're on the resus crash cart and nurses' station. Right-click shouts "CLEAR!" and people fly backwards with their hair on end.
  - **Bedpans:** throw them for a *BONK*.
  - **Mop buckets:** kick or throw one over and the grey water spill makes passers-by slip.
  - **Consequences:** people you've hurt may file RiskMann reports about you.
- **RiskMann** is on the side computer in the reading room (a parody incident-reporting system). Pick a person, an incident category and a severity, then submit.
  - **Accurate reports get upheld.** A category is accurate when it fits what actually happened: they paged you repeatedly, their form has problems, their request was low-yield, they were rude, and so on. The person is pulled into a meeting in the cafe, and a second upheld report gets them stood down with their requests reassigned.
  - **Frivolous or exaggerated reports** ("Breathing too loudly", Catastrophic) are found vexatious and filed about you instead.
- **Case-specific arguments:**
  - **Appendicitis:** "What's the Alvarado?" and "So you've got clinically diagnosed appendicitis, do they need a scan?"
  - **US-guided hip aspirate requests:** "How do you know there's an effusion?" and "Why aren't ortho taking them to theatre?"
  - **Nec fasc CTs:** "Nec fasc is a clinical diagnosis."
  - **How they play out:** when the patient really is sick, the clinical arguments send them straight to theatre. That counts as a good call, with no M&M. When the request is weak, the registrar folds.

## The imaging department

- **CT and MRI suites:** each has a scan room and a control room behind lead glass, run by a radiographer.
- **New X-ray room:** a chest stand, a ceiling tube and a lead-screened control booth. The toilets and supply cupboard moved behind the cafe to make room.
- **Scanning comes first.** Requests queue for the right machine (CT for abdo/head/CTPA, MRI for stroke-protocol brains, X-ray for chest films).
  - The radiographer scans each patient: they slide through the CT gantry or into the MRI bore, or stand at the chest stand.
  - The "X-RAY ON" / "SCANNING" signs light up during a scan.
  - The study only lands on your worklist when the scan finishes. The HUD and corridor TV show the scan queues.
- **Machines go down.** A machine stops scanning when there's a fire in its room, the sprinklers are on, the magnet has been quenched, or its radiographer is kicked, zapped, evacuated or called into a RiskMann meeting.
  - Its queue stops moving, and ED pages you asking why.
  - Stand in the CT or X-ray room during an exposure and the radiographer shouts at you and restarts the scan.
- **MRI safety (or lack of it):**
  - **Your pager:** walk into the MRI scan room and it rips off your belt and sticks to the magnet. Pages stop entirely until you quench the magnet and pick it back up. Your bank cards are wiped too.
  - **Staff:** anyone carrying metal who strays into the room gets dragged onto the magnet and pinned there until someone presses the quench button. That includes registrars with stethoscopes, nurses with scissors, security with keys, firefighters in helmets and the DMS with cufflinks. Lure your chasers in.
  - **The radiographer** shouts "STOP! METAL!" when you walk in.
  - **Flying metal mid-scan** ruins the scan and it restarts.
- **New studies to report:** chest X-rays (pneumothorax, consolidation, free gas under the diaphragm, pleural effusion) and MRI brains, stroke protocol, on T2-style contrast (acute infarct).

## Car park, cars, golf and the reading-room PC

- **Car park** south past the ambulance bay, floodlit, with bay lines and a driveway ramp up to the bay.
- **Cars** (8 of them: hatchbacks, a sedan, SUVs, Security's ute and an ambulance with a working lightbar; owners include Dr Harrow and the DMS). Each has wheel arches, alloys, glass, plates and a dashboard you can see from the driver's seat:
  - **Smash the windows** with a kick (F), a thrown object, a golf ball or the cricket bat. The glass crazes and the alarm wails.
  - **Break in and drive** with **E** (you put the driver's window through): WASD to steer, Shift to floor it, E to get out. You can drive up the ramp, through the ambulance doors and straight into the ED, running people over (cartoonishly) and shoving furniture.
  - Ramming other parked cars sets their alarms off too.
- **Golf** (order the set on Bidly): hold the 7-iron and **RMB** to tee up and whack a ball in your look direction. Do it off the roof.
- **The side computer** in the reading room is now a full (tired) hospital desktop with icons:
  - **RiskMann**: incident reports only.
  - **Bidly**: a parody online marketplace with sellers, ratings and Buy It Now. It sells a golf set, cricket bat, air horn, traffic cones, O2 cylinders, a kebab, an extinguisher (jetpack), a defib, a mop bucket and some very suspicious car keys. You pay with a corporate card someone left in the drawer ($2,500 limit; it gets declined after that). Orders arrive by courier drone at the ambulance bay.
  - **Files**: a half-written case report co-written with an AI chatbot (the prompts and "As an AI language model…" are still in it, highlighted), the rota (you're on every night), `passwords.txt`, a resignation letter marked DO NOT SEND, registrar teaching slides, a cat photo, a note from IT and a Recycle Bin.
- **CT noise** during scanning has been removed; only the MRI still clatters.

## Code map

| File | What it does |
| --- | --- |
| `src/main.js` | Game loop, systems (worklist escalation, fire effects, sprinklers, alarms), interactions, HUD, morning screen |
| `src/map.js` | ASCII-ish floor plan grid, zones, collision, BFS pathfinding |
| `src/cars.js` | Parked cars: smashing, hotwiring, driving, running people over |
| `src/world.js` | Builds the 3D ED: floor texture (scorchable), walls, furniture, signage, screens |
| `src/ctgen.js` | Procedural CT volumes + windowing |
| `src/cases.js` | Request/case generator (fictional patients, clinical histories, findings) |
| `src/pacs.js` | PACS UI: worklist, stack viewer, marking, reporting; mirrors onto the in-game monitors |
| `src/npc.js` | NPC roles and state machines (queue, chase, stalk, panic, hunt, fight fire, on fire…) |
| `src/props.js` | Prop types and simple physics, including the MRI pull |
| `src/fire.js` | Fire spread / suppression simulation |
| `src/player.js` | First-person controller, carrying, bed pushing |
| `src/particles.js` | GPU point particles for flames, smoke, spray and sprinklers |
| `src/audio.js` | Synthesised sound effects (no audio files) |
| `src/scanning.js` | Scan queues, radiographers and patients moving through CT, MRI and X-ray |
| `src/riskman.js` | RiskMann incident-reporting app |
| `src/desktop.js` | Reading-room PC desktop: icons, file viewer and the joke documents |
| `src/store.js` | Bidly marketplace app and order delivery |
| `src/argue.js` | The registrar argument when you bounce a request |
| `src/touch.js` | Phone/tablet controls: move stick, drag-to-look, action buttons |

All patients, staff and hospital names are made up. Don't put real request forms or patient data into the repo.

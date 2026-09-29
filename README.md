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

## Code map

| File | What it does |
| --- | --- |
| `src/main.js` | Game loop, systems (worklist escalation, fire effects, sprinklers, alarms), interactions, HUD, morning screen |
| `src/map.js` | ASCII-ish floor plan grid, zones, collision, BFS pathfinding |
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
| `src/touch.js` | Phone/tablet controls: move stick, drag-to-look, action buttons |

All patients, staff and hospital names are made up. Don't put real request forms or patient data into the repo.

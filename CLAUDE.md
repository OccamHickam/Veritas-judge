# CLAUDE.md — Veritas MTG Rules Assistant
## Handoff document for continuing development in a new Claude chat

---

## What Veritas Is

Veritas is a **voice-activated MTG rules assistant** designed to sit at the center of a game table and listen passively. It does not require players to address it directly. When someone makes a wrong rule claim, asks a question about a keyword, or a dispute breaks out, Veritas intervenes automatically with the correct ruling — spoken aloud and displayed on screen.

**Live deployment:** `mtg-judge-ten.vercel.app`  
**GitHub repo:** `github.com/OccamHickam` (public)  
**Stack:** Pure HTML/CSS/JS — no framework, no build step, no backend required  
**Browser requirement:** Chrome or Edge (Web Speech API)

---

## File Structure

```
/
├── game-session.html   — main session interface (837 lines, complete)
├── keywords.js         — MTG keyword database (1700 lines, 60+ keywords)
├── index.html          — landing page with "Begin Session" button
├── keywords.js         — loaded via <script src="keywords.js"> in game-session.html
├── server.js           — Express static server for Railway deployment
├── package.json        — Node dependencies (express only)
├── railway.json        — Railway deploy config
└── CLAUDE.md           — this file
```

---

## Architecture — game-session.html

### The pipeline (single, clean, no legacy code)

```
Mic → Chrome Speech API → Sentence Accumulator → handleFinal()
                                                       ↓
                                                  reason(text)
                                                       ↓
                                              getIntent() → 'dispute' / 'question' / 'claim' / 'chatter'
                                              getKws()    → exact keyword matches
                                              getConcepts() → concept-to-keyword mapping
                                              getCardName() → Scryfall card name
                                                       ↓
                                                  act(result)
                                                       ↓
                                    'ruling' → showRuling() + say()
                                    'correct' → showRuling() with correction note + say()
                                    'card' → doCard() → Scryfall API
                                    'ask' → show prompt + enterClarify()
                                    null → silent
```

### Key design principles
1. **Current sentence is authoritative** — Veritas answers what was JUST said, never reaches deep into history
2. **Sentence accumulator** — Chrome splits speech on natural pauses; we stitch fragments into complete thoughts with a 1500ms gap timer before calling handleFinal()
3. **Silence is better than wrong answers** — if intent is 'chatter' or no keyword found, return null and stay silent
4. **Cooldowns prevent double-firing** — 2500–4000ms cooldown after any ruling fires

---

## State Variables

```javascript
const KW          // keyword database from keywords.js (or {} fallback)
let recognition   // SpeechRecognition instance — one object, reused forever
let recRunning    // true while mic is actively running
let recStopped    // true when deliberately paused/ended
let isPaused      // user pressed pause
let isSpeaking    // TTS is playing — mic is stopped during this
let cooldown      // prevents double-firing rulings
let cooldownTimer
let disputeCount  // session dispute count
let sessionStart  // Date.now() at page load
let lastRuling    // { html, topic } — for repeat function
let pending       // accumulated speech fragments
let pendingTimer  // 1500ms gap timer
const GAP_MS = 1500
let clarifying    // true when Veritas asked "what rule?" and is waiting for answer
let clarifyTimer  // 12s auto-exit from clarification mode
let debugOn       // press D to toggle debug console
```

---

## Key Functions

### Intent & Reasoning
- `getIntent(text)` → `'dispute' | 'question' | 'claim' | 'chatter'`
  - Uses regex pattern arrays (D, Q, C) — all single-escaped `\b` word boundaries
  - CRITICAL: All regex must use single `\b` not `\\b` in regex literals
- `reason(text)` → `{ action, topic, fix? } | null`
  - Calls getIntent, getKws, getConcepts, getCardName
  - Returns action objects for act() to execute
- `act(result, text)` → executes the decision, fires UI + audio + TTS
- `getKws(text)` → exact keyword matches from KW database
- `getConcepts(text)` → maps phrases like "targeting" → ['hexproof','shroud','ward']
- `getCardName(text)` → extracts card names from natural speech
- `getIx(a, b)` → known keyword interaction (trample+deathtouch, etc.)
- `checkWrong(text, kw)` → checks if a claim about a keyword is factually wrong
- `getPriorKws()` → keywords from the immediately preceding utterance only

### Speech Recognition
- `setupSpeech()` — creates one SpeechRecognition object, never recreated
- `flushPending()` — called after GAP_MS silence, sends accumulated text to handleFinal
- `handleInterim(text)` — fires on HARD triggers mid-sentence only (wakes Veritas instantly)
- `handleFinal(text)` — main reasoning entry point for complete sentences
- `startListening()` — clears all stale state, restarts mic
- `stopListening()` — sets recStopped=true, flushes pending, stops mic
- `say(text)` — TTS output; stops mic first, restarts after 700ms

### Rendering
- `renderTopic(topic)` → HTML string for details panel
  - topic types: `{ type:'keyword', keyword, context }` | `{ type:'multi_keyword', keywords[] }` | `{ type:'semantic', data }` | `{ type:'card', keyword }`
- `showRuling(html, topic, isDispute, isCorrection, fixNote)` — populates and opens overlay
- `vb(tag, label)` → verdict banner HTML (tag: 'info'|'yes'|'no'|'depends')
- `doCard(name, originalText)` — async Scryfall lookup + claim verification
- `quickLookup(kw)` — manual keyword lookup from chip taps

### UI
- `setOrb(state)` — 'listening' | 'paused' | 'dead'
- `setOverlay(badge, verdict, analogy, action)` — sets bubble content
- `setDetails(html)` — sets scrollable details panel
- `openOverlay()` / `closeRuling()` — show/hide ruling screen
- `bump(text)` — increments dispute counter, logs to dispLog
- `setCool(ms)` — sets cooldown flag for ms milliseconds
- `chime()` / `softChime()` / `flash()` — audio/visual feedback

---

## keywords.js Structure

Each keyword entry has these fields:
```javascript
window.KEYWORDS = {
  'hexproof': {
    rule: '702.11c',           // CR citation
    category: 'Protection',    // display category
    plain: '<strong>HTML</strong> rule text',
    nuances: ['string', ...],  // bullet points
    example: 'string',         // table example
    related: ['shroud', ...],  // related keyword names
    // NEW interpretation fields (may not exist on all keywords):
    analogy: 'string',         // memorable comparison
    tableTalk: 'string',       // conversational judge voice
    experienceLevel: 'basic',  // 'basic'|'intermediate'|'advanced'
    commonMistake: 'string',   // most frequent wrong belief
    whatToDo: 'string',        // immediate action guidance
    whenAttacking: 'string',   // context-specific (may be null)
    whenBlocking: 'string',    // context-specific (may be null)
    withDeathtouch: 'string',  // context-specific (may be null)
  }
}
```

**Keywords with full interpretation fields include:**
trample, deathtouch, hexproof, flying, first strike, double strike, lifelink, indestructible, vigilance, haste, menace, shroud, ward, protection, flash, reach, sacrifice, exile, scry, commander damage, commander tax, and more.

**Keywords with only basic fields (rule, category, plain, nuances, example, related):**
Most of the 60+ keywords — the new fields were partially added.

---

## Known Interactions (hardcoded)

```javascript
const IX = {
  'trample+deathtouch'      // assign 1 damage to each blocker, rest tramples
  'first strike+deathtouch' // kills blocker before damage back
  'hexproof+indestructible' // exile/sacrifice/-X/-X still work
  'lifelink+double strike'  // life gained twice
}
```

---

## CRITICAL: Common Bugs to Avoid

### 1. Regex double-escaping (has broken the app multiple times)
In JavaScript regex LITERALS (`/pattern/`), use single backslash:
```javascript
// CORRECT
/\bveritas\b/i
/\bthat'?s? wrong\b/i

// WRONG — these will never match
/\\bveritas\\b/i
/\\bthat'?s? wrong\\b/i
```
In `new RegExp(string)`, use double backslash since it's a string:
```javascript
new RegExp('\\b' + kw + '\\b', 'i')  // correct for RegExp constructor
```

### 2. Multiple detection systems
The app has gone through many rewrites. Previous versions had `CONTRADICTION_PATTERNS`, `classifyIntent`, `checkForContradiction`, `resolveContradictionTopic` all coexisting and fighting each other. The current version has ONE pipeline: `getIntent → reason → act`. Do not add parallel detection systems.

### 3. Mic restart loop
Never call `recognition.abort()` — it fires `onend` which triggers restart, causing a loop. Use `recognition.stop()` only. The `onend` handler restarts silently after 150ms unless `recStopped` or `isPaused` is true.

### 4. Ruling cooldown blocks responses
`cooldown` is set for 2500–4000ms after any ruling fires. If Veritas seems deaf after responding, cooldown is still active. `startListening()` clears it — useful for testing.

### 5. Sentence accumulator
Chrome fires multiple `isFinal` results per sentence due to natural speech pauses. All finals are accumulated in `pending` and only processed after 1500ms of silence. Do not call `handleFinal()` directly from `onresult` — go through the accumulator.

---

## What's Working

- Voice recognition with sentence accumulation (Chrome/Edge)
- Intent classification: dispute / question / claim / chatter
- Keyword extraction from speech (exact match + concept mapping)
- Known keyword interactions (trample+deathtouch etc.)
- Wrong claim detection for: hexproof, trample, indestructible, first strike, deathtouch, flying
- Scryfall card lookup with claim verification
- TTS spoken rulings (stops mic while speaking, restarts after)
- Judge figure + speech bubble overlay
- Dispute counter, session timer
- Ruling history panel (last 5 rulings)
- Keyword reference browser (≡ Keywords button)
- Manual card lookup (⌕ Card Lookup button)
- Test button (⚡ Test) fires random keyword ruling
- Session summary modal on end
- Debug console (press D to toggle) shows HEARD/INTENT/ACTION/SILENT
- Deployed to Vercel via GitHub

---

## What Still Needs Building

### Priority 1 — Core functionality gaps
- **Response quality for claims**: "hexproof means all spells can't target it" correctly fires, but the correction UI needs testing against real table speech
- **Card claim verification accuracy**: When player says "Snapcaster lets me cast for free" — Veritas fetches the card but the wrong-claim detection only checks our WRONG dict, not the actual oracle text semantically
- **Pronoun resolution reliability**: "does it work?" → needs prior utterance keyword to be reliable

### Priority 2 — Features
- **Index page** — proper landing with session config (format selector: Commander/Standard/etc.)
- **Persistent session history** — localStorage or backend
- **Player name awareness** — "Jason said X, Jack disputed" → track who said what
- **Shareable ruling links** — `/ruling/hexproof` that anyone at the table can open
- **Format-aware rulings** — Commander rules differ from Standard

### Priority 3 — Polish
- **Mobile/tablet layout** — test on actual iPad, fix touch targets
- **keywords.js completion** — add tableTalk, analogy, commonMistake, whatToDo to remaining keywords that only have basic fields
- **Three-tab details panel** — "Why This Matters" / "Situations" / "Official Ruling" tabs were designed but not implemented in current rewrite
- **Account system + billing** — free tier (keyword rulings) / paid tier (card verification)

---

## Deployment

**Vercel (current):**
- Connected to GitHub repo — auto-deploys on push to main
- Serves static files — no server config needed for Vercel
- URL: `mtg-judge-ten.vercel.app`

**Railway (optional backend for session saving):**
- `server.js` — Express static server
- `package.json` — `npm start` runs it
- `railway.json` — deploy config
- Currently unused — `confirmEndSession()` just navigates to index.html

---

## Development Notes

- **No build step** — edit HTML/JS directly, push to GitHub, Vercel deploys
- **Test locally:** `python3 -m http.server 8080` then `http://localhost:8080/game-session.html`
- **Must use http:// not file://** — Chrome blocks mic on file:// protocol
- **Debug mode:** Press D while on game-session page to see real-time reasoning log
- **Test button:** ⚡ Test fires a random keyword ruling without voice input
- **Keywords fallback:** If keywords.js fails to load, `KW` is `{}` — Veritas still runs but can't look up rules

---

## Session Transcript Context

The conversation history building this project spans multiple sessions and covered:
- Initial design and architecture decisions
- Two-file split (keywords.js + game-session.html)
- Multiple rewrites of the voice recognition engine
- Multiple rewrites of the reasoning/understanding engine
- Attempted Claude API integration (failed — direct browser calls require API key)
- Final clean rewrite eliminating all legacy code
- Railway deployment setup
- Debug tooling

The codebase has been through significant churn. The current `game-session.html` is the definitive clean version — treat previous versions referenced in chat history as superseded.

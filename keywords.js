// ═══════════════════════════════════════════════════════════════════════
// keywords.js — Veritas Keyword Database with Interpretation Layer
// All 50+ MTG keywords with analogy, tableTalk, experienceLevel,
// commonMistake, whatToDo, and contextual fields for the judge engine.
// ═══════════════════════════════════════════════════════════════════════

const KEYWORDS = {

  // ── TRAMPLE ──────────────────────────────────────────────────────────
  'trample': {
    rule: '702.19b',
    category: 'Evasion',
    experienceLevel: 'basic',
    plain: '<strong>With trample, you only need to assign lethal damage to blockers — the rest goes to the player.</strong> You don\'t have to waste all your damage on a single 1/1 blocker.',
    analogy: 'Like a charging rhino that doesn\'t stop just because something got in its way. It tramples right through the small obstacle to reach its real target.',
    tableTalk: 'So here\'s the thing with trample — your creature is so big that it only needs to assign lethal damage to each blocker, then the rest crashes through to the player. Got an 8/8 blocked by a 2/2? Assign 2 to the blocker, 6 goes straight to your opponent.',
    commonMistake: 'Players think they must assign ALL damage to blockers. You don\'t — only lethal damage (enough to destroy each blocker), then the rest tramples through. A 10/10 blocked by a 1/1 sends 9 damage through.',
    whatToDo: 'Assign lethal damage to each blocker first (their toughness worth, or just 1 if you have deathtouch), then the remaining power goes to the defending player.',
    whenAttacking: 'You\'re attacking with a trampler — assign lethal damage to each blocker in the damage assignment order, then the leftover damage hits the defending player directly.',
    whenBlocking: 'You\'re blocking a trampler — your creature will die absorbing lethal damage, but you can reduce the trample-through. Multiple blockers help split the damage.',
    withDeathtouch: 'With deathtouch AND trample, you only need to assign 1 damage to each blocker (deathtouch makes 1 damage lethal), and all remaining power tramples through. This combo is devastating.',
    nuances: [
      'You must assign at least lethal damage to each blocker before any damage can trample through.',
      'If a blocker has deathtouch, 1 damage is "lethal" to it — so just 1 assigns lethal and the rest tramples.',
      'If all blockers are removed before damage, trample is irrelevant — all damage goes through anyway.',
      'Trample still counts as combat damage to the player.'
    ],
    example: 'Your 8/8 trampler is blocked by a 2/2. Assign 2 damage to the blocker (lethal), 6 tramples to the player.',
    related: ['deathtouch', 'first strike', 'double strike', 'menace']
  },

  // ── FLYING ───────────────────────────────────────────────────────────
  'flying': {
    rule: '702.9b',
    category: 'Evasion',
    experienceLevel: 'basic',
    plain: '<strong>Flying creatures can only be blocked by other flying creatures or creatures with reach.</strong> Ground creatures simply cannot block it.',
    analogy: 'Like a plane flying over a traffic jam — the cars on the ground can\'t stop it. Only other aircraft (or a missile with reach) can intercept.',
    tableTalk: 'Your creature is in the air. Ground creatures literally can\'t touch it unless they have flying or reach. If your opponent has no flyers and no reach creatures, this hits them directly every attack.',
    commonMistake: 'Players forget that reach lets ground creatures block flyers. A Giant Spider or Longbow Archer absolutely stops a Dragon. Also: flying creatures can still block ground creatures normally.',
    whatToDo: 'Check if any defending creatures have flying or reach before declaring your flyer as unblockable. If none do, the damage goes through.',
    whenAttacking: 'Attack freely if the opponent has no flyers or reach creatures. If they have both, watch out — flying doesn\'t help with blocking ground forces on their counterattack.',
    whenBlocking: 'You can only block with flying or reach creatures. Ground creatures can\'t intercept.',
    withDeathtouch: 'A flying deathtouch creature is especially brutal — unblockable by ground forces, and any creature that DOES block it dies instantly.',
    nuances: [
      'A creature can have both flying and reach, but that\'s redundant.',
      'Flying doesn\'t help you block non-flying creatures — you can still do that normally.',
      'Some spells give flying temporarily, which matters for blocking.'
    ],
    example: 'Your 3/3 flier attacks into a board of 10/10 ground creatures. None can block unless they have flying or reach.',
    related: ['reach', 'shadow', 'skulk', 'fear', 'intimidate']
  },

  // ── REACH ────────────────────────────────────────────────────────────
  'reach': {
    rule: '702.17b',
    category: 'Evasion',
    experienceLevel: 'basic',
    plain: '<strong>Reach lets a ground creature block flying creatures.</strong> That\'s it — it doesn\'t give the creature flying itself.',
    analogy: 'Like a basketball player who can\'t dunk from midair but is tall enough to swat away shots at the rim.',
    tableTalk: 'Reach is purely defensive. This creature can stretch up and block flyers even though it can\'t fly itself. It won\'t help when you\'re attacking — only when they send in flyers.',
    commonMistake: 'Reach does NOT give the creature flying. It cannot attack past ground defenses as if it had flying. It only provides the single ability to block flying creatures.',
    whatToDo: 'Use reach creatures as your anti-air defense. They can block flying attackers that your other ground creatures can\'t.',
    whenAttacking: 'Reach provides no benefit when attacking — your creature still cannot fly over ground blockers.',
    whenBlocking: 'Assign this creature to block incoming flyers. Other ground creatures without reach cannot legally block a flying attacker.',
    withDeathtouch: null,
    nuances: [
      'Reach only matters when blocking, not when attacking.',
      'A creature with reach can still be blocked by ground creatures normally.',
      'Does not interact with shadow, horsemanship, or other non-flying evasion.'
    ],
    example: 'Giant Spider (reach) can block your opponent\'s Dragon. Your opponent\'s flyer cannot be blocked by your other ground creatures.',
    related: ['flying']
  },

  // ── DEATHTOUCH ───────────────────────────────────────────────────────
  'deathtouch': {
    rule: '702.2b',
    category: 'Combat',
    experienceLevel: 'basic',
    plain: '<strong>Any amount of damage from a deathtouch creature is lethal.</strong> A 1/1 with deathtouch kills a 10/10 — even 1 damage is enough to destroy it.',
    analogy: 'Like a creature coated in lethal poison — it doesn\'t matter how big the target is, even a scratch is fatal.',
    tableTalk: 'Deathtouch turns every single point of damage into a kill shot. It doesn\'t matter how big their creature is — if this thing deals even 1 damage to it, that creature dies. One scratch equals dead.',
    commonMistake: 'Deathtouch only applies to creatures, not players or planeswalkers. Indestructible creatures survive deathtouch — deathtouch makes damage "lethal," but indestructible creatures are immune to being destroyed at lethal damage.',
    whatToDo: 'When blocking with a deathtouch creature, you can block even the biggest attacker and it will die. When attacking, opponents can\'t block profitably unless they have indestructible creatures.',
    whenAttacking: 'Any creature that blocks it dies. Opponents will be reluctant to block, and even 1 damage gets through to them if they don\'t. Combine with trample to assign just 1 to each blocker and send the rest through.',
    whenBlocking: 'Block the biggest attacker — it dies regardless of size. Even a 1/1 deathtouch blocks and kills a 20/20.',
    withDeathtouch: 'With trample AND deathtouch, assign 1 damage to each blocker (lethal thanks to deathtouch), then trample the rest through to the player. One of the strongest combat combinations in the game.',
    nuances: [
      'Deathtouch only applies to creatures, not players or planeswalkers.',
      'Indestructible creatures are immune — deathtouch makes damage lethal, but indestructible ignores "destroy" effects.',
      'You can assign exactly 1 damage to each blocker when trample+deathtouch are both present.',
      'Regeneration saves a creature from deathtouch damage.',
      'Fight effects trigger deathtouch — any damage from a deathtouch creature kills the target.'
    ],
    example: 'Your 1/1 deathtouch blocks their 8/8. Both die — your creature from the 8 combat damage, theirs from the 1 deathtouch damage.',
    related: ['trample', 'indestructible', 'first strike', 'lifelink', 'fight']
  },

  // ── FIRST STRIKE ─────────────────────────────────────────────────────
  'first strike': {
    rule: '702.7b',
    category: 'Combat',
    experienceLevel: 'basic',
    plain: '<strong>First strike creates an extra combat damage step.</strong> Creatures with first strike deal their combat damage before creatures without it.',
    analogy: 'Like a gunslinger who draws first in a duel — they shoot before the other person can even reach for their weapon.',
    tableTalk: 'First strike means this creature gets to hit first in combat. If it deals enough damage to kill the blocker in that first step, the blocker never gets to swing back. It\'s like having faster reflexes.',
    commonMistake: 'First strike deals damage in ONE early step — it does NOT deal damage twice. That\'s double strike. First strike also applies when this creature blocks, not just when it attacks.',
    whatToDo: 'When attacking into blockers, remember your first striker gets to deal damage before they can respond. If your creature\'s power meets or exceeds the blocker\'s toughness, the blocker dies before it can hit back.',
    whenAttacking: 'Your creature deals damage in the first strike step. If the blocker is killed by that damage, it never gets to deal its combat damage back. Effectively a free kill against non-first-strikers.',
    whenBlocking: 'Assign this creature to block an attacker. In the first damage step, your creature deals its damage. If that\'s lethal to the attacker, the attacker dies before the normal damage step.',
    withDeathtouch: 'First strike with deathtouch means your creature deals its damage first — since deathtouch makes even 1 damage lethal, the blocker dies instantly and your creature takes zero damage back.',
    nuances: [
      'Both first strike and double strike creatures fight in the same first combat damage step.',
      'If the first-striker is blocked by another first striker, they deal damage simultaneously in the first step.',
      'If the creature dies in the first damage step, it won\'t deal damage in the second.',
      'First strike doesn\'t help in non-combat damage situations.'
    ],
    example: 'Your 2/2 first striker blocks their 3/3. Your creature deals 2 damage first — killing the 3/3 before it can deal its 3 damage. Your creature survives.',
    related: ['double strike', 'deathtouch', 'trample', 'lifelink']
  },

  // ── DOUBLE STRIKE ────────────────────────────────────────────────────
  'double strike': {
    rule: '702.8b',
    category: 'Combat',
    experienceLevel: 'intermediate',
    plain: '<strong>Double strike deals damage in both the first strike step AND the normal damage step.</strong> Effectively, it attacks twice in one combat.',
    analogy: 'Like a fighter who lands a jab AND a cross in the same combo — two full hits, not just one quick one.',
    tableTalk: 'Double strike is first strike on overdrive. This creature hits in the first damage step AND again in the normal step. That\'s double the damage, double the triggers. A 3/3 with double strike is dealing 6 total combat damage.',
    commonMistake: 'Double strike is NOT the same as first strike. A 3/3 with double strike deals 3 damage in the first step and 3 more in the second — 6 total. Lifelink gains life twice. Deathtouch kills two blockers across the two steps.',
    whatToDo: 'A 3/3 with double strike effectively has 6 power in combat. Plan damage assignments accordingly — you can split damage across two blockers using both steps.',
    whenAttacking: 'In the first strike step, deal damage to kill the first blocker. In the regular step, deal damage to the second blocker or the player if unblocked. Lifelink procs twice.',
    whenBlocking: 'Your double striker kills the attacker in the first step. If the attacker survives somehow, it gets hit again in the normal step.',
    withDeathtouch: 'Double strike + deathtouch = can kill two different blockers in one combat. First step kills one, second step kills the next. An absolute nightmare to block.',
    nuances: [
      'A 2/2 with double strike deals 4 total combat damage — 2 in each step.',
      '"Whenever this creature deals damage" triggers fire twice.',
      'Combined with deathtouch, it kills two blockers in one combat.',
      'Combined with lifelink, you gain life equal to power twice per combat.'
    ],
    example: 'Your 3/3 double striker attacks. In the first step it deals 3 to a blocker, then 3 more in the second step — 6 total.',
    related: ['first strike', 'lifelink', 'deathtouch', 'trample']
  },

  // ── LIFELINK ─────────────────────────────────────────────────────────
  'lifelink': {
    rule: '702.15b',
    category: 'Combat',
    experienceLevel: 'basic',
    plain: '<strong>Whenever a lifelink creature deals damage, you gain that much life simultaneously.</strong> The life gain happens as the damage is dealt.',
    analogy: 'Like a vampire — every bite heals them. The more damage they deal, the more life they drain for themselves.',
    tableTalk: 'Lifelink means every bit of damage this creature deals also heals you. Hit a player for 5? You gain 5 life. Block and deal 3 damage? You gain 3 life. It\'s a constant life engine.',
    commonMistake: 'Multiple instances of lifelink on the same creature do NOT stack — you still only gain life once per damage event. Lifelink applies to ALL damage the creature deals, not just combat damage — ability damage counts too.',
    whatToDo: 'Update life totals simultaneously when this creature deals damage. Life gain happens at the same time as damage, not after.',
    whenAttacking: 'Every point of unblocked damage or combat damage dealt to blockers gains you life. Against aggressive opponents, this can swing the life total significantly.',
    whenBlocking: 'Even blocking and dealing damage gains you life. Blocking a big attacker with a lifelink creature means you soak damage but gain life from your creature\'s hits.',
    withDeathtouch: 'Deathtouch + lifelink = block any creature, kill it, and gain life from the damage you dealt. One of the most efficient blocking configurations possible.',
    nuances: [
      'Lifelink applies to all damage the creature deals, not just combat damage.',
      'Multiple instances of lifelink don\'t stack — you only gain life once per damage event.',
      'Damage to planeswalkers also triggers lifelink.',
      'Double strike + lifelink = life gain in both damage steps.'
    ],
    example: 'Your 4/4 lifelinker attacks and isn\'t blocked. You gain 4 life when it deals 4 to the player.',
    related: ['double strike', 'deathtouch', 'vigilance']
  },

  // ── HEXPROOF ─────────────────────────────────────────────────────────
  'hexproof': {
    rule: '702.11c',
    category: 'Protection',
    experienceLevel: 'basic',
    plain: '<strong>Hexproof means your opponents can\'t target it with spells or abilities.</strong> You can still target it yourself. Board wipes and non-targeting effects still work.',
    analogy: 'Like someone with a personal force field — enemy attacks bounce off, but they can still shake hands with their own team.',
    tableTalk: 'Hexproof stops your opponents from singling this creature out with targeted spells like Doom Blade or Pacifism. They literally can\'t choose it as a target. But anything that hits everything — like Wrath of God — still works since that doesn\'t "target."',
    commonMistake: 'Hexproof stops TARGETING only. Wrath of God, Toxic Deluge, and other "all creatures" effects work perfectly fine. The ability only prevents opponents from choosing it as a target — area effects bypass it entirely.',
    whatToDo: 'You can\'t target this creature with your spells either — wait, yes you can. YOU can target YOUR OWN hexproof creatures. Only opponents are blocked from targeting them.',
    whenAttacking: 'Hexproof doesn\'t help when attacking — it only blocks opponent targeting. Your hexproof attacker can still be blocked normally.',
    whenBlocking: 'Your hexproof blocker can\'t be removed mid-combat with a targeted instant unless the opponent can deal with it via non-targeting means.',
    withDeathtouch: 'Hexproof + deathtouch is excellent — opponents can\'t remove it with targeted spells, and it kills anything it blocks.',
    nuances: [
      'Hexproof only stops targeting — not "all creatures" effects like Wrath of God.',
      'You can still equip or enchant your own hexproof creature.',
      'Auras your opponent controls fall off if the creature gains hexproof after they\'re attached.',
      '"Hexproof from [quality]" is more specific — only stops that color/type.'
    ],
    example: 'Your hexproof creature is safe from Doom Blade (targets), but not safe from Wrath of God (doesn\'t target).',
    related: ['shroud', 'protection', 'ward', 'indestructible']
  },

  // ── SHROUD ───────────────────────────────────────────────────────────
  'shroud': {
    rule: '702.18b',
    category: 'Protection',
    experienceLevel: 'intermediate',
    plain: '<strong>Shroud means nobody can target it — not even you.</strong> Unlike hexproof, you can\'t equip, enchant, or target it with your own spells either.',
    analogy: 'Like someone who\'s gone completely off the grid — safe from enemies, but also can\'t receive help from their own team.',
    tableTalk: 'Shroud is the old version of hexproof, and it\'s actually worse for you. Nobody can target it — including you. You can\'t buff it, enchant it, or equip it. Your opponents are locked out, but so are you.',
    commonMistake: 'Shroud is NOT the same as hexproof. Hexproof only blocks OPPONENTS from targeting. Shroud blocks EVERYONE including you. You cannot equip, enchant, or cast pump spells targeting your own shroud creature.',
    whatToDo: 'Remember: you cannot target your own shroud creature. Plan accordingly — no equipping, no buffing, no targeting it yourself.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'Shroud is strictly worse than hexproof for your own permanents.',
      'You can\'t move equipment onto a shroud creature.',
      'Area effects like Wrath of God still affect shroud creatures.',
      'Shroud is an older mechanic — many cards now use hexproof instead.'
    ],
    example: 'Your shrouded creature is safe from opponent removal — but you can\'t enchant or equip it yourself.',
    related: ['hexproof', 'protection']
  },

  // ── WARD ─────────────────────────────────────────────────────────────
  'ward': {
    rule: '702.20a',
    category: 'Protection',
    experienceLevel: 'intermediate',
    plain: '<strong>Ward punishes opponents for targeting your permanent.</strong> When an opponent targets it with a spell or ability, that spell or ability is countered unless they pay the ward cost.',
    analogy: 'Like a tollbooth on the only road to your base — enemies can try to attack along that road, but they have to pay extra or get turned back.',
    tableTalk: 'Ward is a tax on removal. When your opponent tries to target this, they get a choice: pay extra mana or have their spell countered. It doesn\'t make it impossible to remove — it just makes it more expensive.',
    commonMistake: 'Ward does NOT prevent targeting — it creates a trigger that goes on the stack. The opponent CAN target the ward creature. The ward trigger then fires, and they must pay or the spell is countered. Ward only applies to OPPONENTS — you can target your own ward creatures freely.',
    whatToDo: 'When the opponent targets your ward creature, let the ward trigger go on the stack. They must respond by paying the cost or allowing their spell to be countered.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'Ward uses the stack — the spell is countered after the cost is paid (or not).',
      'Multiple ward abilities trigger separately.',
      'Ward doesn\'t stop non-targeting effects.',
      'Only opponents pay ward — you can freely target your own ward permanents.'
    ],
    example: 'Your creature has Ward 2. Opponent casts Doom Blade on it. They must pay 2 extra mana or Doom Blade is countered.',
    related: ['hexproof', 'shroud', 'protection']
  },

  // ── PROTECTION ───────────────────────────────────────────────────────
  'protection': {
    rule: '702.16e',
    category: 'Protection',
    experienceLevel: 'intermediate',
    plain: '<strong>Protection from [quality] means DEBT: can\'t be Damaged, Enchanted, Blocked, or Targeted by anything with that quality.</strong> It\'s the strongest defensive ability.',
    analogy: 'Like wearing full armor painted in a specific color — all attacks from creatures wearing that color bounce off harmlessly, and they can\'t even get close enough to touch you.',
    tableTalk: 'Remember DEBT for protection — Damage prevented, Enchanted or Equipped prevented, Blocked prevented, Targeted prevented. Protection from red? Red damage is prevented, red spells can\'t target it, red creatures can\'t block it. Four protections in one.',
    commonMistake: 'Protection does NOT stop everything. Effects that don\'t damage, target, block, or attach to the creature still work. "Destroy all creatures" doesn\'t target, so it destroys even protected creatures. Also: protection from a color stops your own beneficial spells of that color too.',
    whatToDo: 'Apply DEBT: prevent any damage from that quality, remove any enchantments or equipment with that quality, unblock it if the blockers have that quality, counter any spells with that quality targeting it.',
    whenAttacking: 'Protection from a color makes this unblockable by creatures of that color. Combined with evasion, it can attack freely through certain board configurations.',
    whenBlocking: 'This creature can\'t be damaged by sources with the protected quality — so blocking those attackers is one-sided.',
    withDeathtouch: null,
    nuances: [
      'Remember DEBT: Damage prevented, Enchant/Equip prevented, Blocked prevented, Target prevented.',
      'Protection doesn\'t prevent effects that don\'t target or deal damage.',
      'Protection from a color stops all spells of that color, including beneficial ones.',
      'Sacrifice bypasses protection entirely.'
    ],
    example: 'Creature with protection from red: can\'t be targeted by Lightning Bolt, can\'t be blocked by red creatures, any red damage is prevented.',
    related: ['hexproof', 'shroud', 'ward', 'indestructible']
  },

  // ── INDESTRUCTIBLE ───────────────────────────────────────────────────
  'indestructible': {
    rule: '702.12b',
    category: 'Protection',
    experienceLevel: 'basic',
    plain: '<strong>Indestructible permanents can\'t be destroyed — not by lethal damage, not by "destroy" effects.</strong> But they can still be exiled, bounced, or have toughness reduced to 0.',
    analogy: 'Like a tank with impenetrable armor — guns and bombs bounce right off. But you can still dig a pit and trap it, or drain its fuel.',
    tableTalk: 'Indestructible is one of the strongest protections — "destroy" spells and lethal combat damage do literally nothing. But it has clear weaknesses: exile it, reduce its toughness to 0 with -X/-X, or make them sacrifice it.',
    commonMistake: '"Destroy" effects and lethal damage do nothing against indestructible. But EXILE bypasses it, -X/-X toughness reduction to 0 kills it (that\'s a state-based action, not "destroying"), and SACRIFICE effects work since sacrificing isn\'t destroying.',
    whatToDo: 'To deal with an indestructible creature: exile it (Path to Exile, Swords to Plowshares), reduce toughness to 0 (Languish, Toxic Deluge), or use sacrifice effects (Dictate of Erebos).',
    whenAttacking: 'An indestructible attacker survives combat damage — it can attack repeatedly without dying to blockers. Opponents must either take the damage or find non-destroy answers.',
    whenBlocking: 'An indestructible blocker absorbs all attacker damage and survives. It can block every turn.',
    withDeathtouch: 'Indestructible creatures are IMMUNE to deathtouch. Deathtouch makes damage "lethal" — but indestructible creatures can\'t be destroyed at lethal damage. They simply don\'t die.',
    nuances: [
      '"Destroy" effects do nothing. Lethal damage is marked but doesn\'t cause destruction.',
      'Toughness reduced to 0 or less still kills indestructible (state-based action, not "destroy").',
      'Exile completely bypasses indestructible.',
      'Sacrifice gets around it — "sacrifice a creature" effects work on indestructible creatures.'
    ],
    example: 'Darksteel Colossus is indestructible. Wrath of God doesn\'t kill it. But Swords to Plowshares exiles it. Or use Languish (-4/-4) to bring its toughness to 0.',
    related: ['hexproof', 'protection', 'exile', 'sacrifice']
  },

  // ── REGENERATE ───────────────────────────────────────────────────────
  'regenerate': {
    rule: '701.14a',
    category: 'Protection',
    experienceLevel: 'intermediate',
    plain: '<strong>Regeneration replaces destruction with: tap the creature, remove it from combat, remove all damage.</strong> It doesn\'t prevent damage — it replaces what happens after lethal damage.',
    analogy: 'Like a lizard regrowing its tail — it gets hurt, but instead of dying, it snaps back to full health, though it has to sit out the fight for a moment.',
    tableTalk: 'Regeneration is a shield against destruction. You pay the cost before the creature takes damage, and if it would die — from lethal damage or a spell — instead it taps, leaves combat, and all damage is healed away. Like a reset button.',
    commonMistake: 'Regeneration does NOT prevent damage — it replaces DESTRUCTION. The creature still takes the damage; it just doesn\'t die. Also: regeneration doesn\'t work against EXILE. Only works against "destroy" effects and lethal damage.',
    whatToDo: 'Activate the regeneration ability before your creature would be destroyed. It sets up a shield that fires once if the creature would be destroyed this turn.',
    whenAttacking: null,
    whenBlocking: 'If your blocker would die, activate regeneration. It taps instead of dying, and is removed from combat. It won\'t deal or receive further combat damage this turn.',
    withDeathtouch: 'Regeneration saves a creature from deathtouch damage — the creature still takes the damage, but regeneration\'s shield prevents the destruction.',
    nuances: [
      'Regeneration doesn\'t work against exile effects.',
      'It creates a "shield" that must be in place before the creature would be destroyed.',
      'A regenerated creature is removed from combat — it won\'t deal or receive further combat damage this turn.',
      '"Cannot regenerate" effects negate this entirely.'
    ],
    example: 'Opponent casts Doom Blade on your regenerating creature. You pay the regeneration cost — it taps instead of dying.',
    related: ['indestructible', 'exile', 'deathtouch']
  },

  // ── VIGILANCE ────────────────────────────────────────────────────────
  'vigilance': {
    rule: '702.20b',
    category: 'Combat',
    experienceLevel: 'basic',
    plain: '<strong>Vigilance means attacking doesn\'t tap the creature.</strong> It can attack and still be available to block on your opponent\'s next turn.',
    analogy: 'Like a soldier who attacks but keeps one eye over their shoulder — they never drop their guard, even while charging forward.',
    tableTalk: 'Vigilance is all about having your cake and eating it too. This creature attacks every turn and still stands ready to block your opponent\'s counterattack. No commitment required.',
    commonMistake: 'Vigilance doesn\'t prevent the creature from being tapped by OTHER effects. Opponent can still tap it with a spell or ability. Vigilance only prevents the automatic tap when you declare attackers.',
    whatToDo: 'After you attack, this creature remains untapped. Keep it available to block on your opponent\'s next turn.',
    whenAttacking: 'Declare this as an attacker — it remains untapped. After combat, it\'s ready to defend.',
    whenBlocking: 'Vigilance doesn\'t apply when blocking — blockers always stay untapped after blocking (unless other rules say otherwise).',
    withDeathtouch: 'Vigilance + deathtouch = a creature that attacks freely every turn and blocks any attacker back, killing them, without ever needing to rest.',
    nuances: [
      'Vigilance doesn\'t prevent the creature from being tapped by other effects.',
      'You still need to declare it as an attacker.',
      'Can use tap abilities after attacking.'
    ],
    example: 'Your 4/4 vigilance attacks. After damage, it\'s untapped and ready to block your opponent\'s counterattack.',
    related: ['haste', 'flash']
  },

  // ── HASTE ────────────────────────────────────────────────────────────
  'haste': {
    rule: '702.10b',
    category: 'Combat',
    experienceLevel: 'basic',
    plain: '<strong>Haste lets a creature attack and use tap abilities the same turn it enters the battlefield.</strong> Normally, creatures have "summoning sickness" and must wait a turn.',
    analogy: 'Like someone who shows up to work already in uniform and ready to go — no orientation period, no waiting. They hit the ground running.',
    tableTalk: 'Normally a new creature has to wait a turn before attacking — that\'s summoning sickness. Haste skips that waiting period. This creature can attack or use tap abilities the very turn you play it.',
    commonMistake: 'Summoning sickness only prevents ATTACKING and USING TAP ABILITIES. Other non-tap abilities work fine immediately. Haste only matters on the turn it enters — afterward every creature can attack anyway.',
    whatToDo: 'You can attack with this creature immediately. If it has a tap ability, you can use that too. No waiting required.',
    whenAttacking: 'Immediately declare this as an attacker if you need to deal damage now. Great for closing out games or triggering attack-based abilities on entry.',
    whenBlocking: 'Haste doesn\'t affect blocking — any creature can block on the turn it enters (summoning sickness never prevents blocking).',
    withDeathtouch: null,
    nuances: [
      'Summoning sickness only prevents attacking and using tap abilities — other abilities work fine.',
      'If a creature changes controllers, it gets summoning sickness again — unless it has haste.',
      'Haste only helps on the turn it enters. After that, summoning sickness is gone anyway.'
    ],
    example: 'You cast a 5/5 with haste on your turn. You can immediately attack with it this turn.',
    related: ['vigilance', 'flash']
  },

  // ── MENACE ───────────────────────────────────────────────────────────
  'menace': {
    rule: '702.110b',
    category: 'Evasion',
    experienceLevel: 'basic',
    plain: '<strong>A creature with menace requires at least two blockers.</strong> Your opponent must block it with two or more creatures, or let it through entirely.',
    analogy: 'Like a bouncer at a club who won\'t let just one person handle a rowdy customer — they need two staff members minimum to make the call.',
    tableTalk: 'Your opponent can\'t just throw one creature in front of this — they need to commit at least two blockers. If they only have one creature available, they literally cannot block it. They have to take the hit.',
    commonMistake: 'If the defending player only has one creature available, they CANNOT block a menace attacker at all — not even with that one creature. They must let it through unblocked.',
    whatToDo: 'Your opponent must declare two or more blockers against this creature, or it goes through unblocked. Look at their available creatures — if they have only one, it\'s unblockable.',
    whenAttacking: 'Count the opponent\'s available blockers. One or fewer? It\'s unblockable. Two or more? They can block, but must commit multiple creatures.',
    whenBlocking: 'Menace doesn\'t affect blocking — it only applies when the menace creature attacks.',
    withDeathtouch: 'Menace + deathtouch: opponent must commit two blockers, and both die from deathtouch damage. A devastating attacker.',
    nuances: [
      'If your opponent only has one creature, it can\'t block menace at all — must let it through.',
      'Menace doesn\'t help if the blocker is removed after being declared.',
      'Both blockers must be legally declared — they must be able to block this creature.'
    ],
    example: 'You attack with a 4/4 with menace. Your opponent has a 3/3 and a 1/1. They must commit both or neither.',
    related: ['trample', 'intimidate', 'fear']
  },

  // ── SHADOW ───────────────────────────────────────────────────────────
  'shadow': {
    rule: '702.27b',
    category: 'Evasion',
    experienceLevel: 'intermediate',
    plain: '<strong>Shadow creatures can only be blocked by other shadow creatures, and can only block shadow creatures.</strong> They exist in a parallel dimension.',
    analogy: 'Like a ghost that can only interact with other ghosts. The physical world around it is irrelevant in both directions.',
    tableTalk: 'Shadow is a two-way street. Your creature phases right past their army AND can\'t block anything without shadow itself. It\'s a pure offense ability unless you\'re in a shadow mirror.',
    commonMistake: 'Unlike flying, shadow is fully bidirectional. Your shadow creature CANNOT block non-shadow creatures. And non-shadow creatures cannot block your shadow creature. They exist on completely separate planes.',
    whatToDo: 'Shadow creatures attack freely through any non-shadow army. But they cannot be used to defend — they can\'t block non-shadow attackers.',
    whenAttacking: 'Declare this freely unless the opponent has shadow creatures. Their entire non-shadow army is powerless to intercept it.',
    whenBlocking: 'Cannot block non-shadow creatures at all. Only use this to block opposing shadow creatures.',
    withDeathtouch: null,
    nuances: [
      'Unlike flying, shadow is two-directional — you can\'t block non-shadow creatures with it either.',
      'Exclusively from Tempest/Weatherlight era cards.'
    ],
    example: 'Your 2/1 shadow slips past their entire army unless they also have shadow creatures.',
    related: ['flying', 'fear', 'intimidate']
  },

  // ── FEAR ─────────────────────────────────────────────────────────────
  'fear': {
    rule: '702.36b',
    category: 'Evasion',
    experienceLevel: 'intermediate',
    plain: '<strong>Fear creatures can only be blocked by artifact creatures or black creatures.</strong> Against most decks, this is practically unblockable.',
    analogy: 'Like a villain so terrifying that most soldiers refuse to stand in its path — only those made of steel or already working for darkness dare to intercept.',
    tableTalk: 'Fear means most of your opponent\'s creatures are too scared to block. Unless they have black creatures or artifact creatures, this just walks right through.',
    commonMistake: 'Fear is a legacy keyword mostly replaced by intimidate. Don\'t confuse it with intimidate — fear always means black + artifact, while intimidate uses the creature\'s own color.',
    whatToDo: 'Check if the defending player has any black or artifact creatures. If not, this attacker is unblockable.',
    whenAttacking: 'Survey the opponent\'s board for black creatures and artifacts. Those are the only legal blockers.',
    whenBlocking: 'Fear doesn\'t help when blocking — it only applies to attacking.',
    withDeathtouch: null,
    nuances: ['Fear is an older mechanic mostly replaced by intimidate and menace in newer cards.'],
    example: 'Black Knight with fear attacks into a white weenie deck — nothing can block it.',
    related: ['intimidate', 'menace', 'protection']
  },

  // ── INTIMIDATE ───────────────────────────────────────────────────────
  'intimidate': {
    rule: '702.13b',
    category: 'Evasion',
    experienceLevel: 'intermediate',
    plain: '<strong>Intimidate creatures can only be blocked by artifact creatures or creatures that share a color with it.</strong> It\'s the color-based version of fear.',
    analogy: 'Like a gang member who only gets challenged by rivals in the same colors — everyone else backs off.',
    tableTalk: 'Intimidate uses this creature\'s own color as the filter. If this is a red creature, only red or artifact creatures can block it. Against a mono-blue opponent, it\'s practically unblockable.',
    commonMistake: 'A multicolored intimidate creature can be blocked if the blocker shares ANY of its colors. A red-green intimidate creature can be blocked by any red, green, or artifact creature.',
    whatToDo: 'Determine this creature\'s color(s), then check if the defending player has creatures of those colors or artifact creatures. Those are the only legal blockers.',
    whenAttacking: 'Check the opponent\'s board for creatures matching this card\'s colors or artifacts. Off-color opponents are completely locked out.',
    whenBlocking: 'Intimidate doesn\'t affect blocking.',
    withDeathtouch: null,
    nuances: ['A multicolored creature can be blocked if the blocker shares any of its colors.'],
    example: 'Your green intimidate creature can only be blocked by green or artifact creatures.',
    related: ['fear', 'menace']
  },

  // ── SKULK ────────────────────────────────────────────────────────────
  'skulk': {
    rule: '702.116b',
    category: 'Evasion',
    experienceLevel: 'intermediate',
    plain: '<strong>A skulk creature can only be blocked by creatures with power equal to or less than its own power.</strong> Small skulk creatures slip past big creatures.',
    analogy: 'Like a tiny spy sneaking past giants — they\'re too big and clumsy to catch something so small darting between their legs.',
    tableTalk: 'Skulk is sneaky — big creatures can\'t block it because they\'re too clumsy to catch something small. Only equally small or smaller creatures can intercept it.',
    commonMistake: 'Skulk compares the SKULK creature\'s power to the BLOCKER\'s power. If skulk creature has 1 power, only 0 or 1 power creatures can block it. A 4/4 cannot block a 1/1 skulk. Pump spells on skulk can accidentally make it blockable.',
    whatToDo: 'Check if any of the defending player\'s creatures have power less than or equal to this creature\'s power. Only those can legally block.',
    whenAttacking: 'Count opponents\' creature powers. Any creature with power greater than skulk\'s power cannot legally block.',
    whenBlocking: 'Skulk doesn\'t affect blocking — only applies when the skulk creature attacks.',
    withDeathtouch: 'Skulk + deathtouch: small creatures that do block it die instantly, and bigger creatures can\'t block anyway.',
    nuances: [
      'The comparison is the skulk creature\'s power vs the blocker\'s power.',
      'Skulk doesn\'t help against 0-power creatures — they can always block.',
      'Pumping a skulk creature to higher power makes it blockable by more creatures.'
    ],
    example: 'Your 1/1 skulk can only be blocked by 0/x or 1/x creatures. Their 4/4 can\'t legally block it.',
    related: ['flying', 'shadow']
  },

  // ── FLASH ────────────────────────────────────────────────────────────
  'flash': {
    rule: '702.8a',
    category: 'Static',
    experienceLevel: 'basic',
    plain: '<strong>Flash lets you cast the spell any time you could cast an instant.</strong> This means during opponents\' turns, in response to spells, at end of step.',
    analogy: 'Like getting to show up to a party at any time — while everyone else has to follow visiting hours, you appear whenever you feel like it.',
    tableTalk: 'Flash is the key to flexibility. Instead of playing this on your turn and telegraphing your move, hold it and play it at the perfect moment — like the opponent\'s end step, or as a surprise blocker during their attack.',
    commonMistake: 'Flash doesn\'t make the card an instant — it\'s still its original card type. A flash creature is still a creature for all other purposes. Casting a flash creature during declare attackers makes it a surprise blocker.',
    whatToDo: 'Hold this card and wait for the optimal moment. End of opponent\'s turn is often best — they have no response window before your untap step.',
    whenAttacking: null,
    whenBlocking: 'During the opponent\'s declare attackers step, you can cast a flash creature as a surprise blocker they didn\'t plan for.',
    withDeathtouch: 'Flash + deathtouch = surprise blocker that kills whatever attacks into it. Extremely effective at punishing over-extended attacks.',
    nuances: [
      'Flash doesn\'t mean it\'s an instant — it\'s still its card type for other purposes.',
      'Best used at end of opponent\'s turn to deny them a response window.',
      'Leyline of Anticipation gives all your permanents flash.'
    ],
    example: 'You hold a flash creature. Opponent attacks. During their declare attackers step, you cast your flash creature as a surprise blocker.',
    related: ['haste', 'vigilance']
  },

  // ── PROWESS ──────────────────────────────────────────────────────────
  'prowess': {
    rule: '702.107a',
    category: 'Triggered',
    experienceLevel: 'intermediate',
    plain: '<strong>Each time you cast a noncreature spell, all your prowess creatures get +1/+1 until end of turn.</strong> Instants and sorceries fuel it best.',
    analogy: 'Like a martial artist who grows stronger and faster with every technique they use — the more spells flying, the more dangerous they become.',
    tableTalk: 'Prowess rewards you for casting spells. Every noncreature spell you cast pumps your prowess creatures. Stack three cantrips and your creature is suddenly a monster.',
    commonMistake: 'Prowess only triggers on NONCREATURE spells. Casting another creature does nothing. Also: prowess triggers when you CAST the spell — even if the spell gets countered, prowess already fired.',
    whatToDo: 'Cast your noncreature spells before combat, or during combat, to pump prowess creatures. The +1/+1 bonus lasts until end of turn.',
    whenAttacking: 'Cast instants during your attack step to pump prowess before damage is assigned. Opponents can\'t plan around the final power of a prowess attacker.',
    whenBlocking: 'Cast instants in response to the attack to pump your prowess blocker before damage resolves.',
    withDeathtouch: null,
    nuances: [
      'Noncreature spells only — casting creatures doesn\'t trigger prowess.',
      'Each prowess trigger is separate — casting 3 instants gives +3/+3 total.',
      'Prowess triggers when you cast the spell, before it resolves.',
      'Spells that get countered still trigger prowess — you cast them.'
    ],
    example: 'You have two prowess creatures. Cast Lightning Bolt (instant). Both get +1/+1. Cast another spell — both get another +1/+1.',
    related: ['flash', 'haste']
  },

  // ── DEFENDER ─────────────────────────────────────────────────────────
  'defender': {
    rule: '702.3b',
    category: 'Combat',
    experienceLevel: 'basic',
    plain: '<strong>Defender means the creature can\'t attack.</strong> It can block normally. Most walls have defender.',
    analogy: 'Like a goalie in soccer — they can\'t charge up the field and score goals, but they\'re the best thing protecting your net.',
    tableTalk: 'Defender means this creature is purely defensive — it can\'t join your attacks. It\'s stuck at home base, ready to block but never to charge forward.',
    commonMistake: 'Defender prevents ATTACKING only, not using activated abilities or blocking. Some cards specifically say "can attack as though it doesn\'t have defender" — those override this restriction.',
    whatToDo: 'Use this creature for blocking only. It cannot be declared as an attacker.',
    whenAttacking: 'Cannot be declared as an attacker. Period.',
    whenBlocking: 'Freely assign this creature to block any attacker. High-toughness defenders can stall powerful attackers for many turns.',
    withDeathtouch: null,
    nuances: [
      'Defender doesn\'t prevent the creature from using activated abilities.',
      'Effects that say "creatures can attack as though they didn\'t have defender" override it.',
      'Vehicles and other effects can circumvent defender restrictions.'
    ],
    example: 'Your 0/8 wall with defender can absorb huge attackers but can\'t join your attacks.',
    related: ['vigilance', 'haste']
  },

  // ── SACRIFICE ────────────────────────────────────────────────────────
  'sacrifice': {
    rule: '701.15a',
    category: 'Action',
    experienceLevel: 'basic',
    plain: '<strong>Sacrificing means putting your own permanent directly from the battlefield to your graveyard.</strong> This bypasses indestructible and regeneration.',
    analogy: 'Like a chess player sacrificing a piece — you deliberately give it up, usually to gain something greater in return.',
    tableTalk: 'Sacrifice is different from a creature dying in combat. You\'re choosing to move your own permanent to the graveyard — usually as a cost or an effect. Crucially, sacrifice bypasses indestructible and regeneration. Can\'t destroy their creature? Make them sacrifice it instead.',
    commonMistake: 'You can only sacrifice YOUR OWN permanents — never opponents\'. "Dies" triggers DO fire when you sacrifice a creature, because going to the graveyard from the battlefield counts as dying regardless of cause.',
    whatToDo: 'Move the specified permanent from the battlefield to the graveyard. Death triggers fire. Indestructible and regeneration do not prevent this.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'Sacrifice is a cost or effect — it can\'t be responded to like a targeting spell.',
      '"Dies" triggers DO happen when you sacrifice a creature.',
      'You can\'t sacrifice something that isn\'t on the battlefield.',
      'Sacrifice bypasses indestructible and regeneration.'
    ],
    example: 'You sacrifice a creature to Viscera Seer. It goes to graveyard, triggering Blood Artist, and you scry 1.',
    related: ['dies', 'graveyard', 'exile', 'indestructible']
  },

  // ── EXILE ────────────────────────────────────────────────────────────
  'exile': {
    rule: '406.3',
    category: 'Zone',
    experienceLevel: 'basic',
    plain: '<strong>Exile is a separate zone from the graveyard — exiled cards are completely removed from normal play.</strong> "Dies" triggers don\'t happen. Graveyard recursion doesn\'t work.',
    analogy: 'Like being sent to a maximum security prison instead of just jail — no bail, no early release. Gone for good unless something very specific retrieves them.',
    tableTalk: 'Exile is permanent removal. Not like dying in combat where the card sits in the graveyard waiting to be reanimated. Exile means gone — no dies triggers, graveyard recursion can\'t reach it, Snapcaster can\'t flashback it.',
    commonMistake: '"Dies" triggers ONLY fire when a creature goes to the graveyard. Exile does NOT trigger Blood Artist, Soul Warden, or any "whenever a creature dies" effect. Exiled creatures never went to the graveyard.',
    whatToDo: 'Exiled cards go to the exile zone — not the graveyard. No death triggers. No recursion unless a card specifically says "from exile."',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      '"Dies" means going to the graveyard — exile does NOT trigger it.',
      'Some exile effects are temporary — "exile until creature leaves" returns it.',
      'Flickering (exile and return immediately) triggers ETB effects and resets the creature.',
      'Indestructible creatures CAN be exiled — indestructible only protects against destruction.'
    ],
    example: 'Path to Exile removes a creature permanently. No death triggers. Blood Artist doesn\'t care. Graveyard recursion can\'t get it back.',
    related: ['sacrifice', 'indestructible', 'phasing']
  },

  // ── DESTROY ──────────────────────────────────────────────────────────
  'destroy': {
    rule: '701.7a',
    category: 'Action',
    experienceLevel: 'basic',
    plain: '<strong>Destroying a permanent moves it from the battlefield to its owner\'s graveyard.</strong> Death triggers fire normally. But it fails against indestructible.',
    analogy: 'Like normal death — the creature goes to the graveyard, where it can potentially be revived or trigger effects.',
    tableTalk: 'Destroy is the most common removal type, but it has key weaknesses. Indestructible creatures ignore it completely, and regeneration can save creatures from it. Death triggers like Blood Artist fire when something is destroyed.',
    commonMistake: 'Destroy fails against indestructible. Regeneration saves from destroy effects. If you need to remove an indestructible creature, use exile, -X/-X to reduce toughness to 0, or sacrifice effects.',
    whatToDo: 'Indestructible creatures are immune. Regenerating creatures can prevent this. Death triggers fire for destroyed creatures.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: 'Deathtouch causes any damage from that creature to count as lethal — effectively a destroy effect for combat. A 1/1 deathtouch can "destroy" a 10/10 in combat.',
    nuances: [
      'Indestructible creatures can\'t be destroyed.',
      'Regeneration replaces destruction once.',
      '"Dies" triggers DO fire when a creature is destroyed.',
      'Deathtouch causes any damage to be treated as lethal — same as a destroy effect for combat.'
    ],
    example: 'Doom Blade targets a creature. It\'s destroyed — goes to graveyard. If that creature had indestructible, Doom Blade does nothing.',
    related: ['exile', 'indestructible', 'sacrifice', 'regenerate']
  },

  // ── COUNTER ──────────────────────────────────────────────────────────
  'counter': {
    rule: '701.5a',
    category: 'Action',
    experienceLevel: 'basic',
    plain: '<strong>Countering removes a spell or ability from the stack — it never resolves and goes to the graveyard.</strong> A countered spell doesn\'t enter the battlefield or do anything.',
    analogy: 'Like a goalkeeper saving a shot — the ball never crosses the line. The spell never completes.',
    tableTalk: 'Countering a spell stops it completely — it never resolves, never enters the battlefield, triggers nothing on entry. The card goes to the graveyard. Some cards say "can\'t be countered" — those resolve regardless.',
    commonMistake: 'Countering a creature spell means the creature never enters the battlefield — no ETB triggers, no dies triggers, nothing. Mana abilities cannot be countered — they don\'t use the stack.',
    whatToDo: 'Move the countered spell from the stack to the graveyard. It never resolved. No ETB effects. No payment of costs.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'Countering a spell doesn\'t trigger "dies" — the creature never entered the battlefield.',
      'Some cards "can\'t be countered" — they still go on the stack but resolve regardless.',
      'Counterspells themselves can be countered.',
      'Mana abilities can\'t be countered — they don\'t use the stack.'
    ],
    example: 'You counter a creature spell. It goes to graveyard without entering play. No ETB triggers. No dies triggers.',
    related: ['stack', 'resolve']
  },

  // ── MILL ─────────────────────────────────────────────────────────────
  'mill': {
    rule: '701.13a',
    category: 'Action',
    experienceLevel: 'basic',
    plain: '<strong>To mill N means to put the top N cards of a library directly into the graveyard.</strong> The player doesn\'t choose — always the top of the library.',
    analogy: 'Like shredding pages from a book — the cards are gone from the library but sitting in the graveyard, potentially useful to the right strategy.',
    tableTalk: 'Milling puts cards from the top of the library straight into the graveyard. Important: players don\'t lose from an empty library — they lose when they TRY TO DRAW from an empty library and can\'t.',
    commonMistake: 'A player does NOT lose immediately when their library becomes empty. They lose the NEXT TIME they need to draw a card and can\'t. Also: milling can accidentally help graveyard strategies.',
    whatToDo: 'Put the specified number of cards from the top of the library into the graveyard face up.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'Milled cards go to the graveyard — not exile.',
      'A player who can\'t draw a card loses immediately — not a player who runs out of library.',
      'Milling yourself can be strategic for graveyard-based decks.'
    ],
    example: 'Opponent mills 10 cards. They\'re only in danger of losing when they need to draw and their library is empty.',
    related: ['graveyard', 'library', 'draw']
  },

  // ── SCRY ─────────────────────────────────────────────────────────────
  'scry': {
    rule: '701.18a',
    category: 'Action',
    experienceLevel: 'basic',
    plain: '<strong>Scry N means look at the top N cards, then put any combination back on top (in any order) or on the bottom (in any order).</strong>',
    analogy: 'Like peeking at the top of a stack of cards and sorting them — you can\'t draw them yet, but you decide what order they\'re in.',
    tableTalk: 'Scry lets you look ahead and arrange your draws. You see N cards simultaneously, arrange them however you want on top or send bad ones to the bottom. Pure draw quality improvement.',
    commonMistake: 'Cards go to top OR bottom — you cannot put them in the middle of the library. Unlike surveil, scry doesn\'t mill cards into the graveyard.',
    whatToDo: 'Look at the top N cards simultaneously. Arrange any in any order on top, put the rest on the bottom in any order.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'You can see all N cards simultaneously and arrange them however you want.',
      'Cards go to top or bottom — you can\'t shuffle them into the middle.',
      'Unlike surveil, scry doesn\'t mill cards — they all stay in the library.'
    ],
    example: 'You scry 3. See three cards. Keep 2 on top in the order you want, put 1 on the bottom.',
    related: ['surveil', 'draw', 'library']
  },

  // ── SURVEIL ──────────────────────────────────────────────────────────
  'surveil': {
    rule: '701.42a',
    category: 'Action',
    experienceLevel: 'intermediate',
    plain: '<strong>Surveil N is like scry, but you can put cards into your graveyard instead of the bottom of your library.</strong>',
    analogy: 'Like scry\'s darker cousin — instead of putting bad cards at the bottom of the pile, you can throw them in the trash where they might actually be useful.',
    tableTalk: 'Surveil is scry with a graveyard option. Each card you see can go on top of your library OR directly into the graveyard. Amazing for flashback, delve, or reanimator strategies.',
    commonMistake: 'Unlike scry, surveil CAN put cards into the graveyard. This is often better for graveyard decks. Also: cards going to graveyard via surveil are NOT being discarded — they go directly.',
    whatToDo: 'For each of the N cards revealed, choose: put on top of library in any order, or put in graveyard.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'Unlike scry, cards can go to the graveyard.',
      'You choose for each card individually.',
      'Triggers "whenever you surveil" effects like Dimir Spybug.'
    ],
    example: 'Surveil 2: see two cards. Put one in graveyard for later recursion. Keep one on top to draw next turn.',
    related: ['scry', 'graveyard', 'flashback']
  },

  // ── EXPLORE ──────────────────────────────────────────────────────────
  'explore': {
    rule: '701.40a',
    category: 'Action',
    experienceLevel: 'intermediate',
    plain: '<strong>Exploring reveals the top card of your library. Land? Put it in hand. Non-land? The creature gets a +1/+1 counter, and you may put the revealed card in your graveyard.</strong>',
    analogy: 'Like scouting ahead on a trail — if you find a campsite (land), you claim it immediately. If you find something else, you mark your trail (get stronger) and can ditch the item.',
    tableTalk: 'Explore has two different outcomes depending on what you reveal. Flip a land — take it to hand, no counter. Flip a non-land — get a permanent +1/+1 counter, and choose whether to keep or trash the revealed card.',
    commonMistake: 'If you reveal a land, you take it to hand but do NOT get a +1/+1 counter. The counter only comes from revealing a non-land. Empty library = creature gets the counter (nothing revealed = treated as non-land).',
    whatToDo: 'Reveal top card. If land: take it to hand. If non-land: put a +1/+1 counter on the exploring creature, then choose whether to keep the revealed card on top or send it to the graveyard.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'If you reveal a land, you take it — you don\'t get a counter.',
      'If you reveal a non-land, you get the counter regardless of what you do with the card.',
      'An empty library means the creature gets a +1/+1 counter.'
    ],
    example: 'Your creature explores. Reveal Forest — take it to hand, no counter. Or reveal a spell — +1/+1 counter, keep or mill the spell.',
    related: ['scry', 'surveil']
  },

  // ── EQUIP ────────────────────────────────────────────────────────────
  'equip': {
    rule: '702.6a',
    category: 'Activated',
    experienceLevel: 'basic',
    plain: '<strong>Equip is a sorcery-speed activated ability that attaches an Equipment to one of your creatures.</strong> Equipment stays on the battlefield when the creature dies.',
    analogy: 'Like a weapon that outlives its wielder — when the warrior falls, the sword stays on the ground for the next champion to pick up.',
    tableTalk: 'Equip is how you attach equipment to your creatures. Pay the equip cost, target one of your creatures, and the equipment attaches. If that creature dies, the equipment stays and you can re-equip next turn.',
    commonMistake: 'Equip is SORCERY SPEED only. You cannot equip in response to a removal spell targeting your creature — too slow. Moving equipment from one creature to another also costs the equip cost again.',
    whatToDo: 'On your main phase, pay the equip cost and attach the equipment to a creature you control.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'Equip is sorcery speed — you can\'t equip in response to a spell targeting your creature.',
      'Equipment stays on the battlefield when the creature dies.',
      'Moving equipment from one creature to another costs the equip cost again.',
      'You can\'t equip opponents\' creatures (unless an effect says otherwise).'
    ],
    example: 'You equip a Sword to your creature. Creature dies — sword remains. Re-equip to another creature next turn.',
    related: ['attach', 'enchant', 'artifact']
  },

  // ── ENCHANT ──────────────────────────────────────────────────────────
  'enchant': {
    rule: '702.5a',
    category: 'Static',
    experienceLevel: 'basic',
    plain: '<strong>Enchant restricts which objects an Aura can attach to.</strong> If the enchanted object leaves or stops qualifying, the Aura goes to the graveyard.',
    analogy: 'Like a tattoo that can only go on one type of surface — enchant creature means it can only be applied to creatures. If the surface is gone, the tattoo falls off.',
    tableTalk: 'Enchant tells you what the aura can legally target. "Enchant creature" can only attach to creatures. If that creature dies, the aura falls to the graveyard.',
    commonMistake: 'Hexproof and shroud prevent you from targeting those permanents with Auras from the opponent\'s side. If a creature has hexproof, opponents can\'t cast Auras on it. Auras that become unattached go to the GRAVEYARD, not back to hand.',
    whatToDo: 'Auras only attach to their legal target type. If the enchanted permanent becomes illegal (dies, changes types, gains hexproof), the Aura immediately goes to the graveyard.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'An Aura becomes unattached and goes to graveyard if the enchanted object stops qualifying.',
      'Hexproof/shroud on the permanent prevents casting Auras on it from opponents.',
      'Auras don\'t give "enters the battlefield" triggers when moved.'
    ],
    example: 'You cast Pacifism on a creature. It can\'t attack or block. Creature gets exiled — Pacifism falls off to graveyard.',
    related: ['equip', 'hexproof', 'shroud']
  },

  // ── COMMANDER TAX ────────────────────────────────────────────────────
  'commander tax': {
    rule: '903.8',
    category: 'Commander',
    experienceLevel: 'basic',
    plain: '<strong>Each time you cast your commander from the command zone, it costs 2 additional generic mana for each previous time you\'ve cast it from there this game.</strong>',
    analogy: 'Like a toll road that gets more expensive every time you take the same route — the first trip is cheap, but after dying three times the commute costs a fortune.',
    tableTalk: 'Every time your commander dies and you recast it from the command zone, it costs 2 more. First cast: normal cost. After one death: plus 2. After two deaths: plus 4. Casting from hand or graveyard doesn\'t increase the tax.',
    commonMistake: 'Only COMMAND ZONE casts increase the tax. If you use Reanimate to bring your commander back from the graveyard, no tax — it never went through the command zone. You can choose to let your commander go to the graveyard to avoid increasing the tax.',
    whatToDo: 'Calculate the current tax: (number of command zone casts) × 2 additional generic mana. Add that to the commander\'s normal mana cost.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'Only command zone casts count — using Reanimate to get it back has no tax.',
      'Tax resets between games but not within a game.',
      'Some commanders have abilities that reduce the tax.',
      'Choosing to put commander in graveyard or exile avoids increasing the tax next time.'
    ],
    example: 'Commander costs {3}{R}. First cast: {3}{R}. After one death from command zone: {5}{R}. Again: {7}{R}.',
    related: ['command zone', 'commander damage', 'mana cost']
  },

  // ── COMMANDER DAMAGE ─────────────────────────────────────────────────
  'commander damage': {
    rule: '903.10a',
    category: 'Commander',
    experienceLevel: 'basic',
    plain: '<strong>If a single commander has dealt 21 or more combat damage to you across the whole game, you lose — regardless of your life total.</strong>',
    analogy: 'Like a recurring villain who has wounded you too many times — even if you\'ve healed, the cumulative trauma eventually catches up.',
    tableTalk: 'Commander damage is a separate win condition. If the same commander has hit you for 21 total combat damage across the entire game — not in one hit, but total — you lose. Doesn\'t matter if you\'re at 40 life. 21 from the same commander and you\'re done.',
    commonMistake: 'Only COMBAT DAMAGE counts — not damage from abilities, spells, or ETB effects. Also, each commander is tracked SEPARATELY. Three different commanders dealing 7 each does NOT kill you. The tracker does NOT reset when the commander goes to the command zone.',
    whatToDo: 'Track combat damage from each commander separately. When any single commander reaches 21 total combat damage dealt to a player, that player loses immediately.',
    whenAttacking: 'Track how much combat damage this commander is dealing cumulatively. At 21, the defending player loses.',
    whenBlocking: 'Blocking a commander reduces the combat damage it deals — slowing down the commander damage clock.',
    withDeathtouch: null,
    nuances: [
      'Only combat damage counts — not spell damage, ETB effects, etc.',
      'Each commander is tracked separately.',
      'Damage is cumulative across the entire game, even if your life total resets.',
      'A player can lose to commander damage even at 40 life.'
    ],
    example: 'Opponent\'s commander deals you 7 damage three times over three turns. Total: 21. You lose, even at 35 life.',
    related: ['commander tax', 'command zone', 'combat damage']
  },

  // ── COMMAND ZONE ─────────────────────────────────────────────────────
  'command zone': {
    rule: '903.6',
    category: 'Commander',
    experienceLevel: 'basic',
    plain: '<strong>The command zone is where your Commander lives between uses.</strong> When your Commander would go to any graveyard, exile, hand, or library, you may put it in the command zone instead.',
    analogy: 'Like a player\'s bench in sports — your star player can get knocked out of the game, but they sit on the sideline available to return, not permanently gone.',
    tableTalk: 'The command zone is your commander\'s safe house. When your commander would die or be exiled, you choose: let it go there, or send it to the command zone. From there, you can recast it — with the commander tax added.',
    commonMistake: 'Putting the commander in the command zone is a REPLACEMENT EFFECT — a choice you make. You can choose NOT to use it and let your commander go to the graveyard or exile, which avoids increasing the tax for next time.',
    whatToDo: 'When your commander would change zones, announce whether you\'re sending it to the command zone. If yes, it goes there instead of the new zone.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'Moving to the command zone is a replacement effect — it happens instead of going to the other zone.',
      'The commander tax (+2 per previous cast from command zone) applies each time you cast it from there.',
      'You can choose not to use the replacement — letting your commander go to graveyard or exile is legal.',
      'If put in command zone from exile, the tax still applies next cast.'
    ],
    example: 'Your Commander is destroyed. Instead of going to the graveyard, you put it in the command zone. Next cast costs 2 more.',
    related: ['commander damage', 'commander tax', 'sacrifice']
  },

  // ── FIGHT ────────────────────────────────────────────────────────────
  'fight': {
    rule: '701.12',
    category: 'Action',
    experienceLevel: 'intermediate',
    plain: '<strong>When two creatures fight, each deals damage equal to its power to the other simultaneously.</strong> This isn\'t combat — no attack, no block, no first strike.',
    analogy: 'Like two animals meeting in the wild and exchanging blows — there\'s no attacker or defender, both swing at the same time.',
    tableTalk: 'Fight is simultaneous damage exchange — not combat. First strike and double strike don\'t apply. But deathtouch DOES apply — any damage from a deathtouch creature is lethal. Both creatures might die.',
    commonMistake: 'Fight is NOT combat. First strike and double strike do nothing in fight — both creatures deal damage simultaneously. However, deathtouch DOES work, and lifelink DOES work. Indestructible creatures survive fight.',
    whatToDo: 'Both creatures deal damage equal to their power to each other simultaneously. Check if either dies from the damage.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: 'Deathtouch makes fight extremely efficient — even 1 damage kills the target. A 1/1 deathtouch fights and kills any creature regardless of toughness.',
    nuances: [
      'It\'s not combat damage — first strike and double strike don\'t apply.',
      'Deathtouch DOES apply — any damage from a deathtouch creature is lethal.',
      'Lifelink DOES apply — you gain life equal to damage dealt.',
      'Indestructible creatures can\'t be killed by fight — damage is marked but doesn\'t destroy.',
      'Both creatures deal damage simultaneously — both might die.'
    ],
    example: 'Your 4/4 with deathtouch fights their 10/10. Your creature deals 4 deathtouch damage — the 10/10 dies. Their creature deals 10 damage — your 4/4 dies.',
    related: ['deathtouch', 'first strike', 'lifelink', 'indestructible']
  },

  // ── FLASHBACK ────────────────────────────────────────────────────────
  'flashback': {
    rule: '702.33a',
    category: 'Activated',
    experienceLevel: 'intermediate',
    plain: '<strong>Flashback lets you cast a spell from your graveyard by paying the flashback cost.</strong> After it resolves (or is countered), it\'s exiled.',
    analogy: 'Like a movie sequel — the original spell gets a second chance to shine, but once it\'s been used twice, it\'s retired permanently.',
    tableTalk: 'Flashback gives you a second use of spells from your graveyard. Pay the flashback cost, cast it from the graveyard. When it finishes — resolved or countered — it\'s exiled permanently.',
    commonMistake: 'A spell cast with flashback is exiled when it leaves the stack — not just when it resolves. If it gets countered, it\'s still exiled. Some flashback costs are different colors than the original spell.',
    whatToDo: 'Exile the card from the graveyard as you cast it with flashback. After it resolves or is countered, it goes to exile.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'The spell is exiled regardless of whether it resolves.',
      'Some flashback costs differ in color from the original spell.',
      'Flashback doesn\'t work if the card is exiled from the graveyard first.'
    ],
    example: 'Snapcaster Mage gives Lightning Bolt flashback. Pay the flashback cost from graveyard — it resolves, then is exiled.',
    related: ['graveyard', 'exile', 'cycling', 'surveil']
  },

  // ── KICKER ───────────────────────────────────────────────────────────
  'kicker': {
    rule: '702.32a',
    category: 'Additional Cost',
    experienceLevel: 'basic',
    plain: '<strong>Kicker is an optional additional cost when casting a spell.</strong> If you pay it, the spell gains additional effects.',
    analogy: 'Like a menu upgrade — you can order the basic meal, or pay a little extra to get the deluxe version with extra sides.',
    tableTalk: 'Kicker is completely optional — you choose at cast time whether to pay extra for a bigger effect. You can\'t pay it after the spell is on the stack. Decide when you\'re casting.',
    commonMistake: 'You cannot decide to pay kicker AFTER the spell is on the stack. The decision is made as you cast the spell, as part of choosing costs.',
    whatToDo: 'Announce whether you\'re paying the kicker cost when you cast the spell. This determines whether the additional effects apply.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'Kicker is optional — you decide at cast time.',
      'You can\'t pay kicker after the spell is on the stack.',
      'Some spells have multiple kicker costs.',
      'Multikicker lets you pay kicker multiple times for increasing effects.'
    ],
    example: 'Spell normally draws 1 card. With kicker paid, draw 3 instead. Choose at cast time.',
    related: ['additional cost', 'escalate', 'overload']
  },

  // ── OVERLOAD ─────────────────────────────────────────────────────────
  'overload': {
    rule: '702.96a',
    category: 'Additional Cost',
    experienceLevel: 'intermediate',
    plain: '<strong>Overload lets you pay an alternative cost to change "target" to "each" — turning a single-target spell into a board effect.</strong>',
    analogy: 'Like upgrading a sniper rifle to a machine gun — instead of picking one target, it hits everything.',
    tableTalk: 'Overload completely changes the spell. Instead of targeting one thing, it hits everything that matches. Cyclonic Rift targets one nonland permanent normally — overloaded, it bounces EVERY nonland permanent your opponents own.',
    commonMistake: 'An overloaded spell has NO TARGETS. This means hexproof and shroud provide zero protection against overloaded spells. The spell hits everything of the specified type without needing to target anything.',
    whatToDo: 'Pay the overload cost instead of the regular cost. The spell\'s "target" wording becomes "each." No targets are declared.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'An overloaded spell has no targets — hexproof and shroud don\'t protect against it.',
      'The overload cost is almost always much higher than the regular cost.',
      'You can\'t overload AND target — it\'s one or the other.'
    ],
    example: 'Cyclonic Rift normally bounces one non-land permanent. Overloaded for 7 mana, it bounces everything your opponents own.',
    related: ['target', 'hexproof', 'board wipe']
  },

  // ── CYCLING ──────────────────────────────────────────────────────────
  'cycling': {
    rule: '702.28a',
    category: 'Activated',
    experienceLevel: 'basic',
    plain: '<strong>Cycling lets you discard the card and pay the cycling cost to draw a new card.</strong> Activated from hand at instant speed.',
    analogy: 'Like trading in a bad poker hand — you give up a card you don\'t need to draw something potentially better.',
    tableTalk: 'Cycling is your escape hatch for bad cards. Pay the cycling cost, discard the card, draw a new one. The card goes to your graveyard, and some effects trigger when you cycle.',
    commonMistake: 'The cycled card goes to the GRAVEYARD, not exile. Some abilities specifically trigger when you cycle. Cycling is at instant speed — you can do it on opponent\'s turn.',
    whatToDo: 'Discard the card and pay the cycling cost. Draw one card. The discarded card is in your graveyard.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'Cycling triggers "whenever you cycle" effects.',
      'It\'s an activated ability from hand — you can cycle at instant speed.',
      'The card goes to graveyard, not exile.'
    ],
    example: 'You have a land-heavy hand. Cycling a cycling card: discard it, pay the cost, draw a fresh card.',
    related: ['draw', 'discard', 'graveyard']
  },

  // ── CONVOKE ──────────────────────────────────────────────────────────
  'convoke': {
    rule: '702.51a',
    category: 'Additional Cost',
    experienceLevel: 'intermediate',
    plain: '<strong>Convoke lets you tap creatures you control to help pay for the spell.</strong> Each tapped creature reduces the cost by 1 generic mana, or pays for a colored mana of its color.',
    analogy: 'Like a community project where everyone pitches in — your whole army helps cast the spell by lending their effort instead of you paying all the mana.',
    tableTalk: 'Convoke turns your creatures into mana sources for the spell. Each creature you tap while casting reduces the cost — one per creature. The creature\'s color can even pay colored mana costs.',
    commonMistake: 'Tapping for convoke does NOT count as using a tap ability — summoning sickness does NOT prevent convoke. You can tap newly entered creatures for convoke. Tokens work perfectly.',
    whatToDo: 'As you cast the spell, tap any number of your creatures. Each reduces the cost by 1 (or pays one mana of its color).',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'Creatures used for convoke are tapped as you cast — before the spell resolves.',
      'You can tap a creature with summoning sickness for convoke.',
      'Tokens work for convoke.',
      'Convoke works on top of other cost reductions.'
    ],
    example: 'Spell costs {5}. You have 3 creatures and 2 mana. Tap all 3 creatures (pays 3) + 2 mana = cast for free.',
    related: ['delve', 'emerge', 'improvise']
  },

  // ── DELVE ────────────────────────────────────────────────────────────
  'delve': {
    rule: '702.65a',
    category: 'Additional Cost',
    experienceLevel: 'intermediate',
    plain: '<strong>Delve lets you exile cards from your graveyard to pay for generic mana in the cost.</strong> Each exiled card reduces the cost by 1 generic mana.',
    analogy: 'Like pawning old belongings to pay rent — you trade away things from your past (graveyard) to afford something expensive now.',
    tableTalk: 'Delve lets your graveyard pay for expensive spells. Each card you exile from your graveyard while casting reduces the generic mana cost by 1. A 7-mana spell with a full graveyard could cost almost nothing.',
    commonMistake: 'Delve only pays for GENERIC mana — it cannot pay for colored mana requirements. You still need the right colors. Multiple delve spells in a turn share the same graveyard, so you can run out of fuel.',
    whatToDo: 'As you cast the spell, exile any number of cards from your graveyard. Each card exiled pays for 1 generic mana in the cost.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'Delve only reduces generic mana, not colored mana requirements.',
      'Multiple delve spells in the same turn share the same graveyard.',
      'Cards exiled by delve are gone permanently.'
    ],
    example: 'Treasure Cruise costs {7} or {U}. Exile 6 cards from graveyard + {U} = draw 3 cards for 1 blue mana.',
    related: ['graveyard', 'convoke', 'emerge']
  },

  // ── EMBALM ───────────────────────────────────────────────────────────
  'embalm': {
    rule: '702.128a',
    category: 'Activated',
    experienceLevel: 'intermediate',
    plain: '<strong>Embalm lets you exile the creature card from your graveyard to create a token copy of it — as a white Zombie.</strong> Same stats and abilities, new type.',
    analogy: 'Like mummification — the fallen warrior is preserved and reborn as a different form, keeping their skills but transformed into something undead.',
    tableTalk: 'Embalm is your second chance from the graveyard. Exile the card, get a token copy with all the same stats and abilities — but now it\'s also a white Zombie. Only usable once, at sorcery speed.',
    commonMistake: 'The embalm token is a white Zombie — this changes its color and creature types. Legendary embalmed tokens still follow the legendary rule (same name = one must die). Embalm is sorcery speed only.',
    whatToDo: 'Exile the card from the graveyard. Create a token that is a copy of the creature except it\'s also a white Zombie.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'The token is a white Zombie in addition to its other types.',
      'Embalm can only be activated once — it exiles the card.',
      'Sorcery speed only.',
      'Same name as original — legendary rule applies if the original is legendary.'
    ],
    example: 'Your Angel dies. Later, embalm it: exile the card, create a white Zombie Angel token with the same stats and abilities.',
    related: ['eternalize', 'graveyard', 'token']
  },

  // ── ETERNALIZE ───────────────────────────────────────────────────────
  'eternalize': {
    rule: '702.129a',
    category: 'Activated',
    experienceLevel: 'intermediate',
    plain: '<strong>Eternalize is like embalm but the token is always a 4/4 black Zombie, regardless of the original creature\'s power/toughness.</strong>',
    analogy: 'Like death\'s ultimate transformation — the creature\'s skills live on in a 4/4 undead form, regardless of original size.',
    tableTalk: 'Eternalize works like embalm, but the token is ALWAYS a 4/4 black Zombie. Small creature? Gets bigger. Huge creature? Smaller. The abilities transfer, not the base power/toughness.',
    commonMistake: 'The eternalized token is a 4/4 black Zombie — it does NOT keep the original creature\'s power and toughness. Only abilities transfer. Compare embalm which keeps original stats.',
    whatToDo: 'Exile the card from the graveyard. Create a 4/4 black Zombie token with the abilities of the original creature.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'Token is always 4/4 — doesn\'t use the original\'s power/toughness.',
      'Token is black and a Zombie.',
      'Original abilities carry over.',
      'Otherwise identical to embalm rules.'
    ],
    example: 'A 2/2 creature with eternalize becomes a 4/4 black Zombie token when eternalized.',
    related: ['embalm', 'graveyard', 'token']
  },

  // ── MENTOR ───────────────────────────────────────────────────────────
  'mentor': {
    rule: '702.134a',
    category: 'Triggered',
    experienceLevel: 'intermediate',
    plain: '<strong>Whenever a mentor creature attacks, put a +1/+1 counter on target attacking creature with lesser power.</strong>',
    analogy: 'Like a veteran soldier training the rookies on the battlefield — the experienced fighter helps the smaller ones grow stronger with each battle.',
    tableTalk: 'Mentor rewards aggressive play. Every time the mentor creature attacks alongside a smaller creature, it pumps that creature with a permanent +1/+1 counter.',
    commonMistake: 'Both creatures must be attacking simultaneously. The target must have STRICTLY LESSER power than the mentor at resolution time — not equal, lesser. You choose the target when the trigger resolves.',
    whatToDo: 'When mentor attacks alongside creatures with lower power, put a +1/+1 counter on one of those smaller attackers.',
    whenAttacking: 'Triggers when you attack — target one of your other attacking creatures with lesser power.',
    whenBlocking: 'Mentor doesn\'t trigger on blocking — only when attacking.',
    withDeathtouch: null,
    nuances: [
      'Both creatures must be attacking simultaneously.',
      'The targeted creature must have strictly less power than the mentor at resolution.',
      'Multiple mentors can target different creatures.',
      'You choose the target when the trigger resolves.'
    ],
    example: 'You attack with a 3-power mentor and a 2/2. Mentor triggers — put a +1/+1 on the 2/2, making it 3/3.',
    related: ['trample', 'deathtouch', 'first strike']
  },

  // ── AFFLICT ──────────────────────────────────────────────────────────
  'afflict': {
    rule: '702.130a',
    category: 'Triggered',
    experienceLevel: 'intermediate',
    plain: '<strong>Afflict N means whenever the creature becomes blocked, the defending player loses N life.</strong> It punishes blocking.',
    analogy: 'Like a fighter with a toxic punch — even if you intercept the attack, just being hit by the glove costs you something.',
    tableTalk: 'Afflict is a lose-lose for your opponent. Let it through unblocked — take the combat damage. Block it — take the afflict life loss AND the combat damage. Neither choice is free.',
    commonMistake: 'Afflict triggers when the creature BECOMES BLOCKED — even if the blocker is removed afterward. The life loss happens regardless of whether any combat damage is dealt.',
    whatToDo: 'When this creature is declared blocked, the defending player loses N life. This happens regardless of combat damage.',
    whenAttacking: 'Triggers when blocked — opponent takes life loss in addition to combat damage.',
    whenBlocking: 'Afflict doesn\'t trigger when this creature blocks — only when it attacks and is blocked.',
    withDeathtouch: null,
    nuances: [
      'Afflict triggers when the creature becomes blocked — even if the blocker is later removed.',
      'The life loss happens regardless of combat damage.',
      'Does not apply if the creature attacks and is NOT blocked.'
    ],
    example: 'Hazoret with Afflict 3 attacks. Opponent blocks. Opponent loses 3 life from afflict AND takes combat damage.',
    related: ['trample', 'lifelink', 'menace']
  },

  // ── ANNIHILATOR ──────────────────────────────────────────────────────
  'annihilator': {
    rule: '702.85a',
    category: 'Triggered',
    experienceLevel: 'intermediate',
    plain: '<strong>Annihilator N triggers whenever the creature attacks — the defending player sacrifices N permanents.</strong> Before blockers are even declared.',
    analogy: 'Like a natural disaster that destroys everything in its path before it even arrives — the mere act of approaching causes catastrophic damage.',
    tableTalk: 'Annihilator doesn\'t wait for damage. The moment you declare this creature as an attacker, your opponent has to start sacrificing permanents — lands, creatures, anything. And they still have to deal with the attack.',
    commonMistake: 'The annihilator trigger goes on the stack when the creature attacks — the defending player must sacrifice BEFORE combat damage is dealt. Even if the attacker is blocked or killed, the sacrifice already happened.',
    whatToDo: 'When this creature attacks, the defending player must sacrifice N permanents. They choose what to sacrifice. This happens before blockers are declared.',
    whenAttacking: 'Annihilator fires immediately on attack declaration — opponent sacrifices before blocking.',
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'The trigger goes on the stack when the creature is declared as an attacker.',
      'The defending player chooses what to sacrifice.',
      'It triggers even if the creature is blocked or killed before combat damage.',
      'Multiple annihilator creatures stack.'
    ],
    example: 'Eldrazi with Annihilator 4 attacks. Opponent must sacrifice 4 permanents before even choosing to block.',
    related: ['sacrifice', 'trample', 'menace']
  },

  // ── PHASING ──────────────────────────────────────────────────────────
  'phasing': {
    rule: '702.25a',
    category: 'Unique',
    experienceLevel: 'advanced',
    plain: '<strong>Phasing means the permanent phases out at the beginning of your untap step and back in at your next untap step.</strong> While phased out, it doesn\'t exist for game purposes — but no leaves-the-battlefield triggers fire.',
    analogy: 'Like a ghost that flickers in and out of existence — while phased out, completely gone from the game\'s perspective, but it doesn\'t actually leave.',
    tableTalk: 'Phasing is unique because phased-out permanents are in a weird limbo — they don\'t exist for targeting, blocking, or any game effect. But critically: phasing does NOT trigger leave-the-battlefield effects. The permanent is just temporarily invisible.',
    commonMistake: 'Phased-out permanents are NOT in any zone — they\'re phased out. No "leaves the battlefield" triggers fire. Counters and attached cards stay on the phased-out permanent. This is completely different from exile or bouncing.',
    whatToDo: 'A phased-out permanent is treated as if it doesn\'t exist. Nothing can interact with it. It phases back in at the start of the controlling player\'s next untap step.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'Phased-out permanents are invisible to the game.',
      'No "enter/leave battlefield" triggers when phasing.',
      'Counters and attachments stay on phased-out permanents.',
      'A great defensive trick: phase out before a board wipe, phase back in unharmed.'
    ],
    example: 'Your creature phases out. Opponent\'s Wrath resolves. Your creature phases back in next turn unharmed.',
    related: ['exile', 'indestructible']
  },

  // ── MYRIAD ───────────────────────────────────────────────────────────
  'myriad': {
    rule: '702.116a',
    category: 'Triggered',
    experienceLevel: 'advanced',
    plain: '<strong>Whenever a creature with Myriad attacks, create a tapped and attacking token copy of it for each other opponent, attacking those opponents.</strong> Tokens exile at end of combat.',
    analogy: 'Like a fighter who can clone themselves to fight multiple opponents simultaneously — each opponent gets their own version to deal with.',
    tableTalk: 'In a multiplayer game, myriad creates tokens attacking everyone you\'re NOT already attacking. You attack one player, tokens appear and attack the rest. They fight, deal damage, trigger abilities, then disappear at end of combat.',
    commonMistake: 'Myriad tokens are created TAPPED AND ATTACKING — they don\'t trigger "whenever this creature attacks" effects. Tokens are EXILED at end of combat — not put in the graveyard, so no death triggers.',
    whatToDo: 'When this creature attacks, create one token copy for each other opponent (not the one being attacked), tapped and attacking those opponents. Exile all tokens at end of combat.',
    whenAttacking: 'Myriad triggers on attack — tokens appear attacking each other opponent.',
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'Tokens are created tapped and attacking — they don\'t trigger attack triggers.',
      'Each token attacks a different opponent.',
      'Tokens are exiled at end of combat — no death triggers.',
      'Only relevant in multiplayer.'
    ],
    example: 'In a 4-player game, you attack one opponent with a myriad creature. Two tokens appear, each attacking one of the other two opponents.',
    related: ['token', 'combat', 'encore']
  },

  // ── ENCORE ───────────────────────────────────────────────────────────
  'encore': {
    rule: '702.141a',
    category: 'Activated',
    experienceLevel: 'advanced',
    plain: '<strong>Encore lets you exile a creature from your graveyard and create tapped, attacking token copies — one for each opponent — until end of turn.</strong>',
    analogy: 'Like a one-night-only comeback performance — the creature returns from retirement for one explosive show attacking everyone at once, then permanently retiring.',
    tableTalk: 'Encore is a big multiplayer play. Exile the card from your graveyard, get one token attacking each opponent. In a 4-player game, that\'s three tokens. Tokens are sacrificed at end of turn — no graveyard.',
    commonMistake: 'Encore is SORCERY SPEED only. The original card is exiled on activation. The tokens are sacrificed at end of turn — not put in graveyard, no death triggers from the tokens.',
    whatToDo: 'On your main phase: exile the card from graveyard, create one tapped attacking token per opponent. At end of turn, sacrifice all tokens.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'Sorcery speed only — cannot be activated in response to anything.',
      'Original card is exiled on activation.',
      'Tokens are sacrificed (exiled) at end of turn — no death triggers.',
      'Each token attacks a different opponent.'
    ],
    example: 'You activate encore on a 5/5. In a 4-player game, three 5/5 tokens appear, each attacking one opponent. Sacrificed at end of turn.',
    related: ['myriad', 'token', 'graveyard']
  },

  // ── EXPLOIT ──────────────────────────────────────────────────────────
  'exploit': {
    rule: '702.112a',
    category: 'Triggered',
    experienceLevel: 'intermediate',
    plain: '<strong>When a creature with Exploit enters the battlefield, you may sacrifice a creature.</strong> If you do, a second trigger fires granting the exploit bonus.',
    analogy: 'Like a detective who needs a sacrifice to solve the case — you offer something up to unlock a powerful ability.',
    tableTalk: 'Exploit gives you a choice on entry: sacrifice a creature and get the exploit bonus, or don\'t and get nothing extra. You can even sacrifice the exploit creature itself if that\'s the best play.',
    commonMistake: 'Sacrificing for exploit is OPTIONAL — you choose when the trigger resolves. You CAN exploit the creature with exploit itself. The exploit trigger and the "when you exploit" bonus are two separate triggers.',
    whatToDo: 'When the exploit trigger resolves, optionally sacrifice a creature. If you do, the "when you exploit" ability fires.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'Sacrificing is optional — you choose whether to exploit when the trigger resolves.',
      'You can exploit the creature with exploit itself.',
      'The exploit trigger and the "when you exploit" effect are two separate triggers.'
    ],
    example: 'Your exploit creature enters. You choose to sacrifice a creature token. The "when you exploit" trigger fires and draws you a card.',
    related: ['sacrifice', 'enter the battlefield', 'token']
  },

  // ── EMERGE ───────────────────────────────────────────────────────────
  'emerge': {
    rule: '702.115a',
    category: 'Additional Cost',
    experienceLevel: 'advanced',
    plain: '<strong>Emerge lets you cast a creature for its emerge cost by sacrificing a creature and reducing the emerge cost by that creature\'s mana value.</strong>',
    analogy: 'Like a phoenix rising from the ashes — a new, more powerful creature is born from the sacrifice of another.',
    tableTalk: 'Emerge lets you cheat expensive creatures into play. Sacrifice one of your creatures and reduce the emerge cost by that creature\'s mana value. The bigger the sacrifice, the more you save.',
    commonMistake: 'The mana reduction equals the sacrificed creature\'s MANA VALUE (converted mana cost), not its power. A 0/1 token with no mana cost provides 0 reduction. A 5-mana creature provides 5 reduction.',
    whatToDo: 'As you cast the emerge creature, sacrifice one creature you control. Reduce the emerge cost by that creature\'s mana value.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'You sacrifice the creature as part of paying the emerge cost.',
      'The mana cost reduction equals the sacrificed creature\'s mana value.',
      'You can emerge even if the emerge cost would be reduced to zero.',
      'The sacrificed creature must be one you control.'
    ],
    example: 'An emerge creature costs 7. Sacrifice a 4-mana creature — pay only 3 mana for the emerge creature.',
    related: ['sacrifice', 'convoke', 'delve']
  },

  // ── AFFINITY ─────────────────────────────────────────────────────────
  'affinity': {
    rule: '702.40a',
    category: 'Static',
    experienceLevel: 'intermediate',
    plain: '<strong>Affinity for [something] reduces the spell\'s generic mana cost by 1 for each permanent you control of that type.</strong>',
    analogy: 'Like a loyalty discount — the more of a certain type of permanent you have, the cheaper the spell gets.',
    tableTalk: 'Affinity is a cost reduction based on what you already have on the battlefield. Affinity for artifacts means each artifact you control knocks 1 mana off the generic cost.',
    commonMistake: 'Affinity only reduces GENERIC mana costs — not colored mana requirements. Also, the cost is checked when you cast the spell — losing permanents afterward doesn\'t refund anything.',
    whatToDo: 'Count the number of permanents matching the affinity type. Reduce the spell\'s generic mana cost by that many. Pay the remaining cost.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'Affinity only reduces generic mana, not colored mana.',
      'The cost cannot be reduced below zero.',
      'Affinity is checked as you cast — losing permanents afterward doesn\'t change the cost.'
    ],
    example: 'Myr Enforcer costs 7 but has Affinity for artifacts. You control 5 artifacts — it costs only 2 generic mana.',
    related: ['convoke', 'delve']
  },

  // ── CIPHER ───────────────────────────────────────────────────────────
  'cipher': {
    rule: '702.97a',
    category: 'Action',
    experienceLevel: 'advanced',
    plain: '<strong>Cipher lets you encode a spell onto a creature you control. Whenever that creature deals combat damage to a player, you may cast a free copy of the encoded card.</strong>',
    analogy: 'Like writing a secret message on a messenger — every time the messenger gets through, they automatically execute the secret plan.',
    tableTalk: 'Cipher encodes a spell onto one of your creatures. Every time that creature deals combat damage to a player, you can cast a free copy of the encoded spell. Best on evasive or unblockable creatures.',
    commonMistake: 'The encoded card is EXILED — the copy is what you cast. If the creature with cipher leaves the battlefield, the cipher effect ends permanently.',
    whatToDo: 'Exile the card and encode it on a creature. Whenever that creature deals combat damage, optionally cast a free copy of the encoded spell.',
    whenAttacking: 'Triggrs on combat damage dealt to a player during the attack.',
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'The encoded card is exiled — the copy is cast, not the original.',
      'You can cast the copy even if you have no mana.',
      'If the encoded creature leaves the battlefield, the cipher effect ends.',
      'The copy goes to the graveyard as normal after resolving.'
    ],
    example: 'Hands of Binding has cipher. Encode it on an unblockable creature. Every hit on a player = free copy of Hands of Binding.',
    related: ['combat damage', 'copy', 'exile']
  },

  // ── BANDING ──────────────────────────────────────────────────────────
  'banding': {
    rule: '702.22a',
    category: 'Combat',
    experienceLevel: 'advanced',
    plain: '<strong>Banding lets creatures attack or block together as a band. The controller of a banding band assigns all combat damage received by that band.</strong> One of the most complex abilities in the game.',
    analogy: 'Like a military unit formation — troops band together so their commander can strategically absorb incoming fire.',
    tableTalk: 'Banding is extremely rare and complex. The key benefit when attacking: if banding creatures are blocked, the ATTACKING player assigns how the blocker\'s damage is distributed across the band. That\'s backwards from normal.',
    commonMistake: 'Banding is deeply misunderstood. The key unusual feature: when banding creatures are blocked, the ATTACKER assigns the damage dealt TO the banding creatures by the blocker. Normal combat has the DEFENDER assigning attacker damage. Banding reverses this for incoming damage.',
    whatToDo: 'When banding creatures are blocked, the attacking player chooses how to distribute the blocker\'s combat damage across the banding creatures — not the defending player.',
    whenAttacking: 'You assign how the blocker\'s damage is split across your banding creatures.',
    whenBlocking: 'Any creature with banding can join a block alongside other creatures. Formed band blocks as a unit.',
    withDeathtouch: null,
    nuances: [
      'Any number of creatures with banding can form a band — plus one creature without banding.',
      'The attacking player assigns damage dealt TO the band from blockers.',
      'Defending: any creature with banding can join a block even if the attacker has special evasion.',
      'Banding is extremely rare in modern sets.'
    ],
    example: 'Two banding creatures attack and are blocked by a 10/10. YOU (the attacker) assign how the 10 damage is split across your two creatures — not your opponent.',
    related: ['combat', 'blocking', 'trample']
  },

  // ── HORSEMANSHIP ─────────────────────────────────────────────────────
  'horsemanship': {
    rule: '702.32a',
    category: 'Evasion',
    experienceLevel: 'intermediate',
    plain: '<strong>Horsemanship creatures can only be blocked by creatures with horsemanship.</strong> Reach does NOT work against horsemanship.',
    analogy: 'Like a cavalry charge — infantry on foot can\'t stop mounted warriors, only other cavalry can intercept.',
    tableTalk: 'Horsemanship is flying\'s rarer cousin from Portal Three Kingdoms. Same rules: can\'t be blocked except by other horsemanship creatures. But unlike flying, REACH DOES NOT HELP.',
    commonMistake: 'Reach does NOT work against horsemanship — unlike flying. Horsemanship is exclusive to Portal Three Kingdoms. There is no "reach" equivalent for horsemanship.',
    whatToDo: 'Check if the defending player has any horsemanship creatures. If not, this attacker is completely unblockable.',
    whenAttacking: 'Survey the opponent\'s board for horsemanship creatures only. Reach creatures cannot legally block.',
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'Unlike flying, reach does NOT allow blocking horsemanship creatures.',
      'Horsemanship is exclusive to Portal Three Kingdoms cards.',
      'There is no equivalent of "reach" for horsemanship.'
    ],
    example: 'Your horsemanship creature attacks. Opponent has no horsemanship creatures — completely unblockable.',
    related: ['flying', 'shadow', 'evasion']
  },

  // ── LANDWALK VARIANTS ─────────────────────────────────────────────────
  'plainswalk': {
    rule: '702.14a',
    category: 'Evasion',
    experienceLevel: 'intermediate',
    plain: '<strong>Plainswalk means the creature is unblockable if the defending player controls a Plains.</strong>',
    analogy: 'Like a creature so familiar with open grasslands it becomes invisible to those who live there.',
    tableTalk: 'If your opponent controls any Plains, this creature is completely unblockable for this combat.',
    commonMistake: 'The check is on the DEFENDING PLAYER\'s lands. Basic and nonbasic Plains both count. Check at blocker declaration time.',
    whatToDo: 'Check if the defending player controls a Plains. If yes, this creature cannot be blocked this combat.',
    whenAttacking: 'Check defending player\'s lands. Plains present = unblockable.',
    whenBlocking: null,
    withDeathtouch: null,
    nuances: ['All landwalk variants work the same — unblockable if the defending player controls that land type.'],
    example: 'Opponent controls Plains. Your plainswalk creature attacks — cannot be blocked.',
    related: ['islandwalk', 'swampwalk', 'mountainwalk', 'forestwalk']
  },

  'islandwalk': {
    rule: '702.14a',
    category: 'Evasion',
    experienceLevel: 'intermediate',
    plain: '<strong>Islandwalk means the creature is unblockable if the defending player controls an Island.</strong>',
    analogy: 'Like a creature perfectly adapted to navigating open water — outsiders can\'t keep up.',
    tableTalk: 'If your opponent controls any Islands, this creature is completely unblockable for this combat.',
    commonMistake: 'Both basic and nonbasic Islands count. Dual lands with the Island subtype qualify.',
    whatToDo: 'Check if the defending player controls an Island. If yes, this creature cannot be blocked.',
    whenAttacking: 'Check defending player\'s lands. Island present = unblockable.',
    whenBlocking: null,
    withDeathtouch: null,
    nuances: ['Landwalk checks are on the defending player — not the battlefield in general.'],
    example: 'Opponent controls Islands. Your islandwalk creature attacks — cannot be blocked.',
    related: ['plainswalk', 'swampwalk', 'mountainwalk', 'forestwalk']
  },

  'swampwalk': {
    rule: '702.14a',
    category: 'Evasion',
    experienceLevel: 'intermediate',
    plain: '<strong>Swampwalk means the creature is unblockable if the defending player controls a Swamp.</strong>',
    analogy: 'Like a creature thriving in dark, murky terrain that most would find impassable.',
    tableTalk: 'If your opponent controls any Swamps, this creature is completely unblockable for this combat.',
    commonMistake: 'Any land with the Swamp subtype counts — not just basic Swamps. Dual lands with Swamp subtype qualify. Very relevant in Commander where black is common.',
    whatToDo: 'Check if the defending player controls a Swamp. If yes, this creature cannot be blocked.',
    whenAttacking: 'Check defending player\'s lands. Swamp present = unblockable.',
    whenBlocking: null,
    withDeathtouch: null,
    nuances: ['All landwalk checks are on the defending player.'],
    example: 'Opponent runs Swamps in their Commander deck. Your swampwalk creature is unblockable against them.',
    related: ['plainswalk', 'islandwalk', 'mountainwalk', 'forestwalk']
  },

  'mountainwalk': {
    rule: '702.14a',
    category: 'Evasion',
    experienceLevel: 'intermediate',
    plain: '<strong>Mountainwalk means the creature is unblockable if the defending player controls a Mountain.</strong>',
    analogy: 'Like a highland creature perfectly adapted to rocky terrain that flatlanders can\'t navigate.',
    tableTalk: 'If your opponent controls any Mountains, this creature is completely unblockable for this combat.',
    commonMistake: 'Nonbasic Mountains and dual lands with Mountain subtype count. Not just basic Mountains.',
    whatToDo: 'Check if the defending player controls a Mountain. If yes, this creature cannot be blocked.',
    whenAttacking: 'Check defending player\'s lands. Mountain present = unblockable.',
    whenBlocking: null,
    withDeathtouch: null,
    nuances: ['Basic and nonbasic Mountains both count.'],
    example: 'Red player controls Mountains. Your mountainwalk creature swings in unblocked.',
    related: ['plainswalk', 'islandwalk', 'swampwalk', 'forestwalk']
  },

  'forestwalk': {
    rule: '702.14a',
    category: 'Evasion',
    experienceLevel: 'intermediate',
    plain: '<strong>Forestwalk means the creature is unblockable if the defending player controls a Forest.</strong>',
    analogy: 'Like a creature so at home in the forest it becomes invisible to outsiders.',
    tableTalk: 'If your opponent controls any Forests, this creature is completely unblockable for this combat.',
    commonMistake: 'Token Forests and nonbasic Forests with the Forest subtype both count. Green dual lands often have the Forest subtype.',
    whatToDo: 'Check if the defending player controls a Forest. If yes, this creature cannot be blocked.',
    whenAttacking: 'Check defending player\'s lands. Forest present = unblockable.',
    whenBlocking: null,
    withDeathtouch: null,
    nuances: ['Token and nonbasic Forests both count.'],
    example: 'Green player controls Forests. Your forestwalk creature is unblockable against them.',
    related: ['plainswalk', 'islandwalk', 'swampwalk', 'mountainwalk']
  },

  // ── PROTECTION FROM EVERYTHING ───────────────────────────────────────
  'protection from everything': {
    rule: '702.16j',
    category: 'Protection',
    experienceLevel: 'advanced',
    plain: '<strong>Protection from everything means the creature cannot be damaged, enchanted, equipped, blocked, or targeted — by anything.</strong>',
    analogy: 'Like being completely intangible — spells pass through it, creatures walk through it, nothing can interact with it physically.',
    tableTalk: 'Protection from everything is the ultimate defensive ability. Targeted spells, damage, auras, equipment, blocking — all impossible. But sacrifice effects and "destroy/exile all" board wipes still work.',
    commonMistake: 'Sacrifice effects still work — they don\'t target. "Destroy all creatures" effects still work — no targeting. The creature can still be affected by effects that don\'t damage, target, block, or attach.',
    whatToDo: 'Targeted removal: fails. Damage: prevented. Equipment/auras: fall off or can\'t be attached. Blocking: illegal. Sacrifice and mass removal: still work.',
    whenAttacking: 'Completely unblockable. Deals unpreventable damage to players.',
    whenBlocking: 'Cannot be damaged by anything it blocks. Essentially invincible in combat.',
    withDeathtouch: null,
    nuances: [
      'Sacrifice effects still work — they don\'t target.',
      '"Destroy all" board wipes bypass it if they don\'t target.',
      'The creature can still be affected by effects that don\'t damage, target, block, or attach.'
    ],
    example: 'Your creature has protection from everything. Doom Blade? Fails. Lightning Bolt? No damage. Pacifism? Falls off. Block it? Illegal.',
    related: ['protection', 'hexproof', 'indestructible']
  },

  // ── PROLIFERATE ──────────────────────────────────────────────────────
  'proliferate': {
    rule: '701.27a',
    category: 'Action',
    experienceLevel: 'intermediate',
    plain: '<strong>Proliferate means you choose any number of players and permanents with counters on them, then add one more counter of each kind already there.</strong>',
    analogy: 'Like a fertilizer that makes everything grow — whatever counters are already there, one more of each type gets added.',
    tableTalk: 'Proliferate lets you pick and choose who gets extra counters. You pick targets, then each gets one more counter of each type they already have. Poison counters, loyalty counters, +1/+1 counters — all proliferate.',
    commonMistake: 'You CHOOSE which players and permanents to proliferate — it\'s not automatic for everything. You can even choose to proliferate opponents\' permanents (like poison counters on them). You add one counter of EACH kind present, not one total.',
    whatToDo: 'Choose any number of players or permanents that already have counters. Each chosen permanent gets one more of every type of counter it already has.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'You choose WHICH permanents and players to proliferate.',
      'You add one counter of each kind — not one counter total.',
      'Poison counters on players can be proliferated.',
      'You must have at least one counter present to proliferate it.'
    ],
    example: 'A creature has 2 +1/+1 counters; a planeswalker has 3 loyalty. Proliferate both — creature gets a third +1/+1 counter, planeswalker goes to 4 loyalty.',
    related: ['counter', 'poison', 'infect']
  },

  // ── INFECT ───────────────────────────────────────────────────────────
  'infect': {
    rule: '702.90a',
    category: 'Combat',
    experienceLevel: 'intermediate',
    plain: '<strong>Infect deals damage to players as poison counters and to creatures as -1/-1 counters instead of normal damage.</strong> A player with 10 poison counters loses.',
    analogy: 'Like a venomous bite — the wound itself might be small, but the poison accumulates and eventually becomes lethal regardless of overall health.',
    tableTalk: 'Infect is a completely alternate win condition. Damage to players becomes poison counters — at 10 poison counters, they lose the game regardless of their life total. Damage to creatures becomes permanent -1/-1 counters.',
    commonMistake: 'A player at 40 life still LOSES to 10 poison counters. Infect damage to players does NOT reduce life total — it adds poison counters instead. These are completely separate tracks.',
    whatToDo: 'Track poison counters on each player separately from their life total. At 10 poison counters, that player loses.',
    whenAttacking: 'Infect damage to unblocked players goes to poison counters, not life loss. 10 total and they lose.',
    whenBlocking: 'Infect damage to creatures becomes -1/-1 counters — permanently reducing their stats.',
    withDeathtouch: 'Deathtouch + infect: even 1 damage kills any creature (1 = lethal from deathtouch) AND puts -1/-1 on it.',
    nuances: [
      'Infect damage to creatures is -1/-1 counters — permanent stat reduction.',
      'Infect damage to players is poison counters — separate from life total.',
      '10 poison counters = lose the game.',
      'Proliferate can accelerate poison counter buildup.'
    ],
    example: 'Your 3/3 infect creature is unblocked. Attacking player takes 3 poison counters. At 10, they lose regardless of life total.',
    related: ['wither', 'proliferate', 'counter', 'poison']
  },

  // ── WITHER ───────────────────────────────────────────────────────────
  'wither': {
    rule: '702.79a',
    category: 'Combat',
    experienceLevel: 'intermediate',
    plain: '<strong>Wither deals damage to creatures as -1/-1 counters instead of regular damage.</strong> Unlike infect, wither damage to players is still normal damage.',
    analogy: 'Like a creature with a weakening bite — it doesn\'t just hurt, it permanently reduces the target\'s capabilities.',
    tableTalk: 'Wither makes your damage to creatures permanent. Instead of healing off at end of turn, the damage stays as -1/-1 counters. But it still deals normal damage to players — no poison counters.',
    commonMistake: 'Wither only affects CREATURES — players take normal damage (no poison counters). Unlike infect. Also: -1/-1 counters from wither do NOT go away at end of turn — they\'re permanent.',
    whatToDo: 'When this creature deals damage to another creature, put -1/-1 counters instead of marking regular damage. The counters stay permanently.',
    whenAttacking: 'Damage to blocking creatures becomes permanent -1/-1 counters.',
    whenBlocking: 'Damage to attacking creatures becomes permanent -1/-1 counters.',
    withDeathtouch: null,
    nuances: [
      'Wither only affects creatures — players take normal damage.',
      '-1/-1 counters from wither do not go away at end of turn.',
      'A creature with enough -1/-1 counters to reach 0 toughness dies.',
      'Wither and infect stack.'
    ],
    example: 'Your wither creature blocks a 4/4. You deal 2 damage — the 4/4 becomes a 2/2 permanently from -1/-1 counters.',
    related: ['infect', 'counter', 'deathtouch']
  },

  // ── UNDYING ──────────────────────────────────────────────────────────
  'undying': {
    rule: '702.92a',
    category: 'Triggered',
    experienceLevel: 'intermediate',
    plain: '<strong>When a creature with undying dies without a +1/+1 counter on it, return it to the battlefield with a +1/+1 counter.</strong>',
    analogy: 'Like a warrior who gets back up from every hit — until they\'ve taken so much that even their regeneration can\'t save them.',
    tableTalk: 'Undying brings your creature back when it dies — once. If it dies without any +1/+1 counters, it comes back with one. The next time it dies, it already has a counter, so undying doesn\'t trigger.',
    commonMistake: 'If the creature already had a +1/+1 counter when it died, undying DOES NOT trigger. The counter check is at the time of death. Also: exile removes it permanently — undying only works from the graveyard.',
    whatToDo: 'When this creature dies, check if it had any +1/+1 counters. No counters = return to battlefield with one. Already had counters = stays in graveyard.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'If the creature already had a +1/+1 counter when it died, undying does not trigger.',
      'The creature returns as a new object — no memory of the previous one.',
      'Undying interacts with persist — -1/-1 and +1/+1 counters cancel each other.',
      'Exile removal stops undying.'
    ],
    example: 'Your undying creature is destroyed with no +1/+1 counters. It returns with one counter. Destroyed again — now it had a counter, undying doesn\'t fire.',
    related: ['persist', 'counter', 'graveyard', 'exile']
  },

  // ── PERSIST ──────────────────────────────────────────────────────────
  'persist': {
    rule: '702.78a',
    category: 'Triggered',
    experienceLevel: 'intermediate',
    plain: '<strong>When a creature with persist dies without a -1/-1 counter on it, return it to the battlefield with a -1/-1 counter.</strong>',
    analogy: 'Like an undying soldier who keeps fighting even as they get weaker — they come back each time, a little more worn down.',
    tableTalk: 'Persist is like undying but with -1/-1 counters. When it dies without any -1/-1 counters, it comes back with one. Combining persist and undying in a deck can create interesting loops.',
    commonMistake: 'If the creature already had a -1/-1 counter when it died, persist does NOT trigger. Undying and persist together create a loop — the creature returns with one of each counter, which cancel out, making it eligible for both again.',
    whatToDo: 'When this creature dies, check if it had any -1/-1 counters. No counters = return with one. Already had counters = stays in graveyard.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'Works like undying but with -1/-1 counters.',
      'If the creature already had a -1/-1 counter, persist does not trigger.',
      'Undying and persist interact — both counters cancel out, enabling the loop.',
      'Exile removal stops persist.'
    ],
    example: 'Your persist creature dies with no -1/-1 counters. It comes back with one -1/-1 counter. Dies again — already had a counter, persist doesn\'t fire.',
    related: ['undying', 'counter', 'graveyard']
  },

  // ── RIOT ─────────────────────────────────────────────────────────────
  'riot': {
    rule: '702.133a',
    category: 'Static',
    experienceLevel: 'basic',
    plain: '<strong>Riot gives you a choice when the creature enters: give it a +1/+1 counter OR give it haste.</strong>',
    analogy: 'Like a new recruit choosing between body armor (counter) or a head start (haste) when they arrive.',
    tableTalk: 'Riot is a choice on entry — do you want this creature to be permanently bigger, or do you want to attack with it right now this turn? Pick based on what you need in the moment.',
    commonMistake: 'You choose riot ON ENTRY — you cannot change your mind once chosen. If a creature has multiple riot triggers (from copying effects), you choose for each separately.',
    whatToDo: 'As this creature enters, choose: +1/+1 counter for permanent stat growth, or haste to attack immediately this turn.',
    whenAttacking: 'Choose haste if you need to attack now. Choose the counter if you have other attackers and want long-term value.',
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'You choose riot on entry — you cannot change your mind.',
      'If a creature has multiple riot triggers, you choose for each separately.',
      'Haste from riot only lasts while the creature has haste — not a permanent buff.'
    ],
    example: 'Your 3/3 with riot enters. Make it a 4/4 right away, or keep it 3/3 but attack immediately this turn.',
    related: ['haste', 'counter', 'enter the battlefield']
  },

  // ── ADAPT ────────────────────────────────────────────────────────────
  'adapt': {
    rule: '701.42a',
    category: 'Activated',
    experienceLevel: 'intermediate',
    plain: '<strong>Adapt N is an activated ability: if the creature has no +1/+1 counters on it, put N +1/+1 counters on it.</strong>',
    analogy: 'Like a creature evolving in response to its environment — once it\'s adapted, it doesn\'t need to again.',
    tableTalk: 'Adapt lets you grow your creature if it hasn\'t already evolved. Pay the cost, and if it has no +1/+1 counters, it gets N of them. Once it has counters, you can\'t adapt it anymore.',
    commonMistake: 'You cannot activate adapt if the creature already has ONE OR MORE +1/+1 counters on it — even if it has just one and adapt would give it more. Also: the check happens when the ability RESOLVES, not when activated.',
    whatToDo: 'Check if the creature has any +1/+1 counters. If it has none, activate adapt. If it already has counters, adapt is not a legal activated ability.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'You cannot activate adapt if the creature already has one or more +1/+1 counters.',
      'The check for counters happens when the ability resolves.',
      'Adapt is sorcery speed unless the card says otherwise.'
    ],
    example: 'Your creature has Adapt 3 and no counters. Pay the cost — it gets three +1/+1 counters. It now has counters — adapt is no longer activatable.',
    related: ['counter', 'evolve', 'proliferate']
  },

  // ── EVOLVE ───────────────────────────────────────────────────────────
  'evolve': {
    rule: '702.98a',
    category: 'Triggered',
    experienceLevel: 'intermediate',
    plain: '<strong>Evolve triggers whenever a creature with higher power or toughness enters under your control — the evolve creature gets a +1/+1 counter.</strong>',
    analogy: 'Like a creature that gains strength by seeing stronger examples — each time a bigger ally arrives, it pushes itself to grow.',
    tableTalk: 'Evolve rewards you for playing big creatures. Every time a creature with higher power OR toughness than the evolve creature enters under your control, your evolve creature grows.',
    commonMistake: 'It checks power OR toughness — either must be greater than the evolve creature\'s. Compare at the time the trigger RESOLVES, not when it triggered. Tokens entering also trigger evolve.',
    whatToDo: 'When another creature with greater power or toughness enters under your control, put a +1/+1 counter on this creature.',
    whenAttacking: null,
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'It checks power OR toughness — either must be greater.',
      'It triggers once per creature that enters.',
      'Tokens entering also trigger evolve.',
      'Compare at the time the trigger resolves.'
    ],
    example: 'Your evolve 2/2 is on the field. You play a 3/3 — it has greater power, evolve triggers, your 2/2 becomes a 3/3.',
    related: ['adapt', 'counter', 'enter the battlefield']
  },

  // ── FLANKING ─────────────────────────────────────────────────────────
  'flanking': {
    rule: '702.25a',
    category: 'Triggered',
    experienceLevel: 'intermediate',
    plain: '<strong>Whenever a creature with flanking is blocked by a creature without flanking, the blocking creature gets -1/-1 until end of turn.</strong>',
    analogy: 'Like a skilled cavalry fighter who outmaneuvers any soldier who tries to stand in their way — the blocker gets overwhelmed by the superior technique.',
    tableTalk: 'Flanking punishes opponents for blocking with non-flanking creatures. The blocker gets -1/-1 just for standing in the way — making your flanking creature more likely to survive combat.',
    commonMistake: 'Multiple instances of flanking stack — a creature with flanking twice gives the blocker -2/-2. The -1/-1 is until end of turn only — not a permanent counter.',
    whatToDo: 'When a non-flanking creature blocks this, apply -1/-1 to the blocker until end of turn.',
    whenAttacking: 'Any non-flanking blocker gets -1/-1 when it blocks this creature.',
    whenBlocking: 'Flanking doesn\'t trigger when this creature blocks.',
    withDeathtouch: 'Flanking + deathtouch: blocker gets -1/-1 AND the deathtouch creature kills it. Double pressure.',
    nuances: [
      'Multiple flanking triggers stack — flanking twice gives -2/-2.',
      'Applies only to blockers without flanking.',
      'The -1/-1 is until end of turn — not a permanent counter.'
    ],
    example: 'Your flanking creature attacks. Opponent blocks with a 2/2. The blocker becomes 1/1 before combat damage.',
    related: ['combat', 'deathtouch', 'first strike']
  },

  // ── RAMPAGE ──────────────────────────────────────────────────────────
  'rampage': {
    rule: '702.23a',
    category: 'Triggered',
    experienceLevel: 'intermediate',
    plain: '<strong>Rampage N triggers whenever the creature becomes blocked — it gets +N/+N for each creature blocking it beyond the first.</strong>',
    analogy: 'Like an unstoppable berserker who gets stronger the more enemies pile on — the more you try to stop it, the more dangerous it gets.',
    tableTalk: 'Rampage rewards being multiply-blocked. One blocker = no bonus. Two blockers = +N/+N. Three blockers = +2N/+2N. It punishes opponents for gang-blocking you.',
    commonMistake: 'The bonus is for each blocker BEYOND THE FIRST — one blocker gives no bonus at all. Also: the bonus lasts until end of turn only.',
    whatToDo: 'When blocked by two or more creatures, this creature gets +N/+N for each blocker beyond the first. Multiple blockers = bigger bonus.',
    whenAttacking: 'Opponents must choose between using one blocker (no rampage bonus) or multiple blockers (triggering rampage). Either way there\'s a cost.',
    whenBlocking: 'Rampage doesn\'t trigger when blocking.',
    withDeathtouch: null,
    nuances: [
      'The bonus applies for each blocker AFTER the first.',
      'One blocker: no bonus. Two: +N/+N. Three: +2N/+2N.',
      'The bonus lasts until end of turn.'
    ],
    example: 'Your creature with Rampage 2 is blocked by 3 creatures. That\'s 2 extra blockers — it gets +4/+4 until end of turn.',
    related: ['trample', 'menace', 'combat']
  },

  // ── BUSHIDO ──────────────────────────────────────────────────────────
  'bushido': {
    rule: '702.45a',
    category: 'Triggered',
    experienceLevel: 'intermediate',
    plain: '<strong>Bushido N triggers whenever the creature blocks or becomes blocked — it gets +N/+N until end of turn.</strong>',
    analogy: 'Like a warrior who performs best in the heat of battle — the moment combat begins, their full ability is revealed.',
    tableTalk: 'Bushido is triggered on both attacking and blocking. As soon as combat happens involving this creature, it gets +N/+N. A 2/2 with Bushido 2 becomes a 4/4 mid-combat.',
    commonMistake: 'Bushido triggers on BOTH attacking (when blocked) and blocking. Multiple bushido abilities stack. The bonus lasts until end of turn only.',
    whatToDo: 'Whenever this creature attacks and is blocked, or whenever it blocks, apply +N/+N until end of turn.',
    whenAttacking: 'Triggers when blocked — gets +N/+N.',
    whenBlocking: 'Triggers when it blocks — gets +N/+N.',
    withDeathtouch: null,
    nuances: [
      'Triggers on both attacking and blocking.',
      'The bonus lasts only until end of turn.',
      'Multiple bushido abilities stack.'
    ],
    example: 'Your 2/2 with Bushido 2 blocks. It gets +2/+2 — becomes a 4/4 for the combat.',
    related: ['flanking', 'first strike', 'combat']
  },

  // ── EXERT ────────────────────────────────────────────────────────────
  'exert': {
    rule: '701.38a',
    category: 'Action',
    experienceLevel: 'intermediate',
    plain: '<strong>You may exert a creature when you attack with it — it gets a bonus but doesn\'t untap during your next untap step.</strong>',
    analogy: 'Like a sprinter who gives everything they have in one burst — they win this race, but they\'re exhausted and can\'t run the next one.',
    tableTalk: 'Exert is a trade-off: push this creature past its limits for a bonus this turn, but it won\'t untap next turn. Great for finishing blows, risky in ongoing board states where you need to block.',
    commonMistake: 'The choice to exert is made when you DECLARE ATTACKERS. Not untapping is a real drawback — the creature misses blocking and attacking next turn. Effects that untap creatures CAN still untap an exerted creature.',
    whatToDo: 'When declaring this creature as an attacker, optionally exert it. It gets the stated bonus for this combat. It will not untap at your next untap step.',
    whenAttacking: 'Exert is declared during your attack declaration for a combat bonus.',
    whenBlocking: null,
    withDeathtouch: null,
    nuances: [
      'The choice to exert is made when you declare attackers.',
      'Not untapping is a real drawback — it misses blocking and attacking next turn.',
      'Effects that untap creatures can still untap an exerted creature.',
      'The exert bonus only applies until end of turn.'
    ],
    example: 'You attack with an exert creature. You choose to exert it — it gets +2/+0 this combat but stays tapped next turn.',
    related: ['vigilance', 'haste', 'combat']
  },

  // ── ENRAGE ───────────────────────────────────────────────────────────
  'enrage': {
    rule: '702.131a',
    category: 'Triggered',
    experienceLevel: 'intermediate',
    plain: '<strong>Enrage triggers whenever the creature is dealt damage — any amount, from any source.</strong>',
    analogy: 'Like a dinosaur that just got poked — even a small injury sends it into a powerful rage.',
    tableTalk: 'Enrage fires whenever this creature takes any damage at all. Even 1 damage from your own spell triggers it. Decks built around enrage intentionally deal tiny amounts of damage to their own creatures to trigger the effects repeatedly.',
    commonMistake: 'Even 1 damage triggers enrage — source does not matter. Your own spells or creatures can trigger it deliberately. Prevention effects that prevent ALL damage also prevent the enrage trigger.',
    whatToDo: 'Whenever this creature is dealt any damage (combat or otherwise), the enrage trigger fires.',
    whenAttacking: 'If blocked, combat damage triggers enrage.',
    whenBlocking: 'Combat damage from the attacker triggers enrage.',
    withDeathtouch: null,
    nuances: [
      'Even 1 damage triggers enrage — source does not matter.',
      'Damage from your own spells or creatures triggers it.',
      'Prevention effects that prevent all damage also prevent the enrage trigger.',
      'Multiple enrage abilities each trigger separately.'
    ],
    example: 'You deal 1 damage to your own enrage creature with a spell. The enrage trigger fires — it might get a land, token, or +1/+1 counter.',
    related: ['damage', 'combat', 'triggered']
  }

};

// ═══════════════════════════════════════════════════════════════════════
// Export for both module systems and browser global
// ═══════════════════════════════════════════════════════════════════════
if (typeof module !== 'undefined' && module.exports) {
  module.exports = KEYWORDS;
} else {
  window.KEYWORDS = KEYWORDS;
}

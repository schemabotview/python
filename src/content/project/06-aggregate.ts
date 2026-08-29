import type { Section } from '../types'

export const aggregate: Section = {
  id: 'aggregate',
  title: 'Aggregate',
  scene: 'capstone-aggregate',
  slide: `## Aggregate — tally it up  ↩ C3, C6

Reduce the stream of entries to the numbers that matter.

### \`Counter\` + a comprehension
- \`Counter(e.level for e in entries)\` — count each level in one line *(C3, C6)*
- The generator expression feeds \`Counter\` **lazily** — still no full list in memory *(C5)*

### Free answers
- \`.most_common(5)\` — the top five paths, sorted, out of the box
- Swap \`e.level\` for \`e.path\` and you have a different report — same one-liner

The core logic works. Now — make it fast for many big files.`,
  narration:
    "Aggregation is the payoff stage, and it's a beautiful example of how the right tool collapses work to almost nothing. We have a stream of Entry objects flowing in, and we want counts — how many of each level. The collections course gave us exactly the tool: Counter. We write Counter of e-dot-level for e in entries, and that single line does everything. The part inside is a generator expression from the data-structures course, pulling the level out of each entry, and because it's a generator, it stays lazy — Counter consumes the entries one at a time, so we're still never holding the whole dataset in memory, even at the final step. Counter tallies them all and hands back something like ERROR forty-two, WARNING one-eighteen, INFO nine hundred. And Counter throws in bonus power for free: its most-common method returns the top entries already sorted, so most-common of five instantly gives us the five most frequent paths — no manual sorting, no loop. Want a different report? Swap e-dot-level for e-dot-path in that same one-liner and you're now counting paths instead. This is what mastering the standard library feels like: a genuinely useful aggregation in a single, readable, memory-efficient line, drawing on data structures, comprehensions, and collections all at once. The tool now reads, parses, and tallies correctly. For a handful of small logs it's plenty fast — but point it at hundreds of large files and we'll want to use every core. That's the next step: scale.",
}

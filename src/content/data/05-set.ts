import type { Section } from '../types'

export const set: Section = {
  id: 'set',
  title: 'set — unique & unordered',
  scene: 'data-set',
  slide: `## set — unique & unordered

A **set** is an **unordered** collection of **unique** items, written \`{...}\` (no colons).

### The mental model
- **Unique** → duplicates can't exist (wrap a list in \`set()\` to dedup)
- **Hash-based** → fast \`in\` membership like a \`dict\`, but no values
- **Unordered & unindexed** — no first item, no slicing

### Reach for a set when…
- …you need **fast membership** tests or to **remove duplicates**
- …you're doing **set algebra** — intersection, union, difference (\`& | - ^\`)
- Need order or positions? → use a \`list\`

### Good to know
- \`frozenset\` is an **immutable** set — hashable, so it can be a \`dict\` key / \`set\` member

One sequence we've leaned on all along deserves its own band: the string.`,
  narration:
    "A set is a collection of unique items with no order — a bag where duplicates simply can't exist. Curly braces with values and no colons — tags equals py, db. You add with add and remove with discard, which, unlike remove, won't complain if the item isn't there. Ask whether something's present — py in tags — and you get an answer in roughly constant time, because a set, like a dict, is hash-based. Two everyday jobs make sets shine. The first is deduplication: wrap any list in set and the duplicates vanish — set of one, one, two gives just one and two. The second is set algebra, straight from maths: ampersand is intersection, the items in both; the pipe is union, everything across both; minus is difference, what's in the first but not the second; and caret is symmetric difference, the items in exactly one. You can also compare whole sets — less-than-or-equal asks is this a subset, and isdisjoint asks do these two share nothing at all. One variant to know: frozenset is an immutable set, and because it can't change, it's hashable — so unlike a normal set it can itself be a dictionary key or an element of another set. The trade-off with sets is what they give up: no order and no indexing, so you can't ask for the first element or a slice — if you need position, use a list. Now, there's one sequence we've been using since our very first program without dwelling on it, and it has its own rich toolbox: the string.",
}

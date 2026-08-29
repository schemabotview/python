import type { Section } from '../types'

// §8 reuses the syntax-overview board (whole board lit) as a bookend to §1 — you can now read every
// construct on it. Hands off to Course 3 (data).
export const youAreHere: Section = {
  id: 'you-are-here',
  title: 'You are here',
  scene: 'syntax-overview',
  slide: `## You are here

You can now read and write the **core syntax** — Python's six building blocks.

### What you can now do
- Bind **variables** and build **expressions** with operators
- Choose with **conditionals**, repeat with **loops**
- Handle failure with **exceptions**, package & reuse with **functions**

### The road ahead
- Next: **Data structures** — the \`list\` / \`dict\` / \`set\` / \`str\` your code moves around
- Then objects, idioms, stdlib, concurrency, and the capstone project

You can write real logic now — next, the data it works on.`,
  narration:
    "Step back and look at the whole board again, because you can now read every construct on it. You can create variables that bind names to objects, and build up values with the full range of operators inside expressions. You can choose what runs with conditionals — if, elif, and else — and repeat work with for and while loops, steering them with break and continue. You can cope with failure using try and except, and you can package and reuse any of this behind a named function, passing data in through positional, keyword, and catch-all parameters. Six building blocks — and genuinely, everything else in Python is built out of these. What's missing so far is richer data. We've been moving single values around — numbers, strings, booleans — but real programs juggle whole collections of them. So the next course is data structures: lists, tuples, dictionaries, sets, and strings — the containers your code will spend all its time filling, searching, and transforming. You can write real logic now. Next, let's give it something substantial to work on.",
}

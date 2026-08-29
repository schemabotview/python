import type { Section } from '../types'

// §10 reuses the idioms-overview board (whole board lit) as a bookend to §1. Hands off to Course 6 (stdlib).
export const youAreHere: Section = {
  id: 'you-are-here',
  title: 'You are here',
  scene: 'idioms-overview',
  slide: `## You are here

You now command the idioms that make Python code **concise, lazy, and expressive**.

### What you can now do
- Understand the **iterator protocol**; write **generators** for lazy streams
- Use **closures**, \`lambda\`/\`map\`/\`filter\`, and **decorators** to treat functions as values
- Guarantee cleanup with **context managers**; compose with **\`functools\`** & **\`itertools\`**

### The road ahead
- Next: **Files, I/O & the standard library** — real input and output, \`pathlib\`, JSON/CSV, \`re\`
- Then concurrency, and the capstone project

You write Pythonic Python now — next, put it to work on real files & data.`,
  narration:
    "Step back and take in the whole board. You came in able to write correct Python; you're leaving able to write Pythonic Python. You understand what a for-loop really does — the iterator protocol of iter, next, and StopIteration — and you can write generators with yield to produce lazy streams that process enormous or infinite data in constant memory. You can treat functions as values: capturing scope with closures, writing quick lambdas for map, filter, and the all-important key argument, and wrapping behavior around any function with decorators. You can guarantee setup and cleanup around a block with context managers and the with statement. And you can reach into functools and itertools for reduce, partial, lru_cache, count, chain, islice, and more — composable, lazy building blocks. These idioms are what separate code that merely works from code that reads like it was meant to be. What's next is putting all of this to work on the real world. So far our programs have lived entirely in memory. In the next course we cross that boundary — reading and writing files, working with paths, JSON and CSV, dates, regular expressions, and the rest of Python's famously batteries-included standard library. Let's go do some real input and output.",
}

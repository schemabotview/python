import type { Section } from '../types'

export const generators: Section = {
  id: 'generators',
  title: 'Generators',
  scene: 'idioms-generators',
  slide: `## Generators — lazy sequences with \`yield\`

A function with **\`yield\`** is a **generator** — it produces values one at a time.

### The mental model
- Calling it runs **nothing**; each \`next()\` runs to the next \`yield\`, hands back the value, then **freezes** — locals, position, all
- Resumes right where it paused — so one function produces a whole **stream** across many calls

### Why it's the big idea
- **Never builds the full list** → process a 10 GB file or an **infinite** stream in constant memory (\`list(...)\` forces it)
- The **generator expression** \`(x*x for x in nums)\` is the same laziness in one line; pipelines chain lazily

### \`yield from\`
- \`yield from other\` re-emits another iterable's items — delegate without a manual loop

Generators are functions that remember. Next: functions that remember *scope*.`,
  narration:
    "A generator is the easy way to build an iterator, and it looks almost like an ordinary function — except that instead of return, it uses yield. Here's the mind-bending part. When you call countdown of three, none of the body runs; you immediately get back a generator object. The code only advances when something calls next on it — that is, when a for-loop asks for a value. It runs until it hits a yield, hands that value back to the caller, and then — crucially — freezes in place. All its local variables, its position in the loop, everything is preserved. The next time next is called, it thaws and continues from exactly where it paused, right after the yield, until the next yield or until the function ends, which raises StopIteration automatically. So yield turns a function into something that produces a stream of values across many calls, remembering its state between each. The payoff is laziness and memory. A generator never builds the whole sequence — it makes one value at a time, on demand, so you can process a ten-gigabyte file, or even an infinite sequence, in constant memory. When you do want all the values at once, you force it with list, as in list of countdown of three. And there's a compact form you'll use constantly: the generator expression, which looks just like a list comprehension from the data course but with parentheses — x times x for x in nums — giving you a lazy stream instead of a fully-built list. The real elegance shows when you chain them: a generator reading stripped lines from a file, feeding another that keeps only the long ones — a whole pipeline where each stage pulls one item at a time and nothing is ever fully materialized. And when one generator just wants to re-emit everything from another, yield from does it in a line — yield from a, yield from b — instead of a manual re-looping. Generators are functions that remember their progress. Next, we meet functions that remember something else entirely — the scope they were created in.",
}

import type { Section } from '../types'

export const itertools: Section = {
  id: 'itertools',
  title: 'itertools',
  scene: 'idioms-itertools',
  slide: `## \`itertools\` — lazy iterator building blocks

Composable, **lazy** iterator tools — the perfect partners for generators.

### Think in three jobs
- **Endless streams**: \`count\`, \`cycle\`, \`repeat\` — safe because nothing builds until asked
- **Combine & slice**: \`chain\` stitches iterables into one; \`islice\` slices an iterator (even infinite) without a list
- **Group & combine**: \`groupby\`, \`product\`, \`combinations\`, \`accumulate\` — grouping & combinatorics, lazily

### Why it matters
- Everything stays **lazy** — build whole pipelines over huge or infinite streams, one item at a time

### The catch
- Most return **one-shot** iterators — consume one and it's spent; and \`groupby\` needs its input **sorted** by the same key first

That's the Pythonic toolkit — let's step back and take it in.`,
  narration:
    "Itertools is the companion toolbox, a collection of fast, composable, lazy tools for working with iterators — and because everything in it is lazy, it pairs perfectly with the generators we opened the course on. A few you'll reach for again and again. Count gives you an infinite counter — one, two, three, forever — and its cousins cycle, which loops over a sequence endlessly like a, b, a, b, and repeat produce other endless streams; they're fine precisely because nothing is built until you ask. Chain stitches several iterables together into one continuous stream, so you can iterate over list A then list B as though they were a single sequence, without concatenating them in memory. Islice lets you slice an iterator the way you'd slice a list — take the first five items, or every other one — and it works even on an infinite source, which is how you safely take just five values from count. And there's a whole family for grouping and combinatorics — groupby to cluster adjacent items, product, permutations, and combinations for the kind of nested-loop problems that would otherwise take pages, and accumulate to produce running totals down a sequence. Two cautions to carry: because these are iterators, most are one-shot — once you've walked one it's exhausted, so wrap it in list if you need it twice; and groupby only clusters adjacent equal keys, so you almost always sort by the same key before calling it. The theme tying it all together is laziness: itertools lets you build entire processing pipelines over huge or even infinite streams while holding only one item at a time. Together with generators, functools, and comprehensions, it's how Pythonistas write data pipelines that are short, readable, and memory-tight. That completes the toolkit of Pythonic idioms — let's pull back and see everything you've picked up.",
}

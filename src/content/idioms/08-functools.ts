import type { Section } from '../types'

export const functools: Section = {
  id: 'functools',
  title: 'functools',
  scene: 'idioms-functools',
  slide: `## \`functools\` — tools for functions

Standard-library helpers that operate **on functions**.

### The three you'll use
- \`reduce(fn, xs)\` — **fold** a sequence to one value (any op; optional start)
- \`partial(fn, x)\` — **pre-fill** arguments → a new, simpler function
- \`@lru_cache\` / \`@cache\` — **memoize**: cache results so repeats are instant

### Why it matters
- \`@lru_cache\` turns exponential recursion (naïve \`fib\`) **linear** — one line, huge speedup
- \`partial\`/\`reduce\` express common patterns without a hand-written loop or \`lambda\`

### Gotcha
- \`@lru_cache\` holds every result **forever** unless you set \`maxsize=…\`, and only cache **pure** functions (same args → same result)

Its sibling toolbox works on **iterators** — \`itertools\`.`,
  narration:
    "Functools is a small standard-library module full of tools that operate on functions, and three of them earn their keep daily. Reduce takes a two-argument function and an iterable and folds the whole thing down to a single value — it applies the function cumulatively, so reduce of add over a list of numbers gives their sum, but with any operation you like: a product, a maximum, a merge. You can also give reduce a starting value as a third argument. Sum, min, and max cover the common cases, but reduce handles the rest. Partial takes a function and some of its arguments and hands back a new function with those arguments already filled in — partial of add and five gives you a one-argument add-five function, and partial of print with end equals empty-string gives you a print that doesn't add a newline. It's a clean way to specialize a general function without writing a lambda or a closure by hand. And the star of the module is lru_cache, a decorator that memoizes — it remembers the results of previous calls and returns the cached answer instantly when the same arguments come back. Put at-lru_cache on a naive recursive Fibonacci and you turn an exponential, seconds-long computation into an instant one, because each value is computed just once and then reused; on modern Python, at-cache is the same thing with an unbounded cache. One decorator, an enormous speedup, and it's built right in. Two cautions with caching, though: lru_cache keeps every result for the life of the program unless you cap it with maxsize, and you should only memoize pure functions — ones that always give the same answer for the same arguments — or you'll hand back stale results. Functools works on functions. Its natural sibling works on the lazy iterators we started the course with — itertools.",
}

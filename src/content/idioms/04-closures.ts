import type { Section } from '../types'

export const closures: Section = {
  id: 'closures',
  title: 'Closures',
  scene: 'idioms-closures',
  slide: `## Closures — functions that capture scope

A nested function **remembers** the variables of the function that made it.

### The mental model
- \`multiplier(2)\` returns \`multiply\`, which still **remembers** \`factor = 2\` — even **after** the outer function returned
- Each call captures **independently** — \`double\` and \`triple\` hold their own \`factor\`

### Why it matters
- Manufacture **specialized functions** on the fly, configured by what you passed in
- It's the exact mechanism behind the next idiom — **decorators**

### Rebinding: \`nonlocal\`
- Reading a captured var is automatic; to **reassign** it (a running \`counter\`), declare \`nonlocal n\`

A function that takes a function and returns a wrapped one: the decorator.`,
  narration:
    "In Python, functions are first-class values — you can pass them around, return them, and, most interestingly, define one function inside another. When you do, the inner function can see the outer function's variables, and here's the twist: it keeps seeing them even after the outer function has finished and returned. That captured combination — an inner function plus the enclosing variables it remembers — is called a closure. Look at multiplier. It takes a factor, defines an inner function multiply that uses that factor, and returns multiply. When you call multiplier of two, you get back a function — let's call it double — and even though multiplier has already returned and its frame is gone, double still remembers that factor was two. Call double of five and you get ten. Call multiplier of three and you get an independent triple, remembering three. Each closure carries its own captured copy — Python literally stores it, which you can even peek at through the function's dunder-closure. Reading a captured variable just works, as multiply does with factor. But if an inner function needs to reassign one — like a counter that bumps a running total each call — you must declare nonlocal n first, telling Python you mean the enclosing variable, not a fresh local. That's how a closure can hold changing state. This is genuinely useful on its own — you can manufacture specialized functions on the fly, configured by whatever you passed in, instead of hard-coding variants or dragging a parameter everywhere. But the real reason we're dwelling on closures is that they're the mechanism behind one of Python's most loved features. A function that takes another function, wraps it in a closure, and returns the wrapper — that's a decorator.",
}

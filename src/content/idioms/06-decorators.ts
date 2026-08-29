import type { Section } from '../types'

export const decorators: Section = {
  id: 'decorators',
  title: 'Decorators',
  scene: 'idioms-decorators',
  slide: `## Decorators — wrap a function

A **decorator** takes a function and returns a **wrapped** version — added behavior, same call.

### The mental model
- \`@timer\` above \`def work\` just means \`work = timer(work)\` — a **closure** wraps the original
- \`*args, **kwargs\` in the wrapper forward **any** call unchanged, so it works on any function

### Everyday uses & polish
- Cross-cutting concerns in one place — timing, logging, caching, access checks, retries
- \`@functools.wraps(fn)\` keeps the wrapper from masquerading — preserves the original's name & docstring

### Decorators with arguments
- \`@retry(3)\` = one more layer: a function that takes the args and *returns* a decorator

From wrapping functions to wrapping a *block* — the context manager.`,
  narration:
    "A decorator is a function that takes another function and returns a new function that adds behavior around it — and thanks to closures, you already understand exactly how it works. Look at timer. It takes a function fn, defines an inner wrapper that does something before and after calling fn, and returns that wrapper. The wrapper is a closure — it remembers fn. Now the at-sign syntax: writing at-timer on the line above def work is just shorthand. It means work equals timer of work — you pass work into timer, and the wrapped version takes its place under the same name. From then on, every call to work actually runs the wrapper, which can time it, log it, check permissions, retry it, whatever — then calls the real work and returns its result. One important detail makes wrappers general: the wrapper takes star-args and star-star-kwargs and forwards them to fn, so it works no matter what arguments the original function expects. Decorators are Python's clean answer to cross-cutting concerns — the bits of behavior like logging, timing, caching, and authentication that you'd otherwise have to paste into dozens of functions. Write it once as a decorator, apply it with one line. A small best-practice: put functools dot wraps around your wrapper, so the decorated function keeps its original name and docstring instead of masquerading as wrapper. One step up in power is a decorator that takes arguments — like at-retry of three. That's just one more layer: retry is a function that takes the number of times, and returns a decorator, which then wraps your function. Three nested functions, but the same idea all the way down. Decorators wrap a function. The next idiom wraps something bigger — an entire block of code — to guarantee setup and cleanup. That's the context manager.",
}

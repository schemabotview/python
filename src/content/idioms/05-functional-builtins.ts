import type { Section } from '../types'

export const functionalBuiltins: Section = {
  id: 'functional-builtins',
  title: 'lambda · map · filter',
  scene: 'idioms-functional',
  slide: `## \`lambda\`, \`map\`, \`filter\`

Small **anonymous functions** and the built-ins that apply them.

### \`lambda\` + the functional built-ins
- \`lambda x: x*x\` — a function as an **expression**, for where a full \`def\` is overkill
- \`map\`/\`filter\` transform & select (both **lazy** iterators); \`any\`/\`all\` collapse a stream to a bool (short-circuit)

### The \`key=\` idiom (you'll use this most)
- \`sorted\`/\`min\`/\`max\` take \`key=lambda …\` — sort users by age, find the longest word — everywhere in real Python

### Pythonic note
- For mapping/filtering, a **comprehension often reads clearer** than \`map\`/\`filter\` — reach for whichever's clearest

Now back to closures put to work — the decorator.`,
  narration:
    "Because functions are values, Python lets you write a tiny one inline, without giving it a name, using lambda. Lambda x colon x times x is a complete little function that squares its argument — it's just an expression, so you can drop it wherever a function is expected. Where does that come up? Most often with the functional built-ins. Map takes a function and an iterable and applies the function to every item — map of square over nums — and it can even take several iterables at once, walking them in lockstep, so map of add over a and b adds two lists element by element. Filter takes a predicate and keeps only the items for which it returns true — filter of lambda x colon x greater than zero. Both of these are lazy: like generators, they hand back iterators that produce values on demand, not finished lists, so they chain cheaply. But the single most common place you'll reach for a lambda is the key argument. Functions like sorted, min, and max take a key equals function that tells them what to sort or compare by — sorted of users, key equals lambda u colon u dot age sorts people by age, and max of words, key equals len finds the longest. That key idiom is everywhere in real Python. Two more built-ins pair beautifully with a generator expression: any and all, which ask whether some, or every, item passes a test — any of x less than zero for x in nums, and they short-circuit, stopping the moment the answer is settled. One honest caveat, in the Pythonic spirit: for mapping and filtering, a list comprehension is often clearer than map and filter with a lambda — so reach for whichever reads better in the moment. Lambdas shine most in that key-equals slot and in quick one-off callbacks. Now let's put closures to work for real, and build the idiom they were leading to — the decorator.",
}

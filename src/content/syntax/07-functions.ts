import type { Section } from '../types'

export const functions: Section = {
  id: 'functions',
  title: 'Functions',
  scene: 'functions',
  slide: `## Functions: define, call & arguments

A **function** packages code behind a **name** you can **call** — and the key skill is how call **arguments** bind to its **parameters** (\`greet\` shows positional/default/keyword, \`log\` shows \`*args\`/\`**kwargs\`).

### def · call · return
- \`def greet(…):\` defines it; \`greet(…)\` calls it; \`return\` hands a value back (no \`return\` → \`None\`)

### The parameter kinds
- **Positional** \`name\` — by order · **Default** \`greeting="Hi"\` — optional
- **Keyword** at the call \`greeting="Hey"\` — by name · \`*args\` → **tuple** · \`**kwargs\` → **dict**

### Why functions
- **Reuse** · **Naming** · **Scope** — variables created inside stay local (LEGB lookup)
- Functions **nest** (an inner \`def\`) and are **first-class** — \`f = greet\` hands one around

That's every piece of Python's core syntax — let's step back.`,
  narration:
    "The moment you find yourself writing the same few lines twice, you want a function. A function packages a block of code behind a name, so you can run it whenever you like just by calling that name. You define one with def — the keyword def, a name, and a parenthesized list of parameters — and return hands a value back to the caller; with no return, a function returns None. Now look at the code on screen, because how you pass arguments in is where people trip up. Start with greet. Its first parameter, name, is positional — it's matched by position, so the first argument you pass becomes name. The second, greeting, has a default of Hi, which makes it optional; and you can pass it by name at the call, like greeting equals Hey — that's a keyword argument, matched by name rather than order. Then greet's cousin, log, shows the two catch-alls, and this is where the power is: a single star, star-args, gathers any extra positional arguments into a tuple, and double-star, star-star-kwargs, gathers extra keyword arguments into a dictionary — so a function can accept as many as you throw at it. Those five forms — positional, default, keyword, star-args, and star-star-kwargs — cover every way to pass data into a function. Functions earn their keep three ways: reuse, so you write the logic once and call it a hundred times; naming, because a good name turns a wall of code into a readable sentence; and scope, since the variables you create inside stay local, with Python resolving names local, enclosing, global, then built-in — the LEGB rule. Functions are even first-class objects — you can hand one to another name, as with f equals greet. And with that, you've now seen every piece of Python's core syntax. Let's step back and take it all in.",
}

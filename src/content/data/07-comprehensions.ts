import type { Section } from '../types'

export const comprehensions: Section = {
  id: 'comprehensions',
  title: 'Comprehensions — build in one line',
  scene: 'data-comprehensions',
  slide: `## Comprehensions — build in one line

A **comprehension** builds a whole collection from an expression, in one readable line.

### The mental model
- Replaces the **empty-collection + \`for\` + \`append\`** pattern with one expression
- Reads as **[ what you want · for each item · optional filter ]**
- Works for **every** container: \`[]\` list · \`{k: v}\` dict · \`{}\` set · \`()\` lazy generator

### Why it's worth the habit
- Usually **shorter and faster** than the equivalent loop
- A \`()\` generator stays **lazy** — feed it to \`sum\`/\`any\` without building the whole list *(Course 5)*

### Gotcha
- Don't over-nest — if it needs two \`if\`s and a nested \`for\`, a plain loop reads better

That's the toolbox — next, you'll build your own types with classes.`,
  narration:
    "The last thing to learn about data structures is the most Pythonic way to create them: the comprehension. Here's the problem it solves — very often you build a collection by starting with an empty list, writing a for loop, and appending inside it. A comprehension collapses all of that into one expression. The shape reads almost like English: square brackets, the expression you want, for each item in some iterable, optionally an if to filter. So n-times-n for n in range five builds the list of squares in one line; add if n greater than zero to keep only the positives. You can put a full conditional in the expression too — a if a greater than zero else zero — to transform each item as you go, and you can nest two for-clauses to walk a list of lists and flatten it into one. And because a comprehension is just an expression, you can feed it straight into a builtin, like sorted of a generator of words. It's not only lists: swap the brackets and you comprehend the other containers. Curly braces with key-colon-value give a dict comprehension — u dot id colon u, for u in users, builds a lookup table from a list of objects — and you can filter those with a trailing if as well. Curly braces with just values give a set comprehension, which dedups as it goes. And if you use parentheses, you get a lazy generator that produces items one at a time — perfect to hand to sum or any, which consume it without ever building the whole list, or to pull from by hand with next. That laziness is a whole topic in the idioms course. Comprehensions aren't only shorter; they're usually faster than the equivalent loop, and once your eye adjusts, far easier to read — up to a point: if a comprehension grows to a nested for-clause plus a couple of conditions, a plain loop is clearer, and you should reach for one. That completes your data toolbox — you can now hold and shape data in every built-in structure Python offers.",
}

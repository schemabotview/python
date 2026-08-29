import type { Section } from '../types'

export const tuple: Section = {
  id: 'tuple',
  title: 'tuple — ordered & immutable',
  scene: 'data-tuple',
  slide: `## tuple — ordered & immutable

A **tuple** is a **frozen list** — an ordered, immutable record of values, written with parentheses.

### The mental model
- Index & unpack just like a list, but you **can't** add, remove, or reassign
- Immutable → **hashable** → usable as a \`dict\` key / \`set\` member (a \`list\` isn't)
- Signals intent: "these values belong together as **one fixed thing**"

### Reach for a tuple when…
- …the values form a **fixed record** — a coordinate, an RGB colour, a function's multiple return
- You then **unpack** it back into names: \`x, y = point\`

### Good to know
- A one-element tuple needs a trailing comma: \`(5,)\`; empty is \`()\`
- \`namedtuple\` gives the positions names — \`p.x\` beats \`p[0]\`

For lookup by key rather than position, you want a dict.`,
  narration:
    "A tuple is, in one line, a list that can't change. You write it with parentheses — point equals three, four — and read from it by index exactly like a list: point square-bracket zero is three. You'll usually meet tuples through unpacking: x, y equals point spreads its values into two names, and with a star you capture the rest, so a, star-rest equals one, two, three puts one in a and the list two, three in rest. Two syntax quirks: a single-element tuple needs a trailing comma — five-comma in parentheses — and an empty tuple is just an empty pair of parentheses. The one thing you cannot do is modify it: assign point square-bracket zero equals nine and Python raises a TypeError, because tuples are immutable. That's the whole point, and it buys you something concrete — because a tuple can never change, it's hashable; you can call hash on it, which means, unlike a list, it can serve as a key in a dictionary or a member of a set. Immutability also signals intent: a tuple says these values belong together as one fixed thing — a coordinate, an RGB colour, the pair a function hands back with return x, y — which you then unpack into names at the other end. One upgrade worth knowing: namedtuple, from the collections module, gives those positions names. Define P as a namedtuple with fields x and y, and now you write p dot x instead of p square-bracket zero — all the lightness of a tuple, but readable. So: list when it changes, tuple when it's a fixed record. Next, when you want to look values up by a name rather than a position, you want a dictionary.",
}

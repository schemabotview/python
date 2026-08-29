import type { Section } from '../types'

export const theBoard: Section = {
  id: 'the-board',
  title: "Python's built-in data structures",
  scene: 'data-overview',
  slide: `## Python's built-in data structures

Real programs move **collections** of values around — Python gives you **five** built-in containers for that.

### Two questions pick the type
- **Ordered & indexed?** — \`list\`, \`tuple\`, \`str\` are *sequences*; \`dict\`, \`set\` are *hash-based*
- **Mutable?** — \`list\`, \`dict\`, \`set\` can change; \`tuple\`, \`str\` cannot

### The five
- **list** — ordered, mutable · **tuple** — ordered, immutable · **str** — text
- **dict** — key → value · **set** — unique members

### And to build them
- **Comprehensions** — create a whole collection from an expression, in one line

Let's meet each container, then the comprehensions that build them.`,
  narration:
    "So far we've moved single values around — a number, a string, a boolean. But real programs deal in collections: a list of orders, a table of users, a set of tags. Python gives you five built-in containers for that, and you choose between them by answering just two questions. First: do you need the items ordered and reachable by position? If so, you want a sequence — a list, a tuple, or a string. If instead you mainly look things up by a key, or test whether something's a member, you want a hash-based container — a dict or a set. Second question: does the collection need to change after you create it? Lists, dicts, and sets are mutable — you can add and remove. Tuples and strings are immutable — fixed once made, which makes them safe to share and lets them serve as dictionary keys. So here's the cast: a list is your ordered, mutable workhorse; a tuple is an ordered but unchangeable record; a string is an immutable sequence of characters; a dict maps keys to values; and a set holds unique members with no order. And wrapping all of them, comprehensions let you build a collection from an expression in a single readable line. Let's take each container in turn, and finish with the comprehensions that create them.",
}

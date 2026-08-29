import type { Section } from '../types'

// §8 reuses the data-overview board (whole board lit) as a bookend to §1. Hands off to Course 4 (oop).
export const youAreHere: Section = {
  id: 'you-are-here',
  title: 'You are here',
  scene: 'data-overview',
  slide: `## You are here

You now know Python's **five containers** and how to build them.

### What you can now do
- Choose **list / tuple / dict / set / str** by *ordering* and *mutability*
- Access, slice, and update them; build them fast with **comprehensions**

### The road ahead
- Next: **Objects & classes** — model your *own* types (the data model, dunders, inheritance)
- Then idioms, stdlib, concurrency, and the capstone project

You can hold and shape data now — next, you'll design your own types.`,
  narration:
    "Step back and look at the whole board. You now have Python's complete set of built-in containers, and — just as importantly — a way to choose between them. Ask whether you need order and indexing: if so, it's a sequence — a list when it changes, a tuple when it's fixed, a string for text. Ask whether you look things up by key or test membership: if so, it's hash-based — a dict for key-to-value maps, a set for unique members. You can create, access, slice, and update all of them, and you can build any of them in a single line with a comprehension. Between the syntax from last course and these data structures, you can now write genuinely useful programs. But you've been using types Python gave you. The next step is to design your own — to bundle data and the behaviour that goes with it into a type that fits your problem. That's object-oriented Python: classes, objects, and the data model. Let's go build our own types.",
}

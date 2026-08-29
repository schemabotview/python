import type { Section } from '../types'

export const list: Section = {
  id: 'list',
  title: 'list — ordered & mutable',
  scene: 'data-list',
  slide: `## list — ordered & mutable

A **list** is Python's go-to container: an **ordered, mutable** sequence, written with square brackets.

### The mental model
- **Ordered** → reach items by position — index, slice, reverse
- **Mutable** → grows & shrinks in place (a \`tuple\` / \`str\` can't)
- Holds **anything** — mixed types, even nested lists

### Reach for a list when…
- …you have a sequence that **changes over time** — the default choice
- Look up by key? → \`dict\` · Fixed record? → \`tuple\` · Uniqueness? → \`set\`

### Two gotchas
- \`.sort()\` **mutates** the list; \`sorted()\` leaves it alone and returns a **new** one
- \`x in nums\` scans item-by-item (**O(n)**) — need fast membership? use a \`set\`

When the collection should never change, reach for a tuple.`,
  narration:
    "The list is the container you'll reach for most, so start here. A list is an ordered, mutable sequence — square brackets, like nums equals one, two, three. Because it's ordered, every item has a position: nums square-bracket zero is the first, and negative indexes count from the end, so nums minus-one is the last — no need to compute the length. A colon takes a slice — nums one-colon-three gives a new sub-list — and the slice trick colon-colon-minus-one hands back a reversed copy. And len tells you how many items it holds — the same len that works on every container we'll meet. Now, because a list is mutable, you can reshape it in place. To grow it: append adds one item to the end, insert drops one at a given position, and extend splices in a whole other list. To shrink it: pop removes and returns the last item, and remove deletes the first matching value. You can interrogate it too — x in nums tests membership, index finds where a value sits, and count says how many times it appears. One caveat on that membership test: on a long list it scans item by item, so when checking membership is all you need, a set does it far faster. And you can order it two ways: sort rearranges the list right where it is, while the built-in sorted returns a new sorted list and takes options like reverse equals True. Finally, you build lists up quickly — plus-equals concatenates another list onto the end, and multiplying a list, like zero times three, repeats it, a handy way to preallocate. Reach for a list whenever you have an ordered collection that grows and shrinks. When you instead want a fixed group of values that should never change, you want its close cousin: the tuple.",
}

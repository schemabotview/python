import type { Section } from '../types'

export const conditionals: Section = {
  id: 'conditionals',
  title: 'Conditionals',
  scene: 'conditionals',
  slide: `## Conditionals: choosing a path

\`if\` runs a block **only when a condition is truthy** — how a program makes a decision.

### if / elif / else
- \`if cond:\` … \`elif other:\` … \`else:\` — the **first truthy** branch wins, the rest are skipped
- Blocks are marked by **indentation**, not braces

### Truthy conditions
- The condition can be **any** value — \`if items:\` means \`if the list is non-empty\`

### Ternary & match
- Ternary: \`x = a if cond else b\` — a one-line choice
- \`match / case\` — structural pattern matching on a value's shape (3.10+)

Choosing once is a conditional; doing something repeatedly is a loop.`,
  narration:
    "Conditionals are how a program makes a decision. An if statement runs its block only when its condition is truthy; if the condition is falsy, that block is skipped entirely. You extend it with elif for additional conditions and else for a fallback — and the rule is simple: Python checks them top to bottom and runs the first branch whose condition is true, then skips all the rest. Notice there are no curly braces anywhere: in Python, the block that belongs to an if is marked purely by indentation, and that indentation is part of the language, not just style. And remember truthiness from the last band? It shines right here: because any value can serve as a condition, you rarely write if the length of items is greater than zero; you just write if items, and an empty list reads as false. Beyond that basic form there are two more ways to choose. For simple either-or choices there's a compact form, the ternary expression, where you write x equals a if some condition else b, choosing a value in a single line. And for the richer cases, modern Python has match and case — structural pattern matching that lets you branch on the shape of a value, not just a boolean. Choosing a path once is a conditional. But often you want to do something again and again — and for that, you use a loop.",
}

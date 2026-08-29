import type { Section } from '../types'

export const loops: Section = {
  id: 'loops',
  title: 'Loops',
  scene: 'loops',
  slide: `## Loops: repeating work

Loops run a block **many times** — the way you process collections and repeat until done.

### for & while
- \`for item in iterable:\` — the workhorse; walks any sequence, \`range\`, dict, file…
- \`while cond:\` — repeat until the condition goes falsy

### Steering the loop
- \`break\` — exit now · \`continue\` — skip to the next item · \`else\` — runs if no \`break\`

### Iterating well
- \`range(n)\` for counts · \`enumerate(xs)\` for index+item · \`zip(a, b)\` to walk in lockstep

Variables, expressions, conditionals, loops — that's the core. Two constructs organize it.`,
  narration:
    "To do something repeatedly, you use a loop, and Python has two. The workhorse is the for loop: you write for item in something, and it walks through that something one element at a time — a list, a string, a range of numbers, the keys of a dictionary, even the lines of a file. Anything you can iterate, for will walk. The other is the while loop, which simply repeats its block as long as a condition stays truthy, and stops the moment it goes falsy — perfect when you don't know the count in advance. Inside either loop you have three ways to steer: break jumps out immediately, ending the loop; continue skips the rest of the current pass and moves to the next item; and there's a lesser-known else clause on loops that runs only if the loop finished without ever hitting a break. A few built-ins make for loops read beautifully: range gives you a sequence of numbers to count with; enumerate hands you the index and the item together, so you don't manage a counter yourself; and zip walks two or more sequences side by side, in lockstep. That's the core four — variables, expressions, conditionals, and loops. The last two constructs are about organizing a program: coping with failure, and reusing code. Let's do failure first.",
}

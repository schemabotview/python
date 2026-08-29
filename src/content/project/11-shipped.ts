import type { Section } from '../types'

// §11 reuses the capstone-spine board (whole board lit) — the finale that closes the 8-course arc.
export const shipped: Section = {
  id: 'shipped',
  title: 'You are here',
  scene: 'capstone-spine',
  slide: `## You did it

You built and shipped a real Python program — and every course lives inside it.

### The whole journey
- **Set up** the runtime · **wrote** syntax · **structured** data · **modeled** with objects
- **Mastered** the idioms · did real **work** with the stdlib · learned to **scale** · **shipped** a project

### Where to go next
- Build your **own** tools — the best way to keep learning is to make things
- Explore the ecosystem: web (\`fastapi\`), data (\`pandas\`), whatever draws you
- Read other people's code; contribute to open source

You know Python now. Go build something.`,
  narration:
    "Take it all in — the whole build, every step complete. You built a real, installable command-line program from an empty folder, and every single course you took is woven into it. Look back at the arc. You set up the runtime and learned how Python actually executes your code. You wrote the core syntax — variables, control flow, functions, exceptions. You structured data with lists, dicts, sets, and comprehensions. You modeled your own types with classes, dataclasses, and inheritance. You mastered the idioms that make Python distinctive — generators, decorators, context managers. You did real work with the standard library — files, regex, the whole batteries-included toolbox. You learned to scale with threads, async, and processes, and why the runtime behaves as it does. And here, in the capstone, you tied it all together and shipped it, adding project structure and testing along the way. That's not a beginner's toolkit anymore; that's the working knowledge of a Python programmer. So where to next? The honest answer is: build things. Pick a problem you actually have and write the tool for it. Reach into the ecosystem when you need it — a web framework like FastAPI, the data stack with pandas, whatever your path requires. Read other people's code, and when you're ready, contribute to the open-source projects you rely on. You came in knowing nothing about Python. You leave knowing how to build with it. Go make something.",
}

import type { Section } from '../types'

export const whyIdioms: Section = {
  id: 'why-idioms',
  title: 'Pythonic power tools',
  scene: 'idioms-overview',
  slide: `## The idioms that make Python *Python*

You can already write correct Python. This course is about writing **Pythonic** Python.

### The distinctive idioms
- **Lazy iteration** — the iterator protocol, **generators** (\`yield\`)
- **Functions as values** — **closures**, \`lambda\`/\`map\`/\`filter\`, **decorators**
- **Resource control** — **context managers** (\`with\`)
- **The lazy toolboxes** — **\`functools\`** & **\`itertools\`**

These are the tools that make experienced Python read clean and effortless.`,
  narration:
    "By now you can write correct Python — the syntax, the data structures, your own classes. This course is about something different: writing Pythonic Python, the code that makes an experienced reader nod. Every language lets you loop and branch, but Python has a distinctive set of idioms — power tools — that let you say a lot with a little, cleanly and lazily. We'll group them into four ideas. First, lazy iteration: the protocol behind every for-loop, and generators, which produce values one at a time instead of building a whole list in memory. Second, functions as values: closures that remember the scope they were born in, the little anonymous lambda and its partners map and filter, and decorators, which wrap a function to add behavior without touching its code. Third, resource control: context managers and the with statement, which guarantee cleanup happens. And fourth, the two lazy standard-library toolboxes, functools and itertools, packed with ready-made building blocks. Master these and your code gets shorter, faster, and far more readable. Let's start where it all begins — with how iteration actually works under the hood.",
}

import type { Section } from '../types'

// §10 reuses the stdlib-overview board (whole board lit) as a bookend to §1. Hands off to Course 7
// (concurrency).
export const youAreHere: Section = {
  id: 'you-are-here',
  title: 'You are here',
  scene: 'stdlib-overview',
  slide: `## You are here

Your programs now reach the **real world** — files, data formats, time, text, and libraries.

### What you can now do
- Read & write **files** (\`open\`/\`with\`) and handle paths with **\`pathlib\`**
- Exchange data as **JSON** & **CSV**; work with **\`datetime\`** and **\`re\`**
- Reach for **\`collections\`** & **\`logging\`** — plus the wider stdlib (\`os\`/\`sys\`/\`math\`) and **PyPI** packages

### The road ahead
- Next: **Concurrency & the runtime** — threads, the GIL, \`asyncio\`, and multiprocessing
- Then the capstone project that ties everything together

You do real work now — next, make it fast: many things at once.`,
  narration:
    "Step back and take in the whole board. Your programs used to live sealed inside memory; now they reach out into the real world. You can read and write files with open and with, safely and lazily, and handle paths cleanly with pathlib. You can exchange structured data as JSON and tabular data as CSV, letting the right module handle the tricky parsing. You can work with dates and durations through datetime, and find and transform text with regular expressions. You've got the collections module's Counter, defaultdict, deque, and namedtuple to make everyday code shorter, and proper logging to see what your programs are doing, with the detail dialed up or down at will. And beyond these eight, you know the shape of the wider standard library — os, sys, math, random, and dozens more — and the enormous third-party ecosystem on PyPI, installed with the pip and venv workflow from the very first course. That's genuinely everything you need to write practical, useful programs. There's one more frontier before the capstone. Everything we've done runs one thing at a time, top to bottom. Real programs often need to do many things at once — download a hundred files, serve many users, use every CPU core. That's concurrency, and it forces us back into the runtime — the GIL, threads, async, and processes — to understand not just how, but why Python does it the way it does. Let's go make things fast.",
}

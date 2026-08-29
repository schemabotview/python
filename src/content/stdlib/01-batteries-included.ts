import type { Section } from '../types'

export const batteriesIncluded: Section = {
  id: 'batteries-included',
  title: 'Files, I/O & the standard library',
  scene: 'stdlib-overview',
  slide: `## Batteries included

Your programs have lived **in memory**. Now they touch the **real world** — files, data, time.

### The "batteries-included" library
- Python ships a huge **standard library** — solved problems, ready to \`import\`
- **I/O**: files, \`pathlib\` · **formats**: JSON, CSV · **utilities**: \`datetime\`, \`re\`
- **Productivity**: \`collections\`, \`logging\` — and much more (\`os\`/\`sys\`/\`math\`), plus **PyPI** beyond

### The rule of thumb
- Before you write it yourself, check — **it's probably already in the stdlib**

Let's cross from memory to the outside world, starting with files.`,
  narration:
    "Everything we've built so far has lived entirely inside the program's memory — values, objects, streams that vanish when the process ends. This course crosses that boundary. Real programs read and write files, exchange data with other systems, work with dates and text, and lean on code other people already wrote. Python is famous for being batteries-included: it ships with an enormous standard library, a collection of modules that solve common problems so you don't have to. Need to read a file, parse JSON, match a pattern, count things, log what happened, or work with dates? There's almost certainly a module for it, one import away. We'll tour the essentials in four pairs. First, input and output — reading and writing files, and the modern pathlib way of handling paths. Second, the two data formats you'll meet everywhere, JSON and CSV. Third, two everyday utilities: datetime for dates and times, and the re module for regular expressions. And fourth, two productivity boosters — the collections module's specialized containers, and proper logging instead of print. Beyond these eight, the library runs much deeper — os, sys, math, random, and dozens more — and past even that is the vast third-party ecosystem on PyPI you already met in the first course; we'll point back to both at the end. The habit to build is this: before you write something from scratch, check whether Python already ships it. Let's start at the boundary itself — reading and writing files.",
}

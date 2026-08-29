import type { Section } from '../types'

export const read: Section = {
  id: 'read',
  title: 'Read',
  scene: 'capstone-read',
  slide: `## Read — stream the input  ↩ C5, C6

Find the files and stream their lines **lazily** — memory-tight by design.

### \`pathlib\` + a generator
- \`root.glob("*.log")\` finds every log file — no manual path juggling *(C6)*
- \`with log.open() as f:\` — a **context manager** guarantees each file is closed *(C5)*
- \`yield from f\` streams the file's lines out — a **generator**, one line at a time *(C5)*

### Why it scales
- Gigabytes of logs flow through with only **one line** in memory at a time

Raw lines in hand, we turn each into a structured \`Entry\` — with a regex.`,
  narration:
    "Now input, and this little function braids together two of the most important idioms you've learned. Its job is to yield every line from every log file in a folder, and it does so lazily. First, finding the files: we take a pathlib Path for the folder and call dot glob of star-dot-log, which returns every file matching that pattern — clean, cross-platform path handling from the standard library course, no string mangling. Then, for each log file, we open it inside a with block. That's a context manager, and it guarantees the file is closed the moment we're done, even if something goes wrong — no leaked file handles, however many files we process. And here's the elegant part: inside, we write yield from f. Because a file object is itself iterable over its lines, yield from streams every line of that file out of our generator, one at a time. The function as a whole is a generator, so lines don't pile up — a caller pulls them through on demand. Put those together and you get a function that can stream through gigabytes of logs across hundreds of files while holding just a single line in memory at any instant. That's the generator and context-manager lessons combined with pathlib, doing genuinely production-grade work in six lines. We now have a stream of raw text lines. The next stage gives them meaning — parsing each line into a structured Entry.",
}

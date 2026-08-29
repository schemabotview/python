import type { Section } from '../types'

export const fileIo: Section = {
  id: 'file-io',
  title: 'File I/O',
  scene: 'stdlib-files',
  slide: `## Reading & writing files

\`open()\` inside a **\`with\`** block — the context manager guarantees the file is closed.

### The mental model
- **Read**: \`f.read()\` slurps the whole file; iterating \`for line in f\` is **lazy** — one line at a time, so a huge file fits in memory
- **Write**: a **mode** picks the job, and the module writes text as-is (you add your own newlines)

### Modes & encoding
- \`"r"\` read · \`"w"\` write · \`"a"\` append · add \`"b"\` for **binary** (images/data as bytes)
- Pass **\`encoding="utf-8"\`** explicitly so text behaves the same on every machine

### Gotcha
- \`"w"\` **truncates** — it wipes the file before writing; use \`"a"\` to add instead

Building paths by hand with strings is fragile — \`pathlib\` fixes that.`,
  narration:
    "The gateway to files is the built-in open function, and you should almost always use it inside a with block — the context manager you learned last course. Open returns a file object, and wrapping it in with guarantees the file is closed the moment the block ends, even if an error is raised. Reading is simple: f dot read pulls the entire file in as a single string. But for a big file, the idiomatic move is to iterate the file object directly — for line in f — which hands you one line at a time, lazily, so you never load the whole thing into memory. Writing works the same way, but you pass a mode as the second argument. The default mode is r for read. Pass w to write, and be careful — it truncates the file, wiping any existing contents before you start. Pass a to append instead, adding to the end. Then f dot write puts text in, though unlike print it doesn't add a newline, so you include the backslash-n yourself. Two more things worth knowing. Add a b to the mode — rb or wb — to work in binary rather than text, which you need for images, audio, or any non-text data. And because text files involve decoding bytes into characters, it's good practice to pass encoding equals utf-8 explicitly, so your program behaves the same on every machine. Now, notice we've been writing file names as plain strings. Stitching paths together with string concatenation is error-prone and breaks across operating systems. Python's modern answer is pathlib.",
}

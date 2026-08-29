import type { Section } from '../types'

export const pathlib: Section = {
  id: 'pathlib',
  title: 'pathlib',
  scene: 'stdlib-pathlib',
  slide: `## \`pathlib\` — paths as objects

A **\`Path\`** is a first-class object — cleaner and safer than string paths.

### The mental model
- **Join with \`/\`**: \`Path("data") / "notes.txt"\` — OS-correct separators, so one code runs everywhere
- A path **knows itself**: \`.name\`/\`.stem\`/\`.suffix\`/\`.parent\`, and queries disk with \`.exists()\`/\`.is_file()\`/\`.stat()\`

### One-call I/O & finding files
- \`read_text()\`/\`write_text()\` — whole-file I/O with **no \`open\`**; \`mkdir(exist_ok=True)\`
- \`glob("*.py")\` one level · \`rglob(...)\` **recurses** subfolders · \`iterdir()\` lists a folder

### Prefer it
- Modern code uses \`pathlib\` for essentially all path work — the old \`os.path\` string funcs still exist but read worse

With files handled, next is the data *inside* them — starting with JSON.`,
  narration:
    "Pathlib gives you paths as proper objects instead of raw strings, and once you switch you won't go back. You create a Path from a string, and then the magic: you join paths with the division operator. Path of data, slash, notes-dot-txt builds the path data/notes.txt — and pathlib automatically uses the right separator for your operating system, so the same code works on Mac, Linux, and Windows without you thinking about backslashes versus forward slashes. A Path object also knows about itself: dot name gives the filename, dot stem the name without its extension, dot suffix the extension itself, dot parent the containing folder, and dot exists, dot is-file, and dot is-dir answer questions about what's actually on disk — while dot stat reaches for details like the file's size in bytes. Best of all, pathlib folds common file operations into single method calls — p dot read-text reads an entire file as a string, and p dot write-text writes one, with no open and no with block needed for these simple cases; dot mkdir, with exist-ok True, creates a directory without complaining if it's already there. And for finding files, dot glob takes a wildcard pattern — Path of dot, glob of star-dot-py yields every Python file in a directory — its cousin dot rglob does the same but recurses into every subfolder, and dot iterdir lists everything in a folder. Modern Python code uses pathlib for essentially all path work; the old os-dot-path string functions still exist, but pathlib is cleaner, safer, and more readable. We can now find, read, and write files. The next question is what's inside them — and the most common structured format you'll read and write is JSON.",
}

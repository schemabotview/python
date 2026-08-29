import type { Section } from '../types'

export const json: Section = {
  id: 'json',
  title: 'JSON',
  scene: 'stdlib-json',
  slide: `## \`json\` — structured data interchange

**JSON** is the lingua franca between programs, APIs, and config files.

### The mental model
- The **\`s\` = string**: \`dumps\`/\`loads\` convert to/from a **string**; \`dump\`/\`load\` go straight to/from a **file**
- The data models line up — \`dict\`↔object, \`list\`↔array, \`str\`/\`int\`/\`bool\`/\`None\`↔their JSON kin

### Handy options
- \`indent=2\` pretty-prints · \`sort_keys=True\` → stable, diff-friendly · \`default=str\` serializes odd types (dates)

### Gotcha
- All JSON keys are **strings** — a dict with \`int\` keys comes back with string keys

JSON is for nested data. For flat, tabular rows, reach for CSV.`,
  narration:
    "JSON is the universal language programs use to exchange structured data — it's what web APIs return, what configuration files are often written in, and how you'll persist nested data between runs. Python's json module bridges it in two directions, and the naming is worth pinning down. The functions ending in s work with strings: json dot dumps — dump-s — takes a Python object and produces a JSON-formatted string, and json dot loads — load-s — parses a JSON string back into Python. The functions without the s work with files directly: json dot dump writes an object straight to an open file, and json dot load reads one back. So the s stands for string. The conversion is intuitive because the two data models line up almost perfectly: a Python dict becomes a JSON object, a list becomes an array, and strings, numbers, booleans, and None map to their JSON equivalents. A few practical options on dumps: pass indent equals two and you get nicely pretty-printed, human-readable output, great for config files; sort-keys equals True orders the keys alphabetically, which makes output stable and diff-friendly; and default equals str tells json how to handle a type it doesn't natively understand, like a datetime, by falling back to its string form instead of raising. And be aware that all JSON object keys are strings, so a dict with integer keys will come back with those keys as strings. JSON is perfect for nested, hierarchical data. But a great deal of real-world data is flat and tabular — rows and columns, like a spreadsheet or a database export. For that, the right tool is CSV.",
}

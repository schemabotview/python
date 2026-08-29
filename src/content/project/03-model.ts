import type { Section } from '../types'

export const model: Section = {
  id: 'model',
  title: 'Model',
  scene: 'capstone-model',
  slide: `## Model — the data types  ↩ C4

Model the domain with a **\`dataclass\`** and an **\`Enum\`** — clear, typed, self-documenting.

### An \`Entry\` is a record
- \`@dataclass class Entry:\` with typed fields \`level: Level\`, \`path: str\` *(C4)*
- Free \`__init__\`/\`__repr__\`/\`__eq__\` — and it reads like the thing it represents

### \`Level\` is a fixed set
- An **\`Enum\`** gives named constants (\`Level.ERROR\`) — safer than bare strings
- Type hints thread through the whole program from here *(C4)*

With the shape defined, let's pull real lines in from disk.`,
  narration:
    "Good programs start by modeling their data, and that's the objects course put to immediate use. The core thing logtally deals with is a single parsed log line, so we define a type for it: an Entry. Rather than passing around loose tuples or dictionaries, we make it a dataclass with two typed fields — a level and a path. Remember what the dataclass decorator gives us for free: a constructor, a readable repr, and equality, all generated from those two annotated fields, so we write three lines and get a full, self-documenting record type. Alongside it we define Level as an Enum — a fixed set of named constants: INFO, WARNING, ERROR. This is much safer than passing the bare string error around your code, where a typo becomes a silent bug; with an enum you refer to Level dot ERROR, and your editor and mypy can check it. And notice the type hints threading through — level colon Level, path colon str. Those annotations, from the objects course, now flow through the entire program, documenting every function and letting the type checker catch mismatches before you ever run the tool. With the shape of our data pinned down, the next job is input: getting log lines off the disk and into the program.",
}

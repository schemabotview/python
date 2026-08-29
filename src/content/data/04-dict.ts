import type { Section } from '../types'

export const dict: Section = {
  id: 'dict',
  title: 'dict — key → value',
  scene: 'data-dict',
  slide: `## dict — key → value

A **dict** maps unique **keys** to **values** — Python's lookup table, written \`{key: value}\`.

### The mental model
- Access by **key**, not position — \`user["name"]\`, never \`user[0]\`
- Backed by a **hash table** → average **O(1)** lookup, insert, and membership
- Keys must be **hashable** (\`str\`, \`int\`, \`tuple\` — not a \`list\`); values can be anything

### Reach for a dict when…
- …you find things by a **name or id** — the workhorse of real programs
- Only care about presence & uniqueness, no values? → \`set\`

### Gotcha
- Indexing a missing key raises \`KeyError\` — use \`.get(key, default)\` when it might be absent

When you care only about membership and uniqueness, use a set.`,
  narration:
    "A dictionary is Python's lookup table: it maps unique keys to values. Curly braces with key-colon-value pairs — user equals id one, name Sam — and you fetch a value by its key: user square-bracket name gives back Sam. One sharp edge: indexing a missing key raises an error, so when a key might be absent, use get — user dot get of age comma zero returns the value if it's there and the default zero if not, without crashing. Assignment does double duty: user square-bracket age equals thirty adds the pair if it's new and updates it if it exists. For more control there's update, which merges another dict or keyword pairs in all at once, and setdefault, which sets a key only if it's currently missing. To remove, del drops a key, and pop removes it and hands back its value. To walk a dictionary, iterate its items and you get each key and value together — for k, v in user dot items — or loop its keys or its values alone. You can also build dictionaries compactly: the double-star spread, brace star-star a star-star b, merges two dicts into a new one, and dict of zip stitches a list of keys together with a list of values. And the reason dictionaries are everywhere is speed: a dict is backed by a hash table, so lookup by key stays roughly constant time no matter how big it grows. Reach for a dict whenever you find things by a name or id. When you don't care about values at all — only whether something is present, and that each item is unique — you want a set.",
}

import type { Section } from '../types'

export const str: Section = {
  id: 'str',
  title: 'str — immutable text',
  scene: 'data-str',
  slide: `## str — immutable text

A **str** is text — and, crucially, an **immutable sequence of characters**, written in quotes.

### The mental model
- It's a **sequence** → index, slice, reverse, and \`len\` all work like a \`list\`
- **Immutable** → every method returns a **new** string; the original never changes
- **Unicode** by default (Python 3)

### What you'll do with it
- **Transform** (\`upper\`/\`strip\`/\`replace\`/\`split\`/\`join\`), **inspect** (\`in\`/\`startswith\`/\`find\`), **format** (f-strings)

### Gotcha
- Building a string in a loop with \`+=\` is **quadratic** — collect a \`list\` and \`"".join(it)\` instead

Finally, the one-line way to build any of these: comprehensions.`,
  narration:
    "A string is text, and the key insight is that Python treats it as an immutable sequence of characters — so everything you know about indexing and slicing lists applies directly. s square-bracket zero is the first character, minus-one the last; s colon-three is the first three as a new string; and the trick colon-colon-minus-one reverses the whole thing. Immutable means the string itself never changes, so every string method returns a brand-new string rather than editing in place. There's a rich toolbox. To transform: upper and lower change case, strip trims whitespace off the ends, replace swaps one substring for another, split breaks a string into a list on a separator, and join stitches a list of strings back together — and join is also the right way to build one big string from many pieces, because gluing them with plus in a loop gets quadratically slow. To inspect: startswith tests a prefix, the in operator checks for a substring — tho in Python is True — find returns the index of a substring or minus-one when it's absent, and predicates like isdigit tell you whether every character is a digit. And to build strings, the modern way is the f-string: put an f before the quotes and drop any expression inside curly braces — f, name is age — and Python fills in the values; you'll still occasionally see the older dot-format style with empty braces. That rounds out the five containers. To finish, let's look at the one-line way to build any of them: comprehensions.",
}

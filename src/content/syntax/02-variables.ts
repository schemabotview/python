import type { Section } from '../types'

export const variables: Section = {
  id: 'variables',
  title: 'Variables & data types',
  scene: 'variables',
  slide: `## Variables & data types

A **variable** is a **name bound to a value** — and in Python the value is always an **object**.

### The data types
- Numbers: \`int\` (unbounded — \`10**100\` is fine) and \`float\`; text is \`str\`; \`bool\` is \`True\`/\`False\`
- \`None\` is the "no value yet" object; collections (\`list\`, \`dict\`, …) come in Course 3

### Binding & dynamic typing
- \`x = 2 + 3\` — evaluate the right side, then bind the name; \`y = x\` points both at the **same** object
- Names have no type — **objects do**; rebind to any type (\`x = 5\` then \`x = "five"\`). Optional hints: \`count: int = 0\`

### Convert & inspect · handy forms
- Cast with \`int("42")\`, \`str(42)\`, \`float\`, \`bool\`; check with \`type(x)\` / \`isinstance(x, int)\`
- Multiple \`a, b = 1, 2\` · swap \`a, b = b, a\` · unpack \`first, *rest = xs\` · augmented \`x += 1\` · constants \`MAX = 100\` (UPPER_CASE by convention)

Variables hold values — and values come from expressions, the next construct.`,
  narration:
    "Let's start with the smallest piece: a variable. In Python a variable is nothing more than a name bound to a value, and here's the key idea we set up last course — that value is always an object living in memory. Look first at the types on screen. The everyday atoms are whole numbers, or ints — and a lovely Python touch is that ints never overflow, so ten to the hundredth power is a perfectly ordinary value; decimals are floats; text is a str; True and False are bools, which are actually a special kind of int; and None is Python's stand-in for no value yet. Richer collections like lists and dictionaries get their own course. Now to binding: when you write x equals two plus three, Python does two things in order — it evaluates the right-hand side to get the object five, and then it binds the name x to that object. The name is just a label pointing at the object, so if you then write y equals x, nothing is copied; both names point at the very same object. Because names are just labels, Python is dynamically typed: the name has no type, only the object does — so you can write x equals five, and later x equals the string five, and Python won't complain. If you want, you can annotate a name with an optional type hint like count colon int, purely as documentation. When you need to move between types you convert explicitly — int of a string parses it to a number, str of a number turns it back into text — and you can always ask type of x, or isinstance, to check what you're holding. Finally, a few forms save keystrokes: assign several names at once with a, b equals one, two; swap two variables in a single line with a, b equals b, a, no temporary needed; unpack a list with a starred name to grab the rest; and augmented assignment like x plus-equals one updates in place. And one convention worth noting: Python has no keyword for constants, so by habit you put names you don't intend to change in all-caps, like MAX. Variables give you values to work with — and those values are built by expressions, the next construct.",
}

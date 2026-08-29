import type { Section } from '../types'

export const re: Section = {
  id: 're',
  title: 'Regular expressions',
  scene: 'stdlib-re',
  slide: `## \`re\` — regular expressions

A mini-language for **matching patterns** in text — find, extract, replace.

### What you can ask
- **Find**: \`search\` (first), \`findall\` (all), \`finditer\` (lazy), \`match\` (anchored at start)
- **Transform**: \`sub\` find-and-replace · \`split\` on a pattern · **capture groups** \`()\` pull pieces out via \`m.group(1)\`

### Two habits
- Always write patterns as **raw strings** \`r"..."\` so \`\\\` reaches the regex engine, not Python's escapes
- \`re.compile(pat)\` once and reuse it when a pattern is hot

### Wisdom
- Powerful but easy to over-reach — for structured formats (HTML, JSON), a real **parser** beats a regex

Next, two tools that make everyday code shorter and clearer — \`collections\`.`,
  narration:
    "Regular expressions are a compact mini-language for describing patterns in text, and the re module is how you use them in Python. They let you answer questions like: does this string contain a number? Pull out every word. Replace every run of whitespace with a single space. Validate an email shape. There are a handful of core functions. re dot search scans a string and returns the first match anywhere in it, or None if there's none. re dot findall returns a list of every match, and its lazy cousin finditer yields match objects one at a time. re dot match is like search but anchored at the very start of the string. re dot sub does find-and-replace, swapping each match for a replacement, and re dot split breaks a string on a pattern — split on comma-or-semicolon in one call. The patterns themselves are built from small pieces: backslash-d matches any digit, backslash-w a word character, backslash-s whitespace; a plus means one or more, a star means zero or more; and parentheses create capture groups, which let you pull specific pieces out of a match with dot group of one, dot group of two — the area code out of a phone number, say. If you use the same pattern repeatedly, compile it once with re dot compile and call methods on the compiled object, which is a little faster and reads cleanly. One crucial Python habit throughout: always write your patterns as raw strings, with an r before the quotes, so that backslashes are passed through to the regex engine instead of being interpreted as Python string escapes. A word of wisdom to close: regular expressions are enormously powerful, but they're also easy to overuse. For genuinely structured formats — HTML, JSON, dates — reach for a real parser rather than a heroic regex. Now let's pick up two modules that quietly make everyday code shorter and clearer, starting with collections.",
}

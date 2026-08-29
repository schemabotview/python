import type { Section } from '../types'

export const parse: Section = {
  id: 'parse',
  title: 'Parse',
  scene: 'capstone-parse',
  slide: `## Parse — text → structure  ↩ C6, C4

Turn a raw line into a typed **\`Entry\`** with a **regular expression**.

### The regex
- \`re.compile(r"(\\w+)\\s+(/\\S*)")\` — **compiled once**, then reused per line *(C6)*
- Two **capture groups**: the level word and the \`/path\`

### Robust by design
- No match? \`return None\` — skip junk lines instead of crashing *(C2)*
- \`Level[m[1]]\` looks the enum up by name; returns a typed \`Entry\` *(C4)*

Structured entries stream out — now we tally them into a report.`,
  narration:
    "Parsing is where the regular expressions from the standard library course earn their keep. Each raw line is just text — something like ERROR, space, slash-api-slash-users — and we need to pull structure out of it. We define a pattern with re dot compile, and compiling it once at module load, rather than re-parsing the pattern on every single line, is an important efficiency habit when you're processing millions of lines. The pattern has two capture groups in parentheses: the first grabs the level word, the second grabs the path starting with a slash. Then the parse function runs that pattern against a line with search. Notice how defensive it is: if the line doesn't match — a blank line, a stack trace, some junk — search returns None, and we simply return None to signal skip this one, rather than letting an error tear down the whole run. That's the exceptions-and-robustness mindset from the syntax course; real input is messy, and good programs expect it. When there is a match, we build our typed Entry: Level square-bracket m-one looks up the enum member by the captured name, turning the string ERROR into Level dot ERROR, and we pair it with the captured path. Out comes a clean, typed Entry object — the dataclass from a moment ago. So text has become structure. The final stage of the pipeline turns that stream of entries into the answer the user actually wants: a tally.",
}

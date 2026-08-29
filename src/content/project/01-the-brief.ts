import type { Section } from '../types'

export const theBrief: Section = {
  id: 'the-brief',
  title: 'Capstone project',
  scene: 'capstone-spine',
  slide: `## Ship a real program

No new Python this time — one real project, built **end to end**. You'll **use everything**.

### The project: \`logtally\`
- A **command-line tool** that scans a folder of log files and reports level counts & top paths
- \`$ logtally ./logs\` → a tidy summary — a genuinely useful little program

### The nine steps (the spine)
- **Structure → Model → Read → Parse → Aggregate → Scale → Interface → Test → Ship**
- Each step **reuses a course**: packaging *(C1)* · dataclasses & typing *(C4)* · generators, decorators, context managers *(C5)* · files, regex, \`argparse\` *(C6)* · parallelism *(C7)* · plus **\`pytest\`** (new)

### How to watch
- This **spine** is the plan; each step then opens as its **own screen of real code**

Let's build. First, the foundation everything rests on — the project's structure.`,
  narration:
    "This is the final course, and it's different from every one before it. There's no new Python to learn here — instead, we take everything you already know and build one real program with it, from an empty folder to an installable command. The tool is called logtally: you point it at a folder of log files, and it scans them and prints a report — how many errors, warnings, and infos, and the paths that show up most. You'd run it by typing logtally, space, the folder. Look at the spine on the left: that's the plan, the nine steps of the build, top to bottom, in order. Structure the project, model the data, read the files, parse the lines, aggregate the results, scale it across cores, wrap it in an interface, test it, and ship it. And here's the theme of the whole course: each step reuses something you've already learned. Structure uses the packaging from the setup course; Model uses dataclasses and typing from objects; Read, Parse, and Aggregate lean on generators, files, regex, and collections; Scale uses concurrency; Test and Ship bring in pytest and packaging. We'll take the steps one at a time — each opens as its own full screen of real code, with the slide on the right explaining it. So this is the payoff, the moment where all the separate pieces click into a single working thing. Let's build it, starting with the foundation everything else rests on: the project's structure.",
}

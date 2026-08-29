import type { Section } from '../types'

export const interface_: Section = {
  id: 'interface',
  title: 'Interface',
  scene: 'capstone-interface',
  slide: `## Interface — the command  ↩ C2, C6

The front door: turn command-line arguments into a run of the pipeline.

### \`argparse\`
- \`ArgumentParser()\` + \`add_argument("dir")\` — parses args, and gives \`--help\` for free *(C6)*
- \`main()\` is the function \`pyproject\` mapped the \`logtally\` command to *(C1)*

### Fail gracefully
- Wrap the run in \`try/except\` — a missing folder logs a clean error, not a stack trace *(C2)*
- \`logging\` reports what happened at the right level *(C6)*

The tool is built. A professional never ships it untested — enter \`pytest\`.`,
  narration:
    "The command-line interface is the front door of the tool, and argparse from the standard library course builds it for us. Inside main — the very function that pyproject wired the logtally command to — we create an ArgumentParser and tell it to expect one argument, the directory to scan. Argparse then does the tedious work: it reads the arguments the user typed, validates them, and, as a lovely bonus, generates a dash-dash-help message describing how to use the tool, all for free. Once we have the directory, we kick off the whole pipeline we built — read the files, parse the lines, tally them, report the result — in a single expression. But notice the try-except wrapped around it. Real users make mistakes: they'll point logtally at a folder that doesn't exist. Without handling, Python would vomit a raw traceback, which is ugly and unhelpful. Instead we catch the FileNotFoundError and log a clean, human message — no logs found. That's the exception handling from the syntax course and the logging module from the standard library working together to make the tool feel polished and trustworthy rather than fragile. And with that, main ties everything together: arguments in, report out, errors handled. The program is complete and runnable. But there's one thing that separates a hobby script from professional software, and no serious engineer skips it: tests.",
}

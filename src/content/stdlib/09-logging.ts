import type { Section } from '../types'

export const logging: Section = {
  id: 'logging',
  title: 'logging',
  scene: 'stdlib-logging',
  slide: `## \`logging\` — diagnostics done right

Structured, **levelled** output — the grown-up replacement for \`print\` debugging.

### The big idea: levels + a threshold
- \`DEBUG < INFO < WARNING < ERROR < CRITICAL\` — set a threshold, and only messages at/above it show
- DEBUG in dev, WARNING in prod — dial detail up or down **without editing code**

### Set it up
- \`basicConfig(level=…, format=…)\` once — \`format\` auto-stamps timestamp, module, level; \`getLogger(__name__)\` per module

### Everyday touches
- \`log.error("... %s", err)\` — **lazy** \`%\`-format (only if emitted) · \`log.exception(...)\` in \`except\` adds the traceback
- Handlers route to console **and/or** files — libraries log quietly, the app sets policy

That's the eight everyday modules — let's step back and take it in.`,
  narration:
    "Everyone debugs with print statements at first, and for a quick check that's fine — but for real programs, the logging module is the tool you want, and the difference is worth understanding. The heart of it is levels. Every message you log has a severity — DEBUG for fine-grained detail, INFO for normal events, WARNING for something suspicious, ERROR for a failure, and CRITICAL for a disaster. You then set a threshold, and only messages at or above it are shown. That single idea is powerful: in development you set the level to DEBUG and see everything; in production you set it to WARNING and the noise disappears — all without deleting or commenting out a single line. You configure it once with logging dot basic-config, giving a level and a format string that decides what each line shows, and by convention you create a logger per module with get-logger of double-underscore-name. That format string is how logging automatically stamps each message with a timestamp, the module it came from, and the level. A couple of everyday touches: you pass values as extra arguments rather than pre-formatting the string — log dot error of failed percent-s, comma err — so the formatting only happens if the message is actually emitted; and inside an except block, log dot exception records your message together with the full traceback. Logging can send output to the console, to files, or both at once through handlers — configured in one place rather than scattered through your code. And there's an ecosystem benefit: well-behaved libraries log through this system quietly, leaving the decision of what to actually show up to the application that uses them. So logging gives you visibility you can dial up and down at will. That completes the eight workhorse modules of this course — and they're only a slice. The standard library runs far deeper, with modules like os, sys, math, and random, and beyond it sprawls the vast PyPI ecosystem you install with the pip-and-venv workflow from Course 1. Let's step back and take in what you've picked up.",
}

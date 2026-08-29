import type { Section } from '../types'

export const datetime: Section = {
  id: 'datetime',
  title: 'datetime',
  scene: 'stdlib-datetime',
  slide: `## \`datetime\` — dates & times

Represent, compute with, and format points in time.

### Points & spans
- \`datetime.now()\`/\`date.today()\` are **points**; \`timedelta\` is a **duration**
- Arithmetic is clean: add a \`timedelta\` to shift, subtract two datetimes → the span between

### Text ↔ datetime
- \`strftime\` formats out, \`strptime\` parses in (codes like \`%Y-%m-%d\`)
- Prefer the ISO 8601 shortcuts: \`fromisoformat\` / \`isoformat\`

### Watch out — time zones
- A datetime with no zone is **naive**; mixing naive & aware is a classic bug — prefer **aware** (\`datetime.now(timezone.utc)\`)

From time to text: the pattern-matching powerhouse, \`re\`.`,
  narration:
    "Dates and times are everywhere, and they're surprisingly tricky, so Python gives you the datetime module. The central type is datetime, a specific moment — datetime dot now gives you the current one. There are also date and time types when you only need one part. The key companion is timedelta, which represents a duration — a span rather than a point. This is what makes date arithmetic clean: add timedelta of days equals seven to a datetime and you get the moment one week later; subtract two datetimes and you get a timedelta telling you how far apart they are. The other half of the module is converting between datetimes and text, and this is where two method names come up constantly. strftime — string-format-time — turns a datetime into a string using format codes like percent-Y for the four-digit year and percent-m-percent-d for month and day. Its mirror, strptime — string-parse-time — reads a string back into a datetime given the same kind of format. For the common ISO 8601 format — the year-dash-month-dash-day style — there are convenient shortcuts, fromisoformat to parse and isoformat to produce. One serious caution: time zones. A datetime without zone information is naive, and mixing naive and zone-aware times, or assuming everything is local, is a classic source of bugs — for anything real, prefer timezone-aware datetimes, which you get by passing a zone, as in datetime dot now of timezone dot utc. Time handled, let's turn to text, and the single most powerful tool for finding and transforming it: regular expressions, in the re module.",
}

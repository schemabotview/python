import type { Section } from '../types'

export const csv: Section = {
  id: 'csv',
  title: 'CSV',
  scene: 'stdlib-csv',
  slide: `## \`csv\` — tabular data

Comma-separated rows — spreadsheets, exports, simple datasets.

### The mental model
- **Let the module parse** — it handles commas, quotes, and newlines *inside* fields that a naive \`split(",")\` corrupts
- Read by **name** with \`DictReader\` (\`row["name"]\`) — clearer, and survives reordered columns — or by position with \`reader\`

### Write
- \`writer.writerow([...])\` / \`.writerows(rows)\`; \`DictWriter(fieldnames=…)\` for dict rows

### Habit
- Open CSV files with **\`newline=""\`** so the module controls line endings (no blank rows on Windows)

That's data formats. Next, two everyday utilities — time, then text.`,
  narration:
    "CSV — comma-separated values — is the plain-text format for tabular data: rows and columns, the lingua franca of spreadsheets, data exports, and simple datasets. It looks deceptively easy, and that's exactly why you should use the csv module rather than splitting lines on commas yourself. Real CSV files have fields that contain commas inside quotes, quoted strings with escaped characters, and newlines within fields — and the module handles all of that correctly, where a naive text-dot-split would silently corrupt your data. Reading comes in two flavors. csv dot reader hands you each row as a list, so you access columns by position — row zero, row one. But the friendlier tool is csv dot DictReader, which reads the header row and then gives you each subsequent row as a dictionary keyed by column name — so you write row of quote-name rather than counting to the right index. DictReader is what you'll reach for most, because code that says row of name is far clearer and survives columns being reordered. Writing mirrors this: csv dot writer with write-row takes a single list, write-rows takes many at once, and DictWriter takes dictionaries given a list of field names. One small portability habit: open your CSV files with newline set to the empty string, so the module controls line endings and you don't get blank rows on Windows. The golden rule is to let the module do the parsing and formatting — never hand-roll comma splitting for anything but the most trivial throwaway. So JSON handles nested data and CSV handles tables. Now let's move to two utilities you'll use in almost every program: working with dates and times, and matching patterns in text.",
}

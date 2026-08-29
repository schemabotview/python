import type { Scene } from '../../render-engine'

// §5 csv — one editor card: read by header (DictReader) or position (reader), write, and let the
// module handle commas/quotes inside fields.
export const stdlibCsv: Scene = {
  id: 'stdlib-csv',
  padding: 0.14,
  nodes: [
    {
      id: 's-csv',
      kind: 'code',
      filename: 'csv_io.py',
      label: [
        'import csv',
        '',
        '# ── read: by header (usually best) ──',
        'with open("data.csv", newline="") as f:',
        '    for row in csv.DictReader(f):',
        '        row["name"], row["age"]   # by column name',
        '',
        '# ── read: by position ──',
        'for row in csv.reader(f):',
        '    row[0], row[1]          # a plain list',
        '',
        '# ── write ──',
        'w = csv.writer(out)',
        'w.writerow(["name", "age"])   # one row',
        'w.writerows(rows)             # many rows',
        '# DictWriter(out, fieldnames=[...]) for dicts',
        '',
        '# let csv handle commas/quotes inside fields',
      ].join('\n'),
    },
  ],
  edges: [],
}

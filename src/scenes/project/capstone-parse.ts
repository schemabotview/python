import type { Scene } from '../../render-engine'

// §5 Parse — one editor card: a compiled regex (level word + /path) turns each raw line into a typed
// Entry, robustly (no match → None, skip junk rather than crash). ↩ C6, C4.
export const capstoneParse: Scene = {
  id: 'capstone-parse',
  padding: 0.16,
  nodes: [
    {
      id: 'cap-parse',
      kind: 'code',
      filename: 'parse.py',
      label: [
        'import re',
        'from .models import Entry, Level',
        '',
        '# ── compile the pattern ONCE (C6) ──',
        'LINE = re.compile(r"(\\w+)\\s+(/\\S*)")   # level, path',
        '',
        '# ── text → typed Entry, robustly (C2, C4) ──',
        'def parse(line: str) -> Entry | None:',
        '    m = LINE.search(line)',
        '    if not m:',
        '        return None            # skip junk, no crash',
        '    level, path = m.group(1), m.group(2)',
        '    return Entry(Level[level], path)',
        '',
        'parse("ERROR /api/x")   # Entry(ERROR, "/api/x")',
        'parse("garbage")        # None',
      ].join('\n'),
    },
  ],
  edges: [],
}

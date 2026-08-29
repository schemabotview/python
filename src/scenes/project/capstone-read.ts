import type { Scene } from '../../render-engine'

// §4 Read — one editor card: glob every log file (pathlib) + stream their lines lazily (a generator +
// a context manager), so gigabytes flow through one line at a time. ↩ C5, C6.
export const capstoneRead: Scene = {
  id: 'capstone-read',
  padding: 0.16,
  nodes: [
    {
      id: 'cap-read',
      kind: 'code',
      filename: 'read.py',
      label: [
        'from pathlib import Path',
        'from collections.abc import Iterator',
        '',
        '# ── find every log file (C6) ──',
        'def log_files(root: Path) -> list[Path]:',
        '    return sorted(root.glob("*.log"))',
        '',
        '# ── stream lines lazily (C5) ──',
        'def lines(root: Path) -> Iterator[str]:',
        '    for log in log_files(root):',
        '        with log.open() as f:   # context manager',
        '            yield from f        # one line at a time',
        '',
        '# gigabytes flow through, one line in memory',
        'for line in lines(Path("logs")):',
        '    ...',
      ].join('\n'),
    },
  ],
  edges: [],
}

import type { Scene } from '../../render-engine'

// §3 Model — one editor card: a Level Enum (fixed named set) + an Entry dataclass (one parsed log
// line as a typed record). ↩ C4.
export const capstoneModel: Scene = {
  id: 'capstone-model',
  padding: 0.16,
  nodes: [
    {
      id: 'cap-models',
      kind: 'code',
      filename: 'models.py',
      label: [
        'from dataclasses import dataclass',
        'from enum import Enum',
        '',
        '# ── a fixed set of names (safer than strings) ──',
        'class Level(Enum):',
        '    INFO = 1',
        '    WARNING = 2',
        '    ERROR = 3',
        '',
        '# ── one parsed log line = a typed record ──',
        '@dataclass',
        'class Entry:',
        '    level: Level',
        '    path: str',
        '',
        '# free __init__ / __repr__ / __eq__ from the fields',
        'e = Entry(Level.ERROR, "/api/x")',
        'e.level                 # <Level.ERROR: 3>',
      ].join('\n'),
    },
  ],
  edges: [],
}

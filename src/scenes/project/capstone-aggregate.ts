import type { Scene } from '../../render-engine'

// §6 Aggregate — one editor card: reduce the stream of Entries to the numbers that matter with a
// Counter fed by a lazy generator expression; most_common gives the top paths sorted, free. ↩ C3, C6.
export const capstoneAggregate: Scene = {
  id: 'capstone-aggregate',
  padding: 0.16,
  nodes: [
    {
      id: 'cap-aggregate',
      kind: 'code',
      filename: 'aggregate.py',
      label: [
        'from collections import Counter',
        'from .models import Entry',
        '',
        '# ── count each level in one lazy line (C3) ──',
        'def by_level(entries) -> Counter:',
        '    return Counter(e.level for e in entries)',
        '',
        '# ── the busiest paths, already sorted ──',
        'def top_paths(entries, n=5):',
        '    counts = Counter(e.path for e in entries)',
        '    return counts.most_common(n)',
        '',
        '# by_level(...)  → ERROR: 42 · WARNING: 118 · INFO: 900',
        '# top_paths(..., 3) → [("/api/x", 51), ...]',
      ].join('\n'),
    },
  ],
  edges: [],
}

import type { Scene } from '../../render-engine'

// §7 comprehensions — one editor card: list, dict & set, generator (lazy), and why.
export const dataComprehensions: Scene = {
  id: 'data-comprehensions',
  padding: 0.14,
  nodes: [
    {
      id: 'd-comp',
      kind: 'code',
      filename: 'comprehensions.py',
      label: [
        '# ── list ──',
        '[n*n for n in range(5)]        # map',
        '[n for n in nums if n > 0]     # filter',
        '[x for row in grid for x in row]  # flatten',
        '[a if a > 0 else 0 for a in xs]   # ternary',
        'sorted(w for w in words)       # feed a builtin',
        '',
        '# ── dict & set ──',
        '{u.id: u for u in users}       # dict',
        '{k: v for k, v in pairs}       # from pairs',
        '{k: v for k, v in d.items() if v}  # filter',
        '{c for c in text}              # set (dedups)',
        '',
        '# ── generator (lazy) ──',
        'g = (n*n for n in nums)        # a generator',
        'sum(n*n for n in nums)         # genexpr arg',
        'any(n < 0 for n in nums)       # short-circuits',
        'next(g)                        # pull one item',
        '',
        '# ── why ──',
        '# replaces: empty list + for-loop + append',
        '# usually shorter AND faster',
      ].join('\n'),
    },
  ],
  edges: [],
}

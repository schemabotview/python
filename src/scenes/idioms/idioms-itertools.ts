import type { Scene } from '../../render-engine'

// §9 itertools — one editor card: infinite streams (count/cycle/islice), combine & slice (chain,
// islice), and group & combine (groupby, product, combinations, accumulate).
export const idiomsItertools: Scene = {
  id: 'idioms-itertools',
  padding: 0.14,
  nodes: [
    {
      id: 'i-itertools',
      kind: 'code',
      filename: 'itertools.py',
      label: [
        'from itertools import (count, cycle, chain,',
        '    islice, groupby, product, combinations, accumulate)',
        '',
        '# ── infinite streams (stay lazy) ──',
        'count(1)             # 1, 2, 3, … forever',
        'cycle("ab")          # a, b, a, b, …',
        'islice(count(), 5)   # first 5, lazily',
        '',
        '# ── combine & slice ──',
        'chain(a, b)          # a then b, one stream',
        'islice(it, 2, 8)     # slice any iterator',
        '',
        '# ── group & combine ──',
        'for k, g in groupby(sorted(xs), key):',
        '    ...              # cluster adjacent items',
        'product(a, b)        # cartesian (nested loops)',
        'combinations(xs, 2)  # all pairs',
        'accumulate(nums)     # running totals',
      ].join('\n'),
    },
  ],
  edges: [],
}

import type { Scene } from '../../render-engine'

// §3 generators — one editor card: yield (pause & resume), lazy generator expressions, lazy
// pipelines, and yield from.
export const idiomsGenerators: Scene = {
  id: 'idioms-generators',
  padding: 0.14,
  nodes: [
    {
      id: 'i-gen',
      kind: 'code',
      filename: 'generate.py',
      label: [
        '# ── yield: pause & resume ──',
        'def countdown(n):',
        '    while n > 0:',
        '        yield n        # emit, then freeze here',
        '        n -= 1',
        '',
        'c = countdown(3)       # nothing runs yet',
        'next(c)                # 3   (runs to yield)',
        'list(countdown(3))     # [3, 2, 1]',
        '',
        '# ── lazy generator expression ──',
        'squares = (x*x for x in nums)   # not a list',
        'sum(x*x for x in nums)          # fed to a builtin',
        '',
        '# ── pipelines stay lazy ──',
        'lines = (l.strip() for l in file)',
        'longs = (l for l in lines if len(l) > 80)',
        '',
        '# ── yield from: delegate to another ──',
        'def both(a, b):',
        '    yield from a',
        '    yield from b',
      ].join('\n'),
    },
  ],
  edges: [],
}

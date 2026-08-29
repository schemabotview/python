import type { Scene } from '../../render-engine'

// §5 functional-builtins — one editor card: lambda, map/filter (lazy), the key= idiom, any/all.
export const idiomsFunctional: Scene = {
  id: 'idioms-functional',
  padding: 0.14,
  nodes: [
    {
      id: 'i-lambda',
      kind: 'code',
      filename: 'functional.py',
      label: [
        '# ── lambda: a function in an expression ──',
        'sq = lambda x: x * x           # anonymous fn',
        '',
        '# ── apply & select (return lazy iterators) ──',
        'list(map(sq, nums))            # transform each',
        'list(map(add, a, b))           # walk two streams',
        'list(filter(lambda x: x > 0, nums))   # keep some',
        '',
        '# ── the key= idiom (used most) ──',
        'sorted(users, key=lambda u: u.age)',
        'max(words, key=len)            # longest word',
        'min(pts, key=lambda p: p.dist)',
        '',
        '# ── reduce a stream to a bool ──',
        'any(x < 0 for x in nums)       # short-circuits',
        'all(isinstance(x, int) for x in nums)',
        '',
        '# Pythonic: a comprehension often reads clearer',
      ].join('\n'),
    },
  ],
  edges: [],
}

import type { Scene } from '../../render-engine'

// §8 functools — one editor card: reduce (fold), partial (pre-fill args), lru_cache/cache (memoize),
// and wraps (keep a wrapper's identity).
export const idiomsFunctools: Scene = {
  id: 'idioms-functools',
  padding: 0.14,
  nodes: [
    {
      id: 'i-functools',
      kind: 'code',
      filename: 'functools.py',
      label: [
        'from functools import (reduce, partial,',
        '                       lru_cache, cache, wraps)',
        '',
        '# ── fold to one value ──',
        'reduce(add, nums)           # sum-like, any op',
        'reduce(add, nums, 0)        # with a start value',
        '',
        '# ── pre-fill arguments ──',
        'add5 = partial(add, 5)      # add5(10) → 15',
        'write = partial(print, end="")',
        '',
        '# ── memoize (cache results) ──',
        '@lru_cache(maxsize=None)    # or @cache (3.9+)',
        'def fib(n):',
        '    return n if n < 2 else fib(n-1) + fib(n-2)',
        '',
        "# ── keep a wrapper's identity (in a decorator) ──",
        '@wraps(fn)',
        'def wrapper(*a, **kw): ...',
      ].join('\n'),
    },
  ],
  edges: [],
}

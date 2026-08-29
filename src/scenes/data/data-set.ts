import type { Scene } from '../../render-engine'

// §5 set — one editor card: create & test, set algebra, compare, frozenset.
export const dataSet: Scene = {
  id: 'data-set',
  padding: 0.14,
  nodes: [
    {
      id: 'd-set',
      kind: 'code',
      filename: 'set.py',
      label: [
        '# ── create & test ──',
        'tags = {"py", "db"}',
        'tags.add("web")',
        'tags.discard("db")    # no error if absent',
        '"py" in tags          # True',
        'len(tags)             # count',
        'set([1, 1, 2])        # {1, 2}  dedup a list',
        '',
        '# ── set algebra ──',
        'a = {1, 2, 3}',
        'b = {3, 4}',
        'a & b                 # {3}       intersect',
        'a | b                 # {1,2,3,4} union',
        'a - b                 # {1, 2}    difference',
        'a ^ b                 # {1,2,4}   symmetric',
        '',
        '# ── compare ──',
        '{1, 2} <= a           # subset?',
        'a.isdisjoint(b)       # share nothing?',
        '',
        '# ── frozen (hashable) ──',
        'frozenset([1, 2])     # an immutable set',
      ].join('\n'),
    },
  ],
  edges: [],
}

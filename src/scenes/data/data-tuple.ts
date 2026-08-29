import type { Scene } from '../../render-engine'

// §3 tuple — one editor card: create & unpack, immutable → hashable, why tuples, named fields.
export const dataTuple: Scene = {
  id: 'data-tuple',
  padding: 0.14,
  nodes: [
    {
      id: 'd-tuple',
      kind: 'code',
      filename: 'tuple.py',
      label: [
        '# ── create & unpack ──',
        'point = (3, 4)',
        'x, y = point         # unpack',
        'a, *rest = 1, 2, 3   # rest = [2, 3]',
        'point[0]             # 3',
        'single = (5,)        # one-tuple (comma!)',
        'empty = ()',
        '',
        '# ── immutable → hashable ──',
        'point[0] = 9         # error! cannot change',
        'hash(point)          # ok → usable as a key',
        'd = {(0, 0): "start"}   # tuple as dict key',
        '',
        '# ── why tuples ──',
        'return x, y          # multi-return (a tuple)',
        'rgb = (255, 0, 0)    # a fixed record',
        'r, g, b = rgb        # unpack it back',
        '',
        '# ── named fields (bonus) ──',
        'from collections import namedtuple',
        'P = namedtuple("P", "x y")',
        'p = P(3, 4);  p.x    # 3',
      ].join('\n'),
    },
  ],
  edges: [],
}

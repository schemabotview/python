import type { Scene } from '../../render-engine'

// §7 @dataclass — one editor card: declare typed fields, get __init__/__repr__/__eq__ free; the
// mutable-default gotcha (field(default_factory=...)); frozen/order options.
export const oopDataclass: Scene = {
  id: 'oop-dataclass',
  padding: 0.14,
  nodes: [
    {
      id: 'o-dataclass',
      kind: 'code',
      filename: 'point.py',
      label: [
        'from dataclasses import dataclass, field',
        '',
        '# ── declare fields, get the dunders free ──',
        '@dataclass',
        'class Point:',
        '    x: int',
        '    y: int = 0               # default value',
        '    tags: list = field(default_factory=list)',
        '',
        'p = Point(3, 4)',
        'p                # Point(x=3, y=4, tags=[])',
        'p == Point(3, 4) # True  (__eq__ generated)',
        '',
        '# ── options ──',
        '@dataclass(frozen=True)      # immutable + hashable',
        'class Color:',
        '    r: int; g: int; b: int',
        '',
        '@dataclass(order=True)       # adds <, >, sorting',
        'class Ver:',
        '    major: int',
      ].join('\n'),
    },
  ],
  edges: [],
}

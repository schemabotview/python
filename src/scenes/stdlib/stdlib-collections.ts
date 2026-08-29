import type { Scene } from '../../render-engine'

// §8 collections — one editor card: Counter (tally), defaultdict (auto default), deque (fast both
// ends), namedtuple (light record).
export const stdlibCollections: Scene = {
  id: 'stdlib-collections',
  padding: 0.14,
  nodes: [
    {
      id: 's-collections',
      kind: 'code',
      filename: 'collections.py',
      label: [
        'from collections import (Counter, defaultdict,',
        '                         deque, namedtuple)',
        '',
        '# ── Counter: tally hashables ──',
        'Counter("aabbb").most_common(1)   # [("b", 3)]',
        'Counter(words) + Counter(more)    # combine tallies',
        '',
        '# ── defaultdict: auto default value ──',
        'd = defaultdict(list)',
        'd["k"].append(1)          # no "key exists?" check',
        '',
        '# ── deque: fast at BOTH ends ──',
        'q = deque([1, 2])',
        'q.appendleft(0); q.pop()  # O(1) either end',
        '',
        '# ── namedtuple: a light record ──',
        'Point = namedtuple("Point", "x y")',
        'p = Point(3, 4);  p.x     # 3',
      ].join('\n'),
    },
  ],
  edges: [],
}

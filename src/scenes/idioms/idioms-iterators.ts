import type { Scene } from '../../render-engine'

// §2 iterator-protocol — one editor card: what `for` really does (iter/next/StopIteration), the loop
// unrolled, and a hand-rolled iterable.
export const idiomsIterators: Scene = {
  id: 'idioms-iterators',
  padding: 0.14,
  nodes: [
    {
      id: 'i-iter',
      kind: 'code',
      filename: 'iterate.py',
      label: [
        '# ── what `for` really does ──',
        'nums = [10, 20, 30]',
        'it = iter(nums)     # __iter__ → an iterator',
        'next(it)            # 10   (calls __next__)',
        'next(it)            # 20',
        'next(it)            # 30',
        'next(it)            # StopIteration → for stops',
        '',
        '# ── the for-loop, unrolled ──',
        'it = iter(nums)',
        'while True:',
        '    try:',
        '        x = next(it)',
        '    except StopIteration:',
        '        break',
        '    use(x)',
        '',
        '# ── make your own iterable ──',
        'class Countdown:',
        '    def __init__(self, n): self.n = n',
        '    def __iter__(self): return self',
        '    def __next__(self):',
        '        if self.n <= 0: raise StopIteration',
        '        self.n -= 1; return self.n + 1',
      ].join('\n'),
    },
  ],
  edges: [],
}

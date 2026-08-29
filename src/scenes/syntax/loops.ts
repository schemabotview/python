import type { Scene } from '../../render-engine'

// §5 loops — one editor card: for & while, steering (break/continue/else), and iterating well
// (range/enumerate/zip).
export const loops: Scene = {
  id: 'loops',
  padding: 0.14,
  nodes: [
    {
      id: 'l-all',
      kind: 'code',
      filename: 'loops.py',
      label: [
        '# ── for & while ──',
        'for i in range(3):     # 0, 1, 2',
        '    print(i)',
        '',
        'while queue:           # until falsy',
        '    handle(queue.pop())',
        '',
        '# ── steering ──',
        'for x in xs:',
        '    if x < 0: continue # skip this one',
        '    if x > 99: break   # exit now',
        'else:                  # no break → runs',
        '    done()',
        '',
        '# ── iterate well ──',
        'for i, x in enumerate(xs):   # index + item',
        '    ...',
        'for a, b in zip(xs, ys):     # in lockstep',
        '    merge(a, b)',
      ].join('\n'),
    },
  ],
  edges: [],
}

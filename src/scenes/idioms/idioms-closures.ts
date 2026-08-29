import type { Scene } from '../../render-engine'

// §4 closures — one editor card: capture the enclosing scope, independent captures, and nonlocal to
// rebind a captured var.
export const idiomsClosures: Scene = {
  id: 'idioms-closures',
  padding: 0.14,
  nodes: [
    {
      id: 'i-closure',
      kind: 'code',
      filename: 'closure.py',
      label: [
        '# ── capture the enclosing scope ──',
        'def multiplier(factor):',
        '    def multiply(n):',
        '        return n * factor   # remembers factor',
        '    return multiply',
        '',
        'double = multiplier(2)   # double(5) → 10',
        'triple = multiplier(3)   # independent capture',
        '',
        '# ── each closure keeps its own copy ──',
        'double.__closure__[0].cell_contents   # 2',
        '',
        '# ── rebinding a captured var: nonlocal ──',
        'def counter():',
        '    n = 0',
        '    def inc():',
        '        nonlocal n      # write the captured var',
        '        n += 1',
        '        return n',
        '    return inc',
        'c = counter(); c(); c()   # 1, then 2',
      ].join('\n'),
    },
  ],
  edges: [],
}

import type { Scene } from '../../render-engine'

// §7 context-managers — one editor card: with (guaranteed setup/cleanup), several at once, a class
// with __enter__/__exit__, and the easy @contextmanager generator form.
export const idiomsContext: Scene = {
  id: 'idioms-context',
  padding: 0.14,
  nodes: [
    {
      id: 'i-ctx',
      kind: 'code',
      filename: 'context.py',
      label: [
        '# ── with: guaranteed setup / cleanup ──',
        'with open("f.txt") as f:   # __enter__ → f',
        '    data = f.read()',
        '# __exit__ runs on exit → always closed,',
        '#   even if the block raises',
        '',
        '# ── several at once · locks, transactions ──',
        'with open("a") as a, open("b") as b:',
        '    b.write(a.read())',
        'with lock:                 # acquire → release',
        '    update(shared)',
        '',
        '# ── build one: a class ──',
        'class Timer:',
        '    def __enter__(self): self.t = now(); return self',
        '    def __exit__(self, *exc): log(now() - self.t)',
        '',
        '# ── or the easy way: @contextmanager ──',
        'from contextlib import contextmanager',
        '@contextmanager',
        'def timer():',
        '    t = now()',
        '    yield              # ← the with-body runs here',
        '    log(now() - t)     # cleanup, guaranteed',
      ].join('\n'),
    },
  ],
  edges: [],
}

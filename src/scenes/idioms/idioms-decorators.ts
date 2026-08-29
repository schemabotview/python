import type { Scene } from '../../render-engine'

// §6 decorators — one editor card: a decorator wraps a call (@timer = work = timer(work)),
// functools.wraps to keep identity, and a decorator that takes arguments (@retry(3)).
export const idiomsDecorators: Scene = {
  id: 'idioms-decorators',
  padding: 0.14,
  nodes: [
    {
      id: 'i-deco',
      kind: 'code',
      filename: 'decorate.py',
      label: [
        'import functools',
        '',
        '# ── a decorator wraps a call ──',
        'def timer(fn):',
        '    @functools.wraps(fn)        # keep name/docstring',
        '    def wrapper(*a, **kw):',
        '        start = now()',
        '        result = fn(*a, **kw)   # the real call',
        '        log(now() - start)      # before / after',
        '        return result',
        '    return wrapper',
        '',
        '@timer',
        'def work(): ...        # work = timer(work)',
        '',
        '# ── a decorator that takes arguments ──',
        'def retry(times):',
        '    def deco(fn):',
        '        def wrapper(*a, **kw): ...',
        '        return wrapper',
        '    return deco',
        '',
        '@retry(3)',
        'def fetch(): ...',
      ].join('\n'),
    },
  ],
  edges: [],
}

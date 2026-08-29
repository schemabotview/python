import type { Scene } from '../../render-engine'

// §7 Scale — one editor card: a @timed decorator (closure) + a ProcessPoolExecutor to fan CPU-bound
// parsing across every core (processes, not threads — the decision guide applied). ↩ C5, C7.
export const capstoneScale: Scene = {
  id: 'capstone-scale',
  padding: 0.14,
  nodes: [
    {
      id: 'cap-parallel',
      kind: 'code',
      filename: 'parallel.py',
      label: [
        'from concurrent.futures import ProcessPoolExecutor',
        'from functools import wraps',
        'import time',
        '',
        '# ── a timing decorator (C5) ──',
        'def timed(fn):',
        '    @wraps(fn)',
        '    def wrapper(*a, **kw):',
        '        t0 = time.perf_counter()',
        '        r = fn(*a, **kw)',
        '        dt = time.perf_counter() - t0',
        '        log.info("%s took %.2fs", fn.__name__, dt)',
        '        return r',
        '    return wrapper',
        '',
        '# ── CPU-bound parsing → processes, not threads (C7) ──',
        '@timed',
        'def parse_all(files):',
        '    with ProcessPoolExecutor() as pool:   # all cores',
        '        return list(pool.map(parse_file, files))',
      ].join('\n'),
    },
  ],
  edges: [],
}

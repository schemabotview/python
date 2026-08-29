import type { Scene } from '../../render-engine'

// §9 multiprocessing — one editor card: a Pool (one worker per core, own GIL → truly parallel), and
// the cost (data is pickled across → send coarse chunks; fn & data must be picklable).
export const concurrencyMultiprocessing: Scene = {
  id: 'concurrency-multiprocessing',
  padding: 0.16,
  nodes: [
    {
      id: 'cx-procs',
      kind: 'code',
      filename: 'procs.py',
      label: [
        'from multiprocessing import Pool, cpu_count',
        '',
        '# ── a pool → one worker per core ──',
        'with Pool() as p:            # default: cpu_count()',
        '    results = p.map(crunch, chunks)',
        '',
        '# ── separate memory + own GIL → truly parallel ──',
        'cpu_count()                  # e.g. 8',
        '',
        '# ── the cost: data is PICKLED across ──',
        '#   send COARSE chunks, not tiny items',
        '#   fn & data must be picklable',
        '#   (no lambdas, open files, or db conns)',
        '#',
        '# ProcessPoolExecutor is a friendlier front-end',
      ].join('\n'),
    },
  ],
  edges: [],
}

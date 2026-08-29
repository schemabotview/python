import type { Scene } from '../../render-engine'

// §7 pools — one editor card: the low-level Thread + Lock, then the easy way (a ThreadPoolExecutor:
// map / submit + as_completed), and the killer feature — swap to ProcessPoolExecutor, same API.
export const concurrencyFutures: Scene = {
  id: 'concurrency-futures',
  padding: 0.14,
  nodes: [
    {
      id: 'cx-futures',
      kind: 'code',
      filename: 'pools.py',
      label: [
        '# ── low-level: a raw thread + a lock ──',
        'from threading import Thread, Lock',
        't = Thread(target=fetch, args=(url,))',
        't.start(); t.join()          # run, then wait',
        'with Lock():                 # guard shared state',
        '    counter += 1             # no race',
        '',
        '# ── the easy way: a pool of workers ──',
        'from concurrent.futures import (ThreadPoolExecutor,',
        '                    ProcessPoolExecutor, as_completed)',
        'with ThreadPoolExecutor(max_workers=8) as pool:',
        '    results = list(pool.map(fetch, urls))  # in order',
        '    futs = [pool.submit(fetch, u) for u in urls]',
        '    for f in as_completed(futs):  # as they finish',
        '        use(f.result())',
        '',
        '# ── killer feature: swap the executor ──',
        '# ProcessPoolExecutor → SAME API, CPU-bound,',
        '#   runs across cores (escapes the GIL)',
      ].join('\n'),
    },
  ],
  edges: [],
}

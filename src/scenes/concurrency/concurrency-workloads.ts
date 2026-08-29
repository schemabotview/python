import type { Scene } from '../../render-engine'

// §6 workloads — one editor card: classify the work (I/O-bound = waiting → threads/async · CPU-bound
// = computing → processes) and why the GIL is the deciding factor.
export const concurrencyWorkloads: Scene = {
  id: 'concurrency-workloads',
  padding: 0.16,
  nodes: [
    {
      id: 'cx-workloads',
      kind: 'code',
      filename: 'workloads.py',
      label: [
        '# ── I/O-bound: mostly WAITING ──',
        '#   network · disk · database · APIs',
        '#   the CPU sits idle while data travels',
        '#   → threads or asyncio (overlap the waits)',
        '',
        '# ── CPU-bound: mostly COMPUTING ──',
        '#   number-crunching · images · simulation',
        '#   the CPU is pegged at 100%',
        '#   → multiprocessing (real parallelism)',
        '',
        '# ── the GIL is WHY ──',
        '#   it blocks CPU parallelism in threads,',
        '#   but RELEASES during I/O waits',
        '#',
        '#   wait → threads / async   ·   compute → procs',
      ].join('\n'),
    },
  ],
  edges: [],
}

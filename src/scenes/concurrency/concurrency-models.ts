import type { Scene } from '../../render-engine'

// Course 7's mechanism scene (the pvm-internals role) — reused across §1-§5 + §10 with a different
// band focused each time. Concurrency is model-heavy and the models are SPATIAL (who shares memory,
// who holds the GIL, one loop juggling tasks), so it renders as three stacked model bands:
//   THREADS       one process · shared memory (Thread 1/2/3) · the GIL · refcount + cyclic GC (the why)
//   ASYNCIO       one thread · event loop ⇄ task A (await→yields) · task B (runs while A waits)
//   MULTIPROCESSING  Process 1/2/3 — each its OWN memory + OWN GIL → true parallelism (all cores)
export const concurrencyModels: Scene = {
  id: 'concurrency-models',
  padding: 0.12,
  nodes: [
    {
      id: 'cm-threads',
      label: 'Threads · one process · shared memory',
      pattern: 'group',
      icon: 'layers',
      children: [
        {
          id: 'cm-shared',
          label: 'shared memory · one address space',
          pattern: 'network',
          icon: 'boxes',
          cols: 3,
          children: [
            { id: 'cm-t1', label: 'Thread 1', pattern: 'network', icon: 'gitbranch', variant: 'tile' },
            { id: 'cm-t2', label: 'Thread 2', pattern: 'network', icon: 'gitbranch', variant: 'tile' },
            { id: 'cm-t3', label: 'Thread 3', pattern: 'network', icon: 'gitbranch', variant: 'tile' },
          ],
        },
        { id: 'cm-gil', label: 'the GIL', pattern: 'service', icon: 'lock', sub: 'one lock — one thread runs bytecode' },
        { id: 'cm-refcount', label: 'refcount + cyclic GC', pattern: 'external', icon: 'cpu', sub: 'why the GIL exists' },
      ],
    },
    {
      id: 'cm-async',
      label: 'Asyncio · one thread · one event loop',
      pattern: 'group',
      icon: 'repeat',
      flow: 'LR',
      children: [
        { id: 'cm-loop', label: 'event loop', pattern: 'storage', icon: 'repeat', sub: 'scheduler' },
        { id: 'cm-taskA', label: 'task A', pattern: 'network', icon: 'gitbranch', sub: 'await I/O → yields' },
        { id: 'cm-taskB', label: 'task B', pattern: 'network', icon: 'gitbranch', sub: 'runs while A waits' },
      ],
      edges: [
        { source: 'cm-loop', target: 'cm-taskA', label: 'run' },
        { source: 'cm-taskA', target: 'cm-loop', label: 'await → yield' },
        { source: 'cm-loop', target: 'cm-taskB', label: 'run next' },
      ],
    },
    {
      id: 'cm-procs',
      label: 'Multiprocessing · separate memory · true parallelism (all cores)',
      pattern: 'group',
      icon: 'server',
      cols: 3,
      children: [
        { id: 'cm-p1', label: 'Process 1', pattern: 'user', icon: 'server', sub: 'own memory · own GIL' },
        { id: 'cm-p2', label: 'Process 2', pattern: 'user', icon: 'server', sub: 'own memory · own GIL' },
        { id: 'cm-p3', label: 'Process 3', pattern: 'user', icon: 'server', sub: 'own memory · own GIL' },
      ],
    },
  ],
  edges: [],
}

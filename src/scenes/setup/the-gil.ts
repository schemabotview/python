import type { Scene } from '../../render-engine'

// §7 the-gil — the catch the refcount hides. Every object's ob_refcnt must stay exact, but threads
// share the heap: two threads bumping the same count at once corrupt it. CPython's answer is one big
// lock — the GIL — that a thread must hold to run bytecode, so only one runs the eval loop at a time.
// Threads A/B contend for the GIL (focus); the holder runs the loop. I/O- vs CPU-bound consequences
// (and choosing a concurrency tool = Course 7) ride the slide.
export const theGil: Scene = {
  id: 'the-gil',
  flow: 'TB',
  padding: 0.18,
  nodes: [
    { id: 'threadA', label: 'Thread A', pattern: 'network', icon: 'gitbranch', sub: 'wants to run bytecode' },
    { id: 'threadB', label: 'Thread B', pattern: 'network', icon: 'gitbranch', sub: 'wants to run bytecode' },
    { id: 'gil', label: 'GIL · Global Interpreter Lock', pattern: 'service', icon: 'lock', sub: 'one holder at a time' },
    {
      id: 'loop',
      label: 'The eval loop',
      pattern: 'group',
      icon: 'repeat',
      children: [
        { id: 'safe', label: 'one thread runs', pattern: 'service', icon: 'circlecheck', sub: 'refcounts stay safe', variant: 'tile' },
      ],
    },
  ],
  edges: [
    { source: 'threadA', target: 'gil', label: 'want' },
    { source: 'threadB', target: 'gil', label: 'want' },
    { source: 'gil', target: 'loop', label: 'holds' },
  ],
}

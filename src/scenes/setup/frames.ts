import type { Scene } from '../../render-engine'

// §5 frames — the loop always runs inside a FRAME, and every call gets its own. One frame's four
// parts (f_locals · its own value stack · f_code · f_lasti), and frames stack: add()'s frame sits on
// the module frame via f_back and pops when add returns. That growing/shrinking stack IS the call
// stack — one per thread — and exactly what a traceback prints. add's frame (top) is the focus.
export const frames: Scene = {
  id: 'frames',
  padding: 0.16,
  nodes: [
    {
      id: 'callstack',
      label: 'Call stack · one per thread',
      pattern: 'group',
      icon: 'layers',
      sub: 'a traceback is this stack, printed',
      flow: 'TB',
      children: [
        {
          id: 'addframe',
          label: 'add() frame',
          pattern: 'service',
          icon: 'boxes',
          sub: 'top — pops on return',
          cols: 2,
          children: [
            { id: 'flocals', label: 'f_locals', pattern: 'network', icon: 'tag', sub: 'a = 2, b = 3' },
            { id: 'fvstack', label: 'value stack', pattern: 'network', icon: 'layers', sub: 'its own push/pop scratchpad' },
            { id: 'fcode', label: 'f_code', pattern: 'network', icon: 'braces', sub: '→ add.__code__ (the plan)' },
            { id: 'flasti', label: 'f_lasti', pattern: 'network', icon: 'gauge', sub: 'program counter' },
          ],
        },
        {
          id: 'moduleframe',
          label: 'module frame',
          pattern: 'external',
          icon: 'boxes',
          sub: 'the caller',
          children: [{ id: 'mlocals', label: 'f_locals', pattern: 'external', icon: 'tag', sub: 'PI, add, Circle, result' }],
        },
      ],
      edges: [{ source: 'addframe', target: 'moduleframe', label: 'f_back' }],
    },
  ],
  edges: [],
}

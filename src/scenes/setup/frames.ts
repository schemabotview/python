import type { Scene } from '../../render-engine'

// §5 frames — the loop always runs inside a FRAME, and every call gets its own. Two regions, matching
// the slide's two headings:
//   Call stack:  the frames as a STACK — add()'s slab on top of the module's, newest first, each
//                showing its own f_locals; it pops when add returns. One per thread; a traceback
//                prints exactly this.
//   inside:      what one frame holds — f_locals · its own value stack · f_code · f_lasti.
// The frames are deliberately PLAIN CARDS, not containers: the engine sizes a container to its own
// content and centres a narrow sibling against a wider one, so a 4-field frame nested beside a
// 1-field frame can never come out as equal-width slabs — it reads as two floating boxes instead of a
// stack. As cards they are both NODE_W wide and flush-left, which is what makes the stack legible.
// The anatomy therefore hangs off the top slab by an edge rather than nesting inside it.
export const frames: Scene = {
  id: 'frames',
  padding: 0.16,
  nodes: [
    {
      id: 'callstack',
      label: 'Call stack · one per thread',
      pattern: 'group',
      icon: 'layers',
      sub: 'grows up on call · pops on return — a traceback is this stack, printed',
      children: [
        { id: 'addframe', label: 'add() frame', pattern: 'service', icon: 'boxes', sub: 'top — f_locals: a = 2, b = 3' },
        { id: 'moduleframe', label: 'module frame', pattern: 'external', icon: 'boxes', sub: 'caller — f_locals: PI, add, Circle, result' },
      ],
    },
    {
      id: 'inside',
      label: "inside add()'s frame",
      pattern: 'service',
      icon: 'boxes',
      cols: 2,
      children: [
        { id: 'flocals', label: 'f_locals', pattern: 'network', icon: 'tag', sub: 'a = 2, b = 3' },
        { id: 'fvstack', label: 'value stack', pattern: 'network', icon: 'layers', sub: 'its own push/pop scratchpad' },
        { id: 'fcode', label: 'f_code', pattern: 'network', icon: 'braces', sub: '→ add.__code__ (the plan)' },
        { id: 'flasti', label: 'f_lasti', pattern: 'network', icon: 'gauge', sub: 'program counter' },
      ],
    },
  ],
  edges: [{ source: 'addframe', target: 'inside', label: 'what a frame holds' }],
}

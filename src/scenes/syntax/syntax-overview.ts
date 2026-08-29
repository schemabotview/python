import type { Scene } from '../../render-engine'

// Course 2's overview board — the §1 opener + §8 "you are here" bookend. The six core constructs of
// Python syntax as peer cards, grouped into the three couplets the §1 slide names: write data ·
// control flow · organize a program. Three stacked labelled bands (2 cards each), no edges (peers,
// not a flow). The whole board is the "here's the toolkit" map; each construct gets its own code
// scene next.
export const syntaxOverview: Scene = {
  id: 'syntax-overview',
  padding: 0.16,
  nodes: [
    {
      id: 'write-data',
      label: 'Write data',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'so-vars', label: 'Variables', pattern: 'network', icon: 'tag', sub: 'names → objects' },
        { id: 'so-expr', label: 'Expressions', pattern: 'service', icon: 'cpu', sub: 'operators → values' },
      ],
    },
    {
      id: 'control-flow',
      label: 'Control flow',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'so-cond', label: 'Conditionals', pattern: 'user', icon: 'gitbranch', sub: 'if / elif / else' },
        { id: 'so-loop', label: 'Loops', pattern: 'storage', icon: 'repeat', sub: 'for / while' },
      ],
    },
    {
      id: 'organize',
      label: 'Organize a program',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'so-exc', label: 'Exceptions', pattern: 'external', icon: 'shieldcheck', sub: 'try / except' },
        { id: 'so-func', label: 'Functions', pattern: 'service', icon: 'boxes', sub: 'def / return' },
      ],
    },
  ],
  edges: [],
}

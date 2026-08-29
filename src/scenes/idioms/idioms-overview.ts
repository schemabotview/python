import type { Scene } from '../../render-engine'

// Course 5's overview board — the §1 opener + §10 "you are here" bookend. The eight idioms as peer
// cards, grouped into the four ideas the studio rows imply: lazy iteration · functions as values ·
// wrapping & resources · the lazy toolboxes. Four stacked labelled bands (2 cards each), no edges (a
// catalog, not a flow). Each idiom gets its own code scene next.
export const idiomsOverview: Scene = {
  id: 'idioms-overview',
  padding: 0.14,
  nodes: [
    {
      id: 'lazy-iteration',
      label: 'Lazy iteration',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'iov-iter', label: 'iterators', pattern: 'network', icon: 'repeat', sub: 'the for protocol' },
        { id: 'iov-gen', label: 'generators', pattern: 'storage', icon: 'braces', sub: 'yield / lazy' },
      ],
    },
    {
      id: 'functions-as-values',
      label: 'Functions as values',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'iov-closure', label: 'closures', pattern: 'user', icon: 'lock', sub: 'capture scope' },
        { id: 'iov-lambda', label: 'functional', pattern: 'service', icon: 'gitbranch', sub: 'lambda / map / filter' },
      ],
    },
    {
      id: 'wrapping',
      label: 'Wrapping & resources',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'iov-deco', label: 'decorators', pattern: 'service', icon: 'layers', sub: 'wrap a call' },
        { id: 'iov-ctx', label: 'context managers', pattern: 'storage', icon: 'dooropen', sub: 'with — setup/cleanup' },
      ],
    },
    {
      id: 'toolboxes',
      label: 'The lazy toolboxes',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'iov-functools', label: 'functools', pattern: 'network', icon: 'wrench', sub: 'tools for functions' },
        { id: 'iov-itertools', label: 'itertools', pattern: 'storage', icon: 'boxes', sub: 'lazy iterators' },
      ],
    },
  ],
  edges: [],
}

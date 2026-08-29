import type { Scene } from '../../render-engine'

// Course 4's overview board — the §1 opener + §10 "you are here" bookend. The eight core-OOP features
// as peer cards, grouped into the four themes the studio rows imply: the foundation · relating types ·
// feel native · the disciplines. Four stacked labelled bands (2 cards each), no edges (a catalog, not
// a flow). Each feature gets its own code scene next.
export const oopOverview: Scene = {
  id: 'oop-overview',
  padding: 0.14,
  nodes: [
    {
      id: 'foundation',
      label: 'The foundation',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'oov-class', label: 'class', pattern: 'user', icon: 'boxes', sub: 'the blueprint' },
        { id: 'oov-object', label: 'object', pattern: 'storage', icon: 'tag', sub: 'an instance' },
      ],
    },
    {
      id: 'relating',
      label: 'Relating types',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'oov-inherit', label: 'inheritance', pattern: 'network', icon: 'gitbranch', sub: 'reuse & specialize' },
        { id: 'oov-poly', label: 'polymorphism', pattern: 'service', icon: 'network', sub: 'one interface' },
      ],
    },
    {
      id: 'native',
      label: 'Feel native',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'oov-dunder', label: 'dunders', pattern: 'service', icon: 'cpu', sub: 'the data model' },
        { id: 'oov-dataclass', label: '@dataclass', pattern: 'storage', icon: 'wrench', sub: 'generated boilerplate' },
      ],
    },
    {
      id: 'disciplines',
      label: 'The disciplines',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'oov-encap', label: 'encapsulation', pattern: 'network', icon: 'lock', sub: 'control access' },
        { id: 'oov-abc', label: 'abstraction', pattern: 'user', icon: 'braces', sub: 'define the interface' },
      ],
    },
  ],
  edges: [],
}

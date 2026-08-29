import type { Scene } from '../../render-engine'

// Course 3's overview board — the §1 opener + §8 "you are here" bookend. The six built-in containers
// as peer cards, grouped into the three kinds the studio rows imply: sequences you index · hash-based
// · text & the one-liner that builds them all. Three stacked labelled bands (2 cards each), no edges
// (peers, not a flow). Each container gets its own code scene next.
export const dataOverview: Scene = {
  id: 'data-overview',
  padding: 0.16,
  nodes: [
    {
      id: 'sequences',
      label: 'Sequences · you index',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'dov-list', label: 'list', pattern: 'network', icon: 'layers', sub: 'ordered · mutable' },
        { id: 'dov-tuple', label: 'tuple', pattern: 'service', icon: 'boxes', sub: 'ordered · immutable' },
      ],
    },
    {
      id: 'hash-based',
      label: 'Hash-based',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'dov-dict', label: 'dict', pattern: 'user', icon: 'key', sub: 'key → value' },
        { id: 'dov-set', label: 'set', pattern: 'storage', icon: 'network', sub: 'unique · unordered' },
      ],
    },
    {
      id: 'text-builder',
      label: 'Text & the builder',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'dov-str', label: 'str', pattern: 'service', icon: 'scroll', sub: 'text · immutable' },
        { id: 'dov-comp', label: 'comprehensions', pattern: 'network', icon: 'braces', sub: 'build in one line' },
      ],
    },
  ],
  edges: [],
}

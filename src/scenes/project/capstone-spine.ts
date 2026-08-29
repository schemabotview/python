import type { Scene } from '../../render-engine'

// Course 8's overview/finale board — the §1 brief + §11 "you did it". The build-flow as THREE PHASE
// COLUMNS: Scaffold (set up) · Pipeline (the real data flow) · Deliver (ship it). A genuine SEQUENCE,
// so it has edges — the chain structure→model→read→parse→aggregate→scale→interface→test→ship folds
// left-to-right across the columns (scene flow LR; each column flows TB internally). Each step's sub
// notes the earlier course it reuses. Framed whole (no focus) at both bookends.
export const capstoneSpine: Scene = {
  id: 'capstone-spine',
  flow: 'LR',
  padding: 0.1,
  nodes: [
    {
      id: 'cap-scaffold',
      label: 'Scaffold · set up',
      pattern: 'group',
      icon: 'layers',
      children: [
        { id: 'cap-s-structure', label: 'Structure', pattern: 'network', icon: 'boxes', sub: 'layout · pyproject (C1)' },
        { id: 'cap-s-model', label: 'Model', pattern: 'user', icon: 'tag', sub: 'dataclass · Enum (C4)' },
      ],
      edges: [{ source: 'cap-s-structure', target: 'cap-s-model' }],
    },
    {
      id: 'cap-pipeline',
      label: 'Pipeline · read → tally',
      pattern: 'group',
      icon: 'repeat',
      children: [
        { id: 'cap-s-read', label: 'Read', pattern: 'storage', icon: 'filecode', sub: 'glob + stream lines (C5, C6)' },
        { id: 'cap-s-parse', label: 'Parse', pattern: 'network', icon: 'scroll', sub: 'regex → Entry (C6)' },
        { id: 'cap-s-aggregate', label: 'Aggregate', pattern: 'service', icon: 'layers', sub: 'Counter tally (C3)' },
        { id: 'cap-s-scale', label: 'Scale', pattern: 'user', icon: 'server', sub: 'ProcessPool + @timed (C7)' },
      ],
      edges: [
        { source: 'cap-s-read', target: 'cap-s-parse' },
        { source: 'cap-s-parse', target: 'cap-s-aggregate' },
        { source: 'cap-s-aggregate', target: 'cap-s-scale' },
      ],
    },
    {
      id: 'cap-deliver',
      label: 'Deliver · ship it',
      pattern: 'group',
      icon: 'cloud',
      children: [
        { id: 'cap-s-interface', label: 'Interface', pattern: 'network', icon: 'terminal', sub: 'argparse CLI (C6)' },
        { id: 'cap-s-test', label: 'Test', pattern: 'storage', icon: 'shieldcheck', sub: 'pytest (new)' },
        { id: 'cap-s-ship', label: 'Ship', pattern: 'service', icon: 'cloud', sub: 'pip install · PyPI (C1)' },
      ],
      edges: [
        { source: 'cap-s-interface', target: 'cap-s-test' },
        { source: 'cap-s-test', target: 'cap-s-ship' },
      ],
    },
  ],
  // cross-column links fold the chain: scaffold → pipeline → deliver
  edges: [
    { source: 'cap-s-model', target: 'cap-s-read' },
    { source: 'cap-s-scale', target: 'cap-s-interface' },
  ],
}

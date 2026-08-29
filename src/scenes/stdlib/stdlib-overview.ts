import type { Scene } from '../../render-engine'

// Course 6's overview board — the §1 opener + §10 "you are here" bookend. The eight stdlib areas as
// peer cards, grouped into the four ideas the studio rows imply: files & paths · data formats · dates
// & text · containers & diagnostics. Four stacked labelled bands (2 cards each), no edges (peers).
// Each area gets its own code scene next.
export const stdlibOverview: Scene = {
  id: 'stdlib-overview',
  padding: 0.14,
  nodes: [
    {
      id: 'files-paths',
      label: 'Files & paths',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'sov-files', label: 'files', pattern: 'network', icon: 'filecode', sub: 'open / with / modes' },
        { id: 'sov-path', label: 'pathlib', pattern: 'storage', icon: 'dooropen', sub: 'paths as objects' },
      ],
    },
    {
      id: 'data-formats',
      label: 'Data formats',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'sov-json', label: 'json', pattern: 'user', icon: 'braces', sub: 'data interchange' },
        { id: 'sov-csv', label: 'csv', pattern: 'service', icon: 'database', sub: 'tabular rows' },
      ],
    },
    {
      id: 'dates-text',
      label: 'Dates & text',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'sov-datetime', label: 'datetime', pattern: 'service', icon: 'clock', sub: 'dates & times' },
        { id: 'sov-re', label: 're', pattern: 'storage', icon: 'scroll', sub: 'text patterns' },
      ],
    },
    {
      id: 'containers-diagnostics',
      label: 'Containers & diagnostics',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'sov-collections', label: 'collections', pattern: 'network', icon: 'boxes', sub: 'better containers' },
        { id: 'sov-logging', label: 'logging', pattern: 'storage', icon: 'bell', sub: 'diagnostics' },
      ],
    },
  ],
  edges: [],
}

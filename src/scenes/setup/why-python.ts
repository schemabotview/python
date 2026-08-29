import type { Scene } from '../../render-engine'

// §1 why-exists — WHY the language exists: the "missing middle". Between shell scripts (quick but
// fragile) and C (powerful but fiddly), Python is the readable-and-capable middle. Drawn as two
// stacked, edgeless boards: the positioning trio (Python centred + focused) over a fan of the four
// places you'll use it. No flow — it's a framing, not a pipeline. The history one-liner (Guido · 1991
// · ABC heir · "read > written" · batteries) rides Python's sub + the slide.
export const whyPython: Scene = {
  id: 'why-python',
  padding: 0.16,
  nodes: [
    {
      id: 'middle',
      label: 'The missing middle',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'shell', label: 'Shell scripts', pattern: 'external', icon: 'terminal', sub: 'quick, but fragile' },
        { id: 'py', label: 'Python', pattern: 'service', icon: 'code', sub: 'readable + capable — since 1991' },
        { id: 'c', label: 'C', pattern: 'external', icon: 'cpu', sub: 'powerful, but slow & fiddly' },
      ],
    },
    {
      id: 'uses',
      label: "Where you'll use it",
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'automation', label: 'Automation', pattern: 'network', icon: 'wrench', sub: 'scripting & glue', variant: 'tile' },
        { id: 'web', label: 'Web backends', pattern: 'network', icon: 'globe', sub: 'Django · Flask', variant: 'tile' },
        { id: 'dataml', label: 'Data & ML', pattern: 'storage', icon: 'database', sub: 'pandas · PyTorch', variant: 'tile' },
        { id: 'teaching', label: 'Prototyping', pattern: 'service', icon: 'layers', sub: '& teaching', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}

import type { Scene } from '../../render-engine'

// §8 packages — the other half of setup. You rarely start from scratch: pip fetches from PyPI into
// site-packages, and a venv gives each project its OWN isolated copy so versions never collide. Top:
// the install chain (pip ▸ PyPI ▸ venv/site-packages), ending on the focus — the thing that fixes the
// collision. Bottom: the venv command card. Project-isolation detail (A on 2.28, B on 2.31) rides the
// slide. The chain deliberately stops at site-packages: the IMPORT SYSTEM is §9's subject ("the import
// system, at the bottom of this diagram") and §8's narration never mentions it, so a fourth step here
// borrows the next section's content — and costs real size, since each flow layer adds a card plus a
// 90px arrow gap and this scene is height-bound.
export const packages: Scene = {
  id: 'packages',
  padding: 0.16,
  nodes: [
    {
      id: 'chain',
      label: 'Install & resolve',
      pattern: 'group',
      icon: 'layers',
      flow: 'TB',
      children: [
        { id: 'pip', label: 'pip', pattern: 'service', icon: 'wrench', sub: 'the installer' },
        { id: 'pypi', label: 'PyPI', pattern: 'external', icon: 'cloud', sub: '350k+ packages' },
        { id: 'site', label: 'venv / site-packages', pattern: 'storage', icon: 'database', sub: 'isolated per project' },
      ],
      edges: [
        { source: 'pip', target: 'pypi', label: 'fetch' },
        { source: 'pypi', target: 'site', label: 'into' },
      ],
    },
    {
      id: 'venv',
      kind: 'code',
      filename: 'bash',
      hug: true, // one element in a diagram, not the whole scene — see codeMetrics CODE_MIN_COLS
      label: ['$ python3 -m venv .venv', '$ source .venv/bin/activate', '$ pip install requests', '$ pip freeze > requirements.txt   # lock the set'].join('\n'),
    },
  ],
  edges: [],
}

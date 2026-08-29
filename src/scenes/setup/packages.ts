import type { Scene } from '../../render-engine'

// §8 packages — the other half of setup. You rarely start from scratch: pip fetches from PyPI into
// site-packages, and a venv gives each project its OWN isolated copy so versions never collide. Top
// row: the install chain (pip ▸ PyPI ▸ venv/site-packages ▸ import system). Bottom: the venv command
// card. The venv/site-packages node is the focus — it's what fixes the collision. Project-isolation
// detail (A on 2.28, B on 2.31) rides the slide.
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
        { id: 'import', label: 'import system', pattern: 'network', icon: 'network', sub: 'resolves names' },
      ],
      edges: [
        { source: 'pip', target: 'pypi', label: 'fetch' },
        { source: 'pypi', target: 'site', label: 'into' },
        { source: 'site', target: 'import' },
      ],
    },
    {
      id: 'venv',
      kind: 'code',
      filename: 'bash',
      label: ['$ python3 -m venv .venv', '$ source .venv/bin/activate', '$ pip install requests', '$ pip freeze > requirements.txt   # lock the set'].join('\n'),
    },
  ],
  edges: [],
}

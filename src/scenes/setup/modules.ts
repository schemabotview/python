import type { Scene } from '../../render-engine'

// §9 modules — organize your OWN code with the same subsystem libraries use. Every .py file is a
// module; import searches sys.path in a fixed order — your code → stdlib → venv/site-packages — and
// the first match wins (so never name a file random.py). Top: the resolution ladder (edges labelled
// "not found →"). Bottom: the import-forms card. Your code (searched first) is the focus.
export const modules: Scene = {
  id: 'modules',
  padding: 0.16,
  nodes: [
    {
      id: 'search',
      label: 'import searches sys.path · first match wins',
      pattern: 'group',
      icon: 'network',
      flow: 'TB',
      children: [
        { id: 'yourcode', label: '① your code', pattern: 'network', icon: 'filecode', sub: './helpers.py' },
        { id: 'stdlib', label: '② standard library', pattern: 'service', icon: 'layers', sub: 'json, pathlib, …' },
        { id: 'sitepkgs', label: '③ venv / site-packages', pattern: 'storage', icon: 'database', sub: 'pip-installed' },
      ],
      edges: [
        { source: 'yourcode', target: 'stdlib', label: 'not found →' },
        { source: 'stdlib', target: 'sitepkgs', label: 'not found →' },
      ],
    },
    {
      id: 'forms',
      kind: 'code',
      filename: 'imports.py',
      label: ['import json                 # whole module', 'import numpy as np          # an alias', 'from pathlib import Path    # one name', '', '# avoid:  from os import *  # dumps every name', '', 'if __name__ == "__main__":  # only when run directly', '    main()'].join('\n'),
    },
  ],
  edges: [],
}

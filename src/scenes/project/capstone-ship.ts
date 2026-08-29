import type { Scene } from '../../render-engine'

// §10 Ship — one editor card (a shell session): venv-isolate → editable install (wires the command) →
// pytest → run your own tool; then build a wheel + twine upload to PyPI. ↩ C1.
export const capstoneShip: Scene = {
  id: 'capstone-ship',
  padding: 0.16,
  nodes: [
    {
      id: 'cap-ship',
      kind: 'code',
      filename: 'ship.sh',
      label: [
        '# ── isolate · install · verify · run ──',
        'python -m venv .venv',
        'source .venv/bin/activate     # isolate (C1)',
        '',
        'pip install -e .              # editable install',
        '#   reads pyproject → wires up the `logtally` cmd',
        '',
        'pytest                        # all green?',
        '',
        'logtally ./logs               # run YOUR tool  🚀',
        'logtally ./logs -n 10         # top 10 paths',
        '',
        '# ── publish to the world (one more step) ──',
        'python -m build               # make a wheel',
        'twine upload dist/*           # → PyPI',
      ].join('\n'),
    },
  ],
  edges: [],
}

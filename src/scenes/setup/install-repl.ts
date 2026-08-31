import type { Scene } from '../../render-engine'

// §2 install-repl — get CPython on your machine and talk to it live. A single terminal code card,
// read top-down: install it (one line per platform), verify the version (CPython is the reference
// interpreter — "install Python" means this), then a REPL session where each line runs instantly.
// The Python-2-vs-3 note and the .py-file handoff live in the slide/narration.
export const installRepl: Scene = {
  id: 'install-repl',
  padding: 0.14,
  nodes: [
    {
      id: 'repl',
      kind: 'code',
      filename: 'terminal',
      label: [
        '# ── install (pick one) ──',
        '$ brew install python@3.12            # macOS',
        '$ sudo apt install python3            # Debian/Ubuntu',
        '$ winget install Python.Python.3.12   # Windows',
        '# ...or the installer from python.org',
        '',
        '# ── verify ──',
        '$ python3 --version',
        'Python 3.12.4',
        '',
        '# ── the REPL ──',
        '$ python3                             # open the REPL',
        '>>> 2 + 2',
        '4',
        '>>> "py" * 3',
        "'pypypy'",
        '>>> exit()                            # back to the shell',
      ].join('\n'),
    },
  ],
  edges: [],
}

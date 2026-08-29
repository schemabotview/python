import type { Scene } from '../../render-engine'

// §2 install-repl — get CPython on your machine and talk to it live. A single terminal code card: the
// version check (CPython is the reference interpreter — "install Python" means this), then a REPL
// session where each line runs instantly. The Python-2-vs-3 note and the .py-file handoff live in the
// slide/narration.
export const installRepl: Scene = {
  id: 'install-repl',
  padding: 0.2,
  nodes: [
    {
      id: 'repl',
      kind: 'code',
      filename: 'terminal',
      label: [
        '$ python3 --version',
        'Python 3.12.4',
        '',
        '$ python3                 # open the REPL',
        '>>> 2 + 2',
        '4',
        '>>> "py" * 3',
        "'pypypy'",
        '>>> exit()               # back to the shell',
      ].join('\n'),
    },
  ],
  edges: [],
}

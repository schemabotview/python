import type { Scene } from '../../render-engine'

// §6 exceptions — one editor card: try / except (with `as e`), else / finally, and raising your own.
export const exceptions: Scene = {
  id: 'exceptions',
  padding: 0.14,
  nodes: [
    {
      id: 'x-all',
      kind: 'code',
      filename: 'exceptions.py',
      label: [
        '# ── try / except ──',
        'try:',
        '    data = load(path)',
        'except FileNotFoundError:',
        '    data = {}',
        'except ValueError as e:    # bind the error',
        '    log(e)',
        '',
        '# ── else / finally ──',
        'try:',
        '    n = int(s)',
        'except ValueError:',
        '    n = 0',
        'else:                      # ran, no error',
        '    use(n)',
        'finally:                   # ALWAYS runs',
        '    cleanup()',
        '',
        '# ── raise your own ──',
        'if bad:',
        '    raise ValueError("bad input")',
      ].join('\n'),
    },
  ],
  edges: [],
}

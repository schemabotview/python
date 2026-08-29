import type { Scene } from '../../render-engine'

// §4 conditionals — one editor card: if / elif / else, truthy conditions, the ternary, and match/case.
export const conditionals: Scene = {
  id: 'conditionals',
  padding: 0.14,
  nodes: [
    {
      id: 'c-all',
      kind: 'code',
      filename: 'conditionals.py',
      label: [
        '# ── if / elif / else ──',
        'if score >= 90:',
        '    grade = "A"',
        'elif score >= 60:      # first truthy wins',
        '    grade = "pass"',
        'else:',
        '    grade = "fail"',
        '',
        '# ── truthy conditions ──',
        'if items:              # non-empty → True',
        '    process(items)',
        '',
        '# ── ternary (one-line choice) ──',
        'y = a if ok else b',
        '',
        '# ── match / case (3.10+) ──',
        'match cmd:',
        '    case "quit": stop()',
        '    case _:      run(cmd)',
      ].join('\n'),
    },
  ],
  edges: [],
}

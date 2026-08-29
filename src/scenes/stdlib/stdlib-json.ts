import type { Scene } from '../../render-engine'

// §4 json — one editor card: strings (dumps/loads), files (dump/load), pretty & options, the mapping.
export const stdlibJson: Scene = {
  id: 'stdlib-json',
  padding: 0.14,
  nodes: [
    {
      id: 's-json',
      kind: 'code',
      filename: 'load_json.py',
      label: [
        'import json',
        '',
        '# ── strings (the "s" = string) ──',
        'json.dumps({"id": 1})       # dict → JSON text',
        'json.loads(\'{"id": 1}\')     # JSON text → dict',
        '',
        '# ── files ──',
        'json.dump(obj, f)           # write to a file',
        'json.load(f)                # read from a file',
        '',
        '# ── pretty & options ──',
        'json.dumps(obj, indent=2)   # human-readable',
        'json.dumps(obj, sort_keys=True)',
        'json.dumps(obj, default=str)   # dates etc.',
        '',
        '# ── the mapping ──',
        '# dict↔object  list↔array  None↔null',
        '# keys always come back as strings',
      ].join('\n'),
    },
  ],
  edges: [],
}

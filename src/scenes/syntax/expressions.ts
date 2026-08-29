import type { Scene } from '../../render-engine'

// §3 expressions — one editor card: every operator family in one file (arithmetic · comparison &
// logical · identity/membership/bitwise · precedence · truthiness · walrus), grouped by headers.
export const expressions: Scene = {
  id: 'expressions',
  padding: 0.14,
  nodes: [
    {
      id: 'e-all',
      kind: 'code',
      filename: 'operators.py',
      label: [
        '# ── arithmetic ──',
        'total = price * qty   # + - * /',
        '10 // 3               # floor → 3',
        '2 ** 8                # power → 256',
        'n % 2                 # remainder',
        '',
        '# ── comparison & logical ──',
        '0 <= n <= 100         # < <= > >= == !=',
        'ready and not busy    # and or not',
        '',
        '# ── identity · membership · bitwise ──',
        'x is None             # is / is not',
        '"@" in email          # in / not in',
        'flags & MASK          # & | ^ ~ << >>',
        '',
        '# ── precedence · truthiness · walrus ──',
        '2 + 3 * 4             # → 14  (* first)',
        'bool(""), bool([])    # falsy: 0 "" [] None',
        'if (n := len(data)):  # walrus: assign in expr',
      ].join('\n'),
    },
  ],
  edges: [],
}

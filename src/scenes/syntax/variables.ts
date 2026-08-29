import type { Scene } from '../../render-engine'

// §2 variables — one editor card: the data types, binding & dynamic typing, convert & inspect, and
// the handy forms, grouped by comment headers. Short lines keep the auto-fit font large at 4K.
export const variables: Scene = {
  id: 'variables',
  padding: 0.14,
  nodes: [
    {
      id: 'v-all',
      kind: 'code',
      filename: 'variables.py',
      label: [
        '# ── data types ──',
        'x = 5           # int  (10**100 never overflows)',
        'pi = 3.14       # float',
        'name = "Sam"    # str',
        'ok = True       # bool (a kind of int)',
        'data = None     # None: "no value yet"',
        '',
        '# ── binding & dynamic typing ──',
        'x = 2 + 3       # eval RHS → bind the name x',
        'y = x           # both point at the SAME object',
        'x = "five"      # rebind: names have no type',
        'count: int = 0  # optional type hint',
        '',
        '# ── convert & inspect ──',
        'int("42"), str(42), float("3"), bool(0)',
        'type(x), isinstance(x, int)',
        '',
        '# ── handy forms ──',
        'a, b = 1, 2     # multiple',
        'a, b = b, a     # swap, no temp',
        'first, *rest = [1, 2, 3]   # unpack',
        'count += 1      # augmented (+= -= *= …)',
        'MAX = 100       # CONST by convention',
      ].join('\n'),
    },
  ],
  edges: [],
}

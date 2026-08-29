import type { Scene } from '../../render-engine'

// §4 dict — one editor card: create & access, update & remove, iterate, build.
export const dataDict: Scene = {
  id: 'data-dict',
  padding: 0.14,
  nodes: [
    {
      id: 'd-dict',
      kind: 'code',
      filename: 'dict.py',
      label: [
        '# ── create & access ──',
        'user = {"id": 1, "name": "Sam"}',
        'user["name"]          # "Sam"',
        'user.get("age", 0)    # default, no KeyError',
        '"id" in user          # True (checks keys)',
        'len(user)             # 2',
        '',
        '# ── update & remove ──',
        'user["age"] = 30      # add / update',
        'user.update(city="NYC")    # merge in',
        'user.setdefault("age", 0)  # only if absent',
        'del user["id"]',
        'user.pop("name")      # remove & return',
        '',
        '# ── iterate ──',
        'for k, v in user.items():',
        '    print(k, v)',
        'user.keys()           # view of keys',
        'user.values()         # view of values',
        '',
        '# ── build ──',
        '{**a, **b}            # merge two dicts',
        'dict(zip(keys, vals)) # from paired lists',
      ].join('\n'),
    },
  ],
  edges: [],
}

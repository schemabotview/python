import type { Scene } from '../../render-engine'

// §3 the-object — one editor card: construct (calls __init__), use through the dot, each object owns
// its state, and dynamic attributes.
export const oopObject: Scene = {
  id: 'oop-object',
  padding: 0.14,
  nodes: [
    {
      id: 'o-object',
      kind: 'code',
      filename: 'use.py',
      label: [
        '# ── construct (calls __init__) ──',
        'acct = Account("Sam")',
        'bob = Account("Bob")     # a separate object',
        '',
        '# ── use it through the dot ──',
        'acct.deposit(50)         # method call',
        'acct.balance             # 50',
        'acct.name                # "Sam"',
        '',
        '# ── each object owns its state ──',
        'bob.balance              # 0  (independent)',
        'acct is bob              # False (distinct)',
        'isinstance(acct, Account)   # True',
        '',
        '# ── attributes are dynamic ──',
        'acct.note = "vip"        # add one on the fly',
        'vars(acct)               # {"name":.., "balance":..}',
        'Account.bank             # "GraphL" (shared)',
      ].join('\n'),
    },
  ],
  edges: [],
}

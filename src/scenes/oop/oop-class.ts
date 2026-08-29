import type { Scene } from '../../render-engine'

// §2 the-class — one editor card: define a blueprint (class attr, __init__, instance attrs), methods
// that act on self (and guard rules), and __repr__.
export const oopClass: Scene = {
  id: 'oop-class',
  padding: 0.14,
  nodes: [
    {
      id: 'o-class',
      kind: 'code',
      filename: 'account.py',
      label: [
        '# ── define a blueprint ──',
        'class Account:',
        '    bank = "GraphL"          # class attr (shared)',
        '',
        '    def __init__(self, name):    # constructor',
        '        self.name = name         # instance attr',
        '        self.balance = 0',
        '',
        '    # ── methods act on self ──',
        '    def deposit(self, amt):',
        '        self.balance += amt',
        '        return self.balance',
        '',
        '    def withdraw(self, amt):',
        '        if amt > self.balance:',
        '            raise ValueError("insufficient")',
        '        self.balance -= amt',
        '',
        '    def __repr__(self):          # how it prints',
        '        return f"Account({self.name})"',
      ].join('\n'),
    },
  ],
  edges: [],
}

import type { Scene } from '../../render-engine'

// §4 inheritance — one editor card: subclass (is-a), super() to extend, override, and the MRO.
export const oopInheritance: Scene = {
  id: 'oop-inheritance',
  padding: 0.14,
  nodes: [
    {
      id: 'o-inherit',
      kind: 'code',
      filename: 'savings.py',
      label: [
        '# ── subclass: a Savings IS-A Account ──',
        'class Savings(Account):',
        '    def __init__(self, name, rate):',
        '        super().__init__(name)   # reuse base setup',
        '        self.rate = rate',
        '',
        '    def add_interest(self):      # a new method',
        '        self.balance *= 1 + self.rate',
        '',
        '    def __repr__(self):          # override',
        '        return f"Savings({self.name})"',
        '',
        '# ── use inherited + own ──',
        's = Savings("Sam", 0.05)',
        's.deposit(100)           # inherited from Account',
        's.add_interest()         # balance → 105.0',
        '',
        '# ── the MRO: lookup walks up ──',
        'Savings.__mro__   # Savings → Account → object',
        'issubclass(Savings, Account)   # True',
      ].join('\n'),
    },
  ],
  edges: [],
}

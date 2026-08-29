import type { Scene } from '../../render-engine'

// §5 polymorphism — one editor card: same call / per-type behavior, duck typing (no base class
// needed), and polymorphic operators.
export const oopPolymorphism: Scene = {
  id: 'oop-polymorphism',
  padding: 0.14,
  nodes: [
    {
      id: 'o-poly',
      kind: 'code',
      filename: 'poly.py',
      label: [
        '# ── same call, per-type behavior ──',
        'accounts = [checking, savings]   # mixed types',
        'for a in accounts:',
        '    print(a.summary())',
        '# Checking → "$100"',
        '# Savings  → "$100 +interest"',
        '# the loop never checks types — each runs its own',
        '',
        '# ── duck typing: no base class needed ──',
        'class Wallet:',
        '    def summary(self): return "cash"',
        'accounts.append(Wallet())   # fits! it has .summary()',
        '',
        '# ── operators are polymorphic too ──',
        'len("hi"); len([1, 2])      # __len__ on each type',
        'total = sum(a.balance for a in accounts)',
      ].join('\n'),
    },
  ],
  edges: [],
}

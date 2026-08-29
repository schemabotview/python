import type { Scene } from '../../render-engine'

// §6 data-model — one editor card: the dunder hooks Python's syntax calls on your object (__repr__,
// __eq__/__lt__, __add__/__len__), so print/==/</sorting/+ "just work".
export const oopDunders: Scene = {
  id: 'oop-dunders',
  padding: 0.14,
  nodes: [
    {
      id: 'o-dunder',
      kind: 'code',
      filename: 'money.py',
      label: [
        'class Money:',
        '    def __init__(self, amt):',
        '        self.amt = amt',
        '',
        '    # ── printing ──',
        '    def __repr__(self):',
        '        return f"${self.amt}"',
        '',
        '    # ── comparison (==, <, sorting) ──',
        '    def __eq__(self, o):',
        '        return self.amt == o.amt',
        '    def __lt__(self, o):',
        '        return self.amt < o.amt',
        '',
        '    # ── arithmetic & len ──',
        '    def __add__(self, o):',
        '        return Money(self.amt + o.amt)',
        '    def __len__(self): return self.amt',
        '',
        '# print(m) · m == n · m + n · sorted(wallet)  "just work"',
      ].join('\n'),
    },
  ],
  edges: [],
}

import type { Scene } from '../../render-engine'

// §8 encapsulation — one editor card: _internal / __name-mangled by convention, and @property /
// @<prop>.setter to read like an attribute while validating writes.
export const oopEncapsulation: Scene = {
  id: 'oop-encapsulation',
  padding: 0.14,
  nodes: [
    {
      id: 'o-encap',
      kind: 'code',
      filename: 'encapsulate.py',
      label: [
        'class Account:',
        '    def __init__(self):',
        '        self._balance = 0        # "internal" (convention)',
        '        self.__pin = 0           # name-mangled (private-ish)',
        '',
        '    # ── @property: read like an attribute ──',
        '    @property',
        '    def balance(self):',
        '        return self._balance',
        '',
        '    # ── @<prop>.setter: validate writes ──',
        '    @balance.setter',
        '    def balance(self, v):',
        '        if v < 0:',
        '            raise ValueError("negative")',
        '        self._balance = v',
        '',
        'a = Account()',
        'a.balance = 50      # runs the setter (validates)',
        'a.balance           # 50  (runs the getter)',
      ].join('\n'),
    },
  ],
  edges: [],
}

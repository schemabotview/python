import type { Scene } from '../../render-engine'

// §9 abstraction — one editor card: an ABC as a contract (@abstractmethod with no body), a shared
// concrete method that calls the abstract one, and the can't-instantiate guarantee.
export const oopAbstraction: Scene = {
  id: 'oop-abstraction',
  padding: 0.14,
  nodes: [
    {
      id: 'o-abc',
      kind: 'code',
      filename: 'abstract.py',
      label: [
        'from abc import ABC, abstractmethod',
        '',
        '# ── a contract: subclasses MUST implement ──',
        'class Account(ABC):',
        '    @abstractmethod',
        '    def interest(self) -> float: ...',
        '',
        '    def describe(self):          # concrete: shared',
        '        return f"rate {self.interest()}"',
        '',
        "# ── can't instantiate the abstract base ──",
        'Account()          # TypeError: abstract',
        '',
        '# ── a concrete subclass supplies the method ──',
        'class Savings(Account):',
        '    def interest(self): return 0.05',
        '',
        'Savings().interest()   # 0.05  (ok)',
        '# forget interest()? → TypeError at construction',
      ].join('\n'),
    },
  ],
  edges: [],
}

import type { Scene } from '../../render-engine'

// §7 functions — one editor card: def / call / return, the argument kinds (positional · default ·
// keyword · *args → tuple · **kwargs → dict), and scope + first-class functions.
export const functions: Scene = {
  id: 'functions',
  padding: 0.14,
  nodes: [
    {
      id: 'f-all',
      kind: 'code',
      filename: 'functions.py',
      label: [
        '# ── def / call / return ──',
        'def greet(name, greeting="Hi"):   # default',
        '    return f"{greeting}, {name}"',
        '',
        'greet("Sam")                # positional',
        'greet("Sam", greeting="Hey")   # keyword',
        '',
        '# ── *args / **kwargs ──',
        'def log(*args, **kwargs):',
        '    print(args)             # a tuple',
        '    print(kwargs)           # a dict',
        'log(1, 2, x=3)              # → args, kwargs',
        '',
        '# ── scope & first-class ──',
        'def outer():',
        '    n = 0                   # local (LEGB)',
        '    def inner(): ...        # nested function',
        'f = greet                   # functions are objects',
      ].join('\n'),
    },
  ],
  edges: [],
}

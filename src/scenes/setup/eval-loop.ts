import type { Scene } from '../../render-engine'

// §4 eval-loop — what "the PVM executes the bytecode" actually means, folded into two LR rows so it
// fills the pane instead of running too wide (one line) or too tall (one column):
//   Compile:  app.py ─▶ the CODE OBJECT it yields (add.__code__ nested in the module's co_consts)
//   Execute:  the fetch/decode/execute loop ─push/pop▶ the value stack
// with a `run` edge dropping from the code object into the loop. Bytecode listings render as code
// cards (the ported IDE renderer), so a disassembly reads like one. Trace of add(2,3) is in the slide.
export const evalLoop: Scene = {
  id: 'eval-loop',
  padding: 0.14,
  nodes: [
    {
      id: 'compile',
      label: 'Compile',
      pattern: 'group',
      icon: 'braces',
      flow: 'LR',
      children: [
        {
          id: 'src',
          kind: 'code',
          filename: 'app.py',
          label: ['import math', 'PI = 3.14', '', 'def add(a, b):', '    return a + b', '', 'class Circle: ...', '', 'result = add(2, 3)'].join('\n'),
        },
        {
          id: 'module',
          label: 'Code object · ⟨module⟩',
          pattern: 'service',
          icon: 'braces',
          sub: 'co_consts holds ⟨code add⟩, ⟨code Circle⟩',
          children: [
            {
              id: 'addcode',
              kind: 'code',
              filename: 'add.__code__',
              label: ['LOAD_FAST    a', 'LOAD_FAST    b', 'BINARY_OP    +', 'RETURN_VALUE', '', '# co_varnames: (a, b)', '# co_consts:   (None,)'].join('\n'),
            },
          ],
        },
      ],
      edges: [{ source: 'src', target: 'module', label: 'compile' }],
    },
    {
      id: 'execute',
      label: 'Execute',
      pattern: 'group',
      icon: 'repeat',
      flow: 'LR',
      children: [
        {
          id: 'loop',
          label: 'The eval loop',
          pattern: 'service',
          icon: 'repeat',
          sub: 'one op at a time',
          flow: 'LR',
          children: [
            { id: 'fetch', label: 'fetch', pattern: 'service', icon: 'scroll', variant: 'tile' },
            { id: 'decode', label: 'decode', pattern: 'service', icon: 'braces', variant: 'tile' },
            { id: 'execute-op', label: 'execute', pattern: 'service', icon: 'cpu', variant: 'tile' },
          ],
        },
        {
          id: 'vstack',
          kind: 'code',
          filename: 'value stack · LIFO',
          label: ['push 2       # LOAD_FAST a', 'push 3       # LOAD_FAST b', 'pop 3, pop 2 # BINARY_OP +', 'push 5', 'pop 5        # RETURN_VALUE'].join('\n'),
        },
      ],
      edges: [{ source: 'loop', target: 'vstack', label: 'push / pop' }],
    },
  ],
  edges: [{ source: 'module', target: 'loop', label: 'run' }],
}

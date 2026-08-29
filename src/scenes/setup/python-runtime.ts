import type { Scene } from '../../render-engine'

// §3 the-run (reused by §10 you-are-here) — the execution SPINE: how CPython runs a file, top to
// bottom. Two stacked bands so each owns its row: the execution spine (You → app.py / REPL → the
// compile-then-run pipeline → the machine) over the packages-&-imports subsystem that supports it.
// Wrapping the spine in its own group keeps `You` on its own row at the top instead of sharing row 0
// with the (edgeless) packages band. The subsystem's link up into app.py is narrated, not drawn.
export const pythonRuntime: Scene = {
  id: 'python-runtime',
  padding: 0.14,
  nodes: [
    {
      id: 'spine',
      label: 'Running a .py file',
      pattern: 'group',
      icon: 'repeat',
      flow: 'TB',
      children: [
        { id: 'you', label: 'You · developer', pattern: 'user', icon: 'scanface', sub: 'write Python' },
        { id: 'app', label: 'app.py', pattern: 'network', icon: 'filecode', sub: 'your source' },
        { id: 'repl', label: 'REPL', pattern: 'service', icon: 'terminal', sub: 'interactive' },
        {
          id: 'cpython',
          label: 'CPython · the interpreter',
          pattern: 'service',
          icon: 'cpu',
          flow: 'LR',
          children: [
            { id: 'tokenize', label: 'Tokenize', pattern: 'network', icon: 'scroll', sub: 'text → tokens' },
            { id: 'compile', label: 'Compile', pattern: 'network', icon: 'braces', sub: 'AST → bytecode' },
            { id: 'bytecode', label: 'Bytecode', pattern: 'storage', icon: 'braces', sub: 'cached as .pyc' },
            { id: 'pvm', label: 'PVM', pattern: 'service', icon: 'repeat', sub: 'the eval loop' },
          ],
          edges: [
            { source: 'tokenize', target: 'compile' },
            { source: 'compile', target: 'bytecode' },
            { source: 'bytecode', target: 'pvm' },
          ],
        },
        { id: 'os', label: 'OS · memory · hardware', pattern: 'external', icon: 'server', sub: 'where execution lands' },
      ],
      edges: [
        { source: 'you', target: 'app' },
        { source: 'you', target: 'repl' },
        { source: 'app', target: 'cpython' },
        { source: 'repl', target: 'cpython' },
        { source: 'cpython', target: 'os' },
      ],
    },
    {
      id: 'packages',
      label: 'Packages & imports · the setup subsystem',
      pattern: 'group',
      icon: 'layers',
      flow: 'LR',
      children: [
        { id: 'pip', label: 'pip', pattern: 'service', icon: 'wrench', sub: 'installer' },
        { id: 'pypi', label: 'PyPI', pattern: 'external', icon: 'cloud', sub: 'public index' },
        { id: 'site', label: 'venv / site-packages', pattern: 'storage', icon: 'database', sub: 'isolated deps' },
        { id: 'import', label: 'import system', pattern: 'network', icon: 'network', sub: 'resolves names' },
      ],
      edges: [
        { source: 'pip', target: 'pypi' },
        { source: 'pypi', target: 'site' },
        { source: 'site', target: 'import' },
      ],
    },
  ],
  edges: [],
}

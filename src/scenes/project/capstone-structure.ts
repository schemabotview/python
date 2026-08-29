import type { Scene } from '../../render-engine'

// §2 Structure — one editor card: the package layout tree + the pyproject.toml manifest (name, deps,
// and the [project.scripts] entry point that becomes the command). ↩ C1.
export const capstoneStructure: Scene = {
  id: 'capstone-structure',
  padding: 0.14,
  nodes: [
    {
      id: 'cap-tree',
      kind: 'code',
      filename: 'logtally/',
      label: [
        '# ── the package layout ──',
        'logtally/',
        '├─ pyproject.toml       # packaging + entry point',
        '├─ README.md   .gitignore',
        '├─ src/logtally/        # the package',
        '│  ├─ __init__.py',
        '│  ├─ models.py         # Entry dataclass, Level enum',
        '│  ├─ read.py           # glob + stream lines',
        '│  ├─ parse.py          # regex → Entry',
        '│  ├─ aggregate.py      # Counter tally',
        '│  ├─ parallel.py       # ProcessPool + @timed',
        '│  └─ cli.py            # argparse entry point',
        '└─ tests/test_parse.py  # pytest',
        '',
        '# ── pyproject.toml (the manifest) ──',
        '[project]',
        'name = "logtally"',
        'dependencies = ["rich"]',
        '[project.scripts]',
        'logtally = "logtally.cli:main"   # the command',
      ].join('\n'),
    },
  ],
  edges: [],
}

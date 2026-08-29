import type { Scene } from '../../render-engine'

// §3 pathlib — one editor card: build with /, a path knows itself, one-call read/write, find files.
export const stdlibPathlib: Scene = {
  id: 'stdlib-pathlib',
  padding: 0.14,
  nodes: [
    {
      id: 's-path',
      kind: 'code',
      filename: 'paths.py',
      label: [
        'from pathlib import Path',
        '',
        '# ── build (OS-correct separators) ──',
        'p = Path("data") / "notes.txt"   # join with /',
        'p.name, p.stem, p.suffix    # notes.txt, notes, .txt',
        'p.parent                    # Path("data")',
        '',
        '# ── inspect on disk ──',
        'p.exists(), p.is_file()     # True, True',
        'p.stat().st_size            # size in bytes',
        '',
        '# ── read / write in one call ──',
        'p.read_text()               # no open() needed',
        'p.write_text("hi")',
        'Path("logs").mkdir(exist_ok=True)',
        '',
        '# ── find files ──',
        'Path(".").glob("*.py")      # match a pattern',
        'Path(".").rglob("*.py")     # recurse subfolders',
        'list(Path(".").iterdir())   # list a directory',
      ].join('\n'),
    },
  ],
  edges: [],
}

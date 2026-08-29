import type { Scene } from '../../render-engine'

// §2 file-io — one editor card: read (whole/lazy), write (w truncates, a appends), modes & encoding.
export const stdlibFiles: Scene = {
  id: 'stdlib-files',
  padding: 0.14,
  nodes: [
    {
      id: 's-files',
      kind: 'code',
      filename: 'files.py',
      label: [
        '# ── read ──',
        'with open("notes.txt") as f:   # "r" is default',
        '    text = f.read()            # whole file → str',
        '    # f.readlines()            # → list of lines',
        'for line in open("notes.txt"): # lazy, line by line',
        '    use(line.rstrip())',
        '',
        '# ── write ──',
        'with open("out.txt", "w") as f:   # "w" truncates!',
        '    f.write("hello\\n")',
        'with open("log.txt", "a") as f:   # "a" appends',
        '    f.writelines(rows)',
        '',
        '# ── modes & encoding ──',
        'open("img.png", "rb")             # binary → bytes',
        'open("f.txt", encoding="utf-8")   # be explicit',
      ].join('\n'),
    },
  ],
  edges: [],
}

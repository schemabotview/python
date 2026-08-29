import type { Scene } from '../../render-engine'

// §6 str — one editor card: slice like a sequence, transform (new strings), inspect, format.
export const dataStr: Scene = {
  id: 'data-str',
  padding: 0.14,
  nodes: [
    {
      id: 'd-str',
      kind: 'code',
      filename: 'str.py',
      label: [
        '# ── slice like a sequence ──',
        's = "Python"',
        's[0]          # "P"   (s[-1] = "n")',
        's[:3]         # "Pyt"',
        's[::-1]       # reverse',
        'len(s)        # 6',
        '',
        '# ── transform (return NEW strings) ──',
        's.upper()     # "PYTHON"   (.lower() too)',
        's.strip()     # trim whitespace',
        's.replace("Py", "My")',
        's.split(",")  # → list    "-".join(xs)',
        '',
        '# ── inspect ──',
        's.startswith("Py")   # True',
        '"tho" in s           # True (substring)',
        's.find("t")          # index, or -1',
        '"42".isdigit()       # True',
        '',
        '# ── format ──',
        'f"{s} is {len(s)}"   # f-string',
        '"{}-{}".format(a, b) # .format()',
      ].join('\n'),
    },
  ],
  edges: [],
}

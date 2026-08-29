import type { Scene } from '../../render-engine'

// §7 re — one editor card: find (search/findall/match/finditer), capture groups, replace & split,
// compile a reused pattern. Raw strings so \\ reaches the regex engine.
export const stdlibRe: Scene = {
  id: 'stdlib-re',
  padding: 0.14,
  nodes: [
    {
      id: 's-re',
      kind: 'code',
      filename: 'regex.py',
      label: [
        'import re',
        '',
        '# ── find ──',
        're.search(r"\\d+", "abc123")   # first match → "123"',
        're.findall(r"\\w+", text)      # every match, a list',
        're.match(r"\\d", s)            # anchored at the start',
        're.finditer(r"\\w+", text)     # lazy match objects',
        '',
        '# ── capture groups ──',
        'm = re.search(r"(\\d+)-(\\d+)", s)',
        'm.group(1), m.group(2)         # the two pieces',
        '',
        '# ── replace & split ──',
        're.sub(r"\\s+", " ", text)     # collapse whitespace',
        're.split(r"[,;]", text)        # split on , or ;',
        '',
        '# ── compile a reused pattern ──',
        'pat = re.compile(r"\\d+")',
        'pat.findall(text)',
        '# raw strings r"..." → \\ means regex, not escape',
      ].join('\n'),
    },
  ],
  edges: [],
}

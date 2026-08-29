import type { Scene } from '../../render-engine'

// §9 Test — one editor card: a test is a test_* function + an assert (pytest discovers & runs them);
// parametrize runs one test over a table of cases. ↩ pytest (new).
export const capstoneTest: Scene = {
  id: 'capstone-test',
  padding: 0.14,
  nodes: [
    {
      id: 'cap-tests',
      kind: 'code',
      filename: 'test_parse.py',
      label: [
        'import pytest',
        'from logtally.parse import parse',
        'from logtally.models import Level',
        '',
        '# ── a test = a function + an assert ──',
        'def test_parses_a_line():',
        '    e = parse("ERROR /api/x")',
        '    assert e.level is Level.ERROR',
        '    assert e.path == "/api/x"',
        '',
        'def test_skips_junk():',
        '    assert parse("not a log line") is None',
        '',
        '# ── parametrize: many cases, one test ──',
        '@pytest.mark.parametrize("word,lvl", [',
        '    ("INFO", Level.INFO), ("ERROR", Level.ERROR)])',
        'def test_levels(word, lvl):',
        '    assert parse(f"{word} /x").level is lvl',
        '',
        '# run:  $ pytest',
      ].join('\n'),
    },
  ],
  edges: [],
}

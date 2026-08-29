import type { Scene } from '../../render-engine'

// §8 Interface — one editor card: argparse turns command-line args into a pipeline run; main() is the
// entry point pyproject mapped the command to; try/except + logging fail gracefully. ↩ C2, C6.
export const capstoneInterface: Scene = {
  id: 'capstone-interface',
  padding: 0.14,
  nodes: [
    {
      id: 'cap-cli',
      kind: 'code',
      filename: 'cli.py',
      label: [
        'import argparse, logging',
        'from pathlib import Path',
        'from .read import lines',
        'from .parse import parse',
        'from .aggregate import by_level',
        '',
        'log = logging.getLogger("logtally")',
        '',
        'def main():                     # ← pyproject maps here',
        '    ap = argparse.ArgumentParser(prog="logtally")',
        '    ap.add_argument("dir")',
        '    ap.add_argument("-n", type=int, default=5)',
        '    args = ap.parse_args()      # + free --help',
        '    try:',
        '        raw = lines(Path(args.dir))',
        '        entries = filter(None, map(parse, raw))',
        '        report(by_level(entries))',
        '    except FileNotFoundError:',
        '        log.error("no logs in %s", args.dir)',
      ].join('\n'),
    },
  ],
  edges: [],
}

import type { Scene } from '../../render-engine'

// §9 logging — one editor card: configure once (basicConfig + getLogger), the five levels & a
// threshold, everyday touches (lazy %-format, exception()).
export const stdlibLogging: Scene = {
  id: 'stdlib-logging',
  padding: 0.14,
  nodes: [
    {
      id: 's-logging',
      kind: 'code',
      filename: 'logging_.py',
      label: [
        'import logging',
        '',
        '# ── configure once ──',
        'logging.basicConfig(',
        '    level=logging.INFO,',
        '    format="%(asctime)s %(levelname)s %(message)s")',
        'log = logging.getLogger(__name__)   # per module',
        '',
        '# ── levels: DEBUG<INFO<WARNING<ERROR<CRITICAL ──',
        'log.debug("detail")     # hidden below threshold',
        'log.info("started")',
        'log.warning("low disk")',
        'log.error("failed: %s", err)   # lazy %-format',
        'log.exception("boom")   # ERROR + traceback',
        '',
        '# handlers route to console AND/OR files (per app)',
      ].join('\n'),
    },
  ],
  edges: [],
}

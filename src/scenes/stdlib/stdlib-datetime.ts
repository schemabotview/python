import type { Scene } from '../../render-engine'

// §6 datetime — one editor card: points & spans (datetime/date/timedelta), format & parse
// (strftime/strptime/isoformat), and prefer aware time zones.
export const stdlibDatetime: Scene = {
  id: 'stdlib-datetime',
  padding: 0.14,
  nodes: [
    {
      id: 's-datetime',
      kind: 'code',
      filename: 'dates.py',
      label: [
        'from datetime import datetime, date, timedelta',
        '',
        '# ── points & spans ──',
        'now = datetime.now()        # a moment',
        'date.today()                # just the date',
        'now + timedelta(days=7)     # a week later',
        '(d2 - d1).days              # duration between',
        '',
        '# ── format & parse (text ↔ datetime) ──',
        'now.strftime("%Y-%m-%d")    # datetime → text',
        'datetime.strptime(s, "%Y-%m-%d")   # text → datetime',
        'datetime.fromisoformat("2026-08-05")   # ISO parse',
        'now.isoformat()             # → ISO string',
        '',
        '# ── time zones (prefer aware) ──',
        'from datetime import timezone',
        'datetime.now(timezone.utc)  # aware, not naive',
      ].join('\n'),
    },
  ],
  edges: [],
}

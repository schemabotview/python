import type { Section } from '../types'

export const scale: Section = {
  id: 'scale',
  title: 'Scale',
  scene: 'capstone-scale',
  slide: `## Scale — use every core  ↩ C5, C7

Parsing many big files is **CPU-bound** — so fan it out across every core.

### A process pool
- \`with ProcessPoolExecutor() as pool:\` · \`pool.map(parse_file, files)\` *(C7)*
- Separate processes → separate GILs → **true parallelism**, one file per core
- CPU-bound work → **processes, not threads** — the decision guide, applied *(C7)*

### A decorator for timing
- \`@timed\` wraps the function to log how long it took — a closure-based **decorator** *(C5)*
- Cross-cutting concern added in **one line**, no change to the logic

Fast and correct. Now expose it as a command people can run.`,
  narration:
    "For a handful of small logs, our lazy pipeline is plenty fast. But point logtally at hundreds of large files and parsing becomes the bottleneck — and parsing is pure computation, CPU-bound work. From the concurrency course, we know exactly what that calls for: not threads, which the GIL would throttle, but processes. So parse-all opens a ProcessPoolExecutor and calls pool dot map, handing each file to a separate worker process. Because every process has its own interpreter and its own GIL, they genuinely run in parallel, one file per core, and on an eight-core machine the parsing finishes many times faster. This is the decision guide applied correctly: CPU-bound means multiprocessing, and the concurrent-futures pool makes it a two-line change. Now look at the line above the function: at-timed. That's a decorator, from the idioms course, and it wraps parse-all in a closure that records how long it runs and logs it — so every time we parse, we automatically get a timing report. It's the perfect illustration of what decorators are for: a cross-cutting concern, timing, added with a single line and zero changes to the function's actual logic. If we later wanted retries or caching, that's another decorator, stacked on. So now the tool is not just correct but fast, and instrumented. Everything works — but only if you call these functions from Python. To make it a real tool, we need to expose it as a command anyone can run from a terminal.",
}

import type { Section } from '../types'

export const pools: Section = {
  id: 'pools',
  title: 'threading & concurrent.futures',
  scene: 'concurrency-futures',
  slide: `## Pools — threads, the easy way

Run work concurrently on a **pool** of workers — the everyday tool for **I/O-bound** jobs.

### The low-level primitive
- Give a \`Thread\` a target, \`.start()\` / \`.join()\` to wait; guard shared state with a **\`Lock\`** (\`with lock:\`) — workable, but fiddly to manage by hand

### The easy way: \`concurrent.futures\`
- A **pool** manages the threads for you: \`pool.map(fn, items)\` → results **in order**; \`submit\` + \`as_completed\` → handle each **as it finishes** — no manual \`start\`/\`join\`

### The killer feature: swap the executor
- \`ThreadPoolExecutor\` (I/O-bound) ↔ **\`ProcessPoolExecutor\`** (CPU-bound) — **same API, one word changed**

For *many* I/O tasks on one thread, though, asyncio scales further.`,
  narration:
    "The most direct way to use threads is the threading module: you create a Thread with a target function and its arguments, call start to launch it and join to wait for it to finish, and for anything shared and mutable you guard the critical section with a Lock, wrapping it in a with-lock block so only one thread is inside at a time — no race. That works, but managing threads by hand, tracking them, joining them, collecting their results, gets fiddly fast. So the tool you'll actually reach for is the higher-level concurrent dot futures. Instead of individual threads you create a pool of workers — a ThreadPoolExecutor — inside a with block that cleans up automatically. Then the star method, pool dot map, takes a function and a collection of items, runs the function on every item across the pool's workers, and returns the results in order, exactly like the built-in map but concurrent. When you'd rather handle each result the instant it's ready, pool dot submit schedules one call and hands back a Future — a placeholder for the eventual result — and as-completed yields those futures in the order they finish, so a slow task never holds up the fast ones. No manual start, no manual join; the executor reuses a fixed number of workers you can size with max-workers. And here's the feature that ties the whole course together: if your work turns out to be CPU-bound instead of I/O-bound, you don't rewrite anything — you change one word, swapping ThreadPoolExecutor for ProcessPoolExecutor, and the identical pool-dot-map code now runs across separate processes on multiple cores, escaping the GIL. Same interface, completely different execution model underneath. So the workflow is beautifully simple: classify your workload, choose the executor that matches, and leave the rest of your code untouched — this one module covers the large majority of real concurrency needs. There's one more tool, though, for when you have a truly huge number of I/O-bound tasks and want to handle them all on a single thread as efficiently as possible — asyncio.",
}

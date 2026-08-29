import type { Section } from '../types'

// §10 reuses the concurrency-models board (whole board lit) as a bookend to §1, folding in the
// decision guide. Hands off to Course 8 (project).
export const youAreHere: Section = {
  id: 'you-are-here',
  title: 'You are here',
  scene: 'concurrency-models',
  slide: `## You are here

You can now make Python programs **scale** — and you know *why* each tool behaves as it does.

### Choosing a tool — *waiting or computing?*
- **I/O-bound** (waiting): **many** tasks → \`asyncio\` · **a few** → threads / \`ThreadPoolExecutor\`
- **CPU-bound** (computing): → \`multiprocessing\` / \`ProcessPoolExecutor\` — one process per core
- **First, always**: do you even *need* concurrency? Measure — the simple sequential version is often fast enough

### What you can now do
- Tell **I/O-bound** from **CPU-bound**, and pick the right model
- Use **threads**/\`futures\` & **\`asyncio\`** for waiting; **\`multiprocessing\`** for computing
- Explain the **GIL** — and the reference counting + cyclic GC behind it

Last course: the **capstone** — build & ship a real program, everything woven together.`,
  narration:
    "Step back and take in the three models one more time — and let's crystallize the whole course into a decision you can carry in your head. One question picks the tool: is your program mostly waiting, or mostly computing? If it's mostly waiting — that's I/O-bound — then for a large number of concurrent operations, like a server handling thousands of connections or a crawler fetching thousands of pages, reach for asyncio and its single-threaded efficiency; for something simpler, a handful of tasks, plain threads or a ThreadPoolExecutor are easier and perfectly effective. If instead it's mostly computing — CPU-bound — the answer is multiprocessing, or a ProcessPoolExecutor, running one process per core for true parallelism. Waiting-and-many means async; waiting-and-few means threads; computing means processes. And the most important rule of all, the one experienced engineers apply first: do you even need concurrency? It adds real complexity — races, deadlocks, harder debugging — and a surprising amount of the time the simple sequential version is already fast enough, so measure first and add concurrency only where it genuinely pays. With that judgment in hand, look at what you can now do. You came into this course able to write code that does one thing at a time; you're leaving it able to make Python do many things at once — and, just as importantly, able to explain why. You can spread waiting-heavy work across threads and the concurrent-futures pool, or scale up to asyncio's event loop for thousands of connections, and you can spread compute-heavy work across every core with multiprocessing. And you understand the mechanism that shapes all of it — the GIL, which lets only one thread run Python at a time, and the reference counting and cyclic garbage collection it exists to protect. That's a genuinely deep understanding of the runtime, the kind that separates someone who uses Python from someone who understands it. There's one course left, and it's different from all the others. So far you've learned pieces — syntax, data, objects, idioms, libraries, concurrency. The capstone brings them together: you'll build and package a real, complete program from scratch, with proper project structure, dependencies, and tests, weaving in everything you've picked up. Let's go ship something.",
}

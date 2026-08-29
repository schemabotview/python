import type { Section } from '../types'

export const multiprocessing: Section = {
  id: 'multiprocessing',
  title: 'multiprocessing',
  scene: 'concurrency-multiprocessing',
  slide: `## \`multiprocessing\` — use every core

Run work in separate **processes** — true parallelism for **CPU-bound** jobs.

### The pattern (mirrors the thread pool)
- \`with Pool() as p: p.map(fn, chunks)\` — defaults to **one worker per core**, each with its **own GIL** → truly parallel
- \`ProcessPoolExecutor\` is the same machinery with a friendlier front end

### Mind the cost
- Data is **pickled** to/from workers — send **coarse** chunks, not tiny items (or shuffling costs more than it saves)
- The function & its data must be **picklable** (no lambdas, open files, DB connections); startup is heavier than threads

Two halves, one skill — let's pull it together and choose.`,
  narration:
    "For CPU-bound work, multiprocessing is the answer, and its interface deliberately mirrors the thread pool so it feels familiar. You create a Pool inside a with block — by default it sizes itself to the number of cores on your machine — and then p dot map runs your function over the chunks of work, distributing them across the worker processes. Because each worker is a separate process with its own GIL, they genuinely run in parallel on separate cores, and a computation that pegged one core for a minute might finish in well under that across eight. Note also that concurrent dot futures' ProcessPoolExecutor from a moment ago is essentially a friendlier front end to this same machinery. Now, the costs we flagged in the model are real and you must design around them. Because processes don't share memory, everything you send to a worker and every result it returns has to be pickled — serialized to bytes, shipped, and rebuilt. That means two things. First, send coarse chunks of work: if the data-shuffling costs more than the computation saved, you lose, so give each process a substantial job, not a stream of tiny ones. Second, the function you run and the data you pass must be picklable — most ordinary objects are, but things like open files, database connections, and lambdas are not. And spinning up processes is heavier than spinning up threads. Used well — big, independent, compute-heavy chunks — multiprocessing turns a one-core program into an all-cores one. You now have the whole toolkit. Let's pull it together into a simple rule for choosing, and take in how far you've come.",
}

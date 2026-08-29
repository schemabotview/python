import type { Section } from '../types'

export const workloads: Section = {
  id: 'workloads',
  title: 'I/O-bound vs CPU-bound',
  scene: 'concurrency-workloads',
  slide: `## Classify the work first

Before you pick a tool, classify the workload — it decides everything.

### I/O-bound — mostly **waiting**
- Network requests, disk, database, APIs — the CPU sits idle while data travels
- Threads or asyncio **overlap** the waits → big wins (the GIL releases on I/O)

### CPU-bound — mostly **computing**
- Number crunching, image/video processing, simulations — the CPU is pegged
- Only **multiprocessing** helps — you must escape the GIL to use multiple cores

With the workload named, the first tool is the everyday one — a pool.`,
  narration:
    "Now we move to the code, and the first thing to do — before writing a single line — is to classify your problem, because that one judgment picks the tool. Ask: where does the program spend its time? If it spends most of it waiting — for network requests, disk reads, database queries, external APIs — then it's I/O-bound. The CPU is mostly idle, twiddling its thumbs while data travels over the wire. For that, threads or asyncio are ideal, because they overlap all those waits — and remember, the GIL politely releases during I/O, so threads genuinely help here. But if the program spends most of its time computing — crunching numbers, processing images, running a simulation — then it's CPU-bound, the processor is pegged at a hundred percent, and no amount of threading or async will speed it up, because of the GIL. The only thing that helps CPU-bound work is multiprocessing, spreading the computation across cores in separate processes. That's the whole decision in one sentence: waiting means I/O-bound means threads or async; computing means CPU-bound means processes. Keep that split in mind and the rest is just which API to type. Let's take them in turn, starting with the everyday workhorse for waiting-heavy jobs — running work on a pool.",
}

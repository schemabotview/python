import type { Section } from '../types'

export const manyAtOnce: Section = {
  id: 'many-at-once',
  title: 'Concurrency & the runtime',
  scene: 'concurrency-models',
  slide: `## Doing many things at once

Everything so far ran **one thing at a time**. Real programs must do **many** at once.

### Concurrency vs parallelism
- **Concurrency** — *dealing with* many tasks (interleaving) · **Parallelism** — *doing* many at once (multiple cores)
- The right tool depends on your workload — **I/O-bound** (waiting) vs **CPU-bound** (computing)

### Three models (and why the runtime matters)
- **Threads** — share memory, but the **GIL** lets only one run Python at a time
- **Asyncio** — one thread, one **event loop**, cooperative \`await\`
- **Processes** — separate memory, **true parallelism** across cores

First the models and *why* they differ; then the code and how to choose.`,
  narration:
    "Every program we've written so far has done one thing at a time, top to bottom. But real software rarely has that luxury — a web server juggles thousands of users, a scraper downloads hundreds of pages, a data job wants to use every core on the machine. That's concurrency, and Python gives you three different ways to do it. Before the tools, two distinctions frame everything. The first is concurrency versus parallelism. Concurrency is about dealing with many tasks at once by interleaving them — making progress on several without necessarily running them at the very same instant. Parallelism is stronger: literally executing multiple things simultaneously on multiple CPU cores. They're related but not the same, and Python's tools land differently on that line. The second distinction is about your workload: is it I/O-bound or CPU-bound? I/O-bound work spends most of its time waiting — for a network reply, a disk read, a database. CPU-bound work spends its time computing — crunching numbers, processing images. Which one you have decides which tool wins, and that hinges on a quirk of Python's runtime called the GIL. So this course comes in two halves. First we'll build the mental models — three ways to run many things, and crucially why they behave differently, which takes us into the interpreter itself. Then we'll switch to code: the actual APIs, and a simple guide to picking the right one. Here are the three models. Let's start with the most familiar: threads.",
}

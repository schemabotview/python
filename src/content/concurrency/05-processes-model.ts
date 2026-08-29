import type { Section } from '../types'

export const processesModel: Section = {
  id: 'processes-model',
  title: 'Processes',
  scene: 'concurrency-models',
  focus: 'cm-procs',
  slide: `## Processes — true parallelism

Separate **processes** each have their **own** memory and their **own GIL** — so they run **truly in parallel**.

### Escaping the GIL
- One GIL per process → *N* processes run Python on *N* cores **at once**
- The right tool for **CPU-bound** work: split the compute across cores

### The trade-off
- **Separate memory** — no shared objects; data is **copied** (pickled) between processes
- Heavier to start than threads; best for **coarse-grained**, compute-heavy chunks

Three models understood. Now let's see them in code — and how to choose.`,
  narration:
    "The way around the GIL is not to fight it but to sidestep it, by running multiple processes instead of multiple threads. Each process is a fully independent instance of the Python interpreter, with its own memory space and — crucially — its own GIL. And that's the key: since the GIL is per-process, four processes have four independent locks, so four cores can each run Python bytecode at the very same moment. This is true parallelism at last, and it's exactly what CPU-bound work needs — take a big computation, split it into chunks, and hand each chunk to a separate process to crunch on its own core. On a machine with eight cores, you can get close to an eightfold speedup for the right kind of work. But this power comes with a real trade-off, and it's the mirror image of threads. Because processes don't share memory, they can't just look at the same objects — anything you send between them has to be copied, serialized into bytes and rebuilt on the other side, a mechanism Python calls pickling. That copying costs time, and processes are also heavier to start than threads. So multiprocessing shines for coarse-grained, compute-heavy work where each process gets a substantial chunk to chew on, and it's a poor fit for tiny tasks or for constantly shuttling large amounts of data back and forth. Now you have all three mental models — threads with shared memory and the GIL, asyncio's single-threaded event loop, and processes with separate memory and true parallelism. It's time to switch from why to how: the actual Python code for each, and a simple rule for choosing.",
}

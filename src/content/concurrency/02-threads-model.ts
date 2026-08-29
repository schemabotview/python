import type { Section } from '../types'

export const threadsModel: Section = {
  id: 'threads-model',
  title: 'Threads share memory',
  scene: 'concurrency-models',
  focus: 'cm-threads',
  slide: `## Threads — shared memory

Multiple **threads** run inside **one process**, sharing the same memory.

### The upside
- Threads see the **same objects** — passing data between them is free (no copying)
- Lightweight — cheap to create, quick to switch between

### The catch
- Shared mutable state is **dangerous**: two threads updating the same thing can corrupt it (a *race condition*)
- Guard shared state with a **\`Lock\`** so only one thread touches it at a time

Shared memory sounds like real parallelism — but one thing stands in the way.`,
  narration:
    "A thread is an independent line of execution, and the defining feature of threads is that they all live inside a single process and share its memory. Picture one big shared space of objects, with several threads — thread one, thread two, thread three — all reaching into it. That shared memory is threads' great strength: because every thread sees the very same objects, handing data from one to another costs nothing — there's no copying, no serialization, they just look at the same variable. Threads are also lightweight; the operating system can create and switch between them cheaply. But that same shared memory is their great danger. If two threads modify the same object at the same time — say both incrementing a counter — their operations can interleave in ways that corrupt the result. That's called a race condition, and it produces bugs that are maddeningly intermittent and hard to reproduce. The defense is a lock: a Lock object that only one thread can hold at a time, so you wrap the risky update in it and threads take turns. So threads share memory, which is efficient but requires discipline. Now, sharing memory and running on a multi-core machine, you'd expect several threads to genuinely run in parallel and use all your cores. In most languages they would. In Python, they don't — and the reason is a single, famous mechanism at the heart of CPython.",
}

import type { Section } from '../types'

export const eventLoop: Section = {
  id: 'event-loop',
  title: 'The event loop',
  scene: 'concurrency-models',
  focus: 'cm-async',
  slide: `## Asyncio — one thread, an event loop

**Asyncio** runs many tasks on **one thread** by cooperatively switching at \`await\` points.

### The event loop
- A single **event loop** juggles many **coroutines** (tasks)
- When a task hits **\`await\`** on I/O, it **yields** control back to the loop…
- …which runs another ready task; when the I/O completes, the first resumes

### Why it scales
- No threads, no locks, no GIL contention — **thousands** of waiting tasks on one thread
- **Cooperative**: a task that never \`await\`s (pure CPU) **blocks** the whole loop

Great for many I/O waits. For real CPU parallelism, we need processes.`,
  narration:
    "Asyncio takes a completely different approach: instead of many threads, it uses one thread running a single event loop that juggles many tasks. Think of the event loop as a scheduler and the tasks as coroutines — special functions that can pause and resume, much like the generators we met in the idioms course. Here's the mechanism. The loop starts running task A. Task A works until it needs to wait for something slow — a network call — at which point it hits an await and voluntarily yields control back to the event loop instead of blocking. The loop, now free, immediately starts or resumes task B. When task A's network reply finally arrives, the loop notices and resumes A right where it paused. So a single thread stays busy by always working on whichever task is ready, filling every idle moment that would otherwise be spent waiting. The payoff is enormous scale for I/O-bound work: with no threads, there are no locks, no race conditions from shared memory, and no GIL contention — one thread can happily manage thousands of simultaneous connections, all mostly waiting. But notice the word cooperative. Tasks give up control voluntarily, only at await points. If a task does a long stretch of pure computation without ever awaiting, it never yields, and the entire event loop freezes until it finishes — every other task stalls. So asyncio is superb for lots of concurrent waiting, and poor for heavy computation. Which leaves one gap: what if the work is genuinely CPU-bound and you want to use all your cores? For that, you need to escape the GIL entirely — with processes.",
}

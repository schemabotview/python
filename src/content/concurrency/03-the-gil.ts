import type { Section } from '../types'

export const theGil: Section = {
  id: 'the-gil',
  title: 'The GIL & why',
  scene: 'concurrency-models',
  focus: 'cm-gil',
  slide: `## The GIL — and why it exists

The **Global Interpreter Lock**: only **one thread** runs Python bytecode at any instant.

### What it means
- Threads take turns holding the GIL — so Python threads **don't** parallelize CPU work (add threads to a crunch loop → no faster, often slower)
- **But it releases on I/O** — a thread drops the GIL while waiting on network/disk/\`sleep\`, so **I/O-bound** threads overlap their waits and win big

### Why it exists — reference counting *(recall Course 1)*
- CPython frees an object the instant its **reference count** hits \`0\` (+1 per new reference, −1 per drop); a separate **cyclic GC** catches \`a → b → a\` cycles
- Two threads bumping one refcount at once would **corrupt** it → leaks/crashes; the GIL makes refcounting safe **cheaply** (per-object locks were slower for single-threaded code)

That's the threads model, top to bottom. Now a very different one — asyncio.`,
  narration:
    "This is the GIL — the Global Interpreter Lock — and it's the single most important thing to understand about concurrency in CPython. The rule is simple and strict: no matter how many threads you have, only one of them can execute Python bytecode at any given instant. There's effectively one lock, and a thread must hold it to run Python code, so the threads take turns rather than truly running side by side. The consequence lands hard on CPU-bound work: split a heavy computation across four threads hoping to use four cores, and you get no speedup at all, often a slight slowdown from the overhead of switching. But the saving grace is I/O — a thread releases the GIL whenever it's waiting on something outside Python: a network response, a disk read, a call to sleep. While one thread sits blocked on I/O with the GIL released, another grabs it and runs. So that's the whole GIL story in practice: no help for CPU-bound work, a real boost for I/O-bound work. Which raises the obvious question — why would Python's designers accept a lock that cripples multi-core computation? You actually met the answer back in the very first course, when we opened up an object in memory. CPython manages memory primarily by reference counting: every object carries a count of how many things currently point at it, going up by one on each new reference and down by one as each is dropped, and the instant that count hits zero the object is freed immediately. Reference counting has one blind spot — cycles, where object A points at B and B points back at A, so neither count ever reaches zero even when nothing else refers to them — which a separate cyclic garbage collector periodically hunts down and frees. Now connect that to threads. Those counts change on nearly every operation, and if two truly-parallel threads incremented and decremented the same object's count at the same moment, the updates could interleave and leave it wrong — freeing an object that's still in use, which crashes the program, or never freeing one, which leaks. The GIL prevents exactly that: with only one thread running Python at a time, every refcount change is automatically safe, with almost no overhead. The designers chose it because the alternative — a fine-grained lock on every single object — made ordinary single-threaded code, which is most Python code, significantly slower. It's a pragmatic trade. That's the complete threads picture: shared memory, the GIL, and the refcounting behind it. Now let's look at a model that sidesteps the whole problem by using just one thread — asyncio.",
}

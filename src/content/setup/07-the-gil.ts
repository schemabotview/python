import type { Section } from '../types'

export const theGil: Section = {
  id: 'the-gil',
  title: 'The GIL',
  scene: 'the-gil',
  focus: 'gil',
  slide: `## The GIL

Every object's **\`ob_refcnt\`** must stay exact. With **one** thread that's free — but threads share the heap.

### The race the refcount creates
- Two threads touching the **same object** would bump \`ob_refcnt\` at once — a lost update **corrupts** it (crashes, leaks)
- Guarding *every* object with its own lock would be slow and deadlock-prone

### CPython's answer: one big lock
- The **GIL** (Global Interpreter Lock): a thread must **hold** it to run bytecode
- So **only one thread runs the eval loop at a time** — refcounts stay safe by construction

### What that means for you
- Threads still help **I/O-bound** work — a thread waiting on I/O **releases** the GIL so another runs
- But pure-Python **CPU** work gets **no speedup** from threads (only one runs) → use **processes**
- *How* to pick threads vs async vs processes, and the **cyclic GC**, are **Course 7**`,
  narration:
    "Here's the catch that little refcount was hiding. Every object on the heap carries ob_refcnt, and that count has to stay exactly right — the moment it's wrong, objects get freed too early or never freed at all. With a single thread, keeping it right is trivial: increments and decrements happen one at a time. But threads share the same heap and the same objects. Picture two threads both touching the same object at the same instant — both read the refcount as ten, both add one, both write back eleven, when the true answer is twelve. That's a lost update, and it silently corrupts memory management: crashes and leaks. You could put a tiny lock on every single object, but with millions of objects that's ruinously slow and a minefield of deadlocks. CPython's answer is blunt and effective: one single lock for the whole interpreter, called the Global Interpreter Lock, or GIL. The rule is simple — a thread must be holding the GIL to run any bytecode at all. So no matter how many threads you start, only one of them is ever running the eval loop at any moment; the rest wait their turn. That one lock makes every refcount update safe, for free, without locking each object. Now, this has a real consequence you need to carry with you. Because only one thread runs Python at a time, spinning up threads does not make pure-Python, CPU-heavy work any faster — they just take turns. Where threads still win is I/O-bound work: when a thread is waiting on the network or the disk, it lets go of the GIL so another thread can run, so your program stays busy instead of blocking. And when you genuinely need many CPU cores at once, the tool is separate processes, each with its own interpreter and its own GIL. How to actually choose between threads, async, and processes — and how the garbage collector cleans up reference cycles that plain refcounting can't — is a whole course of its own, Course seven. For now, that's the complete runtime: the eval loop, the frames and objects it works on, and the single lock that guards them all. Let's step back out and bring in code you didn't write yourself.",
}

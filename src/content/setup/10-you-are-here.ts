import type { Section } from '../types'

// §10 reuses the python-runtime spine (no focus → the whole thing reads at full brightness), a bookend
// to §3: the runtime is now understood end to end. Hands off to Course 2 (syntax).
export const youAreHere: Section = {
  id: 'you-are-here',
  title: 'You are here',
  scene: 'python-runtime',
  slide: `## You are here

You've traced Python's **whole runtime** — from the code you write to the machine that runs it.

### What you can now do
- Install **CPython**, use the **REPL**, and run \`.py\` files
- Follow **compile → code object → eval loop**, and read a **traceback** as a stack of **frames**
- Know that **every value is an object** (refcount + type) and that the **GIL** serialises threads
- Add packages with **\`pip\`**, isolate them in a **\`venv\`**, and organize code into **modules**

### The road ahead
- **Syntax → Data → Objects → Idioms** — everything you write
- **Stdlib → Concurrency → Project** — the toolbox, scaling, and shipping

The ground is set. Next course: **Core syntax** — the code you actually write.`,
  narration:
    "Here's the whole runtime again, and now every piece should have a place. You start at the top, writing readable Python 3. That code — from a file or the REPL — goes into CPython, which tokenizes it and compiles it into a code object, then runs that on the PVM's eval loop. And you saw what's underneath that loop: every call runs in a frame, and a stack of those frames is exactly the traceback you get on an error; every value is an object on the heap carrying a refcount and a type; and a single lock, the GIL, keeps those refcounts safe by letting just one thread run at a time. Down below that, the operating system owns the memory and hardware. And underneath the whole thing, the setup subsystem supports it: pip pulls packages from PyPI into a virtual environment, and the import system weaves those packages, the standard library, and your own modules into one program. That's everything in Course 1 — the runtime and how to set it up. From here, the rest of the series is the language itself. Next we'll fill in syntax — variables, control flow, and functions, the code you actually write. Then data structures, then your own objects, then the idioms that make Python feel like Python. After that the standard library, concurrency, and finally building and shipping a real project. The interpreter is installed and you know exactly how it runs your code. In the next course, we start writing Python.",
}

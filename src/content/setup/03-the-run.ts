import type { Section } from '../types'

export const theRun: Section = {
  id: 'the-run',
  title: 'How Python runs your code',
  scene: 'python-runtime',
  focus: 'pvm',
  slide: `## How Python runs your code

Python is often called "interpreted," but the real story is **compile-then-run** — and this course follows one program the whole way down.

### The journey of \`app.py\`
- You write **\`app.py\`**; **CPython** — the interpreter — reads it
- **Tokenize** → **compile** to a tree → emit **bytecode** (portable, cached as \`.pyc\` in \`__pycache__\`)
- The **PVM** walks that bytecode in its **eval loop**, calling into the OS

### The support system
- Underneath: **\`pip\` + PyPI**, a **\`venv\`**, and the **import system** wire in other code — the packages band (we return to it in §8–§10)

### The road ahead
- This is **Course 1 of 8** — the runtime. Then: syntax → data → objects → idioms → stdlib → concurrency → project

One interpreter, one bytecode, one eval loop — under **everything** you'll write.`,
  narration:
    "Here's what actually happens when you run a file. You hand app.py to CPython, the interpreter — the real engine of the language — and although people call Python interpreted, what CPython does is subtler: it compiles first, then runs. First it tokenizes your source, scanning the raw text and breaking it into meaningful pieces — names, numbers, operators, keywords. Then it compiles: it parses those tokens into a tree that captures your program's structure, and from that tree it emits bytecode, a compact, low-level list of instructions that isn't tied to your particular machine. That bytecode gets cached in dot-pyc files inside a __pycache__ folder — which is why the very first run of a program is a hair slower, it's compiling, and every run after skips ahead. Finally the bytecode goes to the PVM, the Python Virtual Machine, which runs it: a loop that walks the bytecode one instruction at a time, carrying each one out and calling down into the operating system to actually do things — print to the screen, read a file, open a socket. That's the whole spine, top to bottom: you, your source, the interpreter compiling to bytecode, and the machine running it. And wired in beneath it is a second subsystem — the packages and imports that pull in other people's code and stitch it into yours — which we'll come back to later in the course. But that last step, the PVM executes the bytecode, quietly hides the most important machinery in the language. Let's step inside the eval loop and watch it run.",
}

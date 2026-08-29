import type { Section } from '../types'

export const frames: Section = {
  id: 'frames',
  title: 'Frames & the call stack',
  scene: 'frames',
  focus: 'addframe',
  slide: `## Frames & the call stack

The loop never runs code in a vacuum — it always runs it **inside a frame**, and every call gets its own.

### Inside one frame
- **\`f_locals\`** — this call's local variables (\`a=2\`, \`b=3\`)
- **operand / value stack** — the frame's **own** push/pop scratchpad (where \`LOAD_FAST\`/\`BINARY_OP\` work); it lives **inside** the frame, one per call
- **\`f_code\`** — a ref to the **code object** (the plan); **\`f_lasti\`** — the program counter

### Frames stack into the call stack
- \`add()\`'s frame sits on the **module** frame — its caller (the \`f_back\` link); it **pops** when \`add\` returns
- That growing/shrinking stack of frames is the **call stack** — **one per thread** — and exactly what a **traceback** prints

A frame says *what* runs and *where*. Next: **what** those values \`2\`, \`3\`, \`5\` on the heap actually are.`,
  narration:
    "The eval loop never runs your bytecode in a vacuum — it always runs it inside a frame, and every function call gets its own. Look at what's actually inside one frame, because it has four parts. There's f_locals, holding this call's local variables — for add, that's a equals two and b equals three. There's its own operand stack — the push-and-pop value stack we just watched the loop use — and this is the key point: that stack isn't some global thing off to the side, it lives inside the frame, one private evaluation scratchpad per call. There's f_code, a pointer straight back at the code object we looked at — the plan this frame is executing. And there's f_lasti, the program counter, remembering which instruction we're on so the loop knows where to resume. Now, frames stack. When you called add, Python built an add frame and set it on top of the module-level frame that called it — that caller link is f_back. The moment add returns, its frame pops off and is thrown away. That growing and shrinking stack of frames is your call stack — one per thread — and it is exactly what you see when a program crashes: a traceback is just this stack of frames printed out, top to bottom, each line one frame. So a frame says what code is running and where. It raises the last question in this picture: those values in f_locals and on the operand stack — two, three, and five — what actually are they? Let's look at the heap.",
}

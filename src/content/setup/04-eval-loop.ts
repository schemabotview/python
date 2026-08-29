import type { Section } from '../types'

export const evalLoop: Section = {
  id: 'eval-loop',
  title: 'The eval loop',
  scene: 'eval-loop',
  focus: 'loop',
  slide: `## The eval loop

"The PVM executes the bytecode" means one thing: a **loop** that fetches and runs instructions over a **stack**.

### Compile's real output: a tree of code objects
- Compiling \`app.py\` yields a **module** code object; each **\`def\`/\`class\`/\`lambda\`** is its **own** code object nested in its parent's \`co_consts\` — reach \`add\`'s as **\`add.__code__\`**
- A code object bundles **\`co_code\`** (instructions) + **\`co_varnames\`** (\`a\`, \`b\`) + **\`co_consts\`** (literals) — all the loop needs
- \`import dis; dis.dis(add)\` prints exactly this

### The loop
- **Fetch → decode → execute**, one op of \`co_code\` at a time, until it's done
- Most ops just **push** or **pop** the **value stack** — a LIFO scratchpad

### Trace: \`add(2, 3)\`
- \`LOAD_FAST a\` → push **2** · \`LOAD_FAST b\` → push **3**
- \`BINARY_OP +\` → pop 3 & 2, push **5** · \`RETURN_VALUE\` → pop 5, return it`,
  narration:
    "So what does it actually mean that the PVM executes the bytecode? Let's take a small file, app.py — it imports a module, sets a constant, defines a function add and a class, and finally calls add with two and three — and go inside. The first thing to know is that compiling isn't one flat step: compiling the file gives you a module code object, holding the file's top-level bytecode, and nested inside it, as constants, sit separate code objects — one for add, one for the class. That's the rule — every def, every class, every lambda gets its own code object tucked inside its parent's, and the file is simply the outermost one; the import, the constant, and the call all stay in the module's own bytecode. When you run the file, that module bytecode goes first: it imports, sets the constant, builds add and the class, then hits the call — and that call is what runs add's own code object, the one we'll trace. You reach it directly as add dot dunder-code. That code object holds the instruction list, called co_code — here, just four instructions — but it also carries the metadata the interpreter needs to run them: co_varnames, the local variable names a and b, and co_consts, any literal constants in the function. You can print the whole tree any time by importing the dis module and calling dis dot dis. Now, the PVM is fundamentally one giant loop, walking that co_code. It does three things over and over: fetch the next instruction, decode what it is, and execute it — then back to the top, until there's nothing left. And almost every instruction does its work by pushing or popping a single scratchpad called the value stack, which is last-in first-out, like a stack of plates. Watch it run add. LOAD_FAST a pushes the value of a — two — onto the stack. LOAD_FAST b pushes b — three. BINARY_OP plus pops both of them off, adds them, and pushes the result — five — back on. And RETURN_VALUE pops that five and hands it back to the caller. That's the entire engine: a loop, walking a code object, pushing and popping a stack. Every line of Python you will ever write comes down to this. But it raises a question — those values, two and three and five, and the variables a and b — where do they actually live? For that, we look at memory.",
}

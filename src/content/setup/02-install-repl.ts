import type { Section } from '../types'

export const installRepl: Section = {
  id: 'install-repl',
  title: 'Installing Python & the REPL',
  scene: 'install-repl',
  slide: `## Installing Python & the REPL

**CPython** is the reference interpreter — when people say "install Python," this is it.

### Get it running
- Install **Python 3** from **python.org** (or a manager like \`pyenv\` / Homebrew)
- Check it: \`python3 --version\` → \`Python 3.12.x\`
- **Python 3 is the language today** — Python 2 reached end-of-life in **2020**; that's why you'll type \`python3\` explicitly

### The REPL — your live scratchpad
- Type \`python3\` to open the **REPL** (read-eval-print loop)
- Each line runs instantly and prints its result — perfect for trying ideas

Great for experiments — real programs live in \`.py\` files, and next we see what runs them.`,
  narration:
    "To run anything, you need the interpreter on your machine, and the one almost everyone uses is called CPython — the reference implementation, written in C. When someone says install Python, this is what they mean. You get it from python.org, or through a version manager like pyenv or Homebrew if you want several versions side by side. Once it's installed, you confirm it from a terminal by typing python3 dash dash version, and it prints something like Python 3.12. One bit of history to know here: for years there were two Pythons, version 2 and version 3, subtly incompatible — but that split is over. Python 2 reached its official end of life in 2020, so every new project starts on Python 3, where print is a function you call and all text is Unicode by default. That's also why you'll often type python3 explicitly, rather than just python. Now, you don't always need a file to run Python. Type just python3 with no filename and you drop straight into the interpreter's interactive mode — the REPL, or read-eval-print loop. It's a live prompt, marked by three angle brackets, where every line you type runs immediately and shows its result. Type two plus two and it prints four; type the string py times three and it prints pypypy. The REPL is your scratchpad — the fastest way to test an idea or check what something does, with no file at all. It's perfect for experiments. But the programs you actually ship live in dot-py files. So let's take one of those files and follow what happens inside the interpreter when it runs.",
}

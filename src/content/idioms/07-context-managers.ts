import type { Section } from '../types'

export const contextManagers: Section = {
  id: 'context-managers',
  title: 'Context managers',
  scene: 'idioms-context',
  slide: `## Context managers — \`with\`

The **\`with\`** block guarantees **setup** and **cleanup** around your code.

### The guarantee
- \`__enter__\` runs on the way **in** (returns what \`as\` binds); \`__exit__\` runs on the way **out** — even on an exception or early return
- So a file is **always** closed, a lock **always** released — no leaked resources
- Manage several at once: \`with open("a") as a, open("b") as b:\`

### Build your own — two ways
- A **class** with \`__enter__\`/\`__exit__\` — locks, DB transactions, timers
- Or the easy way: **\`@contextmanager\`** on a generator — code before \`yield\` = enter, after = exit

Two idioms left — the standard library's lazy toolboxes.`,
  narration:
    "You've used the with statement already, every time you opened a file. Now let's see what it really does, because it's a general and powerful tool. A context manager is any object that defines two dunder methods: __enter__ and __exit__ — exactly the pair I flagged back in the objects course. When you write with open of a file as f, Python calls __enter__ at the top of the block — that's what runs the setup and hands back the value you bind to f. Then your indented code runs. And here's the guarantee that matters: no matter how the block ends — it finishes normally, you return early, or an exception is raised in the middle — Python calls __exit__ on the way out. For a file, __exit__ closes it. So the file is always closed, even if your code crashes, and you never leak a resource or forget cleanup. That pattern — guaranteed setup and teardown around a block — shows up everywhere: acquiring and releasing a lock, opening and committing or rolling back a database transaction, starting and stopping a timer, temporarily changing a setting and restoring it. You can even manage several at once by separating them with commas in a single with statement, so two files both close cleanly. You can make any object a context manager by giving it a class with __enter__ and __exit__ — like the little Timer on screen, which records the start time on enter and logs the elapsed time on exit. But there's an even simpler way that ties this whole course together: decorate a generator with contextmanager from contextlib. Everything before the yield is your enter code, the yielded value is what as binds, and everything after the yield is your exit code — guaranteed to run. It's closures, generators, and decorators all working together. To finish, let's open Python's two treasure chests of ready-made lazy tools — functools and itertools.",
}

import type { Section } from '../types'

export const exceptions: Section = {
  id: 'exceptions',
  title: 'Exceptions',
  scene: 'exceptions',
  slide: `## Exceptions: when things go wrong

When a statement fails, Python **raises an exception** — you catch it with \`try / except\`.

### try / except
- \`try:\` guards a block; **stack \`except\` clauses** for different errors — \`except ValueError as e:\` also **binds** the error (to log/inspect)
- Unhandled, an exception **unwinds the call stack** and prints a **traceback**

### else / finally / raise
- \`else:\` runs if no error · \`finally:\` **always** runs (cleanup, closing files)
- \`raise ValueError("…")\` signals your own error

### Ask forgiveness
- Pythonic style: **try it and catch** rather than checking everything first (EAFP)

The last building block packages and reuses everything else: functions.`,
  narration:
    "Sooner or later something in your code will fail — you divide by zero, open a missing file, or convert nonsense to a number — and when that happens, Python raises an exception. Exceptions are how you cope with those failures gracefully instead of crashing. You set up a handler with try and except: you wrap the risky code in a try block, and follow it with one or more except clauses — here, one for a missing file and one for a bad value — each naming a kind of error and running only if that error actually occurs. You can also bind the error object itself by writing except ValueError as e, so you can inspect or log it. If no handler catches an exception, it unwinds the call stack — popping frame after frame, remember those from last course — and Python prints a traceback showing exactly where things went wrong. Two more clauses round it out: an else block runs only when the try succeeded with no error, and a finally block always runs no matter what, which is where you put cleanup like closing a file. And you're not limited to catching errors — you can raise your own with the raise keyword, signaling that something is wrong in your own code. There's a cultural point worth absorbing here: Python programmers tend to just try an operation and catch the failure, rather than checking every precondition up front — it's often called easier to ask forgiveness than permission. That covers coping with failure. The final building block is the one that lets you package and reuse everything we've seen — the function.",
}

import type { Section } from '../types'

export const theObject: Section = {
  id: 'the-object',
  title: 'The object',
  scene: 'oop-object',
  slide: `## object — an instance

Calling a class like a function **constructs** an object: Python makes a fresh one, then runs \`__init__\` on it.

### The mental model
- **Construction is two steps** — create the empty object, then \`__init__\` fills in its data
- Use it **through the dot**; on \`acct.deposit(50)\` Python slips \`acct\` in as \`self\`, so you never pass it
- **Every object owns its state** — a second \`Account\` starts fresh; the two are fully independent

### Reason about objects
- \`is\` asks *"same object?"* (\`acct is bob\` → \`False\`); \`isinstance\` asks *"same type?"*
- Attributes are **dynamic** — add one on the fly; \`vars(acct)\` shows them all

### Gotcha — class vs instance state
- A **mutable class attribute** (a \`[]\` in the class body) is **shared** by all instances — mutating it hits everyone; keep per-object data on \`self\`

One blueprint, many objects. Now — how do classes relate to each other?`,
  narration:
    "To create an object, you call the class as if it were a function: acct equals Account, parenthesis, Sam. That single line does two things — Python first makes a fresh, empty object, then calls __init__ on it, passing Sam in as name, which is when self dot name and self dot balance get set. When the line finishes, acct is a fully-formed instance: a real object with its own name and balance, living in memory. You use it entirely through the dot. Acct dot deposit of fifty calls the deposit method — and notice you don't pass self; Python sees you called deposit on acct and slips acct in as self for you. Acct dot balance and acct dot name read its attributes. The word to hold onto is independence. If I write bob equals Account of Bob, I get a completely separate object — same methods, same __init__, but its own data: bob's balance starts at zero regardless of what acct is doing. Two quick ways to reason about objects: acct is bob is False, because they're distinct objects, while isinstance of acct comma Account is True, confirming acct's type. Python objects are also refreshingly open — attributes are dynamic, so you can even attach a new one on the fly, like acct dot note equals vip, and vars of acct shows you the whole attribute dictionary. And reaching through the class, Account dot bank, gives you that shared class attribute — with one caution: if a class attribute is mutable, like a list, every instance shares that single object, so mutating it changes them all; keep per-object data on self. That's the payoff of the blueprint model: define the behavior once, stamp out as many instances as you need, each carrying its own state. So we can create objects and use them. The next question is the one that makes object-oriented programming powerful: how do classes relate to one another? That starts with inheritance.",
}

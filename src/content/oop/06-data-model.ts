import type { Section } from '../types'

export const dataModel: Section = {
  id: 'data-model',
  title: 'The data model',
  scene: 'oop-dunders',
  slide: `## dunders — the data model

**Dunder** (double-underscore) methods are **hooks**: define one, and Python's built-in syntax calls it on your object.

### The mental model
- The operator/function you know maps to a hook — \`print\`→\`__repr__\`, \`==\`→\`__eq__\`, \`<\`→\`__lt__\`, \`len()\`→\`__len__\`, \`+\`→\`__add__\`
- Define the hook and the **syntax just works** — \`sorted()\` orders your objects because it's built on \`__lt__\`

### Beyond operators
- More hooks: \`__str__\` (print) vs \`__repr__\` (debug) · \`__hash__\` (use in sets/dicts) · \`__call__\` (call an instance) · \`__enter__\`/\`__exit__\` (\`with\`, Course 5)

### Why it matters — & a gotcha
- **One uniform protocol** — the same \`len()\` works on a list, a dict, **and** your class
- Define \`__eq__\` and Python **drops \`__hash__\`** — add it back if you need the object in a set/dict

You rarely write these by hand for plain data — the next card does it for you.`,
  narration:
    "Here's what makes Python's object system special. When you write len of something, or x plus y, or you print an object, Python doesn't have built-in magic for each type — instead it calls a specially-named method on the object, and your class can supply it. These are the dunder methods — dunder is just shorthand for double-underscore. Define __repr__, and it controls how your object shows up when you print it or view it in the REPL — turning a useless memory address into something like dollar-sign one hundred. Define __eq__, and you decide what double-equals means for your type — maybe two amounts of money are equal when their values match. Define __lt__, the less-than hook, and not only does m one less-than m two work, but the built-in sorted can order a whole list of your objects, because sorting is built on less-than. Define __len__, and len of your object works. Define __add__, and the plus operator works — which is exactly how a Money or a Vector type supports natural arithmetic, m1 plus m2. There are many more of these hooks — __str__ for a friendly string versus __repr__ for the debugging one, __hash__ so your object can live in a set or a dict, __call__ to make an instance callable like a function, and __enter__ and __exit__ for the with-statement coming up next course. And one sharp gotcha to file away: the moment you define __eq__, Python drops the default __hash__ and your objects become unhashable — so if you still need them in a set or as dict keys, define __hash__ as well. This is called the data model, and it's the deep idea behind Python: remember from the data-structures course that everything is an object — well, this is the flip side, that one uniform protocol runs across all of them, so the very same len function works on a list, a string, a dictionary, and your brand-new class, purely because each one implements __len__. Your types become first-class citizens, indistinguishable from the built-ins. Now, writing repr and eq and init by hand for every little data-holding class gets tedious fast — so Python gives you a shortcut that generates them all for you.",
}

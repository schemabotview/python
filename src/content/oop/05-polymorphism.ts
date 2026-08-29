import type { Section } from '../types'

export const polymorphism: Section = {
  id: 'polymorphism',
  title: 'Polymorphism',
  scene: 'oop-polymorphism',
  slide: `## polymorphism — one interface, many types

The **same call** does the right thing for each object's **actual type** — the caller never checks which is which.

### The mental model
- Loop over mixed types calling one method (\`a.summary()\`); each object's **own** overridden version runs
- You code in terms of **what an object can do**, not what class it descends from

### Duck typing — Python's twist
- No shared base class **required** — *"if it walks like a duck…"*; an unrelated type with the right method just fits
- Python checks at **call time**, not by declared type

### It's everywhere already
- \`len("hi")\` vs \`len([1,2])\` — same call, each type's own \`__len__\`: one protocol, many types

That covers relating types. Next: making your types feel **built-in**.`,
  narration:
    "Polymorphism means many forms — the idea that one piece of code can work with objects of different types, and each does the right thing. Picture a list holding a checking account and a savings account. You loop over them and call a dot summary on each. Even though they're different types, the correct version runs for each object — the checking account prints a plain balance, say a hundred dollars, while the savings account prints its balance plus interest — because each class overrode summary in its own way. Your loop doesn't care which is which; it just calls the method and trusts each object to respond appropriately. That's already powerful with inheritance. But Python takes it a step further with something called duck typing, from the saying: if it walks like a duck and quacks like a duck, treat it as a duck. In Python, an object doesn't need to inherit from a common base class to be usable — it just needs to have the method you're calling. Watch how a totally unrelated Wallet class, which never inherited from Account but does define a summary method, drops straight into the same loop and just works. If it has a summary method, it fits, full stop. Python checks at the moment of the call, not against a declared type. And you've been relying on polymorphism all along without naming it: len of a string and len of a list both work because each type implements the same double-underscore-len hook — one protocol, many types. This makes Python code remarkably flexible: you write functions in terms of what an object can do, not what class it descends from. So inheritance and polymorphism together let a whole family of types share behavior and be used interchangeably. Now let's shift from relating types to polishing a single one — starting with how to make your objects feel like native Python.",
}

import type { Section } from '../types'

export const inheritance: Section = {
  id: 'inheritance',
  title: 'Inheritance',
  scene: 'oop-inheritance',
  slide: `## inheritance — reuse & specialize

Write a general base class once; a **subclass** inherits everything and then **specializes** — no copying.

### The mental model
- **is-a**: \`Savings(Account)\` means a \`Savings\` *is an* \`Account\` — it gets all the base's data & methods for free
- **Override** to change a method for the subclass; **\`super()\`** to *extend* the base rather than replace it (run its \`__init__\`, then add your own)

### The MRO — which method wins
- Lookup **walks up a fixed chain**: \`Savings → Account → object\` (the root every class shares)
- Deterministic — inspect it with \`__mro__\`; \`issubclass\` confirms the relation

### Good judgment
- Inherit only for a true **is-a**; if it's really *has-a*, prefer **composition** — hold an object instead of subclassing it

Inheritance gives many types a shared base. Polymorphism uses that.`,
  narration:
    "Real programs are full of types that are variations on a theme, and inheritance is how you express that without repeating yourself. You write a general base class — Account — and then a more specific class that builds on it: class Savings, and in parentheses, Account. That parenthesis is the whole mechanism: it says a Savings is an Account. Savings automatically gets everything Account has — the __init__, the attributes, the deposit method — for free, without copying a line. Then it specializes in two ways. It can override a method — redefine it to behave differently for the subclass. And it can extend rather than replace, using super. When Savings needs its own __init__ but still wants Account's setup to run, it calls super dot __init__ of name — super means the parent — and then adds what's savings-specific, like the interest rate. That combination — inherit the common parts, override what differs, reach up with super when you want both — is the everyday rhythm of inheritance. And it raises a precise question: if both Savings and Account defined a method, which runs? Python follows a fixed lookup order called the method resolution order, or MRO — it starts at the object's own class and walks up: Savings, then Account, then the root class object that every class ultimately inherits from. You can see it any time with Savings dot double-underscore-m-r-o, and you can ask issubclass of Savings comma Account, which is True. In practice a Savings just works both ways: it deposits with the method it inherited from Account, and adds interest with its own new method. One judgment call worth carrying: use inheritance only when it's a true is-a relationship — if a type merely has-a something, prefer composition, holding that object as an attribute rather than subclassing it. Now, because many types can share a base, you can treat them uniformly — and that's polymorphism.",
}

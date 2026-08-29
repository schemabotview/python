import type { Section } from '../types'

export const abstraction: Section = {
  id: 'abstraction',
  title: 'Abstraction',
  scene: 'oop-abstraction',
  slide: `## abstraction — define the interface

An **abstract base class** (ABC) defines *what* every subclass must do and leaves *how* to each — a **contract**.

### The mental model
- Mark methods \`@abstractmethod\` with **no body** — the base declares the interface, each concrete subclass must supply it
- An ABC can **also** carry shared concrete methods that call the abstract ones (inherit the common logic, fill the gap)

### The guarantee — enforced by the language
- You **can't instantiate** an ABC, or a subclass that skipped any abstract method
- The error fires **early, at construction** — not deep inside a later call

### ABC vs \`Protocol\`
- An **ABC** is *nominal* — a subclass must explicitly inherit it; a **\`Protocol\`** (typing) is *structural* — anything with the right methods matches, no inheritance (static duck typing)`,
  narration:
    "Abstraction is about defining an interface — the set of operations a family of types must support — while leaving each type free to implement it however it likes. Python expresses this with abstract base classes. You import ABC and abstractmethod from the abc module, and you write your base class inheriting from ABC — class Account, parenthesis, ABC. Then you mark one or more methods with the at-abstractmethod decorator and give them no real body, just an ellipsis. That declares a contract: every concrete account — checking, savings, credit — must provide its own interest method. An abstract base isn't all holes, though — it can also carry ordinary concrete methods, like a describe that calls self dot interest; subclasses inherit that shared logic while still being forced to fill in the abstract piece. The payoff is a strong guarantee enforced by the language. You cannot instantiate an abstract base class directly, and you cannot instantiate a subclass that has forgotten to implement even one abstract method — Python raises an error the moment you try to construct it. That means a whole category of bugs surfaces early, at object creation, rather than blowing up deep inside some later call when a missing method is finally reached. Abstraction pairs naturally with polymorphism: the ABC promises the interface exists, and polymorphism lets you call it uniformly across every implementation. One modern companion worth knowing: an ABC is nominal — a subclass must explicitly inherit it — whereas a Protocol, from the typing module, is structural, matching any object that has the right methods without inheriting anything; it's static duck typing, ideal when you can't modify the classes involved. With encapsulation, abstraction, inheritance, and polymorphism, you've now met the four classic pillars of object-oriented programming — and with them, the complete toolkit for modeling a problem in objects. Let's step back and take in the whole board.",
}

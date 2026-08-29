import type { Section } from '../types'

// §10 reuses the oop-overview board (whole board lit) as a bookend to §1. Hands off to Course 5 (idioms).
export const youAreHere: Section = {
  id: 'you-are-here',
  title: 'You are here',
  scene: 'oop-overview',
  slide: `## You are here

You can now **model your own types** — data and behavior, bundled.

### What you can now do
- Write a **class**, construct **objects**, relate them with **inheritance** & **polymorphism**
- Make them native with **dunders**; generate boilerplate with **\`@dataclass\`**
- Apply the pillars — **encapsulation** & **abstraction**

### The road ahead
- Next: **Pythonic power tools** — iterators & generators, decorators, context managers
- Then the stdlib, concurrency, and the capstone project

You model your own types now — next, the idioms that make Python *Python*.`,
  narration:
    "Step back and take in the whole board. You started this course using only the types Python gave you; you're leaving it able to design your own. You can write a class that bundles data and behavior, and stamp out independent objects from it. You can relate types with inheritance — reusing a base, overriding what differs, reaching up with super, all resolved by a well-defined method order — and use them interchangeably through polymorphism and duck typing. You can make your objects feel like built-ins with the data model's dunders, and skip the boilerplate entirely with a dataclass, which reads the type hints on your fields to build itself. And you can apply the classic pillars — encapsulation to guard an object's internals, and abstraction to define the interface subclasses must honor. That's the complete toolkit for modeling a problem in objects. What's next is a different kind of power. Python has a set of distinctive idioms — iterators and generators, decorators, context managers — the tools that make experienced Python code look clean and effortless in a way no other language quite matches. Those idioms are where Python really becomes Python. Let's go learn them.",
}

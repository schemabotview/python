import type { Section } from '../types'

export const whyObjects: Section = {
  id: 'why-objects',
  title: 'Object-oriented Python',
  scene: 'oop-overview',
  slide: `## Model your own types

So far you've used the types Python **gave** you. Now you'll build your **own**.

### The core idea
- An **object** bundles **data** (attributes) with the **behavior** that acts on it (methods)
- A **class** is the **blueprint**; an **object** is one **instance** stamped from it

### The feature map ahead
- **class · object** → **inheritance · polymorphism**
- → **dunders · \`@dataclass\`** → **encapsulation · abstraction**

Eight features, each a few lines of real code — let's tour them.`,
  narration:
    "Up to now, every type you've used — the numbers, the strings, the lists and dicts — Python handed to you ready-made. In this course you learn to build your own. The idea at the heart of object-oriented programming is bundling: an object packages data together with the behavior that acts on that data, in one unit. Think about a bank account. Loosely, you could track it with a couple of variables — a name and a balance — plus some functions that modify them. But the name, the balance, and the operations that deposit and withdraw all belong together. An object lets you say so. The blueprint for that bundle is a class, and from one class you stamp out many objects, or instances — this account for Sam, that account for Alex, each with its own data but sharing the same behavior. This whole course is one board of eight features, each shown as a few lines of real Python. We'll start with the two foundations — defining a class and using an object — then how classes relate through inheritance and polymorphism, then the Pythonic touches that make your types feel built-in, the data model and dataclasses, and finally the two disciplines that keep object code robust: encapsulation and abstraction. Let's begin with the blueprint itself.",
}

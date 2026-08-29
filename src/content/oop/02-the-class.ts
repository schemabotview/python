import type { Section } from '../types'

export const theClass: Section = {
  id: 'the-class',
  title: 'The class',
  scene: 'oop-class',
  slide: `## class — the blueprint

A **class** is a **blueprint** — it declares what an object of that type **has** (data) and **does** (behaviour); the code stamps instances from it.

### Attributes & methods
- **Instance attributes** (\`self.x\`) are **per-object**; a bare \`x = …\` in the class body is a **class attribute** — one copy **shared** by all instances
- **Methods** are functions bound to the object — they can **guard** its rules (reject an overdraft), not just store data
- \`__init__\` runs **automatically** at creation to set up the starting data

### \`self\` — the thread through every method
- \`self\` **is this particular object**: each method's first parameter, but Python passes it for you (never at the call site). Store on \`self\`, read back through \`self\` — that's how an object **remembers**
- Name classes in \`CapWords\`; a \`__repr__\` prints \`Account(Sam)\`, not an address; a **\`@classmethod\`** (arg \`cls\`) is the usual **alternate constructor** (\`Account.from_dict(...)\` → \`cls(...)\`)`,
  narration:
    "A class is written with the class keyword and a name — capitalized by convention, so class Account. Inside it you define functions, and a function that lives in a class is called a method. The most important one is __init__ — two underscores, init, two underscores — the constructor, which Python calls automatically every time you create a new object. Its job is to set up the object's starting data. Now look at the first parameter of every method: self. This trips people up at first, so let's be clear. Self is the particular object the method is working on. When you write self dot name equals name inside __init__, you're saying: on this object, create an attribute called name and store the given value. Attributes set on self are the object's own data — here, name and balance — and each object gets its very own copy. Contrast that with a value written straight in the class body, like bank equals GraphL: that's a class attribute, shared by every instance. Methods are where behavior lives, and they can do more than store — they can guard. Look at withdraw: before subtracting, it checks the amount against the balance and raises a ValueError if the funds aren't there, so the object protects its own rules. When a method needs the object's data, it reaches for it through self again — self dot balance plus-equals the amount. One more method worth defining early is __repr__: it returns the string Python shows when you print the object, turning a cryptic memory address into something readable like Account of Sam. One aside before we move on: alongside these ordinary methods that take self, a method decorated at-classmethod takes the class itself, cls, and is the standard way to write an alternate constructor — Account dot from-dict, say, that builds an account from a dictionary and returns cls of its fields, so it does the right thing for subclasses too. So self is the thread tying every method to the specific object it was called on; you list it in the definition, but Python passes it in for you — you never pass it at the call site. Still, the class is only the mould. Nothing exists yet. To get an actual account, we have to stamp one out.",
}

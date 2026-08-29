import type { Section } from '../types'

export const objects: Section = {
  id: 'objects',
  title: 'Everything is an object',
  scene: 'objects',
  focus: 'header',
  slide: `## Everything is an object

Those values \`2\`, \`3\`, \`5\` aren't stored *in* the frame — they're **objects on the heap**. In Python, **everything** is.

### One object, byte by byte
- \`int 5\` is a **\`PyLongObject\`**: the shared header — **\`ob_refcnt\`** (\`0x00\`) + **\`ob_type\`** (\`0x08\`) — then the int's body, **\`ob_size\`** (\`0x10\`) + **\`ob_digit[]\`** (\`0x18\`)
- The header is **24 bytes**, so \`sys.getsizeof(5)\` is **28** — big ints just grow more \`ob_digit\` chunks (arbitrary precision, no 64-bit overflow)

### Same header, different tail
- **\`float\`** stores its value **inline** (\`ob_fval\`) — fixed size
- **\`list\`/\`str\`** are **\`PyVarObject\`s**: header + a **length** + a **pointer** to a separate array
- A plain **class instance** adds a **\`__dict__\`** — one hop per attribute (\`__slots__\` avoids it)

### Names are references
- A variable **points at** an object; \`=\` copies the **pointer**, not the object
- **\`is\`** = same object · **\`==\`** = same value · **\`id(x)\`** = its address; a class just adds a new **\`ob_type\`** (Course 4)`,
  narration:
    "Here's the answer to where the values live. The integers two, three, and five aren't tucked inside the frame or the stack — those places only hold pointers. The actual values are objects sitting out on the heap, and this is the single most important fact about the language: in Python, everything is an object. Not just lists and dictionaries — integers, strings, functions, even types themselves are objects on this heap. So let's open one up and look at its real shape in memory. Take our int five. Under the hood it's a PyLongObject, and it starts with a header that every single Python object shares: first ob_refcnt, at byte offset zero — a counter of how many references currently point at this object; then ob_type, eight bytes later — a pointer to the object's type, which is what decides what the object can do, whether you can add it, index it, call it. After that shared header comes the part specific to integers: ob_size, how many digits, and ob_digit, the digits themselves — here just the number five. That header alone is twenty-four bytes, which is why, if you call sys dot getsizeof on the number five, you get twenty-eight, not the eight bytes a raw machine integer would take. And that layout is exactly why Python integers never overflow: a big number just grows more ob_digit chunks, arbitrary precision, for free. Now, that same header is universal, but what follows it changes with the type. A float stores its value inline, right after the header — fixed size. A list or a string is a variable-sized object: header, plus a length, plus a pointer off to a separate array holding the contents. And a plain class instance you define carries a pointer to a dictionary — its attributes — which is one extra hop every time you read a dot-something. Same header on all of them, different tail. This shape also explains how variables really work: a name isn't a box holding a value, it's a label pointing at one of these objects. Write b equals a and you don't copy the object, you just point b at the very same one — which is why double-equals asks are these values equal, while the is keyword asks are these literally the same object at the same address, something you can check with the id function. And defining your own class, in Course four, isn't exotic — it's just creating a new ob_type with this same header. So every value carries a refcount, right there at byte zero. That little counter looks harmless — until more than one thread is running at once. That's the last piece of the runtime, and it's called the GIL.",
}

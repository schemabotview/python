import type { Section } from '../types'

export const dataclass: Section = {
  id: 'dataclass',
  title: '@dataclass',
  scene: 'oop-dataclass',
  slide: `## @dataclass — the boilerplate, generated

For a class that mostly **holds data**, \`@dataclass\` generates the tedious dunders **from the fields you declare**.

### The mental model
- Declare typed fields (\`x: int\`, \`y: int = 0\`); the decorator writes \`__init__\`/\`__repr__\`/\`__eq__\` — a dozen lines become three. Those annotations are the **type hints** from Course 2, now doing real work
- **Gotcha**: a mutable default needs \`field(default_factory=list)\`, never a bare \`[]\` (or all instances share one list)

### When & options
- Reach for **records, config, DTOs** — anything mostly attributes
- \`frozen=True\` → immutable & hashable (like a tuple) · \`order=True\` → adds \`<\`/\`>\` & sorting
- \`__post_init__\` validates/derives after \`__init__\` · \`asdict\`/\`replace\` · \`@dataclass(slots=True)\` trims memory`,
  narration:
    "This is one of the most beloved features in modern Python. You put the dataclass decorator — an at-sign followed by dataclass — on top of a class, list the fields you want with their types, and Python writes the tedious methods for you. From just x colon int and y colon int, the dataclass gives you a full __init__ that takes x and y, a __repr__ that prints Point of x one, y two, and an __eq__ that compares two points field by field — none of which you had to type. Fields can carry defaults, like y colon int equals zero; one gotcha is that a mutable default such as a list must be written with field, default-factory list, never a bare pair of brackets, so every instance gets its own fresh list. Compare all that to a class you hand-write: for a type that mostly just holds data, a dataclass collapses a dozen lines into three. Reach for it whenever a class is essentially a record — a configuration, a data-transfer object, a point, a row of results. And it takes options in the decorator: pass frozen equals True and the instances become immutable, which also makes them hashable, so they can live in sets or serve as dictionary keys, just like tuples; pass order equals True and Python also generates the comparison operators, so your objects sort. A few more conveniences round it out: a post-init method — dunder post-init — runs right after the generated init, for validation or computing derived fields; asdict and replace turn an instance into a dictionary or make an edited copy; and passing slots equals True trims each instance's memory. Dataclasses are the fastest honest way to model plain data in Python, and they lean entirely on the annotations you write for each field — those colon-type hints you first met back in Course 2, now doing real work: Python is dynamically typed and won't enforce them at runtime, but the dataclass reads them to build itself, and tools like mypy check them for you. That brings us to the disciplines that keep object code robust — first, controlling access to an object's internals, which is encapsulation.",
}

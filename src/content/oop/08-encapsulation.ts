import type { Section } from '../types'

export const encapsulation: Section = {
  id: 'encapsulation',
  title: 'Encapsulation',
  scene: 'oop-encapsulation',
  slide: `## encapsulation — control access

Bundle an object's state with the methods that **guard** it, and signal what's meant to be **internal**.

### Python has no hard \`private\` — it's convention
- A leading \`_\` means **"internal, don't touch"**; a double \`__\` gets **name-mangled** so subclasses won't collide
- Nothing is truly locked — Python trusts you and signals intent by **naming**

### \`@property\` — a method that looks like an attribute
- Read \`a.balance\` (no parens) but your **getter runs**; a \`@balance.setter\` **validates writes** and can raise before a bad value is stored
- Callers keep clean attribute syntax while you keep control — no \`get_balance()\`/\`set_balance()\`

### Also — read-only & computed
- A \`@property\` with **no setter** is **read-only**; use one for a **computed** value (\`area\` from \`w*h\`) that recomputes each read · \`@x.deleter\` handles \`del\`

Encapsulation hides *how*. Abstraction defines *what* — with an ABC.`,
  narration:
    "Encapsulation is the principle of bundling an object's data together with the methods that protect it, and being deliberate about what the outside world can touch. Rather than letting anyone set a balance to any value, you route changes through methods that can enforce rules — no overdrafts, no negative deposits. Now, unlike some languages, Python has no hard private keyword; it's refreshingly relaxed and works by convention. A single leading underscore, like _balance, is a quiet signal that says this is internal, please don't poke at it directly. A double leading underscore, like __balance, goes further — Python actually mangles the name so a subclass won't accidentally collide with it. But nothing is truly locked; Python trusts the programmer and communicates intent through naming. The elegant tool for controlled access is the property. You mark a method with the at-property decorator, and from then on it's accessed like a plain attribute — you write acct dot balance, no parentheses — but behind the scenes your getter method runs. And you can pair it with a setter: decorate a second balance method with at-balance-dot-setter, and now an assignment like acct dot balance equals minus-five actually runs your code, which can validate the value and raise before anything bad is stored. So callers keep the clean attribute syntax while you keep full control of reads and writes — no clunky get-balance or set-balance methods. And a property does more than guard writes: leave off the setter and it's simply read-only, and because the getter is just code, it's the perfect way to expose a computed value — an area derived from width times height that always stays in sync — with an optional deleter method to handle del. That's the heart of encapsulation: hiding how an object works and exposing a clean, safe surface. Its close cousin turns that around — instead of hiding the how, it defines the required what. That's abstraction.",
}

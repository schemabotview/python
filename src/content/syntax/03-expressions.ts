import type { Section } from '../types'

export const expressions: Section = {
  id: 'expressions',
  title: 'Expressions & operators',
  scene: 'expressions',
  slide: `## Expressions & operators

An **expression** combines values with **operators** and evaluates to a **new value**.

### The operator families
- **Arithmetic** \`+ - * / // % **\` · **Comparison** \`< <= > >= == !=\` (chainable: \`0 < x < 10\`)
- **Logical** \`and or not\` (short-circuit) · **Identity / membership** \`is\` / \`is not\`, \`in\` / \`not in\`
- **Bitwise** \`& | ^ ~ << >>\` — treat an integer as raw bits (rarely needed day-to-day)

### Evaluation
- **Precedence** decides order — \`2 + 3 * 4\` is \`14\`; parentheses override
- **Truthiness** — every value is truthy or falsy (\`0\`, \`""\`, \`[]\`, \`None\` are falsy)

### Walrus
- \`:=\` assigns *inside* an expression — \`while (line := f.readline()):\`

Values in hand — now the constructs that decide what runs, starting with conditionals.`,
  narration:
    "An expression is how you build a new value out of existing ones, using operators, and there are a few families to know. Arithmetic is the obvious one — plus, minus, times, divide — plus a couple of Python specials: double-slash for floor division, percent for remainder, and double-star for powers. Comparison operators — less than, equal-equal, not-equal — produce True or False, and a nice Python touch is that you can chain them, writing zero less than x less than ten just like in math. Logical operators — and, or, not — combine those booleans, and they short-circuit: or stops as soon as it finds something true, which is both faster and a common idiom. Two more operators are worth calling out: is, which asks whether two names point at the exact same object, and in, which asks whether a value appears in a collection. There's also a family of bitwise operators — and, or, exclusive-or, shift — that manipulate a number's raw binary bits; you rarely need them in everyday code, but they're part of the toolkit. When you mix operators, precedence decides the order — two plus three times four is fourteen, not twenty, because multiplication binds tighter; when in doubt, parentheses make it explicit. And underlying every comparison is truthiness: every Python value counts as either truthy or falsy, with zero, the empty string, empty containers, and None all being falsy. One last modern operator, the walrus, colon-equals, lets you assign inside an expression — handy for grabbing a value and testing it in one breath. Now that we can produce values, the next few constructs decide what actually runs — beginning with making a choice.",
}

import type { Section } from '../types'

export const collections: Section = {
  id: 'collections',
  title: 'collections',
  scene: 'stdlib-collections',
  slide: `## \`collections\` — specialized containers

Upgraded containers for jobs the built-ins do awkwardly.

### Four that change how you write code
- **\`Counter\`** — tally hashables in one step (\`most_common(n)\`) — no hand-rolled counting dict
- **\`defaultdict\`** — auto-creates a missing key's default (\`defaultdict(list)\`) — skips the "key exists?" dance
- **\`deque\`** — fast \`append\`/\`pop\` at **both** ends (a list is slow at the left) — queues, sliding windows
- **\`namedtuple\`** — a tuple with **named** fields — a lightweight record without a full class

### Why
- Each turns a common multi-line pattern into one clear, **fast** call

Powerful code still misbehaves — so you need to see what it did: \`logging\`.`,
  narration:
    "The collections module is a small box of specialized container types that handle jobs the plain dict and list do clumsily, and four of them will genuinely change how you write code. First, Counter — give it any iterable and it tallies how many times each item appears, so Counter of a list of words instantly gives you word frequencies, and its most-common method returns the top entries in order. Counting things by hand with a dictionary is a pattern you'll never write again. Second, defaultdict — a dictionary that automatically creates a default value the first time you touch a missing key. Make a defaultdict of list and you can append to defaultdict-bracket-key without ever checking whether the key exists first, which is perfect for grouping items into buckets. It eliminates that tedious if-key-not-in-dict dance. Third, deque — a double-ended queue that, unlike a list, is fast at both ends. Appending or popping from the left of a big list is slow because everything shifts; a deque does it in constant time, making it the right choice for queues and sliding windows. And fourth, namedtuple — a tuple whose fields have names, giving you a lightweight, immutable record where you write point dot x instead of point-bracket-zero, without the ceremony of a full class. Each of these turns a common multi-line pattern into a single clear, fast call. Now, powerful code still misbehaves, and when it does you need visibility into what actually happened. The professional tool for that is logging.",
}

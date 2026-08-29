import type { Section } from '../types'

export const iteratorProtocol: Section = {
  id: 'iterator-protocol',
  title: 'The iterator protocol',
  scene: 'idioms-iterators',
  slide: `## The iterator protocol

Every \`for\` loop runs the same **protocol** — now you can see it directly.

### The mental model
- \`iter(obj)\` → an **iterator** (a cursor); \`next(it)\` pulls the next value; **\`StopIteration\`** ends it
- A \`for\` loop is exactly *"\`iter\` once, then \`next\` until \`StopIteration\`"* — nothing more

### Why it's powerful
- Any object with \`__iter__\` is **iterable** — lists, files, dicts, your own classes, one syntax
- Values come **on demand** — the iterator needn't hold the whole sequence, so it can stream huge or **infinite** data

### Roll your own
- A class with \`__iter__\` + \`__next__\` is a full iterator (\`Countdown\`) — fiddly by hand

Writing \`__iter__\`/\`__next__\` by hand is tedious — generators do it for you.`,
  narration:
    "Let's demystify the for-loop, because everything in this course builds on it. When you write for x in something, Python runs a precise, two-step protocol behind the scenes. First it calls iter on the object — that triggers the object's dunder __iter__ method and hands back an iterator, a little cursor that knows where you are in the sequence. Then, over and over, Python calls next on that iterator, which triggers __next__ and returns the next value. It keeps calling next, pulling one value at a time, until the iterator has nothing left — at which point __next__ raises a special exception, StopIteration, and Python quietly catches it and ends the loop. That's the whole magic. So a for-loop is just iter once, then next until StopIteration — and on screen you can see it written out longhand: get the iterator, then a while-True that calls next inside a try, breaking when StopIteration fires. Two consequences follow. First, any object that implements __iter__ is iterable — which is why you can loop over lists, strings, dicts, files, and your own classes with the same syntax. In fact you can build your own: give a class an __iter__ that returns itself and a __next__ that produces the next value or raises StopIteration, like the little Countdown on screen, and it drops straight into any for-loop. Second, and this is the powerful part, values are produced on demand — the iterator doesn't have to hold the entire sequence in memory; it can compute each value only when next asks for it. That laziness is the key to processing huge or even infinite streams. Now, implementing __iter__ and __next__ by hand, tracking state and raising StopIteration yourself, is fiddly. Python gives you a beautifully simple way to create iterators — generators.",
}

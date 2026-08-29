import type { Section } from '../types'

export const theMap: Section = {
  id: 'the-map',
  title: 'Python syntax at a glance',
  scene: 'syntax-overview',
  slide: `## Python syntax at a glance

Python's syntax is a small set of **building blocks** — here they are, construct by construct.

### What you write
- **Variables** — name your data · **Expressions** — compute with operators
- **Conditionals** — choose a path · **Loops** — repeat work

### And to organize it
- **Exceptions** — handle failure · **Functions** — package & reuse

### How this course works
- Each construct gets its **own page** next — the real syntax, in one place

Six constructs, and you can write almost anything. Let's take them one at a time.`,
  narration:
    "In the last course we saw how Python runs your code. Now we start writing it — and the good news is that Python's syntax is refreshingly small. It's really just a handful of building blocks that you combine to express anything, and here they all are on one board. This course walks them one at a time. At the top are the pieces that deal with data: variables, which give names to your values, and expressions, which compute new values using operators. Then come the two ways to control what runs: conditionals, which choose between paths, and loops, which repeat work. And at the bottom are the tools that organize a program: exceptions, for coping when something goes wrong, and functions, for packaging code so you can reuse it. That's the whole toolkit — six constructs. Learn to read and write these, and there's very little Python you won't understand. Let's take them one at a time, starting with variables.",
}

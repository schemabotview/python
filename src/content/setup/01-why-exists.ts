import type { Section } from '../types'

export const whyExists: Section = {
  id: 'why-exists',
  title: 'Why Python exists',
  scene: 'why-python',
  focus: 'py',
  slide: `## Why Python exists

Every language is invented to solve a problem. Python's was a **missing middle** — a way to get real work done without paying for it in tedium.

### Born to bridge a gap
- Created by **Guido van Rossum**, first released **1991**
- A readable successor to the **ABC** teaching language — more capable than shell scripts, far less fiddly than **C**
- One rule that stuck: **code is read more than it's written**, so optimize for *reading* (named after *Monty Python*, not the snake)
- **Batteries included** — a large standard library ships with the language; common tasks need no downloads

### Where you'll use it
- **Automation & scripting** — the everyday glue between tools
- **Web backends** — Django, Flask, FastAPI
- **Data, science & ML** — pandas, NumPy, PyTorch (Python is the default language of AI)
- **Prototyping & teaching** — idea to working code, fast`,
  narration:
    "Before we open the hood, it's worth knowing why this language exists at all. Back around 1990, if you wanted to automate something you had an uncomfortable choice: shell scripts, which were quick but fell apart on anything complex — or a language like C, powerful but slow and fiddly to write. Guido van Rossum wanted the space in between: a language genuinely easy to read and write, yet capable enough for real work. He built Python as a readable successor to a teaching language called ABC, released it in 1991, and named it — by the way — after Monty Python's Flying Circus, not the snake. The core idea was simple, and it stuck: code is read far more often than it's written, so the language should optimize for reading. That one decision is why Python looks the way it does. And it turned out a language that's fast to write and easy to read is good at almost everything — automation and scripting, web backends, data analysis, scientific computing, and today it's the default language of machine learning and AI. It's the glue of the software world. So that's what we're here to learn — and to really use it well, it helps to know what happens when you run it.",
}

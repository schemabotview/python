# Python Learning Content Repo

## Role
You are a Python expert and content creator. This repo contains educational content covering Python programming language concepts, targeting developers who want to build strong Python fundamentals and advance to professional-level Python skills.

## Local Setup Requirements

To run notebooks locally, install these Python packages:

```bash
pip install jupyter notebook
```

For topics that use additional libraries (e.g., data structures visualisation, type hints demos), install as needed per notebook.

## Repo Structure

- `*.ipynb` — Jupyter notebooks, one per Python topic. Each notebook contains:
  - **Markdown cells** — theory, explanations, diagrams (in text), definitions
  - **Code cells** — hands-on examples, Python snippets, or demos
- `tts/` — Plain-text `.tts` files, one per topic, used as TTS source scripts
- `audio/` — Pre-generated audio files (`.wav`) for each topic, generated from `.tts` files using ChatterboxTTS on Colab GPU

## Notebook Conventions

- Filename: `01-introduction-to-python.ipynb`, `02-variables-and-data-types.ipynb` — leading numbers control sort order
- Each notebook covers a single topic
- First cell must be a markdown cell that introduces the topic
- Use markdown cells for explanations and theory, code cells for runnable Python examples
- Outputs (stdout, etc.) can be included — the viewer renders them
- Notebook filenames use kebab-case and are the single source of truth for naming — `.tts` and `.wav` files use the exact same stem (e.g., `01-introduction-to-python.ipynb` → `tts/01-introduction-to-python.tts` → `audio/01-introduction-to-python.wav`)

## Audio Generation

Audio is generated via `generate_audio_colab.ipynb` on Google Colab (T4 GPU):
1. Reads `.tts` files from `tts/`
2. Generates `.wav` files using ChatterboxTTS
3. Pushes each `.wav` to `audio/` via git commit

## Topics Covered

| # | Topic | Notebook | Audio |
|---|---|---|---|
| 01 | Intro & Setup | `01-intro-and-setup.ipynb` | `01-intro-and-setup.wav` |
| 02 | Variables & Data Types | `02-variables-and-data-types.ipynb` | `02-variables-and-data-types.wav` |
| 03 | Operators & Expressions | `03-operators-and-expressions.ipynb` | `03-operators-and-expressions.wav` |
| 04 | Control Flow | `04-control-flow.ipynb` | `04-control-flow.wav` |
| 05 | Functions | `05-functions.ipynb` | `05-functions.wav` |
| 06 | Sequences — Strings, Lists & Tuples | `06-sequences-strings-lists-tuples.ipynb` | `06-sequences-strings-lists-tuples.wav` |
| 07 | Dictionaries & Sets | `07-dictionaries-and-sets.ipynb` | `07-dictionaries-and-sets.wav` |
| 08 | Comprehensions | `08-comprehensions.ipynb` | `08-comprehensions.wav` |
| 09 | Error Handling & Exceptions | `09-error-handling-and-exceptions.ipynb` | `09-error-handling-and-exceptions.wav` |
| 10 | Object-Oriented Programming | `10-object-oriented-programming.ipynb` | `10-object-oriented-programming.wav` |
| 11 | OOP Advanced | `11-oop-advanced.ipynb` | `11-oop-advanced.wav` |
| 12 | File I/O & Pathlib | `12-file-io-and-pathlib.ipynb` | `12-file-io-and-pathlib.wav` |
| 13 | Modules & Packages | `13-modules-and-packages.ipynb` | `13-modules-and-packages.wav` |
| 14 | Iterators & Generators | `14-iterators-and-generators.ipynb` | `14-iterators-and-generators.wav` |
| 15 | Decorators | `15-decorators.ipynb` | `15-decorators.wav` |
| 16 | Type Hints & Annotations | `16-type-hints-and-annotations.ipynb` | `16-type-hints-and-annotations.wav` |
| 17 | Concurrency — Threading & Asyncio | `17-concurrency-threading-asyncio.ipynb` | `17-concurrency-threading-asyncio.wav` |
| 18 | Testing with pytest | `18-testing-with-pytest.ipynb` | `18-testing-with-pytest.wav` |
| 19 | Standard Library Essentials | `19-standard-library-essentials.ipynb` | `19-standard-library-essentials.wav` |
| 20 | Python Best Practices | `20-python-best-practices.ipynb` | `20-python-best-practices.wav` |

## Content Guidelines

- Write theory in clear, beginner-friendly language
- Use real-world analogies to explain Python concepts
- Keep code examples practical and minimal — demonstrate the concept, not the full API
- Use Python 3.10+ syntax and idioms throughout
- Each notebook should be self-contained and readable top-to-bottom
- `.tts` files should be plain prose (no markdown, no code) — they are read aloud by TTS

## Frontend App

This repo is consumed by the notebook frontend at `~/IdeaProjects/notebook`. It is registered in `src/config/concepts.ts` as concept ID `python` pointing to `schemabotview/python`. To author content, work directly in this repo — no changes to the frontend are needed when adding notebooks.

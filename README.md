# python — GraphL concept repo

The **Python** concept app for [GraphL](https://graphl.in). One section = a left **scene** (react-flow
diagram or code snippet) + a right **slide** (markdown) + a **narration** script, rendered
responsively (4K capture · laptop web app · mobile) and captured to video.

Workspace-wide model, pipeline, and conventions: see the workspace [`README.md`](../README.md).

## The course arc (8 courses)

| # | Course | What it covers |
|--:|--------|----------------|
| 1 | **setup** | Install Python, the interpreter (CPython & the PVM), pip, virtual environments, modules. |
| 2 | **syntax** | The six building blocks — variables, expressions, conditionals, loops, exceptions, functions. |
| 3 | **data** | The five built-in containers — list, tuple, dict, set, str — and comprehensions. |
| 4 | **oop** | Classes & objects, inheritance & polymorphism, dunders, `@dataclass`, encapsulation. |
| 5 | **idioms** | Iterators & generators, closures, decorators, context managers, functools & itertools. |
| 6 | **stdlib** | Files & pathlib, JSON & CSV, datetime, regex, collections, logging. |
| 7 | **concurrency** | Threads & the GIL, the async event loop, processes; I/O- vs CPU-bound. |
| 8 | **project** | The capstone — build & ship a real log-analysis CLI end to end, from structure to PyPI. |

## Layout

```
src/
  render-engine/   layout + react-flow / code-snippet renderer (folder, not a package)
  scenes/          hand-authored scenes + registry
  content/         courses → sections (one file per section) + registry
  section/         composited scene-left / slide-right view (responsive)
  App.tsx          hash router — section (whole-scene) view · scene (individual) view
scripts/
  record-course.mjs / record-reels.mjs   capture → mp4 (landscape / portrait)
  thumb.mjs / gen-descriptions.mjs        thumbnails / video descriptions
  colab_generate_audio.ipynb              Colab + Chatterbox TTS → .wav
```

## Run

```bash
npm install
npm run dev                 # open the printed URL, try #/setup
npm run build               # tsc + vite build (must stay clean)
npm run record setup        # 4K video → scripts/out/setup.mp4
npm run record:reels setup  # portrait reels
```

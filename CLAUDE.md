# CLAUDE.md — python (lean operational pointers)

The **Python** concept app of GraphL. Workspace-wide invariants, content model, and working agreement
live in the workspace [`CLAUDE.md`](../CLAUDE.md) — read that first; this file is Python-specific.

## What this is

A standalone concept app: its own scenes + courses. The render engine is the **`@graphlearning/flow`**
package (repo `schemabotview/ui-flow`) — pinned by version, so an engine change never lands here
until this repo upgrades and re-verifies.
Each **section** = `(scene, slide, narration)`; the left scene is a react-flow diagram or a code
snippet, the right slide is markdown. One section = one slide = one video segment. (Python content
mixes concept diagrams with code-snippet scenes — pick whichever carries the idea.)

## Course arc (8)

`setup · syntax · data · oop · idioms · stdlib · concurrency · project`. Played in syllabus order;
`project` is the capstone (a log-analysis CLI) that weaves in every prior course.

## Layout

```
src/scenes/          scenes + registry (a scene can be shared across sections)
src/content/         courses → sections + registry
src/main.tsx         mounts <ConceptApp> — the whole app; the router, section view,
                     slide panel, catalog and narration are @graphlearning/shell
src/theme.css        this repo's three brand tokens — its entire design surface
scripts/             concept.json (publishing identity) · titles.json · colab notebook ·
                     audio-manifest. The record/capture/thumb TOOLS are
                     @graphlearning/shell bins (npm run record · thumb · gen:desc · …)
public/audio/<course>/   narration wavs
```

## Build & verify

- `npm install` → `npm run dev`; `npm run build` must stay clean.
- No test runner. Bar for a change: **build clean + visually correct** at the relevant route.
- Adding a scene: define in `src/scenes/`, register in `src/scenes/index.ts`.
- Adding content: add a `Section` under `src/content/<course>/`, list it in that folder's `index.ts`.

## Working agreement

Owner drives, **one reviewed slice at a time**: propose → approve → build → verify in-app → stop.
Before authoring a course/scene, deliver an **ASCII sketch** of the scene for approval first.

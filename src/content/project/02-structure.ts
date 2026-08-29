import type { Section } from '../types'

export const structure: Section = {
  id: 'structure',
  title: 'Structure',
  scene: 'capstone-structure',
  slide: `## Structure — lay out the project  ↩ C1

A real project is a **package** of small modules, plus config and tests.

### The shape
- **\`pyproject.toml\`** — the manifest: \`name\`, \`dependencies\`, and the command it installs
- \`[project.scripts]\` → \`logtally = "logtally.cli:main"\` maps the **command** to a function
- **\`src/logtally/\`** — one module per job (\`models\`, \`read\`, \`parse\`, …) · **\`tests/\`** mirrors it

### Why split it up
- Each module has **one responsibility** → easier to read, test, and change
- Imports wire them together (\`from logtally.parse import parse\`) *(C1)*

With the skeleton in place, let's define the data the tool works with.`,
  narration:
    "Every project begins with its structure, and almost every serious Python project looks like this. At the top sits pyproject.toml, the project's manifest — a single file that names the project, lists its dependencies like the rich library, and, crucially, declares the command it installs. That one line under project-dot-scripts — logtally equals logtally dot cli colon main — is what turns a folder of code into a real tool: it says, create a command named logtally that runs the main function in the cli module. That's the packaging idea from the very first course. Below it, the actual code lives inside a package — src slash logtally — with an init file marking it importable and then one module per job: models for the data types, read for input, parse for interpreting lines, aggregate for tallying, cli for the interface. That one-module-per-responsibility split is the single most important habit in structuring code: instead of a thousand-line script, you get small, focused files, each easy to understand and test in isolation, wired together with imports like from logtally dot parse import parse. Alongside the package sits a tests folder that mirrors it, where pytest will find the test files. So the skeleton is in place — a package, a manifest, a home for tests. Now let's fill it in, starting where good programs start: by modeling the data.",
}

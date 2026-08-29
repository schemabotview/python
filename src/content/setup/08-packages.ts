import type { Section } from '../types'

export const packages: Section = {
  id: 'packages',
  title: 'Packages: pip, PyPI & venv',
  scene: 'packages',
  focus: 'site',
  slide: `## Packages: pip, PyPI & venv

You rarely start from scratch — most of what you need is already on **PyPI** — and each project keeps its own private copy with a **venv**.

### The index & the installer
- **PyPI** (the Python Package Index) hosts **350k+** open-source packages
- **\`pip\`** fetches them into **\`site-packages/\`**: \`pip install requests\` → \`import requests\` just works
- \`pip install -r requirements.txt\` installs a whole project's deps at once

### One venv per project — no collisions
- A **global** install makes two projects that need different versions **collide**
- Fix: \`python3 -m venv .venv\` + \`source .venv/bin/activate\` — the project gets its **own** \`site-packages/\`
- Project A on \`requests 2.28\`, Project B on \`2.31\` — isolated; \`pip freeze > requirements.txt\` locks the set

Rule of thumb: **new project → new venv.** With deps sorted, we organize *our own* code next.`,
  narration:
    "So that's the other half of setup — the packages-and-imports band at the foot of the runtime. One of the best things about Python is that you rarely build from nothing: whatever you need, someone has probably already written and shared it. That shared code lives on PyPI, the Python Package Index, a public repository of more than three hundred and fifty thousand open-source packages. The tool that fetches them is pip. You run pip install requests, and pip reaches out to PyPI, downloads the package and everything it depends on, and drops it into a folder called site-packages — and from then on your code can just say import requests and use it. When a project needs many packages, you list them in a requirements file and install them all at once with pip install dash r. But there's a catch: if pip installs everything into one shared location for the whole machine, then two projects that need different versions of the same package collide. The fix is the virtual environment — the venv. Instead of one global pile of packages, each project gets its own private, self-contained set. You create one with python3 dash m venv dot venv, activate it with source dot venv slash bin slash activate, and from that moment pip and python point at the project's own environment — anything you install lands only there, invisible to every other project. So project A can use version 2.28 of a library while project B uses 2.31, each with its own isolated site-packages. And because it captures an exact set of versions, you can freeze it — pip freeze into a requirements file — so a teammate or a server recreates it precisely. The habit is simple: new project, new venv, every single time. With our dependencies sorted, there's one last piece of setup — organizing the code we write ourselves.",
}

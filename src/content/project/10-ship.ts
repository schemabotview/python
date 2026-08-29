import type { Section } from '../types'

export const ship: Section = {
  id: 'ship',
  title: 'Ship',
  scene: 'capstone-ship',
  slide: `## Ship — install & run  ↩ C1

The setup course, come full circle — isolate, install, run.

### Install & run
- \`python -m venv .venv\` → a clean, **isolated** environment *(C1)*
- \`pip install -e .\` → reads \`pyproject\`, installs \`logtally\` **editable**, wires up the command
- \`pytest\` → all green? · \`logtally ./logs\` → **run your own tool** on real files

### Publish to the world
- \`python -m build\` → a wheel · \`twine upload dist/*\` → **PyPI**, for anyone to \`pip install\`
- Structure → build → test → install → **ship**: the full lifecycle of a real program

That closes the loop — and the course. Let's see how far you've come.`,
  narration:
    "This is the setup course coming full circle, and it's the moment all the work becomes a real, usable tool. First you create a virtual environment with python dash-m venv, which gives the project a clean, isolated space for its dependencies so it never collides with anything else on your machine. You activate it, and then the key command: pip install dash-e dot. That reads your pyproject manifest, installs logtally in editable mode — meaning your source stays live, so edits take effect immediately — and, thanks to that project-dot-scripts line from the very first step, it wires up the logtally command on your path. You run pytest one more time to confirm everything's green, and then you type logtally, space, your logs folder, and watch your own tool scan real files and print a real report. Take a second to appreciate that arc: you structured a project, modeled its data, wrote its pipeline, scaled it across cores, gave it an interface, tested it, and installed it as a command. That is the complete lifecycle of real software — and publishing it to the whole world is just two more commands on the same manifest: python dash-m build packages your project into a wheel, and twine upload pushes it to PyPI, where anyone can pip-install it. You've shipped a program. Let's step all the way back and take in the whole journey.",
}

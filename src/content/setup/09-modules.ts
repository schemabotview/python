import type { Section } from '../types'

export const modules: Section = {
  id: 'modules',
  title: 'Modules & imports',
  scene: 'modules',
  focus: 'yourcode',
  slide: `## Modules & imports

Your own code plugs into the same subsystem libraries do: **every \`.py\` file is a module**.

### Modules & packages
- A **module** is one \`.py\` file; \`import helpers\` runs it **once** (cached in \`sys.modules\`) and gives you its names
- A **package** is a folder of modules (an \`__init__.py\` marks it) — \`import mypkg.helpers\` reaches inside

### Import forms
- \`import json\` — the whole module, used as \`json.loads(...)\`
- \`import numpy as np\` — an **alias** (a shorter name); \`from pathlib import Path\` — pull **one name** in
- Avoid \`from x import *\` — it dumps every name into your namespace

### The import system — resolution order
- \`import\` searches **\`sys.path\`** in order: **your code → stdlib → \`venv/site-packages\`** — **first match wins** (so never name a file \`random.py\`)
- \`if __name__ == "__main__":\` runs code **only** when the file is executed directly (module *and* script)`,
  narration:
    "We've brought in other people's code; now let's organize our own, because Python uses the exact same subsystem for both — the import system, at the bottom of this diagram. The unit of organization is the module, and a module is nothing more than a single dot-py file. If you have a file called helpers dot py, then from another file you write import helpers, and Python runs that file once and hands you everything defined inside it, under the name helpers. When a project grows past a few files, you group related modules into a folder, and that folder is a package — so import mypackage dot helpers reaches inside the package to find the module. Here's the part that ties setup together: when you write import, the import system goes looking in a specific order — your own code, then the standard library, then the packages pip installed into your virtual environment's site-packages — and the first match wins. That's why your modules, the stdlib, and installed libraries all feel like one seamless namespace. One idiom you'll see in nearly every file: the line if __name__ equals main. Code guarded by it runs only when you execute that file directly, not when someone imports it — so a single file can be both an importable module and a runnable script. And that completes the setup story. Let's step back and see the whole thing.",
}

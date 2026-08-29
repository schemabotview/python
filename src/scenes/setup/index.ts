import type { Scene } from '../../render-engine'
import { whyPython } from './why-python'
import { installRepl } from './install-repl'
import { pythonRuntime } from './python-runtime'
import { evalLoop } from './eval-loop'
import { frames } from './frames'
import { objects } from './objects'
import { theGil } from './the-gil'
import { packages } from './packages'
import { modules } from './modules'

// Course 1 (setup) scenes. One scene per section, mirroring src/content/setup. Added one section at a
// time: why-python · install-repl · python-runtime · eval-loop · frames · objects · the-gil ·
// packages · modules (python-runtime is reused by the §10 recap).
export const setupScenes: Scene[] = [whyPython, installRepl, pythonRuntime, evalLoop, frames, objects, theGil, packages, modules]

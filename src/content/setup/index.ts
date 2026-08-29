import type { Course } from '../types'
import { whyExists } from './01-why-exists'
import { installRepl } from './02-install-repl'
import { theRun } from './03-the-run'
import { evalLoop } from './04-eval-loop'
import { frames } from './05-frames'
import { objects } from './06-objects'
import { theGil } from './07-the-gil'
import { packages } from './08-packages'
import { modules } from './09-modules'
import { youAreHere } from './10-you-are-here'

// Course 1 — setup & the runtime. Ported from studio one reviewed section at a time. The arc: why
// Python exists · install & the REPL · how a file runs (the spine) · the eval loop · frames · objects
// · the GIL · packages (pip/PyPI/venv) · modules & imports · you-are-here recap.
export const setup: Course = {
  id: 'setup',
  title: 'Setup & the runtime',
  sections: [whyExists, installRepl, theRun, evalLoop, frames, objects, theGil, packages, modules, youAreHere],
}

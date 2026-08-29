import type { Scene } from '../../render-engine'
import { syntaxOverview } from './syntax-overview'
import { variables } from './variables'
import { expressions } from './expressions'
import { conditionals } from './conditionals'
import { loops } from './loops'
import { exceptions } from './exceptions'
import { functions } from './functions'

// Course 2 (syntax) scenes. syntax-overview is the §1/§8 bookend board; the six building-block code
// cards are each a single annotated .py cheat-sheet (variables · expressions · conditionals · loops ·
// exceptions · functions).
export const syntaxScenes: Scene[] = [syntaxOverview, variables, expressions, conditionals, loops, exceptions, functions]

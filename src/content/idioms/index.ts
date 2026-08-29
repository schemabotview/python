import type { Course } from '../types'
import { whyIdioms } from './01-why-idioms'
import { iteratorProtocol } from './02-iterator-protocol'
import { generators } from './03-generators'
import { closures } from './04-closures'
import { functionalBuiltins } from './05-functional-builtins'
import { decorators } from './06-decorators'
import { contextManagers } from './07-context-managers'
import { functools } from './08-functools'
import { itertools } from './09-itertools'
import { youAreHere } from './10-you-are-here'

// Course 5 — Pythonic idioms. The eight power tools, each on its own code page, bookended by the
// overview board (§1 why-idioms · §10 you-are-here).
export const idioms: Course = {
  id: 'idioms',
  title: 'Pythonic idioms',
  sections: [
    whyIdioms,
    iteratorProtocol,
    generators,
    closures,
    functionalBuiltins,
    decorators,
    contextManagers,
    functools,
    itertools,
    youAreHere,
  ],
}

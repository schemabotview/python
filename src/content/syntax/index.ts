import type { Course } from '../types'
import { theMap } from './01-the-map'
import { variables } from './02-variables'
import { expressions } from './03-expressions'
import { conditionals } from './04-conditionals'
import { loops } from './05-loops'
import { exceptions } from './06-exceptions'
import { functions } from './07-functions'
import { youAreHere } from './08-you-are-here'

// Course 2 — core syntax. The six building blocks, each on its own code page, bookended by the
// overview board (§1 the map · §8 you-are-here).
export const syntax: Course = {
  id: 'syntax',
  title: 'Core syntax',
  sections: [theMap, variables, expressions, conditionals, loops, exceptions, functions, youAreHere],
}

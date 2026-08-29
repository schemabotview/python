import type { Course } from '../types'
import { theBoard } from './01-the-board'
import { list } from './02-list'
import { tuple } from './03-tuple'
import { dict } from './04-dict'
import { set } from './05-set'
import { str } from './06-str'
import { comprehensions } from './07-comprehensions'
import { youAreHere } from './08-you-are-here'

// Course 3 — data structures. The five built-in containers + comprehensions, each on its own code
// page, bookended by the overview board (§1 the board · §8 you-are-here).
export const data: Course = {
  id: 'data',
  title: 'Data structures',
  sections: [theBoard, list, tuple, dict, set, str, comprehensions, youAreHere],
}

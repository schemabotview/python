import type { Course } from '../types'
import { whyObjects } from './01-why-objects'
import { theClass } from './02-the-class'
import { theObject } from './03-the-object'
import { inheritance } from './04-inheritance'
import { polymorphism } from './05-polymorphism'
import { dataModel } from './06-data-model'
import { dataclass } from './07-dataclass'
import { encapsulation } from './08-encapsulation'
import { abstraction } from './09-abstraction'
import { youAreHere } from './10-you-are-here'

// Course 4 — object-oriented Python. The eight features, each on its own code page, bookended by the
// overview board (§1 why-objects · §10 you-are-here).
export const oop: Course = {
  id: 'oop',
  title: 'Objects & classes',
  sections: [
    whyObjects,
    theClass,
    theObject,
    inheritance,
    polymorphism,
    dataModel,
    dataclass,
    encapsulation,
    abstraction,
    youAreHere,
  ],
}

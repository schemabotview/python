import type { Scene } from '../../render-engine'
import { oopOverview } from './oop-overview'
import { oopClass } from './oop-class'
import { oopObject } from './oop-object'
import { oopInheritance } from './oop-inheritance'
import { oopPolymorphism } from './oop-polymorphism'
import { oopDunders } from './oop-dunders'
import { oopDataclass } from './oop-dataclass'
import { oopEncapsulation } from './oop-encapsulation'
import { oopAbstraction } from './oop-abstraction'

// Course 4 (oop) scenes. oop-overview is the §1/§10 bookend board; the eight features are each a
// single code card (class · object · inheritance · polymorphism · dunders · dataclass · encapsulation
// · abstraction).
export const oopScenes: Scene[] = [
  oopOverview,
  oopClass,
  oopObject,
  oopInheritance,
  oopPolymorphism,
  oopDunders,
  oopDataclass,
  oopEncapsulation,
  oopAbstraction,
]

import type { Scene } from '@graphlearning/flow'
import { idiomsOverview } from './idioms-overview'
import { idiomsIterators } from './idioms-iterators'
import { idiomsGenerators } from './idioms-generators'
import { idiomsClosures } from './idioms-closures'
import { idiomsFunctional } from './idioms-functional'
import { idiomsDecorators } from './idioms-decorators'
import { idiomsContext } from './idioms-context'
import { idiomsFunctools } from './idioms-functools'
import { idiomsItertools } from './idioms-itertools'

// Course 5 (idioms) scenes. idioms-overview is the §1/§10 bookend board; the eight idioms are each a
// single code card (iterators · generators · closures · functional · decorators · context · functools
// · itertools).
export const idiomsScenes: Scene[] = [
  idiomsOverview,
  idiomsIterators,
  idiomsGenerators,
  idiomsClosures,
  idiomsFunctional,
  idiomsDecorators,
  idiomsContext,
  idiomsFunctools,
  idiomsItertools,
]

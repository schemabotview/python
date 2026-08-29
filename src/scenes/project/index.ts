import type { Scene } from '../../render-engine'
import { capstoneSpine } from './capstone-spine'
import { capstoneStructure } from './capstone-structure'
import { capstoneModel } from './capstone-model'
import { capstoneRead } from './capstone-read'
import { capstoneParse } from './capstone-parse'
import { capstoneAggregate } from './capstone-aggregate'
import { capstoneScale } from './capstone-scale'
import { capstoneInterface } from './capstone-interface'
import { capstoneTest } from './capstone-test'
import { capstoneShip } from './capstone-ship'

// Course 8 (project) scenes. capstone-spine is the §1 brief + §11 finale board; the nine build steps
// are each a code card (structure · model · read · parse · aggregate · scale · interface · test · ship).
export const projectScenes: Scene[] = [
  capstoneSpine,
  capstoneStructure,
  capstoneModel,
  capstoneRead,
  capstoneParse,
  capstoneAggregate,
  capstoneScale,
  capstoneInterface,
  capstoneTest,
  capstoneShip,
]

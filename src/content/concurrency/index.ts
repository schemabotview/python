import type { Course } from '../types'
import { manyAtOnce } from './01-many-at-once'
import { threadsModel } from './02-threads-model'
import { theGil } from './03-the-gil'
import { eventLoop } from './04-event-loop'
import { processesModel } from './05-processes-model'
import { workloads } from './06-workloads'
import { pools } from './07-pools'
import { asyncio } from './08-asyncio'
import { multiprocessing } from './09-multiprocessing'
import { youAreHere } from './10-you-are-here'

// Course 7 — concurrency & the runtime. The three models (on the reused concurrency-models diagram,
// §1-§5) then the four APIs as code cards (§6-§9), bookended by §1 many-at-once · §10 you-are-here.
export const concurrency: Course = {
  id: 'concurrency',
  title: 'Concurrency & the runtime',
  sections: [
    manyAtOnce,
    threadsModel,
    theGil,
    eventLoop,
    processesModel,
    workloads,
    pools,
    asyncio,
    multiprocessing,
    youAreHere,
  ],
}

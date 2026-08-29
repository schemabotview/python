import type { Course } from '../types'
import { theBrief } from './01-the-brief'
import { structure } from './02-structure'
import { model } from './03-model'
import { read } from './04-read'
import { parse } from './05-parse'
import { aggregate } from './06-aggregate'
import { scale } from './07-scale'
import { interface_ } from './08-interface'
import { test } from './09-test'
import { ship } from './10-ship'
import { shipped } from './11-shipped'

// Course 8 — the capstone. Build & ship logtally end to end, each step reusing an earlier course,
// bookended by the spine board (§1 the-brief · §11 shipped).
export const project: Course = {
  id: 'project',
  title: 'Capstone project',
  sections: [
    theBrief,
    structure,
    model,
    read,
    parse,
    aggregate,
    scale,
    interface_,
    test,
    ship,
    shipped,
  ],
}

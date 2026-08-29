import type { Course } from '../types'
import { batteriesIncluded } from './01-batteries-included'
import { fileIo } from './02-file-io'
import { pathlib } from './03-pathlib'
import { json } from './04-json'
import { csv } from './05-csv'
import { datetime } from './06-datetime'
import { re } from './07-re'
import { collections } from './08-collections'
import { logging } from './09-logging'
import { youAreHere } from './10-you-are-here'

// Course 6 — files, I/O & the standard library. Eight everyday modules, each on its own code page,
// bookended by the overview board (§1 batteries-included · §10 you-are-here).
export const stdlib: Course = {
  id: 'stdlib',
  title: 'Files, I/O & stdlib',
  sections: [
    batteriesIncluded,
    fileIo,
    pathlib,
    json,
    csv,
    datetime,
    re,
    collections,
    logging,
    youAreHere,
  ],
}

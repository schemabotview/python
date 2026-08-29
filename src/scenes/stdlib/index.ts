import type { Scene } from '../../render-engine'
import { stdlibOverview } from './stdlib-overview'
import { stdlibFiles } from './stdlib-files'
import { stdlibPathlib } from './stdlib-pathlib'
import { stdlibJson } from './stdlib-json'
import { stdlibCsv } from './stdlib-csv'
import { stdlibDatetime } from './stdlib-datetime'
import { stdlibRe } from './stdlib-re'
import { stdlibCollections } from './stdlib-collections'
import { stdlibLogging } from './stdlib-logging'

// Course 6 (stdlib) scenes. stdlib-overview is the §1/§10 bookend board; the eight areas are each a
// single code card (files · pathlib · json · csv · datetime · re · collections · logging).
export const stdlibScenes: Scene[] = [
  stdlibOverview,
  stdlibFiles,
  stdlibPathlib,
  stdlibJson,
  stdlibCsv,
  stdlibDatetime,
  stdlibRe,
  stdlibCollections,
  stdlibLogging,
]

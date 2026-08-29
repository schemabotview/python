import type { Scene } from '../../render-engine'
import { dataOverview } from './data-overview'
import { dataList } from './data-list'
import { dataTuple } from './data-tuple'
import { dataDict } from './data-dict'
import { dataSet } from './data-set'
import { dataStr } from './data-str'
import { dataComprehensions } from './data-comprehensions'

// Course 3 (data) scenes. data-overview is the §1/§8 bookend board; the six containers are each a
// single annotated .py cheat-sheet (list · tuple · dict · set · str · comprehensions).
export const dataScenes: Scene[] = [dataOverview, dataList, dataTuple, dataDict, dataSet, dataStr, dataComprehensions]

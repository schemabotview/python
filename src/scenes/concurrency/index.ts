import type { Scene } from '../../render-engine'
import { concurrencyModels } from './concurrency-models'
import { concurrencyWorkloads } from './concurrency-workloads'
import { concurrencyFutures } from './concurrency-futures'
import { concurrencyAsyncio } from './concurrency-asyncio'
import { concurrencyMultiprocessing } from './concurrency-multiprocessing'

// Course 7 (concurrency) scenes. concurrency-models is the mechanism diagram reused across §1-§5 +
// §10 (per-section band focus); the four code cards carry the APIs (workloads · futures/pools ·
// asyncio · multiprocessing).
export const concurrencyScenes: Scene[] = [
  concurrencyModels,
  concurrencyWorkloads,
  concurrencyFutures,
  concurrencyAsyncio,
  concurrencyMultiprocessing,
]

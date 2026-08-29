import type { Scene } from '../../render-engine'

// §8 asyncio — one editor card: coroutines with async def, await = yield to the loop, run many with
// gather / TaskGroup, asyncio.run drives the loop; the all-or-nothing catch (needs async libs).
export const concurrencyAsyncio: Scene = {
  id: 'concurrency-asyncio',
  padding: 0.14,
  nodes: [
    {
      id: 'cx-asyncio',
      kind: 'code',
      filename: 'async_io.py',
      label: [
        'import asyncio',
        '',
        '# ── define coroutines with async def ──',
        'async def fetch(url):',
        '    await asyncio.sleep(1)   # await = yield to loop',
        '    return data',
        '',
        '# ── run many concurrently ──',
        'async def main():',
        '    results = await asyncio.gather(',
        '        fetch(a), fetch(b), fetch(c))',
        '    async with asyncio.TaskGroup() as tg:  # 3.11+',
        '        tg.create_task(fetch(d))',
        '',
        'asyncio.run(main())      # drives the event loop',
        '# needs async libs (httpx, asyncpg) — a blocking',
        '#   call stalls the WHOLE loop',
      ].join('\n'),
    },
  ],
  edges: [],
}

import type { Section } from '../types'

export const asyncio: Section = {
  id: 'asyncio',
  title: 'asyncio',
  scene: 'concurrency-asyncio',
  slide: `## \`asyncio\` — async / await in code

The code form of the event loop: **coroutines** you \`await\`.

### The mental model
- \`async def\` = a **coroutine** (pausable); \`await\` suspends it and hands control to the loop until ready
- \`asyncio.run(main())\` drives the loop; \`gather(...)\` runs many concurrently (or \`TaskGroup\`, the 3.11+ structured form that cancels siblings on failure)

### The catch: it's all-or-nothing
- One **blocking** call inside a coroutine **freezes the whole loop** — everything stalls
- So it needs **async-aware** libraries (\`httpx\`, \`asyncpg\`, not \`requests\`)

### When
- Best with **many** concurrent I/O operations — servers, crawlers

That leaves CPU-bound work — where processes finally use every core.`,
  narration:
    "Asyncio is the code expression of the event-loop model we saw earlier, and it introduces two keywords. You define a coroutine with async def instead of plain def — that marks a function as pausable. Inside it, you use await before anything slow, which suspends the coroutine and hands control back to the event loop until that operation is ready, then resumes. To actually run everything, asyncio dot run of your main coroutine starts the event loop, drives it until the work is done, and shuts it down. And the workhorse for concurrency is asyncio dot gather, which takes several coroutines, schedules them all on the loop to run concurrently, and waits until every one has finished — so awaiting gather of fetch-A and fetch-B lets both downloads overlap on the single thread. Modern Python adds an even cleaner, structured form: an async-with block on asyncio dot TaskGroup, inside which you call create-task for each coroutine; the block waits for them all on exit and, crucially, cancels the rest if any one fails — safer error handling than gather. There's one important rule that trips people up. Asyncio only works its magic if the libraries you call are themselves async-aware — built to await rather than block. If you call an ordinary blocking function inside a coroutine — a regular synchronous network request, say — it doesn't yield, and it freezes the entire event loop, stalling every other task. So the async world has its own ecosystem: httpx instead of requests, asyncpg for databases, and so on. Use asyncio when you have many concurrent I/O operations — a web server handling thousands of connections, a crawler fetching thousands of pages — where its single-threaded efficiency really pays. That covers every I/O-bound tool. The remaining case is CPU-bound work, where we finally put all those cores to use — multiprocessing.",
}

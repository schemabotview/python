import type { Section } from '../types'

export const test: Section = {
  id: 'test',
  title: 'Test',
  scene: 'capstone-test',
  slide: `## Test — prove it works  ↩ pytest

**\`pytest\`** turns a claim about your code into an automatic check.

### A test is just a function + an \`assert\`
- Name it \`test_*\`, make a claim with \`assert\` — pytest **discovers & runs** it
- No classes, no boilerplate; run everything with \`$ pytest\`

### One test, many cases
- \`@pytest.mark.parametrize(...)\` runs the same test over a **table** of inputs
- The safety net that lets you **refactor fearlessly** — a break turns a test red instantly
- Tests live in \`tests/\`, mirroring the package

Proven correct. The last step is to install it and run it for real.`,
  narration:
    "Pytest is the standard testing tool in Python, and its brilliance is how little ceremony it demands. You write an ordinary function whose name starts with test, and inside it you make a claim with a plain assert statement. Here, test-parse calls our parse function on the line ERROR slash-api-slash-x, and then asserts two things: that the resulting entry's level is Level dot ERROR, and that its path is slash-api-slash-x. That's it — no special classes, no boilerplate. You run pytest at the terminal, it automatically discovers every test function in the tests folder, runs them, and reports green if all the asserts hold or red with a precise explanation if one fails. And when you want to check the same logic across many inputs, you don't copy the test — you decorate it with pytest dot mark dot parametrize and hand it a table of cases, and pytest runs it once per row. These little tests are the safety net that changes how you work: once your behavior is pinned down by tests, you can refactor, optimize, and add features without fear, because pytest will instantly tell you if you broke something. Real projects grow test suites alongside the code, and mature ones won't merge a change unless the tests stay green. It's the habit that separates code you hope works from code you know works. Our parser is proven correct. Everything is built and verified — there's just one step left, the one that turns all this code into a tool you can actually use: installing it and running it for real.",
}

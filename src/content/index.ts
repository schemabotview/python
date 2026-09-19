import { setup } from './setup'
import { syntax } from './syntax'
import { data } from './data'
import { oop } from './oop'
import { idioms } from './idioms'
import { stdlib } from './stdlib'
import { concurrency } from './concurrency'
import { project } from './project'
import type { Course, Section } from './types'

// Course registry, in syllabus order. Courses are added here as each is authored:
// setup · syntax · data · oop · idioms · stdlib · concurrency · project.
export const COURSES: Record<string, Course> = {
  [setup.id]: setup,
  [syntax.id]: syntax,
  [data.id]: data,
  [oop.id]: oop,
  [idioms.id]: idioms,
  [stdlib.id]: stdlib,
  [concurrency.id]: concurrency,
  [project.id]: project,
}

export type { Course, Section }

// slugOf / allSections are the shell's — the slug rule (`<courseId>-<sectionId>`) is part of the
// route contract the recorder drives, so it cannot be a per-repo decision. Re-exported here because
// this module is what the app and the scripts already import them from.
export { slugOf, allSections } from '@graphlearning/shell'

export function getCourse(id: string): Course | undefined {
  return COURSES[id]
}

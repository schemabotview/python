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

export function getCourse(id: string): Course | undefined {
  return COURSES[id]
}

// The slug for a section is `<courseId>-<sectionId>` — section IS the unit (one slide, one
// narration), so no trailing beat index.
export function slugOf(course: Course, section: Section): string {
  return `${course.id}-${section.id}`
}

export function allSections(course: Course): { section: Section; slug: string }[] {
  return course.sections.map((section) => ({ section, slug: slugOf(course, section) }))
}

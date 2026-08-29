import type { Scene } from '../render-engine'
import { setupScenes } from './setup'
import { syntaxScenes } from './syntax'
import { dataScenes } from './data'
import { oopScenes } from './oop'
import { idiomsScenes } from './idioms'
import { stdlibScenes } from './stdlib'
import { concurrencyScenes } from './concurrency'
import { projectScenes } from './project'

// Scene registry. Sections reference scenes by id; scenes are grouped by course (one folder each,
// mirroring src/content). Ids are globally unique across courses, so the flat lookup below is
// unambiguous. Courses are added here as each is authored (setup · syntax · data · oop · idioms ·
// stdlib · concurrency · project).
const ALL: Scene[] = [...setupScenes, ...syntaxScenes, ...dataScenes, ...oopScenes, ...idiomsScenes, ...stdlibScenes, ...concurrencyScenes, ...projectScenes]

export const SCENES: Record<string, Scene> = Object.fromEntries(ALL.map((s) => [s.id, s]))

export function getScene(id: string): Scene | undefined {
  return SCENES[id]
}

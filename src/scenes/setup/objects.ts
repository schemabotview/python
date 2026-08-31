import type { Scene } from '../../render-engine'

// §6 objects — where the values live: on the heap, as objects. In Python EVERYTHING is one. int 5
// opened byte by byte, drawn as a MEMORY figure (kind: 'memory'): one contiguous block whose cells
// share their edges, offsets on an axis outside it, and brackets grouping the shared header every
// object carries (ob_refcnt · ob_type) against the int's own body (ob_size · ob_digit). Adjacency and
// offsets ARE the content here — a grid of separate cards would read as unordered peers and lose the
// 24 B → getsizeof(5) = 28 arithmetic, which only lands if you can count the slots down the block.
// Then: same header, different tail (float inline · list/str varobject · instance __dict__) as a real
// 3-way comparison, so that one stays a grid. Names-are-references + is/== ride the slide.
export const objects: Scene = {
  id: 'objects',
  padding: 0.16,
  nodes: [
    {
      id: 'pylong',
      kind: 'memory',
      label: 'int 5  =  PyLongObject',
      pattern: 'user',
      sub: 'header = 24 B  →  sys.getsizeof(5) = 28',
      slots: [
        // Consecutive slots sharing a `group` bracket together — so these are two runs of two, not
        // four singletons: the header every object carries, then the part that is this int's own.
        { at: '0x00', name: 'ob_refcnt', note: 'reference count', group: 'PyObject_HEAD · every object' },
        { at: '0x08', name: 'ob_type', note: 'what it can do', group: 'PyObject_HEAD · every object' },
        { at: '0x10', name: 'ob_size', note: 'digit count', group: 'int body · this int only' },
        { at: '0x18', name: 'ob_digit[0]', note: '= 5  (grows → bigint)', group: 'int body · this int only' },
      ],
    },
    {
      id: 'tails',
      label: 'same header, different tail',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'float', label: 'float', pattern: 'network', icon: 'gauge', sub: 'value inline', variant: 'tile' },
        { id: 'liststr', label: 'list / str', pattern: 'network', icon: 'layers', sub: 'len + ptr → array', variant: 'tile' },
        { id: 'instance', label: 'instance', pattern: 'network', icon: 'boxes', sub: '+ __dict__', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}

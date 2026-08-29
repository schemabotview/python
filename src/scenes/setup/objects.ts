import type { Scene } from '../../render-engine'

// §6 objects — where the values live: on the heap, as objects. In Python EVERYTHING is one. int 5
// opened byte by byte: the shared header every object carries (ob_refcnt · ob_type) then the int's
// body (ob_size · ob_digit) — 24-byte header → getsizeof(5) = 28, and big ints just grow more digit
// chunks. Then: same header, different tail (float inline · list/str varobject · instance __dict__).
// Names-are-references + is/== ride the slide. The shared header is the focus.
export const objects: Scene = {
  id: 'objects',
  padding: 0.16,
  nodes: [
    {
      id: 'pylong',
      label: 'int 5  =  PyLongObject',
      pattern: 'service',
      icon: 'boxes',
      sub: 'header = 24 B → sys.getsizeof(5) = 28',
      children: [
        {
          id: 'header',
          label: 'shared header · every object',
          pattern: 'user',
          icon: 'layers',
          cols: 2,
          children: [
            { id: 'refcnt', label: 'ob_refcnt', pattern: 'user', icon: 'tag', sub: '0x00 · reference count' },
            { id: 'obtype', label: 'ob_type', pattern: 'user', icon: 'scanface', sub: '0x08 · what it can do' },
          ],
        },
        {
          id: 'body',
          label: 'int body',
          pattern: 'storage',
          icon: 'database',
          cols: 2,
          children: [
            { id: 'obsize', label: 'ob_size', pattern: 'storage', icon: 'gauge', sub: '0x10 · digit count' },
            { id: 'obdigit', label: 'ob_digit[]', pattern: 'storage', icon: 'boxes', sub: '0x18 · = 5 (grows → bigint)' },
          ],
        },
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

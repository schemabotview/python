import type { Scene } from '../../render-engine'

// §2 list — one editor card: create & access, grow & shrink, search & order, build.
export const dataList: Scene = {
  id: 'data-list',
  padding: 0.14,
  nodes: [
    {
      id: 'd-list',
      kind: 'code',
      filename: 'list.py',
      label: [
        '# ── create & access ──',
        'nums = [1, 2, 3]',
        'nums[0]        # 1   (nums[-1] = last)',
        'nums[1:3]      # [2, 3]  slice',
        'nums[::-1]     # reversed copy',
        'len(nums)      # 3',
        '',
        '# ── grow & shrink ──',
        'nums.append(4)       # add to end',
        'nums.insert(0, 9)    # at an index',
        'nums.extend([5, 6])  # add many',
        'nums.pop()           # remove last',
        'nums.remove(9)       # remove by value',
        '',
        '# ── search & order ──',
        '3 in nums            # membership',
        'nums.index(2)        # first position',
        'nums.count(3)        # how many',
        'nums.sort()          # in place',
        'sorted(nums, reverse=True)   # new list',
        '',
        '# ── build ──',
        'nums += [7, 8]       # concatenate',
        '[0] * 3              # [0, 0, 0]',
      ].join('\n'),
    },
  ],
  edges: [],
}

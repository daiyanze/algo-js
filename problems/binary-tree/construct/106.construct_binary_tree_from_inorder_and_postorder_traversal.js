/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  const map = new Map()
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }

  function build(inIdxStart, inIdxEnd, postIdxStart, postIdxEnd) {
    if (postIdxStart > postIdxEnd) {
      return null
    }

    const rootVal = postorder[postIdxEnd]
    const rootInIdx = map.get(rootVal)
    const root = new TreeNode(rootVal)
    const rightSize = rootInIdx - inIdxStart

    // root.left = build(inIdxStart, rootInIdx - 1, postIdxStart, postIdxStart + (rootInIdx - inIdxStart) - 1)
    // root.right = build(rootInIdx + 1, inIdxEnd, postIdxStart + (rootInIdx - inIdxStart), postIdxEnd - 1)

    /**
      * inorder
      * (inIdxStart)                (rootIdx - 1)         (rootIndex + 1)              (inIdxEnd)
      * .........root.left......... |       rootVal       | .........root.right.........
      * 
      * left size = rootIx - inIdxStart
      *
      * postorder
      * (postIdxStart)              (postIdxEnd - <right size> - 1)            (postIdxEnd)
      * .........root.left......... | |...........root.right..........|  rootVal
      *                               (postIdxEnd - <right size>)     (postIdxEnd - 1)
      *
      * */
    root.left = build(inIdxStart, rootInIdx - 1, postIdxStart, postIdxEnd - rightSize - 1)
    root.right = build(rootInIdx + 1, inIdxEnd, postIdxEnd - rightSize, postIdxEnd - 1)

    return root
  }

  return build(0, inorder.length - 1, 0, postorder.length - 1)
};


module.exports = {
  func: buildTree,
  argTypes: [
    'Array',
    'Array',
  ],
  returnType: 'TreeNode',
  tests: [
    [
      [3,9,20,15,7],
      [9,3,15,20,7],
    ],
    [
      [-1],
      [-1],
    ],
  ]
}

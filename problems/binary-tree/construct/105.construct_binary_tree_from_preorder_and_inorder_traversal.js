/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  // Normalize inroder list
  const map = new Map()
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }
    
  function build(preIdxStart, preIdxEnd, inIdxStart, inIdxEnd) {
    if (preIdxEnd < preIdxStart) {
      return null
    }

    // get the root value with index
    const rootVal = preorder[preIdxStart]
    // get the root value index of the inroder list from the map
    const rootInIdx = map.get(rootVal)

    // Init new TreeNode
    const root = new TreeNode(rootVal)

    // Left children nodes size
    const leftSize = rootInIdx - inIdxStart

    /**
      * preorder
      * (preIdxStart)   (preIdxStart + 1)             (preIdxStart + <left size>)     (preIdxEnd)
      *    rootVal      | .........root.left......... | |...........root.right..........
      *                                                 (preIdxStart + <left size> + 1)
      *
      * left size = rootIx - inIdxStart
      * 
      * inorder
      * (inIdxStart)                (rootIdx - 1)         (rootIndex + 1)              (inIdxEnd)
      * .........root.left......... |       rootVal       | .........root.right.........
      * */
    root.left = build(preIdxStart + 1, preIdxStart + (rootInIdx - inIdxStart), inIdxStart, rootInIdx - 1)
    root.right = build(preIdxStart + rootInIdx - inIdxStart + 1, preIdxEnd, rootInIdx + 1, inIdxEnd)

    return root
  }

  return build(0, preorder.length - 1, 0, inorder.length - 1)
};


module.exports = {
  func: buildTree,
  argTypes: [
    'Array',
    'Array'
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

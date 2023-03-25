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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
  const map = new Map()
  for (let i = 0; i < postorder.length - 1; i++) {
    map.set(postorder[i], i)
  }

  function build(preIdxStart, preIdxEnd, postIdxStart, postIdxEnd) {
    if (preIdxStart > preIdxEnd) {
      return null
    }

    if (preIdxStart == preIdxEnd) {
      return new TreeNode(preorder[preIdxStart])
    }

    const rootVal = preorder[preIdxStart]
    const root = new TreeNode(rootVal)

    /**
      *
      * preorder
      * (preIdxStart)   (preIdxStart + 1)                     (preIdxStart + <left size>)     (preIdxEnd)
      *    rootVal      |   leftRootVal   | ....root.left.... | |...........root.right..........
      *                                                         (preIdxStart + <left size> + 1)
      *
      * postorder
      * (postIdxStart)              (leftPostIdx)                              (postIdxEnd)
      * .........root.left......... | |...........root.right..........|  rootVal
      *                               (leftPostIdx + 1)               (postIdxEnd - 1)
      *
      * */
    const leftPostIdx = map.get(preorder[preIdxStart + 1])
    const leftSize = leftPostIdx - postIdxStart + 1

    root.left = build(preIdxStart + 1, preIdxStart + leftSize, postIdxStart, leftPostIdx)
    root.right = build(preIdxStart + leftSize + 1, preIdxEnd, leftPostIdx + 1, postIdxEnd - 1)
    
    return root
  }

  return build(0, preorder.length - 1, 0, postorder.length - 1)
};


module.exports = {
  func: constructFromPrePost,
  argTypes: [
    'Array',
    'Array',
  ],
  returnType: 'TreeNode',
  tests: [
    [
      [1,2,4,5,3,6,7],
      [4,5,2,6,7,3,1],
    ],
    [
      [1],
      [1],
    ],
  ]
}

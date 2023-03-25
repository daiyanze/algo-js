/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  if (!root) return 0

  let max = 0
  function getMaxDepth(root) {
    if (!root) return 0

    const left = getMaxDepth(root.left)
    const right = getMaxDepth(root.right)

    max = Math.max(left + right, max)

    return Math.max(left, right) + 1
  }

  getMaxDepth(root)

  return max
};

module.exports = {
  func: diameterOfBinaryTree,
  argTypes: [
    'TreeNode',
  ],
  returnType: 'Number',
  tests: [
    [
      [1,2,3,4,5]
    ],
    [
      [1,2],
    ],
    [
      [1],
    ],
    [
      []
    ]
  ]
}

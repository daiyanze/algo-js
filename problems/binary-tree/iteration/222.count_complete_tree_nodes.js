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
var countNodes = function(root) {
  if (!root) {
    return 0
  }

  return 1 + countNodes(root.left) + countNodes(root.right)
};


module.exports = {
  func: countNodes,
  argTypes: [
    'TreeNode',
  ],
  returnType: 'Number',
  tests: [
    [
      [1, 2, 3, 4, 5, 6],
    ],
    [
      [1],
    ],
  ]
}

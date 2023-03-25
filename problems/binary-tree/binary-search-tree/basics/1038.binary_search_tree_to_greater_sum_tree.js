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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
  let sum = 0

  function traverse(node) {
    if (!node) return

    traverse(node.right)
    // add up to sum
    sum += node.val
    node.val = sum
    traverse(node.left)
  }

  traverse(root)

  return root
};


module.exports = {
  func: bstToGst,
  argTypes: [
    'TreeNode',
  ],
  returnType: 'TreeNode',
  tests: [
    [
      [4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8],
    ],
    [
      [0, null, 1],
    ],
  ]
}

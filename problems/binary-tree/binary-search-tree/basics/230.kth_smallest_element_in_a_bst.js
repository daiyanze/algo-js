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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let res = null
  let rank = 0
  function traverse(node) {
    if (!node) return

    traverse(node.left)
    if (++rank == k) {
      res = node.val
      return
    }
    traverse(node.right)
  }

  traverse(root)

  return res
};


module.exports = {
  func: kthSmallest,
  argTypes: [
    'TreeNode',
    'Number',
  ],
  returnType: 'Number',
  tests: [
    [
      [3, 1, 4, null, 2],
      1
    ],
    [
      [5, 3, 6, 2, 4, null, null, 1],
      3,
    ]
  ]
}

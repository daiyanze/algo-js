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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {

  function traverse(node) {
    if (!node) return null

    if (node.val == val) {
      return node
    } else if (node.val > val) {
      return traverse(node.left)
    } else if (node.val < val) {
      return traverse(node.right)
    }

    return node
  }

  return traverse(root)
};


module.exports = {
  func: searchBST,
  argTypes: [
    'TreeNode',
    'Number',
  ],
  returnType: 'TreeNode',
  tests: [
    [
      [4, 2, 7, 1, 3],
      2,
    ],
    [
      [4, 2, 7, 1, 3],
      5,
    ],
  ]
}

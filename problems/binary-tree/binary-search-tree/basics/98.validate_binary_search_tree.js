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
 * @return {boolean}
 */
var isValidBST = function(root) {

  function validate(node, min, max) {
    if (node == null) {
      return true
    } else if (min && node.val <= min.val) {
      return false
    } else if (max && node.val >= max.val) {
      return false
    }

    return validate(node.left, min, node) && validate(node.right, node, max)
  }

  return validate(root, null, null)
};


module.exports = {
  func: isValidBST,
  argTypes: [
    'TreeNode',
  ],
  returnType: 'Boolean',
  tests: [
    [
      [2, 1, 3],
    ],
    [
      [5, 1, 4, null, null, 3, 6],
    ],
    [
      [5, 4, 6, null, null, 3, 7],
    ]
  ]
}

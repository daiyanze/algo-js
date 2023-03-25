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
var insertIntoBST = function(root, val) {

  function insert(node) {
    if (!node) return new TreeNode(val)

    if (node.val > val) {
      node.left = insert(node.left)
    } else if (node.val < val) {
      node.right = insert(node.right)
    }

    return node
  }

  return insert(root)
};


module.exports = {
  func: insertIntoBST,
  argTypes: [
    'TreeNode',
    'Number',
  ],
  returnType: 'TreeNode',
  tests: [
    [
      [4, 2, 7, 1, 3],
      5,
    ],
    [
      [40, 20, 60, 10, 30, 50, 70],
      25,
    ],
  ]
}

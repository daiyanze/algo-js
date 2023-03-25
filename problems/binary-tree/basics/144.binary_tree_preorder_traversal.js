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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const res = []

  function traverse(node) {
    if (!node) {
      return null
    }

    res.push(node.val)

    traverse(node.left)
    traverse(node.right)
  }

  traverse(root)

  return res
};

module.exports = {
  func: preorderTraversal,
  argTypes: [
    'TreeNode',
  ],
  returnType: 'Array',
  tests: [
    [
      [1,null,2,3],
    ],
    [
      [2,1,3,null,4,null,7],
    ],
    [
      []
    ],
    [
      [1]
    ]
  ]
}

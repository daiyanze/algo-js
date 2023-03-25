/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

  function traverse(node) {
    if (!node) {
      return null
    }

    // Preorder: return when target found
    if (node.val == p.val || node.val == q.val) {
      return node
    }

    // Continue search on the child nodes
    const left = traverse(node.left)
    const right = traverse(node.right)

    // Return the node when the target child nodes exist
    if (left && right) {
      return node
    }

    return left ? left : right
  }

  return traverse(root)
};



module.exports = {
  func: lowestCommonAncestor,
  argTypes: [
    'TreeNode',
    'TreeNode',
    'TreeNode',
  ],
  returnType: 'Number',
  tests: [
    [
      [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
      5,
      1,
    ],
    [
      [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
      5,
      4,
    ],
  ]
}

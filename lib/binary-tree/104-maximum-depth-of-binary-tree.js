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
var maxDepth = function(root) {
  // Solution: Divide and conquer

  // Base case:
  if (root == null) {
    return 0
  }

  // Get left node depth
  const left = maxDepth(root.left)

  // Get right node depth
  const right = maxDepth(root.right)

  // The depth of a none-null tree is at least 1
  return Math.max(left, right) + 1
}

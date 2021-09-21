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
var invertTree = function(root) {
  // Solution: DFS (bottom-to-top)
  /**
   * Analysis:
   * Check the node 1 by 1 until there's no leaf attached to it. If so, return the previous node.
   */
  if (root == null) return root

  const left = invertTree(root.left)
  const right = invertTree(root.right)

  root.left = right
  root.right = left

  return root
};

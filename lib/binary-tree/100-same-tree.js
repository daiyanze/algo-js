/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // Solution: DFS
  /**
   * Analysis:
   * Similar to 101-symmetric-tree, it's just comparing the values of each node.
   * There will be 3 conditions for the recursion
   *  1. When both of the nodes are null
   *  2. When either of the node is null
   *  3. When the node's values equal and also their desendants
   */
  if (p == null && q == null) {
    return true
  } else if (p == null || q == null) {
    return false
  } else {
    return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }
};

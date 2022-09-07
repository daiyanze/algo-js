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
var isSymmetric = function(root) {
  // Solution: DFS (top to bottom)
  /**
   * Analysis:
   * Set a sub-tree, for instance (2, 3, 4) as a smallest unit.
   * Then, we need to compare the unit leaves and check if it matches the following conditions
   * 1. The 2 parent value equal
   * 2. parent.left.left == parent.right.right
   * 3. parent.left.right == parent.right.left
   * (Extra condition also works)
   * 4. parent.left == null && parent.right == null
   *              1
   *           /    \
   *         2       2
   *       /  \    /  \
   *      3   4   4   3
   *
   */

  const dfs = (left, right) => {
    // When the both parent leaves are null, true
    if (left == null && right == null) {
      return true
    // Either of the parent leaves is null, false
    } else if (left == null || right == null) {
      return false
    } else {
      // When both parents' leaves not null, check parents' value and their descendants
      return left.val == right.val && dfs(left.left, right.right) && dfs(right.left, left.right)
    }
  }

  return dfs(root.left, root.right)
};

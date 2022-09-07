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
  // Solution: Divide and Conquer
  /**
   * Analysis:
   * The question behand it is to look for the node p & q and then check if they are under the leaves of a same node.
   * Define variables: left & right, for searching the nodes to the left or right.
   * Then look for under which node of recursion, both left and right has the value that matches the given value of p & q.
   */

  // Base case
  // When the root of the recursion node has no leaves, return null as it doesn't meet the demand
  if (root == null) {
    return null
  }

  // If the given node p / q is found, just return the that node
  if (root == p || root == q) {
    return root
  }
    
  // Find node value matches p / q from the left side
  const left = lowestCommonAncestor(root.left, p, q)

  // Find node value matches p / q from the right side
  const right = lowestCommonAncestor(root.right, p, q)

  // Result: When the common ancestor is found
  if (left != null && right != null) {
    return root
  }

  // Recursion value for left side
  if (left != null) {
    return left
  }

  // Recursion value for right side
  if (right != null) {
    return right
  }

  // Recursion value if the target node doesn't meet the demand of
  // 1. value is either p or q
  // 2. target node's decendants' value is q or q
  return null
};

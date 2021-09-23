/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  // Solution: DFS (preorder traversal)
  /**
   * Analysis:
   * Iterate the 2 trees together so that they can enter the same node spot.
   * Here are the conditions to handle for each recursion step
   * 1. when the left node is null, the return node should be the right node
   * 2. when the right node is null, the return node should be the left node
   * 3. left.val += right.val
   */

  if (root1 == null) {
    return root2
  }
  
  if (root2 == null) {
    return root1
  }

  root1.val += root2.val

  root1.left = mergeTrees(root1.left, root2.left)
  root1.right = mergeTrees(root1.right, root2.right)

  return root1
};

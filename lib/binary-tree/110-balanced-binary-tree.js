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
var isBalanced = function(root) {
  // Solution: Divide and conquer (bottom to top)
  
  // Base case
  if (root == null) {
    return true
  }

  return !!(maxDepth(root) + 1)
};

function maxDepth(node) {
  if (node == null) {
    return 0
  }

  // Get left node depth
  const left = maxDepth(node.left)

  // Get right node depth
  const right = maxDepth(node.right)

  // When
  //    1. left node is bigger than right node by 1+ layers
  //    2. left or right node is also not balanced (difference by 1+ layers)
  if (Math.abs(left - right) > 1 || left == -1 || right == -1) {
    return -1
  }

  return Math.max(left, right) + 1
}

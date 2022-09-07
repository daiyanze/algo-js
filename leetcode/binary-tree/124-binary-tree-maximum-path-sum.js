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
var maxPathSum = function(root) {
  // Solution: Divide and conquer (bottom to top)
  /** 
   * Analysis:
   *       top
   *      /   \
   *    /      \
   * left      right
   * 
   * There are 3 types of max value combination:
   * 1. top + left
   * 2. top + right
   * 3. top + left + right
   * 
   * Then the question turned into:
   * Get max as result_1 -> (top + left, top + right)
   * Get max as result_2 -> (top + left + right, result_1)
   * return result_2
   */

  let sum = Number.MIN_SAFE_INTEGER;

  const maxPathHelper = (node) => {
    if (node == null) {
      return 0
    }

    // Get left nodes max value
    const left = maxPathHelper(node.left)

    // Get right nodes max value
    const right = maxPathHelper(node.right)

    // Top + Side(Left/Right)
    const maxSide = node.val + Math.max(Math.max(left, right), 0)

    // Top + Left + Right
    const maxTLR = node.val + Math.max(left, 0) + Math.max(right, 0)
    
    sum = Math.max(sum, Math.max(maxTLR, maxSide))

    return maxSide < 0 ? 0 : maxSide
  }

  maxPathHelper(root)
  
  return sum
}


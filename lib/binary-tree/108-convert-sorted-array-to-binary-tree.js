/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  // Solution: dfs

  /**
   * Analysis:
   * Get the middle or the one left to the middle as its next node
   * [-10, -3, 0, 5, 9]
   *    0   1  2  3  4
   * For the first recursion:
   * New TreeNode(0)
   * left ->  [-10,    -3]
   *             0     (2-1)
   * right -> [  5,     9]
   *            (2+1)   4
   */

  const dfs = (left = 0, right = nums.length - 1) => {
    // Terminate the current recurrsion
   if (left > right) {
      return null
    }

    // Quick rounded up with right shift fill with 0
    // Using negation operator twice can have the same result
    // const mid = ~~((left + right) / 2)
    const mid = ((left + right) / 2) >> 0

    // Grab the value from the array (nums[mid]) and generate a tree node
    const result = new TreeNode(nums[mid])
    
    // Attach leaf to its left
    // The right cursor is the one on the left of the mid
    result.left = dfs(left, mid - 1)

    // Attach leaf to its right
    // The left cursor is the one on the right of the mid
    result.right = dfs(mid + 1, right)

    return result
  }

  return dfs()
}; 

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
var constructMaximumBinaryTree = function(nums) {
  function buildMax(nums, low, high) {
    if (low > high) {
      return null
    }

    // get max value index from nums
    let idx = low
    for (let i = low; i <= high; i++) {
      if (nums[idx] < nums[i]) {
        idx = i
      }
    }

    const root = new TreeNode(nums[idx])

    root.left = buildMax(nums, low, idx - 1)
    root.right = buildMax(nums, idx + 1, high)

    return root
  }

  return buildMax(nums, 0, nums.length - 1)
};


module.exports = {
  func: constructMaximumBinaryTree,
  argTypes: [
    'Number',
  ],
  returnType: 'TreeNode',
  tests: [
    [
      [3,2,1,6,0,5],
    ],
    [
      [3,2,1],
    ],
  ]
}

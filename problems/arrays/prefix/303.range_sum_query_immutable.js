/**
 * To make a valid prefix sum array, we need to create a container that holds nums.length + 1 elements and make the first element 0.
 * e.g. 1,0,3,4,5 -> 0, ...
 *
 * The calculation of prefix sum is pretty straightforward. We just need to add up the former sum and the previous element in nums.
 * But make sure that we start with the index of 1
 *
 * prefixSum[i - 1] + nums[i - 1]
 *
 * So as for the real case,
 * 1,0,3,4,5
 *
 *   
 * 0, (0 + 1), (0 + 1 + 0), (0 + 1 + 0 + 3), (0 + 1 + 0 + 3 + 4), (0 + 1 + 0 + 3 + 4 + 5)
 * 0, 1, 1, 4, 8, 13
 *
 *
 * As for getting the sum range, from left to right. We need to reach to right + 1 position
 * Then the result would be [right + 1] - [left]
 *
 *
 * Time complexity: O(n) / O(1)
 * We only need to loop once to create a prefix sum array once. And then getting sum result is constant time
 *
 * Space Complexity: O(n)
 * We need to store the target elements in the prefix sum array
 *
 */

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.prefixSum = new Array(nums.length + 1).fill(0)

  for (let i = 1; i < this.prefixSum.length; i++) {
    this.prefixSum[i] = this.prefixSum[i - 1] + nums[i - 1]
  }

  console.log(this.prefixSum)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return this.prefixSum[right + 1] - this.prefixSum[left]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

module.exports = {
  func: function(actions, input) {
    const [arr, ...sets] = input
    const nums = new NumArray(arr[0])

    const res = [null,]
    actions = actions.slice(1, actions.length)

    for (let i = 0; i < actions.length; i++) {
      res.push(nums[actions[i]](sets[i][0], sets[i][1]))
    }

    return res
  },
  argTypes: [
    'Array',
    'Array',
  ],
  returnType: 'Array',
  tests: [
    [
      ["NumArray", "sumRange", "sumRange", "sumRange"],
      [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]],
    ],
    [
      ["NumArray", "sumRange", "sumRange", "sumRange"],
      [[[1, 0, 3, 4, 5]], [0, 2], [2, 4], [0, 4]],
    ],
  ]
}

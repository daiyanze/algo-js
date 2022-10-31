/**
 * We use a hashmap to store the calculated result (target - current number).
 * Then we iterate the array of numbers, and find if there's one match.
 *
 * Time complexity: O(n)
 * Loop once 
 *
 * Space Complexity: O(n)
 * We need to store the target elements in a hashmap
 *
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const cache = {}
  for (let i = 0; i < nums.length; i++) {
    if (cache[nums[i]] >= 0) {
      return [cache[nums[i]], i]
    }

    cache[target - nums[i]] = i
  }

  return []
}

module.exports = {
  func: twoSum,
  argTypes: [
    'Array',
    'Number'
  ],
  returnType: 'Array',
  tests: [
    [
      [2,7,11,15],
      9
    ],
    [
      [3,2,4],
      6
    ],
    [
      [3,3],
      6
    ]
  ]
}

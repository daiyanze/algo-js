/**
 * Techniques: 2 pointers, DFS, Binary-search
 * 
 * We now know how to handle 2 sums, then for 3 sum we could consider it as 2 sums + 1 extra element.
 * Iterate the nums array, and reduce the target by that certain number and use that reduction result as the target number for 2 sums.
 * 
 *
 * Time complexity: O(n^2)
 * Loop once for checking each element in the array * Loop once to get 2 other numbers
 *
 * Space Complexity: O(n)
 * We need to store the target elements in the result array
 *
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  function nSum(nums, target, n, start = 0) {
    const res = []

    if (n < 2 || nums.length < n) {
      return res
    }

    if (n == 2) {
      let left = start
      let right = nums.length - 1

      while (left < right) {
        const l = nums[left]
        const r = nums[right]
        if (l + r == target) {
          res.push([l, r])

          while (left < right && nums[left] == l) left++
          while (left < right && nums[right] == r) right--
        } else if (l + r > target) {
          while (left < right && nums[right] == r) right--
        } else {
          while (left < right && nums[left] == l) left++
        }
      }
    } else {
      for (let i = start; i < nums.length; i++) {
        const temp = nSum(nums, target - nums[i], n - 1, i + 1)

        for (let t of temp) {
          t.push(nums[i])
          res.push(t)
        }

        while (i < nums.length - 1 && nums[i] == nums[i + 1]) i++
      }
    }

    return res
  }

  return nSum(
    Array.from(nums).sort((a, b) => a - b),
    target,
    4
  )
};


module.exports = {
  func: fourSum,
  argTypes: [
    'Array',
    'Number',
  ],
  returnType: 'Array',
  tests: [
    [
      [1,0,-1,0,-2,2],
      0
    ],
    [
      [2,2,2,2,2],
      8
    ],
  ]
}

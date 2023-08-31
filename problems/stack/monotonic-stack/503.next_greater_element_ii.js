/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const n = nums.length
  const stack = []
  const res = []

  // Double the array length so that the last element can be compared to earlier elements
  // [1,2,1] -> [1,2,1,1,2,1]
  for (let i = 2 * n; i >= 0; i--) {
    // use mod to simulate array cycling (index % n)
    // this way the indice will never overflow but result in correct number
    // 0 % n = 0
    // 1 % n = 1
    // 2 % n = 2
    // 3 % n = 0
    // 4 % n = 1
    // 5 % n = 2
    const index = i % n
    while (stack.length && stack[stack.length - 1] <= nums[index]) {
      stack.pop()
    }

    res[index] = stack.length ? stack[stack.length - 1] : -1
    stack.push(nums[index])
  }

  return res
};


module.exports = {
  func: nextGreaterElements,
  argTypes: [
    'Array',
  ],
  returnType: 'Array',
  tests: [
    [
      [1, 2, 1],
    ],
    [
      [1, 2, 3, 4, 3],
    ],
  ]
}


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {

  /**
   * e.g. [1,3,2,1,5]
   * res    [0,0,0,0,0]
   * strack []
   *
   * res    [0,0,0,0,-1]
   * no length no pop, push 5
   * stack  [5]
   *
   * res    [0,0,0,5,-1]
   * 5 > 1 no pop, push 1
   * stack  [5,1]
   *
   * res    [0,0,5,5,-1]
   * 1 < 2 pop 1, push 2
   * stack  [5,2]
   *
   * res    [0,5,5,5,-1]
   * 2 < 3 pop 2, push 3
   * stack  [5,3]
   *
   * res    [3,5,5,5,-1]
   * 3 > 1 no pop, push 1
   * stack  [5,3,1]
   *
   */
  function getNext(nums) {
    const res = new Array(nums.length).fill(0)

    const stack = []

    for (let i = nums.length - 1; i >= 0; i--) {
      while (stack.length && stack[stack.length - 1] <= nums[i]) {
        stack.pop()
      }

      res[i] = stack.length ? stack[stack.length - 1] : -1
      stack.push(nums[i])
    }

    return res
  }

  const greaterArr = getNext(nums2)

  const map = new Map()
  for (let i = 0; i < nums2.length; i++) {
    map.set(nums2[i], greaterArr[i])
  }

  const res = new Array(nums1.length)
  for (let i = 0; i < nums1.length; i++) {
    res[i] = map.get(nums1[i])
  }

  return res
};


module.exports = {
  func: nextGreaterElement,
  argTypes: [
    'Array',
    'Array',
  ],
  returnType: 'Array',
  tests: [
    [
      [1, 2, 3],
      [1, 3, 2, 1, 5],
    ],
    [
      [4, 1, 2],
      [1, 3, 4, 2],
    ],
    [
      [2, 4],
      [1, 2, 3, 4]
    ],
  ]
}


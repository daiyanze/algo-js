/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0
  let right = nums.length - 1

  // <= is uesed under range of [left, right]. This situation infers that "left" may equal "right"
  while (left <= right) {
    const mid = ~~(left + (right - left) / 2)

    if (nums[mid] == target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    }
  }

  return -1
};


module.exports = {
  func: search,
  argTypes: [
    'Array',
    'Number',
  ],
  returnType: 'Number',
  tests: [
    [
      [-1,0,3,5,9,12],
      9,
    ],
    [
      [-1,0,3,5,9,12],
      2,
    ],
    [
      [1],
      1
    ]
  ],
}

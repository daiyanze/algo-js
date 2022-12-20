/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

  function getLeftBound() {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
      const mid = ~~(left + (right - left) / 2)
      
      if (nums[mid] > target) {
        right = mid - 1
      } else if (nums[mid] < target) {
        left = mid + 1
      } else if (nums[mid] == target) {
        right = mid - 1
      }
    }

    if (left > nums.length - 1) {
      return -1
    }

    return nums[left] == target ? left : -1
  }

  function getRightBound() {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
      const mid = ~~(left + (right - left) / 2)

      if (nums[mid] > target) {
        right = mid - 1
      } else if (nums[mid] < target) {
        left = mid + 1
      } else if (nums[mid] == target) {
        left = mid + 1
      }
    }

    if (right < 0) {
      return -1
    }

    return nums[right] == target ? right : -1
  }

  return [getLeftBound(), getRightBound()]
};


module.exports = {
  func: searchRange,
  argTypes: [
    'Array',
    'Number',
  ],
  returnType: 'Number',
  tests: [
    [
      [5,7,7,8,8,10],
      8,
    ],
    [
      [5,7,7,8,8,10],
      6,
    ],
  ],
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
  function getMinSubArrays(max) {
    let arrCnt = 1
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
      if (sum + nums[i] > max) {
        arrCnt++
        sum = nums[i]
      } else {
        sum += nums[i]
      }
    }

    return arrCnt
  }

  let left = nums[0]
  let right = nums[0]
  for (let i = 1; i < nums.length; i++) {
    left = Math.max(nums[i], left)
    right += nums[i]
  }
    
  while (left <= right) {
    const mid = ~~(left + (right - left) / 2)
    if (getMinSubArrays(mid) > k) {
      left = mid + 1
    } else if (getMinSubArrays(mid) < k) {
      right = mid - 1
    } else if (getMinSubArrays(mid) == k) {
      right = mid - 1
    }
  }

  return left
};

module.exports = {
  func: splitArray,
  argTypes: [
    'Array',
    'Number',
  ],
  returnType: 'Number',
  tests: [
    [
      [7,2,5,10,8],
      2,
    ],
    [
      [1,2,3,4,5],
      2,
    ],
    [
      [7,2,5,10,8],
      3,
    ]
  ],
}

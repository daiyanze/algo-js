/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
  let count = 0

  const preSum = new Array(nums.length + 1).fill(0)
  for (let i = 0; i < nums.length; i++) {
    preSum[i + 1] = nums[i] + preSum[i]
  }

  function sort(low, high) {
    // skip when it's the same element
    if (low == high) {
      return
    }

    const mid = ~~((high - low) / 2 + low)

    sort(low, mid)
    sort(mid + 1, high)

    merge(low, mid, high)
  }

  const temp = new Array(nums.length)
  function merge(low, mid, high) {
    // copy to temp array
    for (let i = low; i <= high; i++) {
      temp[i] = preSum[i]
    }

    // Each element in the sliding window [start, end) is included within range [lower, upper]
    // Then end - start is the count of the range sums that meet the condition
    let start = mid + 1
    let end = mid + 1
    for (let i = low; i <= mid; i++) {
      while (start <= high && preSum[start] - preSum[i] < lower) {
        start++
      }
      while (end <= high && preSum[end] - preSum[i] <= upper) {
        end++
      }

      count += end - start
    }

    let i = low
    let j = mid + 1
    let p = low
    while (p <= high) {
      if (i == mid + 1) {
        preSum[p] = temp[j++]
      } else if (j == high + 1) {
        preSum[p] = temp[i++]
      } else if (temp[i] > temp[j]) {
        preSum[p] = temp[j++]
      } else {
        preSum[p] = temp[i++]
      }

      p++
    }
  }

  sort(0, preSum.length - 1)

  return count
};


module.exports = {
  func: countRangeSum,
  argTypes: [
    'Array',
    'Number',
    'Number',
  ],
  returnType: 'Number',
  tests: [
    [
      [-2, 5, -1],
      -2,
      2,
    ],
    [
      [0],
      0,
      0,
    ],
  ]
}

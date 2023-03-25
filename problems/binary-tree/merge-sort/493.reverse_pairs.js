/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  let count = 0

  function sort(low, high) {
    if (low == high) return

    const mid = ~~((high - low) / 2 + low)

    sort(low, mid)
    sort(mid + 1, high)

    merge(low, mid, high)
  }

  const temp = new Array(nums.length)
  function merge(low, mid, high) {
    // copy original data to temp array
    for (let i = low; i <= high; i++) {
      temp[i] = nums[i]
    }

    // Find the paris that meets the condition of
    // former element > later element * 2
    // which can be turned into the below one to reduce the possibility of memory overflow
    // former element / 2 > later element
    let end = mid + 1
    for (let i = low; i <= mid; i++) {
      while (end <= high && (nums[i] / 2 > nums[end])) {
        end++
      }

      count += end - (mid + 1)
    }

    let i = low
    let j = mid + 1
    let p = i
    while (p <= high) {
      if (i == mid + 1) {
        nums[p] = temp[j++]
      } else if (j == high + 1) {
        nums[p] = temp[i++]
      } else if (temp[i] > temp[j]) {
        nums[p] = temp[j++]
      } else if (temp[i] <= temp[j]) {
        nums[p] = temp[i++]
      }

      p++
    }
  }

  sort(0, nums.length - 1)

  return count
};


module.exports = {
  func: reversePairs,
  argTypes: [
    'Array',
  ],
  returnType: 'Number',
  tests: [
    [
      [1, 3, 2, 3, 1],
    ],
    [
      [2, 4, 3, 5, 1],
    ],
    [
      [0],
    ],
  ]
}

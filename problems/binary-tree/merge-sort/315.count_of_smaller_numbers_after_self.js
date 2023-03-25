/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  const res = new Array(nums.length).fill(0)

  // Array<[string(index), number(value)]>
  const arr = new Array(nums.length)
  for (let i = 0; i < nums.length; i++) {
    arr[i] = [i, nums[i]]
  }

  function sort(low, high) {
    // skip on same element
    if (low == high) return

    const mid = ~~((high - low) / 2 + low)

    sort(low, mid)
    sort(mid + 1, high)

    merge(low, mid, high)

  }

  const temp = new Array(nums.length)
  function merge(low, mid, high) {
    // copy elements to temp arr
    for (let i = low; i <= high; i++) {
      temp[i] = arr[i]
    }

    let i = low
    let j = mid + 1
    let p = i
    while (p <= high) {
      if (i == mid + 1) {
        arr[p] = temp[j++]
      } else if (j == high + 1) {
        arr[p] = temp[i++]
        res[arr[p][0]] += j - mid - 1
      } else if (temp[i][1] > temp[j][1]) {
        arr[p] = temp[j++]
      } else {
        arr[p] = temp[i++]
        res[arr[p][0]] += j - mid - 1
      }

      p++
    }
  }

  sort(0, nums.length - 1)

  return res
};


module.exports = {
  func: countSmaller,
  argTypes: [
    'Array',
  ],
  returnType: 'Array',
  tests: [
    [
      [5, 2, 6, 1],
    ],
    [
      [-1],
    ],
    [
      [-1, -1],
    ],
    [
      [26, 78, 27, 100, 33, 67, 90, 23, 66, 5, 38, 7, 35, 23, 52, 22, 83, 51, 98, 69, 81, 32, 78, 28, 94, 13, 2, 97, 3, 76, 99, 51, 9, 21, 84, 66, 65, 36, 100, 41],
    ],
  ]
}

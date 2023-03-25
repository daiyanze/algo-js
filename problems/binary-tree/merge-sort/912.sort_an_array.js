/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

  function sort(low, high) {
    // skip if it's the same element
    if (low == high) return

    const mid = ~~((high - low) / 2 + low)

    sort(low, mid)
    sort(mid + 1, high)

    merge(low, mid, high)
  }

  const temp = new Array(nums.length)

  //        low              mid + 1            high
  // temp   1    1   3   5   2          4   6   7
  //        i                j              
  //
  // nums   1
  //        p
  //
  //
  //        low              mid + 1            high
  // temp   1    1   3   5   2          4   6   7
  //             i           j              
  //
  // nums   1    1
  //             p
  //
  //
  //        low              mid + 1            high
  // temp   1    1   3   5   2          4   6   7
  //                 i       j              
  //
  // nums   1    1   2
  //                 p
  //
  //  ......
  //
  //        low              mid + 1            high
  // temp   1    1   3   5   2          4   6   7
  //                     i                  j
  //
  // nums   1    1   3   5   2          4   _
  //                                        p
  //
  function merge(low, mid, high) {
    for (let i = low; i <= high; i++) {
      temp[i] = nums[i]
    }

    // merge two sorted arrays
    let i = low
    let j = mid + 1
    let p = i
    while (p <= high) {
      if (i == mid + 1) {
        // elements of low ~ mid are already merged
        // nums[p] = temp[j++]
      } else if (j == high + 1) {
        // elements of mid  ~ high are already merged
        nums[p] = temp[i++]
      } else if (temp[i] > temp[j]) {
        // add jth number if temp[j] is smaller
        nums[p] = temp[j++]
      } else {
        // add ith number if temp[i] is samller
        nums[p] = temp[i++]
      }

      p++
    }
  }

  sort(0, nums.length - 1)

  return nums
};


module.exports = {
  func: sortArray,
  argTypes: [
    'Array',
  ],
  returnType: 'Array',
  tests: [
    [
      [5, 2, 3, 1],
    ],
    [
      [5, 1, 1, 2, 0, 0],
    ],
    [
      [-4, 0, 7, 4, 9, -5, -1, 0, -7, -1],
    ]
  ]
}

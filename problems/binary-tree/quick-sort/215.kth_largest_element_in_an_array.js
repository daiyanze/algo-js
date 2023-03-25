/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const arr = shuffle(nums)

  let low = 0
  let high = arr.length - 1
  // Convert to Kth element
  k = arr.length - k

  while (low <= high) {
    const p = partition(arr, low, high)
    if (k > p) {
      low = p + 1
    } else if (k < p) {
      high = p - 1
    } else {
      return arr[p]
    }
  }

  function swap(arr, a, b) {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }

  function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
      const rand = ~~(Math.random(arr.length - i) * arr.length)

      swap(arr, i, rand)
    }

    return arr
  }

  function partition(arr, low, high) {
    const p = arr[low]
    let i = low + 1
    let j = high
    while (i <= j) {
      while (i < high && arr[i] <= p) {
        i++
      }

      while (j > low && arr[j] > p) {
        j--
      }

      if (i >= j) {
        break
      }

      swap(arr, i, j)
    }

    swap(arr, low, j)

    return j
  }

  return -1
};


module.exports = {
  func: findKthLargest,
  argTypes: [
    'Array',
    'Number',
  ],
  returnType: 'Number',
  tests: [
    [
      [3, 2, 1, 5, 6, 4],
      2,
    ],
    [
      [3, 2, 3, 1, 2, 4, 5, 5, 6],
      4,
    ],
    [
      [1],
      1,
    ]
  ]
}

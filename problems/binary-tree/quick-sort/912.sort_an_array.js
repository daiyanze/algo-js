/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  const arr = shuffle(nums)

  // quicksort function
  function sort(low, high) {
    if (low >= high) return

    const p = partition(low, high)

    sort(low, p - 1)
    sort(p + 1, high)
  }

  function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }

  // Find a number bigger than 4 on the left side
  // Find a number smaller than 4 on the right side
  //
  // low    i->                   <-j
  // 4   |  1     6     3     2     5
  //
  //  1 < 4 , i = i + 1
  //  5 > 4 , j = j - 1 
  //
  // low          i           j
  // 4   |  1     6     3     2     5
  //
  // 6 > 4, target found on left
  // 2 < 4, target found on right
  //
  // swap 6 and 2
  //
  // low          i           j
  // 4   |  1     2     3     6     5
  //
  // 
  // low                ij       
  // 4   |  1     2     3     6     5
  //
  // while loop break
  //
  // swap 4 and 3 (arr[low] , arr[i])
  //
  // 3     1     2     |4|     6     5
  //
  // Continue with sorting 3,1,2 and 6,5 using the same strategy

  function partition(low, high) {
    let p = arr[low]
    let i = low + 1
    let j = high
    while (i <= j) {
      while (i < high && arr[i] <= p) {
        i++
      }

      while (j > low && p < arr[j]) {
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

  function shuffle(arr) {

    for (let i = 0; i < arr.length; i++) {
      const random = ~~(Math.random(arr.length - i) * arr.length)
      swap(arr, i, random)
    }

    return arr
  }

  sort(0, nums.length - 1)

  return arr
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
  ]
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {

  const monotonicQueue = function() {
    const arr = []

    const push = function(n) {
      // Before adding item to queue, pop out all items that's lower than itself
      while (arr.length && arr[arr.length - 1] < n) {
        arr.pop()
      }

      arr.push(n)
    }

    const pop = function(n) {
      if (n == arr[0]) {
        arr.shift()
      }
    }

    return {
      push,
      pop,
      get max() {
        return arr[0]
      }
    }
  }

  const res = []
  const win = monotonicQueue()

  for (let i = 0; i < nums.length; i++) {
    if (i < k - 1) {
      win.push(nums[i])
    } else {
      // expand window
      win.push(nums[i])
      // record max item
      res.push(win.max)
      // shrink window
      win.pop(nums[i - k + 1])
    }
  }

  return res
};


module.exports = {
  func: maxSlidingWindow,
  argTypes: [
    'Array',
    'Number',
  ],
  returnType: 'Array',
  tests: [
    [
      [1, 3, -1, -3, 5, 3, 6, 7],
      3
    ],
    [
      [1],
      1
    ],
  ]
}


/**
 * Steps: same to LeetCode 1094
 *
 *
 * Time complexity: O(n) / O(1)
 * We only need to loop once to create an array of difference once. And then getting result is constant time
 *
 * Space Complexity: O(n)
 * We need to store the calulated "difference" in an array which will be used for getting result later
 *
 */


/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
  function NumsDiff(nums) {
    this.diff = new Array(nums.length).fill(0)
    this.diff[0] = nums[0]

    for (let i = 1; i < nums.length; i++) {
      this.diff[i] = nums[i] - nums[i - 1]
    }

    return this
  }

  NumsDiff.prototype.increment = function(from, to, val) {
    this.diff[from] += val

    if (to + 1 < this.diff.length) {
      this.diff[to + 1] -= val
    }
  }

  NumsDiff.prototype.result = function() {
    const res = [this.diff[0]]

    for (let i = 1; i < this.diff.length; i++) {
      res.push(res[i - 1] + this.diff[i])
    }

    return res
  }

  const diff = new NumsDiff(new Array(n).fill(0))

  for (let b of bookings) {
    diff.increment(b[0] - 1, b[1] - 1, b[2])
  }

  return diff.result()
};

module.exports = {
  func: corpFlightBookings,
  argTypes: [
    'Array',
    'Number',
  ],
  returnType: 'Array',
  tests: [
    [
      [[1,2,10],[2,3,20],[2,5,25]],
      5
    ],
    [
      [[1,2,10],[2,2,15]],
      2
    ],
  ]
}

/**
 * @param {number[]} w
 */
var Solution = function(w) {
  // Generate pre sum array
  this.preSum = new Array(w.length).fill(0)
  this.preSum[0] = w[0]
  for (let i = 1; i < w.length; i++) {
    this.preSum[i] = this.preSum[i - 1] + w[i]
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  // Choose a number from the prefix sum array range (1 ~ last item of preSum)
  // Adding 1 to skip selecting 0
  const target = ~~(Math.random() * this.preSum[this.preSum.length - 1]) + 1

  return this.leftBound(target)
};

Solution.prototype.leftBound = function(target) {
  let left = 0
  let right = this.preSum.length - 1

  while (left <= right) {
    const mid = ~~(left + (right - left) / 2)

    if (this.preSum[mid] < target) {
      left = mid + 1
    } else if (this.preSum[mid] > target) {
      right = mid - 1
    } else if (this.preSum[mid] == target) {
      right = mid - 1
    }
  }

  return left
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */


module.exports = {
  func: function(actions, input) {
    const sol = new Solution(input[0][0])
    const res = []

    for (let i = 1; i < actions.length; i++) {
      res.push(sol.pickIndex())
    }

    return res
  },
  argTypes: [
    'Array',
    'Array',
  ],
  returnType: 'Array',
  tests: [
    [
      ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"],
      [[[1,3]],[],[],[],[],[]]
    ],
    [
      ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"],
      [[[3,14,1,7]],[],[],[],[],[]]
    ],
    [
      ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"],
      [[[1]],[],[],[],[],[]]
    ],
    [
      ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"],
      [[[4,2]],[],[],[],[],[]]
    ],
    [
      ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"],
      [[[1,2,3,4]],[],[],[],[],[]]
    ],
  ],
}

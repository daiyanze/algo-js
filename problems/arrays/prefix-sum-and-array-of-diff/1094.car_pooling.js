/**
 * Steps:
 *   1. Create a DiffArray class which includes methods of "adding values" and "gettings result"
 *   2. Create instance of DiffArray with given input: new DiffArray(input)
 *   3. Mutate the range diff-value (i, j) by the target value: diff[i] + target_value / diff[j] + target_value
 *   4. Get result
 * 
 * Challenges:
 *   1. The first element of a diff-array is the first element of input array
 *   2. Condition of whether to mutate the target element in range (i, j):
 *      If the target index is smaller than the element length, then we should deduct the number of that diff[j]
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
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {

  function DiffArray(nums) {
    this.diffArr = new Array(nums.length).fill(0)
    this.diffArr[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
      this.diffArr[i] = nums[i] - nums[i - 1]
    }

    return this
  }

  DiffArray.prototype.increment = function(start, end, delta) {
    this.diffArr[start] += delta

    if (end + 1 < this.diffArr.length) {
      this.diffArr[end + 1] -= delta
    }
  }

  DiffArray.prototype.result = function() {
    const res = [this.diffArr[0]]
    for (let i = 1; i < this.diffArr.length; i++) {
      res[i] = res[i - 1] + this.diffArr[i]
    }

    return res
  }

  const diff = new DiffArray(new Array(1001).fill(0))
  for (let i = 0; i < trips.length; i++) {
    diff.increment(trips[i][1], trips[i][2] - 1, trips[i][0])
  }

  const res = diff.result()

  for (let r of res) {
    if (capacity < r) {
      return false
    }
  }

  return true
};

module.exports = {
  func: carPooling,
  argTypes: [
    'Array',
    'Number',
  ],
  returnType: 'Array',
  tests: [
    [
      [[2,1,5],[3,3,7]],
      4
    ],
    [
      [[2,1,5],[3,3,7]],
      5
    ],
  ]
}

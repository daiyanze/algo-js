/**
 * This is similar to Leetcode 303 but with a 2 dimensional array. So we need an 2-d array to store the prefix sum.
 * The prefixSum matrix may look like this,
 * [
 *  [0, 0, 0],
 *  [0, 1, 2],
 *  [0, 2, 4],
 * ]
 *
 * The prefix matrix of prefixSum[i][j] is the sum from the sub matrix [0, 0, i - 1, j - 1]
 * In the following case, prefixSum[2][2] is the sum from [0, 0, 1, 1], which the value is 2
 * [0, 1, 2]
 * [0, 1, 2]
 * [0, 1, 2]
 *
 * To create prefix sum
 * prefixSum[i][j] = sum(0,0 ~ i-1,j) + sum(0,0, ~ i,j-1) - sum(0,0,i-1,j-1) + matrix[i -1][j - 1]
 *
 * To get the region sum of (x1, y1) ~ (x2, y2)
 * prefixSum[x2 + 1][y2 + 1] - prefixSum[x1][y2 + 1] - prefixSum[x2 + 1][y2] + prefixSum[x1][y1]
 *
 *
 * Time complexity: O(n^2) / O(1)
 * We only need to loop once to create a prefix sum array once. And then getting sum result is constant time
 *
 * Space Complexity: O(n)
 * We need to store the target elements in the prefix sum array
 *
 */

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.prefixSum = Array.from(Array(matrix.length + 1), () => new Array(matrix[0].length + 1).fill(0))

  for (let i = 1; i < matrix.length + 1; i++) {
    for (let j = 1; j < matrix[0].length + 1; j++) {
      this.prefixSum[i][j] =
        this.prefixSum[i][j - 1] + this.prefixSum[i - 1][j] - this.prefixSum[i - 1][j - 1]
        + matrix[i - 1][j - 1]
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return this.prefixSum[row2 + 1][col2 + 1] 
    - this.prefixSum[row2 + 1][col1] 
    - this.prefixSum[row1][col2 + 1]
    + this.prefixSum[row1][col1]
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

module.exports = {
  func: function(actions, input) {
    const [arr, ...sets] = input
    const nums = new NumMatrix(arr[0])

    const res = [null,]
    actions = actions.slice(1, actions.length)

    for (let i = 0; i < actions.length; i++) {
      res.push(nums[actions[i]](...sets[i]))
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
      ["NumMatrix","sumRegion","sumRegion","sumRegion"],
      [
        [
          [
            [3,0,1,4,2],
            [5,6,3,2,1],
            [1,2,0,1,5],
            [4,1,0,1,7],
            [1,0,3,0,5]
          ]
        ],
        [2,1,4,3],[1,1,2,2],[1,2,2,4]
      ]
    ],
    [
      ["NumMatrix","sumRegion","sumRegion","sumRegion"],
      [
        [
          [
            [0,1,2],
            [0,1,2],
            [0,1,2]
          ]
        ],
        [0,0,1,1],[0,0,2,2],[0,0,1,2]
      ]
    ],
  ]
}

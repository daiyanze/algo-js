
/**
 * To rotate matrix clockwise 90deg, we could follow the 2 steps below
 *   1. swap the items from corner to corner
 *   2. reverse the items horizontally
 *
 *
 * Time complexity: O(n^2)
 * Diagonal swap can be O(m * n), however horizontal reverse is O(n ^ 2)
 *
 * Space Complexity: O(1)
 * We could handle it in-place, only local variable for memorizing single value needed
 *
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length

  function diagonalSwap(matrix) {
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        const temp = matrix[i][j]
        matrix[i][j] = matrix[j][i]
        matrix[j][i] = temp
      }
    }
  }

  function horizontalReverse(matrix) {
    for (let i = 0; i < n; i++) {
      let start = 0
      let end = n - 1
      let temp = matrix[i][start]

      while (start < end) {
        temp = matrix[i][start]
        matrix[i][start++] = matrix[i][end]
        matrix[i][end--] = temp
      }

    }
  }

  diagonalSwap(matrix)
  horizontalReverse(matrix)

  return matrix
};

module.exports = {
  func: rotate,
  argTypes: [
    'Array',
  ],
  returnType: 'Array',
  tests: [
    [
      [[1,2,3],[4,5,6],[7,8,9]]
    ],
    [
      [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
    ],
  ]
}


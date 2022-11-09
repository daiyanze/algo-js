/**
 * The key points of the solution is to have 
 * 4 bounds to make the movement turn into the correct direction.
 * 
 *  top
 *  ------------->
 *  |left        | right
 *  |            |
 *  <-------------
 *  bottom
 *
 *
 * Steps:
 *  1. top <= bottom (top-left to top-right)
 *  2. left <= right (top-right to bottom-right)
 *  3. top <= bottom (bottom-right to bottom-left)
 *  4. left <= right (bottom-left to top-left)
 *
 *
 * Time complexity: O(m * n)
 * It depends on the matrix column and row size
 *
 * Space Complexity: O(1)
 *
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const m = matrix.length
  const n = matrix[0].length
  let top = 0
  let right = n - 1
  let bottom = m - 1
  let left = 0

  const res = []

  while (res.length < m * n) {
    // From top-left -> top-right
    if (top <= bottom) {
      for (let i = left; i <= right; i++) {
        res.push(matrix[top][i])
      }

      top++
    }

    // From top-right -> bottom-right
    if (left <= right) {
      for (let i = top; i <= bottom; i++) {
        res.push(matrix[i][right])
      }

      right--
    }

    // From bottom-right to bottom-left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i])
      }

      bottom--
    }

    // From bottom-left to top-left
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left])
      }

      left++
    }
  }

  return res
};

module.exports = {
  func: spiralOrder,
  argTypes: [
    'Array',
  ],
  returnType: 'Array',
  tests: [
    [
      [[1,2,3],[4,5,6],[7,8,9]]
    ],
    [
      [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
    ],
  ]
}

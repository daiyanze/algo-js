/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let top = 0
  let right = n - 1
  let bottom = n - 1
  let left = 0

  let start = 1
  const final = n ** 2
  const res = Array.from(new Array(n), () => new Array(n).fill(0))

  while (start <= final) {
    // top-left => top-right
    if (top <= bottom) {
      for (let i = left; i <= right; i++) {
        res[top][i] = start++
      }

      top++
    }

    // top-right => bottom-right
    if (left <= right) {
      for (let i = top; i <= bottom; i++) {
        res[i][right] = start++
      }

      right--
    }

    // bottom-right => bottom-left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res[bottom][i] = start++
      }

      bottom--
    }

    // bottom-left => top-left
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res[i][left] = start++
      }

      left++
    }
  }

  return res
};

module.exports = {
  func: generateMatrix,
  argTypes: [
    'Number',
  ],
  returnType: 'Array',
  tests: [
    [
      3
    ],
    [
      1
    ],
  ]
}

function minimumTotal(triangle) {
  // set i to current row
  // set n to current number's index
  // f(i, n) = Min(f(i + 1, n), f(i + 1, n + 1)) + f(i, n)

  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1])
    }
  }

  console.log(triangle)

  return triangle[0][0]
}

console.log(minimumTotal(
  [[2],[3,4],[6,5,7],[4,1,8,3]]
))

console.log(minimumTotal(
  [[-10]]
))

console.log(minimumTotal(
  [[-1],[2,3],[1,-1,-3]]
))

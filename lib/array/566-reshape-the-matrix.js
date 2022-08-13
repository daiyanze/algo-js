function matrixReshape(mat, r, c) {
  const row = mat.length
  const col = mat[0].length

  if (row * col != r * c) return mat
  if (row == r && col == c) return mat

  const res = Array.from(Array(r), () => new Array(c).fill(0))

  let m = 0
  let n = 0
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (m >= row) break

      if (n >= col) {
        n = 0
        m++
      }

      res[i][j] = mat[m][n]
      n++
    }
  }
  return res
}

console.log(matrixReshape([[1,2],[3,4]], 1, 4))
console.log(matrixReshape([[1,2],[3,4]], 2, 4))
console.log(matrixReshape([[1,2],[3,4]], 4, 1))

// BFS
// Start from 0, and walk to cell of -1
function updateMatrix(mat) {
  const row = mat.length
  const col = mat[0].length
  const directions = [[0, 1], [-1, 0], [1, 0], [0, -1]]
  let queue = []
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mat[i][j]) {
        mat[i][j] = -1
      } else {
        // enqueue when cell is 0
        queue.push([i, j])
      }
    }
  }

  let distance = 1
  while(queue.length) {
    const len = queue.length
    for (let k = 0; k < len; k++) {
      const cell = queue.shift()

      for (let i = 0; i < directions.length; i++) {
        const m = directions[i][0] + cell[0]
        const n = directions[i][1] + cell[1]

        // Only process when cell is -1
        if (m < 0 || m >= row || n < 0 || n >= col || mat[m][n] >= 0) {
          continue
        }
        mat[m][n] = distance
        queue.push([m, n])
      }
    }
    distance++
  }

  return mat
}

// DFS (recurrsion)
// function updateMatrix(mat) {
//   const row = mat.length
//   const col = mat[0].length
//   const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]]
//   const stack = []

//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       if (mat[i][j]) {
//         mat[i][j] = -1
//       }
//     }
//   }

//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       if (mat[i][j] < 0) {
//         mat[i][j] = dfs(i, j)
//       }
//     }
//   }


//   function dfs(m, n, distance = 1) {
//     for (let i = 0; i < directions.length; i++) {
//       const y = directions[i][0] + m
//       const x = directions[i][1] + n

//       if (y < 0 || y >= row || x < 0 || x >= col || mat[y][x] >= 0) {
//         continue
//       }

//       dfs(y, x, distance)
//     }

//     distance++
//     
//     return distance
//   }

//   return mat
// }


console.log(updateMatrix([[0,0,0],[0,1,0],[0,0,0]]))
console.log(updateMatrix([[0,0,0],[0,1,0],[1,1,1]]))


// BFS
function shortestPathBinaryMatrix(grid) {
  if (grid[0][0]) return -1

  const row = grid.length
  const col = grid[0].length

  if (grid[row - 1][col - 1]) return -1

  const directions = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]]
  const queue = [[0, 0]]
  const visited = Array.from(Array(row), () => new Array(col).fill(0))
  visited[0][0] = 1

  let path = 0
  while (queue.length) {
    let len = queue.length

    for (let i = 0; i < len; i++) {
      const [x, y] = queue.shift()

      // The first time reaching to the target is always the shortest
      if (x == col - 1 && y == row - 1) {
        return ++path
      }

      for (let j = 0; j < directions.length; j++) {
        const m = x + directions[j][0]
        const n = y + directions[j][1]

        if (m < 0 || m >= row || n < 0 || n >= col || visited[m][n] || grid[m][n]) {
          continue
        }

        visited[m][n] = 1
        queue.push([m, n])
      }
    }
    path++
  }
  console.log(visited)

  return -1
}

// console.log(shortestPathBinaryMatrix(
//   [0,1,0],[1,1,0],[1,1,0]
// ))
console.log(shortestPathBinaryMatrix(
  [[0,0,0],[1,1,0],[1,1,0]]
))

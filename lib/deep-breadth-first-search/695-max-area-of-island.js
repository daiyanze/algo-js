// BFS
function maxAreaOfIsland(grid) {
  const row = grid.length
  const col = grid[0].length
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]] 
  let max = 0
  const queue = []

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let cnt = 0
      if (grid[i][j]) {
        queue.push([i, j])
        grid[i][j] = 0
        while (queue.length) {
          const cell = queue.shift()
          cnt++

          for (let k = 0; k < directions.length; k++) {
            const y = directions[k][0] + cell[0]
            const x = directions[k][1] + cell[1]

            if (x >= 0 && x < col && y >= 0 && y < row && grid[y][x]) {
              queue.push([y, x])
              grid[y][x] = 0
            }
          }
        }
        max = Math.max(max, cnt)
        cnt = 0
      }
    }
  }

  return max
}

// DFS (stack)
function maxAreaOfIsland(grid) {
  const row = grid.length
  const col = grid[0].length
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]
  let max = 0
  // island connections
  const stack = []

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let cnt = 0
      if (grid[i][j]) {
        stack.push([i, j])
        grid[i][j] = 0
        cnt++

        while (stack.length) {
          const cell = stack.pop()

          for (let k = 0; k < directions.length; k++) {
            const y = directions[k][0] + cell[0]
            const x = directions[k][1] + cell[1]

            if (y < 0 || y >= row || x < 0 || x >= col || !grid[y][x]) continue

            stack.push([y, x])

            grid[y][x] = 0
            cnt++
          }
        }

        max = Math.max(max, cnt)
        cnt = 0
      }
    }
  }

  return max
}

// DFS (recurrsion)
function maxAreaOfIsland(grid) {
  const row = grid.length
  const col = grid[0].length
  let max = 0
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]

  function dfs(m, n) {
    if (m < 0 || m >= row || n < 0 || n >= col || !grid[m][n]) return 0
    let cnt = 1
    grid[m][n] = 0

    for (let k = 0; k < directions.length; k++) {
      const y = directions[k][0] + m
      const x = directions[k][1] + n

      cnt += dfs(y, x)
    }

    return cnt
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      max = Math.max(dfs(i, j), max)
    }
  }

  return max
}

console.log(maxAreaOfIsland(
  [
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]
  ]
))

console.log(maxAreaOfIsland(
  [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]
))

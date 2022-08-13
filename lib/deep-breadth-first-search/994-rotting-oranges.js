function orangesRotting(grid) {
  const row = grid.length
  const col = grid[0].length
  const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]]
  const queue = []

  // Count all oranges
  let oranges = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j]) oranges++

      if (grid[i][j] == 2) {
        queue.push([i, j])
        grid[i][j] = -1
      } 
    }
  }

  if (!oranges) return 0

  let min = -1
  while (queue.length) {
    let len = queue.length

    for (let i = 0; i < len; i++) {
      const cell = queue.shift()
      oranges--

      for (let k = 0; k < directions.length; k++) {
        const m = directions[k][0] + cell[0]
        const n = directions[k][1] + cell[1]

        if (m < 0 || m >= row || n < 0 || n >= col || grid[m][n] <= 0) {
          continue
        }

        grid[m][n] = -1
        queue.push([m, n])
      }
    }

    min++
  }

  // If there're still fresh oranges left, then -1
  if (oranges) return -1

  return min
}

console.log(orangesRotting([
  [2,1,1],[1,1,0],[0,1,1]
]))
console.log(orangesRotting([
  [2,1,1],[0,1,1],[1,0,1]
]))
console.log(orangesRotting([
  [0,2]
]))

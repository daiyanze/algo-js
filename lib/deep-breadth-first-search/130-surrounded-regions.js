function solve(board) {
  const row = board.length
  const col = board[0].length
  const directions = [[0, 1], [-1, 0], [1, 0], [0, -1]]
  
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] == 'X') continue
      if (i == 0 || j == 0 || i == row - 1 || j == col - 1) continue

      board[i][j] = dfs(i, j) ? 'X' : board[i][j]
    }
  }
  
  function dfs(x, y, prev = []) {
    if (x < 0 || x >= row || y < 0 || y >= col || board[x][y] == 'X') {
      return true
    }

    if (x == 0 || y == 0 || x == row - 1 || y == col - 1) {
      return false
    }

    let res = true;
    for (let i = 0; i < directions.length; i++) {
      const [m, n] = directions[i]

      if (prev.length) {
        if (prev[0] == x + m || prev[1] == y + n) {
          continue
        }
      }

      res &= dfs(x + m, y + n, [x, y])
    }

    return res
  }

  return board
};

function solve(board) {
  const row = board.length
  const col = board[0].length

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // Check if there's any inner cell that connects to this boarder 'O'
      if (board[i][j] == 'O' && (i == 0 || j == 0 || i == row - 1 || j == col - 1)) {
        dfs(i, j)
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if(board[i][j] == 'C'){
        board[i][j] = 'O'
      } else {
        board[i][j] = 'X'
      }
    }
  }


  function dfs(x, y) {
    if (x < 0 || x >= row || y < 0 || y >= col || board[x][y] == 'X' || board[x][y] == 'C') {
      return
    }

    // Lable this cell to 'C' if it connects to border 'O'. This means this cell can't be flipped
    board[x][y] = 'C'
    
    dfs(x + 1, y)
    dfs(x - 1, y)
    dfs(x, y + 1)
    dfs(x, y - 1)

    return
  }

  return board
}

console.log(solve([
  ["X","X","X","X"],
  ["O","X","O","X"],
  ["X","X","X","X"],
  ["X","X","X","O"]
]))

console.log(solve([
  ["O","X","X","O","X"],
  ["X","O","O","X","O"],
  ["X","O","X","O","X"],
  ["O","X","O","O","O"],
  ["X","X","O","X","O"]
]))

console.log(solve([
  ["X","X","X","X","X"],
  ["X","O","O","O","X"],
  ["X","X","O","O","X"],
  ["X","X","X","O","X"],
  ["X","O","X","X","X"]
]))

console.log(solve(
  [['X']]
))

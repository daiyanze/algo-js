function exist(board, word) {
  const row = board.length
  const col = board[0].length

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (dfs(i, j)) {
        return true
      }
    }
  }

  function dfs(i = 0, j = 0, k = 0) {
    if (k == word.length) return true
    if (i < 0 || i >= row || j < 0 || j >= col) return false
    if (board[i][j] != word[k]) return false

    // Avoid checking the same field
    board[i][j] = '*'

    // Keep checking its adjacent cells
    const res = 
      dfs(i + 1, j, k + 1) || 
      dfs(i - 1, j, k + 1) || 
      dfs(i, j + 1, k + 1) ||
      dfs(i, j - 1, k + 1)

    // Change it back after search
    board[i][j] = word[k]

    return res
  }

  return false
}

console.log(exist(
  [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"],
  ], 
  "ABCCED"
))

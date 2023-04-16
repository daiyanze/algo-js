var solve = function(board) {
  const createUnionFind = function(n) {
    let count = n
    const parent = new Array(n)

    // An example of parent list 0 - 5.
    // 0's parent is 1
    // 1's is 1
    // 2's is 1
    // 3's is 2
    // 4's is 2
    // 5's is 3
    // Then the parent list should be  [1,1,1,2,2,3]
    //
    // The tree could be displayed as below
    //        1
    //      /   \
    //    0      2
    //          / \
    //         3   4
    //       /
    //     5
    //

    // initialize the parent array, set parent of each node to themselves
    // The parenting relationship will be updated later by `union` function
    for (let i = 0; i < n; i++) {
      parent[i] = i
    }

    function union(x, y) {
      // We find 
      const rootX = find(x)
      const rootY = find(y)

      if (rootX == rootY) {
        return
      }

      // Set rootX's parent to rootY
      parent[rootX] = rootY
      // Reduce connected components
      count--
    }

    // Check whether 2 nodes are connected
    function connected(x, y) {
      const rootX = find(x)
      const rootY = find(y)

      return rootX == rootY
    }

    // Elements below:
    // [0, 1, 2, 3, 4, 5]
    // Parent list:
    // [1, 1, 1, 2, 2, 3]
    // Suppose we're gong to find 5's root node
    // find(5) -> parent[5] -> 3
    // find(3) -> parent[3] -> 2
    // find(2) -> parent[2] -> 1
    // find(1) -> parent[1] -> 1
    // return 1 since parent[1] == 1
    function find(x) {
      // Normally, we will write the searching in the below way
      if (parent[x] == x) {
        return x
      }

      return find(parent[x])

      // Regarding the performance, we could optimize the function to reduce the size of the tree
      // There're many ways to optimize this, it should regard the data sets and actual usage scenario. There's no all-in-one-always solution.
      // Here're some examples of using the techniques of "Path Compression"
      //
      // Approach 1: moving the child node together with its parent's parent
      // (move 5 to under 3's parent 2)
      //        1                 1
      //      /   \             /   \
      //    0      2          0      2
      //          / \    =>        / | \
      //         3   4            3  4  5
      //       /                  
      //     5
    }

    return {
      connected,
      get count() {
        return count
      },
      find,
      union,
      parent,
    }
  }

  const m = board.length
  const n = board[0].length
  const dummy = m * n

  // Need an extra dummy parent, thus we need Count(board) + 1 nodes
  const UF = createUnionFind(m * n + 1)


  // Put the 4 margins of the board into UF if the cell value is "O"
  for (let i = 0; i < n; i++) {
    // First row
    if (board[0][i] == "O") {
      UF.union(dummy, i)
    }

    // Last row
    if (board[m - 1][i] == "O") {
      UF.union(dummy, n * (m - 1) + i)
    }
  }

  for (let j = 0; j < m; j++) {
    // First column
    if (board[j][0] == "O") {
      UF.union(dummy, n * j)
    }

    // Last column
    if (board[j][n - 1] == "O") {
      UF.union(dummy, n * j + n - 1)
    }
  }

  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]

  // To connect dummy and those cells that are not from 4 margins (top, bottom, left, right)
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (board[i][j] == 'O') {

        for (let k = 0; k < 4; k++) {
          const x = i + directions[k][0]
          const y = j + directions[k][1]

          if (board[x][y] == 'O') {
            UF.union(x * n + y, i * n + j)
          }
        }
      }
    }
  }

  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (!UF.connected(dummy, i * n + j)) {
        board[i][j] = 'X'
      }
    }
  }

  return board
};


module.exports = {
  func: solve,
  argTypes: [
    'Array',
  ],
  returnType: 'Array',
  tests: [
    [
      [["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]],
    ],
    [
      [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]],
    ],
    [
      [["X"]],
    ],
  ]
}

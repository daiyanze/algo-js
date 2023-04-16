/**
 * @param {number[][]} graph
 * @return {boolean}
 */

/**
 * DFS
 */
var isBipartite = function(graph) {
  // Boolean[] dividing nodes in 2 colors (true & false)
  const color = new Array(graph.length).fill(false)
  const visited = new Array(graph.length).fill(false)
  let result = true

  function dfs(i) {
    if (!result) return

    visited[i] = true

    for (let j = 0; j < graph[i].length; j++) {
      if (!visited[graph[i][j]]) {
        // paint the color cell with the different color of `i`
        color[graph[i][j]] = !color[i]
        // Continue with the adjacent nodes
        dfs(graph[i][j])
      } else {
        // When the adjacent nodes end up having the same colors, then it's not a valid bipartite graph
        if (color[graph[i][j]] == color[i]) {
          result = false
          return
        }
      }
    }
  }

  // avoid skipping the sole nodes, we iterate all nodes
  for (let i = 0; i < graph.length; i++) {
    if (!visited[v]) {
      dfs(i)
    }
  }

  return result
};

/**
 * BFS
 */
var isBipartite = function(graph) {
  const color = new Array(graph.length).fill(false)
  const visited = new Array(graph.length).fill(false)
  let result = true

  function bfs(cur) {
    visited[cur] = true

    const queue = [cur]

    while (queue.length && result) {
      const i = queue.shift()

      for (let j = 0; j < graph[i].length; j++) {
        if (!visited[graph[i][j]]) {
          // Paint different color to its neighbors
          color[graph[i][j]] = !color[i]

          visited[graph[i][j]] = true

          queue.push(graph[i][j])
        } else {
          if (color[graph[i][j]] == color[i]) {
            result = false
            return
          }
        }
      }
    }
  }

  for (let i = 0; i < graph.length; i++) {
    if (!visited[i]) {
      bfs(i)
    }
  }

  return result
}

module.exports = {
  func: isBipartite,
  argTypes: [
    'Array',
  ],
  returnType: 'Boolean',
  tests: [
    [
      [[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]],
    ],
    [
      [[1, 3], [0, 2], [1, 3], [0, 2]],
    ],
  ]
}

/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */

/**
 * DFS
 */
var possibleBipartition = function(n, dislikes) {
  const visited = new Array(n + 1).fill(false)
  const color = new Array(n + 1).fill(false)
  const graph = buildGraph(n, dislikes)
  let result = true

  function buildGraph(n, dislikes) {
    const graph = Array.from(new Array(n + 1), () => new Array())

    for (let i = 0; i < dislikes.length; i++) {
      const x = dislikes[i][0]
      const y = dislikes[i][1]

      // x & y are pointing at each other, so they're each other's indegree
      // [[x],[y]]
      graph[x].push(y)
      graph[y].push(x)
    }

    return graph
  }

  function dfs(i) {
    if (!result) return

    visited[i] = true

    for (let j = 0; j < graph[i].length; j++) {
      if (!visited[graph[i][j]]) {
        // paint color
        color[graph[i][j]] = !color[i]

        // set visited
        visited[graph[i][j]] = true

        // traverse other neighbor nodes
        dfs(graph[i][j])
      } else {
        if (color[graph[i][j]] == color[i]) {
          result = false
          return
        }
      }
    }
  }

  for (let i = 0; i < graph.length; i++) {
    if (!visited[i]) {
      dfs(i)
    }
  }

  return result
};

/**
 * BFS
 */
var possibleBipartition = function(n, dislikes) {
  const visited = new Array(n + 1).fill(false)
  const color = new Array(n + 1).fill(false)
  const graph = buildGraph(n, dislikes)
  let result = true

  function buildGraph(n, dislikes) {
    const graph = Array.from(new Array(n + 1), () => new Array())

    for (let i = 0; i < dislikes.length; i++) {
      const x = dislikes[i][0]
      const y = dislikes[i][1]

      graph[x].push(y)
      graph[y].push(x)
    }

    return graph
  }

  function bfs(cur) {
    const queue = [cur]

    while (queue.length) {
      const i = queue.shift()
      visited[i] = true

      for (let j = 0; j < graph[i].length; j++) {
        if (!visited[graph[i][j]]) {
          color[graph[i][j]] = !color[i]
          visited[graph[i][j]] = true
          queue.push(graph[i][j])
        } else {
          if (visited[graph[i][j]] == visited[i]) {
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
  func: possibleBipartition,
  argTypes: [
    'Number',
    'Array',
  ],
  returnType: 'Boolean',
  tests: [
    [
      4,
      [[1, 2], [1, 3], [2, 4]],
    ],
    [
      3,
      [[1, 2], [1, 3], [2, 3]],
    ],
  ]
}

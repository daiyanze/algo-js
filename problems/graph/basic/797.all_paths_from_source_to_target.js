/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

/**
 * DFS
 */
var allPathsSourceTarget = function(graph) {
  const res = []

  function traverse(i, path = []) {
    // Add node
    path.push(i)

    // Push the combination to result when it reaches the end node (n - 1)
    if (i == graph.length - 1) {
      res.push(path)
    }

    // Traverse other adjacent nodes
    for (let j = 0; j < graph[i].length; j++) {
      // We need to create a new path array before entering the next recurrsion
      traverse(graph[i][j], Array.from(path))
    }
  }

  traverse(0)

  return res
};

/**
 * BFS
 */
var allPathsSourceTarget = function(graph) {
  const res = []
  const queue = [[0]]

  while (queue.length) {
    const path = queue.shift()
    const cur = path[path.length - 1]

    if (cur == graph.length - 1) {
      res.push(path)
    }

    for (let i = 0; i < graph[cur].length; i++) {
      path.push(graph[cur][i])
      queue.push(Array.from(path))
      path.pop()
    }
  }

  return res
}


module.exports = {
  func: allPathsSourceTarget,
  argTypes: [
    'Array',
  ],
  returnType: 'Array',
  tests: [
    [
      [[1, 2], [3], [3], []],
    ],
    [
      [[4, 3, 1], [3, 2, 4], [3], [4], []],
    ],
  ]
}

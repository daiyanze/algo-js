/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const visited = new Array(numCourses).fill(false)
  const path = new Array(numCourses).fill(false)
  const graph = buildGraph(numCourses, prerequisites)
  let hasCycle = false

  // Result container
  const res = []

  function traverse(i) {
    if (path[i]) {
      hasCycle = true
    }

    if (visited[i] || hasCycle) {
      return
    }

    path[i] = true
    visited[i] = true

    for (let j = 0; j < graph[i].length; j++) {
      traverse(graph[i][j])
    }

    // Put course to the result container on postorder
    res.push(i)
    path[i] = false
  }

  function buildGraph(numCourses, prerequisites) {
    const graph = Array.from(new Array(numCourses), () => new Array())

    for (let i = 0; i < prerequisites.length; i++) {
      // Dependent course
      const to = prerequisites[i][0]
      // Host course
      const from = prerequisites[i][1]

      // We generate a dependent -> host graph here to avoid reversing result
      // Usually, the graph mapping is host -> dependent
      graph[to].push(from)
    }

    return graph
  }

  for (let i = 0; i < graph.length; i++) {
    traverse(i)
  }

  if (hasCycle) {
    return []
  }

  return res
};


module.exports = {
  func: findOrder,
  argTypes: [
    'Number',
    'Array',
  ],
  returnType: 'Array',
  tests: [
    [
      2,
      [[1, 0]],
    ],
    [
      4,
      [[1, 0], [2, 0], [3, 1], [3, 2]],
    ],
    [
      1,
      [],
    ],
  ]
}

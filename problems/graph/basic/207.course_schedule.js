/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

/**
 * DFS
 */
var canFinish = function(numCourses, prerequisites) {
  const visited = new Array(numCourses).fill(false)
  const path = new Array(numCourses).fill(false)
  const graph = buildGraph(numCourses, prerequisites)

  let hasCycle = false

  function traverse(i) {
    // If path is not reverted, then cycle exists
    if (path[i]) {
      hasCycle = true
    }

    // Return on
    //   Node has been visited
    //   Graph has cycle
    if (visited[i] || hasCycle) {
      return
    }

    // Record current node status
    path[i] = true
    visited[i] = true

    // Traverse to other nodes
    for (let j = 0; j < graph[i].length; j++) {
      traverse(graph[i][j])
    }

    // Revert current visit
    path[i] = false
  }

  // Generate adjacent graph based on tuple
  // From
  // [1, 0] [2, 0] [3, 2]
  //
  // to
  // 0 -> [1, 2]
  // 1 -> []
  // 2 -> [3]
  // 3 -> []
  //
  // Result matrix
  // [[1, 2], [], [3], []]
  function buildGraph(numCourses, prerequisites) {
    const graph = Array.from(new Array(numCourses), () => new Array())

    for (let i = 0; i < prerequisites.length; i++) {
      // The dependent course
      const to = prerequisites[i][1]
      // The course that relies on the dependent course
      const from = prerequisites[i][0]

      graph[from].push(to)
    }

    return graph
  }

  // There're some independent nodes which has no linkage.
  // Need a loop to make sure all nodes are traversed
  for (let i = 0; i < graph.length; i++) {
    traverse(i)
  }

  return !hasCycle
};


/**
 * BFS
 */
var canFinish = function(numCourses, prerequisites) {
  const graph = buildGraph(numCourses, prerequisites)
  // array to memorize each node's indegree
  // e.g. [[1, 0], [2, 0], [3, 1], [3, 2]]
  // 0 -> 3 dependencies
  // 1 -> 1 dep
  // 2 -> 0 dep
  // 3 -> 0 dep
  // 4 -> 0 dep
  // Then the arry of indgree would be [0, 1, 1, 2]
  const indegree = new Array(numCourses).fill(0)
  for (let i = 0; i < prerequisites.length; i++) {
    // const from = prerequisites[i][1]
    const to = prerequisites[i][0]

    indegree[to]++
  }

  // Enqueue nodes that has no indegree (indegree == 0)
  const queue = []
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] == 0) {
      queue.push(i)
    }
  }

  let count = 0
  while (queue.length) {
    const i = queue.shift()
    count++

    // Suppose we need to print the topological sort result
    // Just add the element into it below
    // res[count] = i

    for (let j = 0; j < graph[i].length; j++) {
      indegree[graph[i][j]]--
      if (indegree[graph[i][j]] == 0) {
        queue.push(graph[i][j])
      }
    }
  }

  function buildGraph(numCourses, prerequisites) {
    const graph = Array.from(new Array(numCourses), () => new Array())

    for (let i = 0; i < prerequisites.length; i++) {
      // The host course
      const host = prerequisites[i][1]
      // The course that depends on the first course
      const dependent = prerequisites[i][0]

      graph[host].push(dependent)
    }

    return graph
  }

  // If the cycle exists, then topological sort doesn't exist
  // We could return empty array when the count != numCourses

  return count == numCourses
};


module.exports = {
  func: canFinish,
  argTypes: [
    'Number',
    'Array',
  ],
  returnType: 'Boolean',
  tests: [
    [
      4,
      [[1, 0], [2, 0], [3, 1], [3, 2]],
    ],
    [
      2,
      [[1, 0]],
    ],
    [
      2,
      [[1, 0], [0, 1]],
    ],
  ]
}

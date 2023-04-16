/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
  /**
   * This function returns an array (outdegree list) that specifies the weights between start node and target node
   * For instance, the start node is 2, the returned array is [1, 3, 0, 2]
   * weight of 2 -> 0 is 1
   * weight of 2 -> 1 is 3
   * weight of 2 -> 2 is 0 (pointing at self has no path)
   * weight of 2 -> 3 is 2
   */
  function dijkstra(start, graph) {

    const createNode = function(id, distFromStart) {
      return {
        id,
        distFromStart
      }
    }

    const count = graph.length

    const queue = new MinPriorityQueue({
      priority: n => n.distFromStart
    })

    const distTo = new Array(count).fill(Infinity)
    // Initialize the start value with 0
    distTo[start] = 0

    queue.enqueue(createNode(start, 0))

    while (!queue.isEmpty()) {
      const { element: {
        id: curNodeId,
        distFromStart
      } } = queue.dequeue()

      if (distFromStart > distTo[curNodeId]) {
        continue
      }

      // EnquedistFromStarte the adjacent nodes
      for (let neighbor of graph[curNodeId]) {
        const nextNodeId = neighbor[0]
        const nextNodeWeight = neighbor[1]
        const distanceToNextNode = distFromStart + nextNodeWeight

        if (distanceToNextNode < distTo[nextNodeId]) {
          distTo[nextNodeId] = distanceToNextNode
          queue.enqueue(createNode(nextNodeId, distanceToNextNode))
        }
      }
    }

    return distTo
  }

  const graph = Array.from(new Array(n + 1), () => new Array())

  // Generate indegree graph
  for (let t of times) {
    const from = t[0]
    const to = t[1]

    graph[from].push([to, t[2]])
  }

  const distTo = dijkstra(k, graph)

  // Check if all elements in distTo are no longer 'Infinity'
  let res = 0
  // Need to start from 1 as 0 is excluded
  for (let i = 1; i < distTo.length; i++) {
    const d = distTo[i]
    if (d == Infinity) {
      return -1
    }

    res = Math.max(res, d)
  }

  return res
};


module.exports = {
  func: networkDelayTime,
  argTypes: [
    'Array',
    'Number',
    'Number',
  ],
  returnType: 'Number',
  tests: [
    [
      [[2, 1, 1], [2, 3, 1], [3, 4, 1]],
      4,
      2,
    ],
    [
      [[1, 2, 1]],
      2,
      1,
    ],
    [
      [[1, 2, 1]],
      2,
      2,
    ]
  ]
}

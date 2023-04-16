/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start, end) {
  if (edges.length < n - 1) {
    return 0.0
  }

  const graph = buildGraph(edges, succProb)

  function buildGraph(edges, succProb) {
    const graph = Array.from(new Array(edges.length), () => new Array())

    for (let i = 0; i < edges.length; i++) {
      const from = edges[i][0]
      const to = edges[i][1]

      graph[from].push([to, succProb[i]])
      graph[to].push([from, succProb[i]])
    }

    return graph
  }

  function dijkstra(start, end, graph) {
    const probability = new Array(n).fill(-Infinity)
    probability[start] = 1

    const queue = new MaxPriorityQueue({
      priority: n => n.probFromStart
    })

    function createNode(id, probFromStart) {
      return {
        id,
        probFromStart,
      }
    }

    queue.enqueue(createNode(start, 1))

    while (!queue.isEmpty()) {
      const {
        element: {
          id: curNodeId,
          probFromStart: curNodeProbFromStart,
        }
      } = queue.dequeue()

      if (curNodeId == end) {
        return curNodeProbFromStart
      }

      if (curNodeProbFromStart < probability[curNodeId]) {
        continue
      }

      for (let neighbor of graph[curNodeId]) {
        const nextNodeId = neighbor[0]
        const probToNextNode = probability[curNodeId] * neighbor[1]

        if (probToNextNode > probability[nextNodeId]) {
          probability[nextNodeId] = probToNextNode
          queue.enqueue(createNode(nextNodeId, probToNextNode))
        }
      }
    }

    return 0.0
  }

  return dijkstra(start, end, graph)
};

module.exports = {
  func: maxProbability,
  argTypes: [
    'Number',
    'Array',
    'Array',
    'Number',
    'Number',
  ],
  returnType: 'Number',
  tests: [
    [
      3,
      [[0, 1], [1, 2], [0, 2]],
      [0.5, 0.5, 0.2],
      0,
      2,
    ],
    [
      3,
      [[0, 1], [1, 2], [0, 2]],
      [0.5, 0.5, 0.3],
      0,
      2,
    ],
    [
      3,
      [[0, 1]],
      [0.5],
      0,
      2
    ]
  ]
}

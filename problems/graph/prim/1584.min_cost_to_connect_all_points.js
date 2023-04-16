/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {

  function createPrim(graph) {
    // graph: A table to record the points-edges [from, to, weight][]

    // Use the priorityQueue to make sure we can get the minimum value of the "connected-points"
    // Order the queue by graph{weight}
    const queue = new MinPriorityQueue({ priority: n => n[2] })
    // To memoize the visited points, and prevent revisiting
    const inMST = new Array(graph.length).fill(false)
    // Result of the weight from all points
    let weightSum = 0

    // Start cutting graph from the first point
    inMST[0] = true

    // This will enqueue the first point so that we could continue with the following while-loop
    cut(0)

    // Put all edges of point "s" into PriorityQueue
    function cut(s) {
      for (let i = 0; i < graph[s].length; i++) {
        // We only need to check the point that's been connected to
        // const from = graph[i][0]
        const to = graph[s][i][1]
        if (inMST[to]) {
          continue
        }

        queue.enqueue(graph[s][i])
      }
    }

    while (!queue.isEmpty()) {
      const { element: edge } = queue.dequeue()
      const to = edge[1]
      if (inMST[to]) {
        continue
      }
      inMST[to] = true
      weightSum += edge[2]

      // Add the node `to` for another round of "cutting", this will generate more "edges"
      cut(to)
    }

    return {
      cut,
      get weightSum() {
        return weightSum
      },
      // Check if all of the points are connected
      get allConnected() {
        // iterate the `inMST` array and see if there's one with `false` value
        for (let i = 0; i < inMST.length; i++) {
          if (!inMST[i]) {
            return false
          }
        }

        return true
      },
    }
  }

  function buildGraph(n, input) {
    // {from, to, weight}[][]
    // reason of `n - 1` is that the last node has been processed by former ones. Thus, we don't need that array
    const graph = Array.from(new Array(n), () => new Array())

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const x1 = input[i][0], y1 = input[i][1]
        const x2 = input[j][0], y2 = input[j][1]

        const hammingtonDistance = Math.abs(x1 - x2) + Math.abs(y1 - y2)

        // Make sure both of the points have the hammington distance record
        // So that when we enqueue each tuple, each pair's weight is compared 
        graph[i].push([i, j, hammingtonDistance])
        graph[j].push([j, i, hammingtonDistance])
      }
    }

    return graph
  }

  // create DAG-adjacent-table
  const graph = buildGraph(points.length, points)

  const prim = createPrim(graph)

  return prim.allConnected ? prim.weightSum : -1
};


module.exports = {
  func: minCostConnectPoints,
  argTypes: [
    'Array',
  ],
  returnType: 'Array',
  tests: [
    [
      [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]],
    ],
    [
      [[3, 12], [-2, 5], [-4, 1]],
    ],
    [
      [[0, 0], [1, 1], [1, 0], [-1, 1]],
    ]
  ]
}

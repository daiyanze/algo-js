/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
  const createUnionFind = (n) => {
    let count = n
    const parent = new Array(n)

    for (let i = 0; i < n; i++) {
      parent[i] = i
    }

    function union(x, y) {
      const rootX = find(x)
      const rootY = find(y)

      if (rootX == rootY) {
        return
      }

      parent[rootX] = rootY
      count--
    }

    function find(x) {
      if (parent[x] != x) {
        return find(parent[x])
      }

      return parent[x]
    }

    function connected(x, y) {
      const rootX = find(x)
      const rootY = find(y)

      return rootX == rootY
    }

    return {
      get count() {
        return count
      },
      union,
      connected,
      find,
    }
  }

  // A table to record the points-margins [from, to, weight][]
  const graph = []

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const x1 = points[i][0], y1 = points[i][1]
      const x2 = points[j][0], y2 = points[j][1]

      const hammingtonDistance = Math.abs(x1 - x2) + Math.abs(y1 - y2)

      graph.push([i, j, hammingtonDistance])
    }
  }

  // Sort graph in Descending order
  graph.sort((a, b) => a[2] - b[2])

  const UF = createUnionFind(points.length)

  // Minimum spanning tree
  let mst = 0
  for (let i = 0; i < graph.length; i++) {
    const x = graph[i][0]
    const y = graph[i][1]
    const val = graph[i][2]

    // Skip if the 2 points are already connected
    if (UF.connected(x, y)) {
      continue
    }

    // Connect the 2 points
    UF.union(x, y)

    // add weight to mst
    mst += val
  }

  // When "connected components" count is reduced to 1, then it means all points are connected
  return UF.count == 1 ? mst : -1
};


module.exports = {
  func: minCostConnectPoints,
  argTypes: [
    'Array',
  ],
  returnType: 'Number',
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

/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
  const m = heights.length - 1
  const n = heights[0].length - 1

  function dijkstra(start, end, graph) {
    const [x, y] = start
    const [m, n] = end
    // Priority queue for the "greedy approach" to get smallest difference each time
    const queue = new MinPriorityQueue({
      priority: n => n.effortFromStart
    })

    // Array for memoization
    const efforts = Array.from(new Array(graph.length), () => new Array(graph[0].length).fill(Infinity))
    // The initial case
    efforts[x][y] = 0

    function createNode(x, y, effortFromStart) {
      return {
        x,
        y,
        effortFromStart
      }
    }

    function getAdjNodes(x, y) {
      const adjacents = new Array()

      const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]
      for (let i = 0; i < directions.length; i++) {
        const _x = x + directions[i][0]
        const _y = y + directions[i][1]
        // Prevent from going accross the border
        if (_x >= graph.length || _x < 0 || _y >= graph[0].length || _y < 0) {
          continue
        }

        adjacents.push([_x, _y])
      }

      return adjacents
    }

    // Enqueue the start node
    queue.enqueue(createNode(x, y, 0))

    while (!queue.isEmpty()) {
      const {
        element: {
          x: curNodeX,
          y: curNodeY,
          effortFromStart: curNodeEffortFromStart
        }
      } = queue.dequeue()

      if (curNodeX == m && curNodeY == n) {
        return curNodeEffortFromStart
      }

      if (curNodeEffortFromStart > efforts[curNodeX][curNodeY]) {
        continue
      }

      const neighbors = getAdjNodes(curNodeX, curNodeY)

      for (let neighbor of neighbors) {
        const nextNodeX = neighbor[0]
        const nextNodeY = neighbor[1]
        const effortToNextNode = Math.max(
          Math.abs(graph[nextNodeX][nextNodeY] - graph[curNodeX][curNodeY]),
          efforts[curNodeX][curNodeY]
        )

        if (effortToNextNode < efforts[nextNodeX][nextNodeY]) {
          efforts[nextNodeX][nextNodeY] = effortToNextNode
          queue.enqueue(createNode(nextNodeX, nextNodeY, effortToNextNode))
        }
      }
    }

    return -1
  }

  return dijkstra([0, 0], [m, n], heights)
};


module.exports = {
  func: minimumEffortPath,
  argTypes: [
    'Array',
  ],
  returnType: 'Number',
  tests: [
    [
      [[1, 2, 2], [3, 8, 2], [5, 3, 5]],
    ],
    [
      [[1, 2, 3], [3, 8, 4], [5, 3, 5]],
    ],
    [
      [[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]],
    ]
  ]
}

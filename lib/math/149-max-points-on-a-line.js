// O(N^3) Bruteforce
function maxPoints(points) {
  if (points < 3) return points.length

  let max = 2
  for (let i = 0; i < points.length; i++) {
    const first = points[i]
    for (let j = i + 1; j < points.length; j++) {
      let count = 2
      const second = points[j]
      for (let k = j + 1; k < points.length; k++) {
        const third = points[k]
        // If the 3 points are in a line
        // Since
        // (p1x - p2x) / (p1y - p2y) = (p2x - p3x) / (p2y - p3y)
        // So
        // (p1x - p2x) * (p2y - p3y) = (p2x - p3x) * (p1y - p2y)

        const straightSlope1 = (first[0] - second[0]) * (second[1] - third[1])
        const straightSlope2 = (second[0] - third[0]) * (first[1] - second[1])

        if (straightSlope1 == straightSlope2) {
          count++
        }
      }
      max = Math.max(max, count)
    }
  }

  return max
}

// O(n^2) Hashset
function maxPoints(points) {
  if (points < 3) return points.length

  let max = 2
  for (let i = 0; i < points.length; i++) {
    // This hashmap contains the number of the "straight slope" points
    const hashmap = new Map()

    for (let j = i + 1; j < points.length; j++) {
      const mx = points[i][0] - points[j][0]
      const my = points[i][1] - points[j][1]

      let k = Math.abs(mx / my)

      if (k === -Infinity) {
        k = Infinity
      }

      k = '' + k

      if (!hashmap.has(k)) {
        hashmap.set(k, 2)
      } else {
        hashmap.set(k, hashmap.get(k) + 1)
      }

      max = Math.max(max, hashmap.get(k))
    }
  }

  return max
}

console.log(maxPoints(
  [1,0], [0,0]
))

console.log(maxPoints(
  [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
))

console.log(maxPoints(
  [[1,1],[2,2],[3,3]]
))

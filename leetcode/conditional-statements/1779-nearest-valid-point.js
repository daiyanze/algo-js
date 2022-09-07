function nearestValidPoint(x, y, points) {
  let min = Infinity
  let index = -1

  for (let i = 0; i < points.length; i++) {
    const [m, n] = points[i]
    if (x == m || y == n) {
      const md = Math.abs(x - m) + Math.abs(y - n)
      if (md < min) {
        index = i
        min = md
      }
    }
  }

  return index
}

console.log(nearestValidPoint(3,4,[[1,2],[3,1],[2,4],[2,3],[4,4]]))
console.log(nearestValidPoint(3,4,[[2,3]]))
console.log(nearestValidPoint(3,4,[[3,4]]))

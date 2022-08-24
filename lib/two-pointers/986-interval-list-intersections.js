function intervalIntersection(firstList, secondList) {
  let i = 0
  let j = 0
  const res = []

  while (i < firstList.length && j < secondList.length) {
    let low = Math.max(firstList[i][0], secondList[j][0])
    let high = Math.min(firstList[i][1], secondList[j][1])

    if (low <= high) {
      res.push([low, high])
    }
    
    if (firstList[i][1] < secondList[j][1]) {
      i++
    } else {
      j++
    }
  }

  return res
}

console.log(intervalIntersection(
  [[0,2],[5,10],[13,23],[24,25]],
  [[1,5],[8,12],[15,24],[25,26]]
))

console.log(intervalIntersection(
  [[1,3],[5,9]],
  []
))

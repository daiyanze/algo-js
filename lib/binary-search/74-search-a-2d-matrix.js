function searchMatrix(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    if (target > matrix[i][matrix[i].length - 1]) {
      continue
    }

    let left = 0
    let right = matrix[i].length - 1
    
    for (let j = 0; j < matrix[i].length; j++) {
      const mid = ~~(left + (right - left) / 2)

      if (matrix[i][mid] == target) {
        return true
      } else if (matrix[i][mid] > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
  }

  return false
}

console.log(searchMatrix(
  [[1,3,5,7],[10,11,16,20],[23,30,34,60]],
  3
))

console.log(searchMatrix(
  [[1,3,5,7],[10,11,16,20],[23,30,34,60]],
  1
))

console.log(searchMatrix(
  [[1,3]],
  3
))

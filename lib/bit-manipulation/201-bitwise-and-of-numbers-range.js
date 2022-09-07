// Binary common prefix
function rangeBitwiseAnd(left, right) {
  let shift = 0

  while (left != right) {
    left >>= 1
    right >>= 1
    shift++
  }

  return left << shift
}

// Biran Kernighan
function rangeBitwiseAnd(left, right) {
  while (right > left) {
    right = right & (right - 1)
  }

  return right
}

console.log(rangeBitwiseAnd(
  5, 7
))

console.log(rangeBitwiseAnd(
  0, 0
))

console.log(rangeBitwiseAnd(
  1, 2147483647
))

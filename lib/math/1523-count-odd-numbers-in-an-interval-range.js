function countOdds(low, high) {
  if (!(high % 2)) {
    high--
  }

  if (!(low % 2)) {
    low++
  }

  return (high - low) / 2 + 1
}

console.log(countOdds(3, 7))
console.log(countOdds(4, 8))
console.log(countOdds(8, 10))

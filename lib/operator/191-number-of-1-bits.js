function hammingWeight(n) {
  let sum = 0

  while(n) {
    sum += n & 1
    n = n >>> 1
  }

  return sum
}

console.log(hammingWeight(11))

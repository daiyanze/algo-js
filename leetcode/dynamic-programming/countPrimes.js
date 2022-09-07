function countPrimes(n) {
  const collection = []
  let res = 0

  for (let i = 2; i <= n; i++) {
    if (collection[i]) continue
    res++

    // e.g. n = 15, i = 3. Then, iteration would be
    // 3, 6, 9, 12
    // Set all of them to false
    for (let j = i; j <= n; j += i) {
      collection[j] = true
    }
  }

  return res
}

console.log(countPrimes(10))

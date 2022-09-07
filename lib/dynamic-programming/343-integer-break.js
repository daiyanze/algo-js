function integerBreak(n) {
  const memo = new Array(n + 1).fill(-1)
  // // Base case
  memo[1] = 0
  memo[2] = 1
  memo[3] = 2

  function dp(num) {
    if (num == 1) return 1

    if (memo[num] != -1) {
      return memo[num]
    }

    let max = -Infinity
    for (let i = 1; i < num; i++) {
      const res = dp(num - i) * i

      max = Math.max(i * (num - i), max, res)
    }

    memo[num] = max == -Infinity ? 1 : max

    return max
  }

  const res = dp(n)

  console.log(memo)

  return res
}

console.log(integerBreak(10))
console.log(integerBreak(2))

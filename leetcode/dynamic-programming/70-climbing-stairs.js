function climbStairs(n) {
  if (n <= 3) return n

  const dp = [0, 1, 2]
  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}

// Optimized
function climbStairs(n) {
  if (n <= 3) return n

  const dp = [1, 2]
  // dp = [1, 2, 3]
  // dp = [2, 3, 5]
  // dp = [3, 5, 8]
  while (n >= 3) {
    dp[2] = dp[1] + dp[0]
    dp[0] = dp[1]
    dp[1] = dp[2]
    n--
  }

  return dp[2]
}

// console.log(climbStairs(3))
console.log(climbStairs(4))
console.log(climbStairs(5))
console.log(climbStairs(6))

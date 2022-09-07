// Binomial Coefficient
// https://www.youtube.com/watch?v=M8BYckxI8_U


// DP
function uniquePaths(m, n) {
  const dp = Array.from(Array(m), () => new Array(n).fill(1))

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
}

// DP optimized
function uniquePaths(m, n) {
  let cur = new Array(n).fill(1)

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      console.log(i, j)
      cur[j] += cur[j - 1]
    }
  }

  return cur[n - 1]
}

// DP optimized recurrsion (top-bottom)
/**
 * 1, 1, 1, 1,  1,  1,  1
 * 1, 2, 3, 4,  5,  6,  7
 * 1, 3, 6, 10, 15, 21, 28
 *
 * f(x, y) = f(x - 1, y) + f(x, y - 1)
 */
function uniquePaths(m, n) {
  const memo = Array.from(Array(m), () => new Array(n).fill(0))
  
  function dp(x, y) {
    if (!x || !y) {
      return 1
    }

    if (x < 0 || y < 0) {
      return 0
    }

    if (memo[x][y] > 0) {
      return memo[x][y]
    }

    memo[x][y] = dp(x - 1, y) + dp(x, y - 1)

    return memo[x][y]
  }

  return dp(m - 1, n - 1)
}

console.log(uniquePaths(3, 7))

function maxProfit(prices) {
  // dp[0] sell
  // dp[1] hold
  const dp = [0, -prices[0]]

  for (let i = 1; i < prices.length; i++) {
    dp[0] = Math.max(dp[0], dp[1] + prices[i])
    dp[1] = Math.max(dp[1], -prices[i])
  }

  return dp[0]
}

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))

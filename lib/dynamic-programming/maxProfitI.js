
function maxProfitI(prices) {
  const dp = [[]]
  dp[0][0] = 0
  dp[0][1] = -prices[0]

  let i = 1
  while(i < prices.length) {
    if (!dp[i]) {
      dp[i] = [[]]
    }
    console.log("hold: ", dp[i - 1][0], dp[i - 1][1] + prices[i])
    console.log("sell: ", dp[i - 1][1], -prices[i])

    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])

    i++
  }

  console.log(dp)

  return dp[prices.length - 1][0]
}

console.log(maxProfitI([7,1,5,3,6,4]))

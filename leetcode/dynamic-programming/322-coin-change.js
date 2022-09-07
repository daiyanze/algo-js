function coinChange(coins, amount) {
  const memo = new Array(amount + 1).fill(-Infinity)

  function dp(amount) {
    if (amount < 0) return -1
    if (amount == 0) return 0

    if (memo[amount] != -Infinity) {
      return memo[amount]
    }

    let min = Infinity
    for (let i = 0; i < coins.length; i++) {
      const res = dp(amount - coins[i])
      if (res == -1) continue

      min = Math.min(res + 1, min)
    }

    memo[amount] = min == Infinity ? -1 : min

    return memo[amount]
  }

  const count = dp(amount)

  console.log(memo)
  return count
}

console.log(coinChange(
  [1,2,5], 11
))

console.log(coinChange(
  [2], 3
))

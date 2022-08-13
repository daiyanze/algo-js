function rob(nums) {
  const dp = [nums[0], nums[1]]
  // Current max = Bigger value of (the previous one max, the one before previous one + this time's value)
  // f(x) = max(f(x - 1), f(x - 2))

  let i = 2
  for (; i < nums.length; i++) {
    // Current = MAX of (previous max) vs (current + previous of previous)
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
  }

  return dp[i - 1]
}

// Optmized
function rob(nums) {
  if (nums.length == 1) return nums[0]
  if (nums.length == 2) return Math.max(nums[0], nums[1])

  const dp = [
    nums[0], 
    Math.max(nums[0], nums[1])
  ]

  for (let i = 2; i < nums.length; i++) {
    dp[2] = Math.max(dp[1], nums[i] + dp[0])
    dp[0] = dp[1]
    dp[1] = dp[2]
  }

  return dp[2]
}

console.log(rob([1,2,3,1]))
console.log(rob([2,1,1,2]))
console.log(rob([2,7,9,3,1]))
console.log(rob([0]))
console.log(rob([0,1]))

function maxSubArray(nums) {
  const dp = [nums[0]]

  for (let i = 1; i < nums.length; i++) {
    // Compare with previous number, if is smaller than 0 then don't pick the previous one as the start of sub-array
    dp[i] = Math.max(dp[i - 1], 0) + nums[i]
    dp[0] = Math.max(dp[0], dp[i])
  }

  return dp[0]
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

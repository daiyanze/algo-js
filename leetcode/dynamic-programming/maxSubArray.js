function maxSubArray(nums) {
  const dp = [nums[0]]
  
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], 0) + nums[i]
    dp[0] = Math.max(dp[i], dp[0])
    console.log(`nums[${i}]:`, nums[i], `, dp[${i}]:`, dp[i], `, max:`, dp[0])
  }

  return dp[0]
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

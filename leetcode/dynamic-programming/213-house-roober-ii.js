function rob(nums) {
  if (nums.length == 1) return nums
  if (nums.length == 2) return [Math.max(nums[0], nums[1])]

  function compare(start, end) {
    const dp = [nums[start], Math.max(nums[start], nums[start + 1])]

    for (let i = start + 2; i <= end; i++) {
      dp[2] = Math.max(dp[1], nums[i] + dp[0])
      dp[0] = dp[1]
      dp[1] = dp[2]
    }

    return dp[2] ? dp[2] : dp[1]
  }

  return Math.max(compare(0, nums.length - 2), compare(1, nums.length - 1))
}

console.log(rob(
  [2,3,2]
))

console.log(rob(
  [1,2,3,1]
))

console.log(rob(
  [1,2,3]
))

console.log(rob(
  [1,3,1,3,100]
))

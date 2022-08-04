function rob(nums) {
  const dp = [nums[0], nums[1]]
  // Current max = Bigger value of (the previous one max, the one before previous one + this time's value)
  // f(x) = max(f(x - 1), f(x - 2))

  for (let i = 2; i < nums.length; i++) {
    // Current = MAX of (previous max) vs (current + previous of previous)
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
  }

  return dp[nums.length - 1]
}

// optimized
function rob(nums) {
  if (nums.length == 1) return nums[0]
  if (nums.length == 2) return Math.max(nums[0], nums[1])
  let prevPrev = nums[0],
      prev = Math.max(nums[0], nums[1]),
      cur = 0

  for (let i = 2; i < nums.length; i++) {
    cur = Math.max(prev, nums[i] + prevPrev)
    prevPrev = prev
    prev = cur
  }

  return cur
}

console.log(rob([2,7,9,3,1]))

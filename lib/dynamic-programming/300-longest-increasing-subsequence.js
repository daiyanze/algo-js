function lengthOfLIS(nums) {
  const dp = new Array(nums.length).fill(1)
  
  let res = 1
  for (let i = 1; i < nums.length; i++) {
    let max = 0
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        max = Math.max(dp[j], max)
      }
    }
    dp[i] = max + 1
    res = Math.max(dp[i], res)
  }

  console.log(dp)

  return res
}

console.log(lengthOfLIS(
  [1,3,6,7,9,4,10,5,6]
))

console.log(lengthOfLIS(
  [10,9,2,5,3,7,101,18]
))

console.log(lengthOfLIS(
  [0,1,0,3,2,3]
))

// console.log(lengthOfLIS(
//   [7,7,7,7,7,7,7]
// ))

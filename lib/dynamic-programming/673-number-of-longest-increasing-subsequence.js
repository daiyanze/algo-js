function findNumberOfLIS(nums) {
  const dp = new Array(nums.length).fill(1)
  const count = new Array(nums.length).fill(1)

  let maxLength = 1
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[i] < dp[j] + 1) {
          dp[i] = dp[j] + 1
          count[i] = count[j]
        } else if (dp[i] == dp[j] + 1) {
          count[i] += count[j]
        }
      }
    }

    maxLength = Math.max(dp[i], maxLength)
  }

  console.log(dp)
  console.log(count)
  console.log(maxLength)

  let res = 0

  for (let i = 0; i < count.length; i++) {
    if (dp[i] == maxLength) {
      res += count[i]
    }
  }

  return res
}

function findNumberOfLIS(nums) {
  const dp = new Array(nums.length).fill(1)
  const count = new Array(nums.length).fill(1)

  let maxLength = 1
  for (let i = 1; i < nums.length; i++) {
    let currentMax = 0
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[j] == currentMax) {
          count[i] += count[j]
        } else if (dp[j] > currentMax) {
          count[i] = count[j]
        }

        currentMax = Math.max(currentMax, dp[j])
      }
    }
    dp[i] = currentMax + 1

    maxLength = Math.max(maxLength, dp[i])
  }

  let res = 0

  for (let i = 0; i < dp.length; i++) {
    if (dp[i] == maxLength) {
      res += count[i]
    }
  }

  console.log('count: \n', count)

  return res
}

console.log(findNumberOfLIS(
  [1,2,4,3,5,4,7,2]
))

console.log(findNumberOfLIS(
  [1,3,5,4,7]
))

console.log(findNumberOfLIS(
[100,90,80,70,60,50,60,70,80,90,100]
))

// console.log(findNumberOfLIS(
//   [2,2,2,2,2]
// ))

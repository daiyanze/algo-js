// Math feature
// count = Sum(previous counts)
function numberOfArithmeticSlices(nums) {
  if (nums.length < 3) return 0

  let counts = 0
  let prev = 0
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]) {
      prev++
      counts += prev
    } else {
      prev = 0
    }
    console.log(i, prev, counts)
  }


  return counts
}

// DP recurssion (bottom-up)
function numberOfArithmeticSlices(nums) {
  
  function dp(n, res = 0) {
    if (n < 2) return 0
    
    if (nums[n] - nums[n - 1] == nums[n - 1] - nums[n - 2]) {
      return dp(n - 1, ++res) + res
    }

    return dp(n - 1)
  }

  return dp(nums.length - 1)
}


// DP recurssion optimized
// function numberOfArithmeticSlices(nums) {
//   if (nums.length < 2) return 0

//   const dp = new Array(nums.length).fill(0)
//   let res = 0

//   for (let i = 2; i < nums.length; i++) {
//     if (nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]) {
//       dp[i] = dp[i - 1] + 1
//     }

//     res += dp[i]
//   }
//   
//   return res
// }

console.log(numberOfArithmeticSlices(
  [1,2,3,4]
))

console.log(numberOfArithmeticSlices(
  [1,2,3,4,5,6]
))

// console.log(numberOfArithmeticSlices(
//   [1]
// ))

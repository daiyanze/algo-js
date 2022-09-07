// 123 -> (1, 2, 3) (12, 3) (1, 23)
// 1213 -> (1, 2, 1, 3) (12, 13) (1, 21, 3)
function numDecodings(s) {
  if (s[0] == '0') return 0

  const dp = new Array(s.length + 1).fill(0)

  dp[0] = 1
  dp[1] = s[0] == '0' ? 0 : 1

  for (let i = 2; i <= s.length; i++) {
    const c1 = s[i - 2]
    const c2 = s[i - 1]
    if (c1 == '1' || (c1 == '2' && c2 <= '6')) {
      dp[i] += dp[i - 2]
    }
    if (c2 >= '1' && c2 <= '9') {
      dp[i] += dp[i - 1]
    }
  }

  console.log(dp)
  return dp[s.length]
}

console.log(numDecodings(
  '1213'
))

// console.log(numDecodings(
//   '06'
// ))

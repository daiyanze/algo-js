// Two pointers
function longestPalindrome(s) {
  let res = ''
  function dp(s, i, j) {
    while (i >= 0 && j < s.length && s[i] == s[j]) {
      i--
      j++
    }

    return s.slice(++i, j)
  }

  for (let i = 0; i < s.length; i++) {
    let s1 = dp(s, i, i)
    let s2 = dp(s, i, i + 1)
    const longer = s1.length > s2.length ? s1 : s2

    if (longer.length > res.length) {
      res = longer
    }
  }

  return res
}

function longestPalindrome(s) {
  let res = null
  const dp = Array.from(Array(s.length), () => new Array(s.length).fill(0))

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = 0; j < s.length; j++) {
      // 1. char should equal
      // 2. i & j window distance should equal either 1 or 2. E.g. aa(1) / aba(2)
      // 3. if window distance is longer than 2, then substring should be palindrome as well
      dp[i][j] = s[i] == s[j] && (j - i < 3 || dp[i + 1][j - 1]) ? 1 : 0

      // Update result if the current string is longer
      if (dp[i][j] && (res == null || j - i + 1 > res.length)) {
        res = s.slice(i, j + 1)
      }
    }
  }

  console.log(dp)

  return res
}

console.log(longestPalindrome(
  "acdbab"
))

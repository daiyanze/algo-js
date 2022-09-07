// Backtrack + DP
function wordBreak(s, wordDict) {
  const memo = new Array(s.length).fill(-1)

  function dp(from = 0) {
    if (from == s.length) {
      return true
    }

    if (memo[from] > -1) {
      return !!memo[from]
    }

    for (let i = 0; i < wordDict.length; i++) {
      const prefix = wordDict[i]
      const str = s.substring(from, from + prefix.length)

      if (from + prefix.length > s.length) continue

      if (str == prefix) {
        if (dp(prefix.length + from)) {
          memo[from] = 1
          return true
        }
      }
    }

    memo[from] = 0

    return false
  }

  return dp()
}

// DP table only
function wordBreak(s, wordDict) {
  const dp = new Array(s.length + 1).fill(false)
  dp[0] = true

  for (let i = 0; i < s.length; i++) {
    if (!dp[i]) continue

    for (let j = 0; j < wordDict.length; j++) {
      const word = wordDict[j]

      if (s.substring(i, i + word.length) === word) {
        dp[i + word.length] = true
      }
    }
  }

  return dp[s.length]
}

console.log(wordBreak(
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
  ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
))

console.log(wordBreak(
  "bb",
  ["a","b","bbb","bbbb"]
))

console.log(wordBreak(
  'applepenapple',
  ['apple', 'pen']
))

console.log(wordBreak(
  "catsandog",
  ["cats","dog","sand","and","cat"]
))

console.log(wordBreak(
  'leetcode',
  ['leet', 'code']
))

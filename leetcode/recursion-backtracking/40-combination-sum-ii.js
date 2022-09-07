function combinationSum(candidates, target) {
  candidates = candidates.sort((a, b) => a - b)
  const res = []

  function dfs(n = 0, sum = 0, paths = []) {
    if (sum > target) return
    if (sum == target) {
      res.push(Array.from(paths))
      return
    }

    for (let i = n; i < candidates.length; i++) {
      if (candidates[i] > target) break
      if (used[i]) continue
      if (i > n && candidates[i] == candidates[i - 1]) continue
      sum += candidates[i]
      paths.push(candidates[i])
      dfs(i + 1, sum, paths)
      paths.pop()
      sum -= candidates[i]
    }
  }

  dfs()

  return res
}

console.log(combinationSum(
  [10,1,2,7,6,1,5], 8
))

function combinationSum(candidates, target) {
  candidates = candidates.sort((a, b) => a - b)
  const res = []

  function dfs(n = 0, paths = [], sum = 0) {
    if (sum > target) return
    if (sum == target) {
      res.push(Array.from(paths))
      return
    }

    for (let i = n; i < candidates.length; i++) {
      if (candidates[i] > target) break
      sum += candidates[i]
      paths.push(candidates[i])
      dfs(i, paths, sum)
      paths.pop()
      sum -= candidates[i]
    }
  }

  dfs()

  return res
}

console.log(combinationSum(
  [2,3,6,7], 7
))

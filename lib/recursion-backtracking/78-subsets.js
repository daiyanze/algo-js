function subsets(nums) {
  const res = []

  function dfs(n = 0, paths = []) {
    res.push(paths)

    for (let i = n; i < nums.length; i++) {
      paths.push(nums[i])
      dfs(i + 1, Array.from(paths))
      paths.pop()
    }
  }

  dfs()

  return res
}

console.log(subsets(
  [1,2,3]
))

console.log(subsets(
  [0]
))

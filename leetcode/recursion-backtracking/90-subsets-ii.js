function subsetsWithDup(nums) {
  nums = nums.sort((a, b) => a - b)
  const res = []

  function dfs(n = 0, paths = []) {
    res.push(paths)

    for (let i = n; i < nums.length; i++) {
      if (i != n && nums[i] == nums[i - 1]) continue

      paths.push(nums[i])
      dfs(i + 1, Array.from(paths))
      paths.pop()
    }
  }

  dfs()

  return res
}

console.log(subsetsWithDup(
  [1,2,2]
))

console.log(subsetsWithDup(
  [0]
))

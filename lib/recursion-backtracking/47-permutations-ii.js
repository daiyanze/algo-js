function permute(nums) {
  nums = nums.sort((a, b) => a - b)
  const res = []
  const used = new Array(nums.length).fill(0)

  function dfs(n = 0, paths = []) {
    if (paths.length == nums.length) {
      res.push(Array.from(paths))
      return
    }

    for (let i = 0; i < nums.length; i++) {
      // Skip if number has been used in previous recurrsion
      if (used[i]) continue
      // Skip if current number is same to previous
      if (i != n && nums[i] == nums[i - 1] && used[i - 1]) continue
      used[i] = 1
      paths.push(nums[i])
      dfs(i, paths)
      paths.pop()
      used[i] = 0
    }
  }

  // for (let i = 0; i < nums.length; i++) {
    // dfs(i)
  // }

  dfs()

  return res
}

console.log(permute([1,1,2]))
// console.log(permute([1,2,3]))

// 1 -> 2,3
// 2 -> 1,3
// 3 -> 1,2
function permute(nums) {
  if (nums.length == 1) return [nums]

  const len = nums.length
  const res = []
  const path = []
  const used = []
  function dfs() {
    if (path.length == len) {
      res.push(Array.from(path))
      return
    }
  
    for (let i = 0; i < len; i++) {
      if (used[i]) continue
      path.push(nums[i])
      used[i] = true
      dfs(i)
      path.pop()
      used[i] = false
    }
  }

  dfs()

  return res
}

console.log(permute([1,2,3]))
console.log(permute([0,1]))

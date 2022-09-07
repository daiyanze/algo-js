// Recursion & backtrack
function combine(n, k) {
  if (n < 0 || k <= 0 || n < k) return []

  const res = []

  function dfs(start = 1, path = []) {
    // Terminate point
    if (path.length == k) {
      res.push(Array.from(path))
      return
    }

    for (let i = start; i <= n - (k - path.length) + 1; i++) {
    // for (let i = start; i <= n; i++) {
      path.push(i)
      console.log('start:', start, 'i:', i, 'path:', path)
      dfs(i + 1, path)
      // remove backtrack
      path.pop()
    }
    console.log()
  }

  dfs()

  return res
}

console.log(combine(4, 2))
console.log(combine(1, 1))

function generateParentheses(n) {
  if (n == 1) return ['()']

  const res = []

  function dfs(left = n, right = n, str = '') {
    if (left > right) return

    if (!left && !right) {
      res.push(str)
      return
    }

    if (left > 0) {
      dfs(left - 1, right, str + '(')
    } 

    if (right > 0) {
      dfs(left, right - 1, str + ')')
    }
  }

  dfs()

  return res
}

console.log(generateParentheses(3))

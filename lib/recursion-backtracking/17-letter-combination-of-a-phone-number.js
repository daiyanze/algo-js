function letterCombinations(digits) {
  if (!digits.length) return []

  const alphabets = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ]

  const res = []

  function dfs(n = 0, paths = '') {
    if (n == digits.length) {
      res.push(paths)
      return
    }

    for (let i = 0; i < alphabets[digits[n]].length; i++) {
      dfs(n + 1, paths + alphabets[digits[n]][i])
    }
  }

  dfs()

  return res
}

console.log(letterCombinations("23"))
console.log(letterCombinations("345"))
console.log(letterCombinations("7"))
console.log(letterCombinations(""))

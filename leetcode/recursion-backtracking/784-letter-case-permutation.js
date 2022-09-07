function letterCasePermutation(s) {
  const arr = s.split('')
  if (arr.length == 1 && !isNaN(Number(arr[0]))) return arr

  const res = []
  const path = []

  function dfs(start = 0) {
    if (path.length == arr.length) {
      res.push(path.join(''))
      return
    } 

    if (!isNaN(Number(arr[start]))) {
      path.push(arr[start])
      dfs(start + 1)
      path.pop()
    } else {
      const cases = [
        arr[start],
        arr[start].toLowerCase() == arr[start]
          ? arr[start].toUpperCase()
          : arr[start].toLowerCase()
      ]

      for (let i = 0; i < cases.length; i++) {
        path.push(cases[i])
        dfs(start + 1)
        path.pop()
      }
    }
  }

  dfs()

  return res
}

console.log(letterCasePermutation('a1b2'))
console.log(letterCasePermutation('3z4'))
console.log(letterCasePermutation('C'))
console.log(letterCasePermutation('0'))

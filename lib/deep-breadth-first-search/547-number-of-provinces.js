function findCircleNum(isConnected) {
  const visited = new Array(isConnected.length).fill(0)
  let res = 0
  
  function dfs(n) {
    console.log(n, visited)
    for (let i = 0; i < isConnected.length; i++) {
      if (isConnected[n][i] == 1 && visited[i] == 0) {
        visited[n] = 1
        // console.log('n:', n, 'i:', i, 'visited:', visited)
        dfs(i)
      }
    }
  }

  for (let i = 0; i < isConnected.length; i++) {
    console.log()
    if (visited[i] == 0) {
      dfs(i)
      res++
    }
  }

  return res
}

console.log(findCircleNum(
  [[1,1,0],[1,1,1],[0,0,1]]
))

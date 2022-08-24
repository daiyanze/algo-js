function allPathsFromSourceToTarget(graph) {
  const n = graph.length - 1
  const res = []

  function dfs(i, paths = []) {
    paths.push(i)
  
    if (i === n) {
      res.push(paths)
      return
    }

    for (let j = 0; j < graph[i].length; j++) {
      dfs(graph[i][j], Array.from(paths))
    }
  }

  dfs(0)

  return res
}

console.log(allPathsFromSourceToTarget(
  [
    [1,2],
    [3],
    [3],
    []
  ]
))

console.log(allPathsFromSourceToTarget(
  [
    [4,3,1],
    [3,2,4],
    [3],
    [4],
    []
  ]
))

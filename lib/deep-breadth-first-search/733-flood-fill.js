// BFS (queue)
function floodFill(image, sr, sc, color) {
  if (image[sr][sc] == color) return image

  // 4 directions clockwise: top, right, bottom, left
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]

  // Save the color of the origin cell
  const originColor = image[sr][sc]

  // First cell to start with
  const queue = [[sr, sc]]

  while (queue.length) {
    const cell = queue.shift()
    image[cell[0]][cell[1]] = color
    
    for (let i = 0; i < directions.length; i++) {
      const x = directions[i][0] + cell[0]
      const y = directions[i][1] + cell[1]
      if (image[x] != undefined && image[x][y] != undefined && image[x][y] == originColor) {
        queue.push([x, y])
      }
    }
  }

  return image
}

// DFS (stack)
function floodFill(image, sr, sc, color) {
  if (image[sr][sc] == color) return image

  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]

  const originColor = image[sr][sc]

  const stack = [[sr, sc]]

  while (stack.length) {
    const cell = stack.pop()
    image[cell[0]][cell[1]] = color

    for (let i = 0 ; i < directions.length; i++) {
      const x = directions[i][0] + cell[0]
      const y = directions[i][1] + cell[1]
      if (image[x] != undefined && image[x][y] != undefined && image[x][y] == originColor) {
        stack.push([x, y])
      } 
    }
  }

  return image
}

// DFS (recurrsion)
function floodFill(image, sr, sc, color) {
  if (image[sr][sc] == color) return image

  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]

  const originColor = image[sr][sc]

  image[sr][sc] = color

  for (let i = 0; i < directions.length; i++) {
    const x = directions[i][0] + sr
    const y = directions[i][1] + sc
    if (image[x] != undefined && image[x][y] != undefined && image[x][y] == originColor) {
      floodFill(image, x, y, color)
    }
  }

  return image
}

console.log(floodFill([[1, 1, 1],[1, 1, 0],[1, 0, 1]], 1, 1, 2))
console.log(floodFill([[1, 0, 1],[1, 0, 0],[0, 1, 0]], 1, 1, 3))
console.log(floodFill([[0, 0, 0],[0, 0, 0],[0, 0, 0]], 1, 1, 0))

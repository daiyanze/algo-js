function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
  this.next = null
}

const node7 = new TreeNode(7, null, null)
const node6 = new TreeNode(6, null, null)
const node5 = new TreeNode(5, null, null)
const node4 = new TreeNode(4, null, null)
const node3 = new TreeNode(3, node6, node7)
const node2 = new TreeNode(2, node4, node5)
const node1 = new TreeNode(1, node2, node3)

// BFS
function connect(root) {
  let queue = [root]
  while (queue.length) {
    const len = queue.length

    for (let i = 0; i < len; i++) {
      const item = queue.shift()

      if (i < len - 1) {
        item.next = queue[0]
      } 

      if (item.left) {
        queue.push(item.left)
      }

      if (item.right) {
        queue.push(item.right)
      }
    }
  }

  return root
}

// BFS (optimized)
function connect(root) {
  let start = root
  while (start != null) {
    let iteration = start
    while (iteration) {
      if (iteration.left) {
        iteration.left.next = iteration.right
      }

      if (iteration.right && iteration.next) {
        iteration.right.next = iteration.next.left
      }
      
      iteration = iteration.next
    }

    start = start.left
  }

  return root
}

// DFS
function connect(root) {
  if (!root) return null

  function dfs(left, right) {
    if (!left) return null
    
    left.next = right

    dfs(left.left, left.right)
    dfs(left.right, right.left)
    dfs(right.left, right.right)
  }

  dfs(root.left, root.right)

  return root
}

console.log(connect(node1))

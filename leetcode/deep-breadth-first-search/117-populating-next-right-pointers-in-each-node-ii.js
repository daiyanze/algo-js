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
const node3 = new TreeNode(3, null, node7)
const node2 = new TreeNode(2, node4, node5)
const node1 = new TreeNode(1, node2, node3)

// DFS
function connect(root) {
  if (!root) return root

  function dfs(left, right) {
    if (!left && !right) {
      return null
    } else if (left && !right) {
      return left
    } else if (!left && right) {
      return right
    }

    left.next = right

    let res = dfs(left.left, left.right)
    res = dfs(res || left.right, right.left)
    dfs(res || right.left, right.right)
  }

  dfs(root.left, root.right)

  return root
}

// BFS
function connect(root) {
  const queue = [root]

  while (queue.length) {
    let len = queue.length

    let prev = null
    for (let i = 0; i < len; i++) {
      const node = queue.shift()

      if (prev) {
        prev.next = node
      }

      prev = node

      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right)
      }
    }
  }

  return root
}

console.log(connect(node1))


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  const result = []

  if (root == null) {
    return result
  }

  const queue = [root]

  while (queue.length) {
    result.unshift([])

    const levelSize = queue.length
    for (let i = 0; i < levelSize; i++) {
      result[0].push(queue[0].val)

      if (queue[0].left) {
        queue.push(queue[0].left)
      }

      if (queue[0].right) {
        queue.push(queue[0].right)
      }

      queue.shift()
    
  }

  return result
};}

/**
 * Another solution with DFS
 */
var levelOrderBottom_dfs = function(root) {
  const result = []

  const dfs = (node, depth = 0) => {
    // Base case
    if (node == null) {
      return node
    }
    
    if (result.length - 1 >= depth) {
      // add the value to the current layer's container
      result[depth].push(node.val)
    } else {
      // create a new container if it goes to a new layer
      result[depth] = []
    }
    
    // Iterate left side
    dfs(node.left, depth + 1)

    // Iterate right side
    dfs(node.right, depth + 1)
  }

  dfs(root)

  return result.reverse()
}

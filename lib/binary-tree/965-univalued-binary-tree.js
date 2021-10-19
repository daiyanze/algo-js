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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  /**
   * Solution: Level order Traversal
   * Analysis:
   * Traverse all of the nodes and check if there's any node that doesn't equal the root value
   * Both DFS and BFS work well.
   */
  if (root == null) {
    return true
  }

  let result = root.val

  const queue = [root]

  while (queue.length) {

    const levelSize = queue.length

    for (let i = 0; i < levelSize; i++) {
      result = queue[0].val

      if (result != root.val) {
        return false
      }

      if (queue[0].left) {
        queue.push(queue[0].left)
      }

      if (queue[0].right) {
        queue.push(queue[0].right)
      }

      queue.shift()
    }
  }

  return result == root.val
};

var isUnivalTree_DFS = function(root) {
  let result = true

  const dfs = (node) => {
    if (node == null) {
      return node
    }

    if (node.val != root.val) {
      result = false
    }

    dfs(node.left) || node.val

    dfs(node.right) || node.val
  }

  return result
}

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
var levelOrder = function(root) {
  // Solution: Breadth First Search

  /**
   * Analysis:
   * We will need to iterate the whole tree and append the value to that same layer's array,
   * and then after the layer's loop is done. Add the layer's array to the result
   */
  const result = []

  // Base case
  if (root == null) {
    return result
  }

  // Enqueue first node
  const queue = [root]

  while (queue.length) {
    // Set a list to hold each level's value
    const nodes = []
    
    // Need to memorize the current level size
    // Otherwise, in the "for" loop the queue size will increase which results in a wrong level size
    const levelLength = queue.length
    // Interat the current level
    for (let i = 0; i < queue.length; i++) {
      nodes.push(queue[0].val)

      // Enqueue the left node if not null
      if (queue[0].left) {
        queue.push(queue[0].left)
      }

      // Enqueue the right node if not null
      if (queue[0].right) {
        queue.push(queue[0].right)
      }

      // Pop the first element after operation
      queue.shift()
    }

    // Add the current level's value to the result
    result.push(nodes)
  }

  return result
};

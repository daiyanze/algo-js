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
var zigzagLevelOrder = function(root) {
  // Solution: Breadth first search
  
  /**
   * Analysis:
   * Similar to 102 binary tree level order traversal, we will traverse the nodes layer by layer.
   * The even number layer will use "push" and the odd number layer will use "unshift".
   * For example,
   *          3             layer: 0   ->  use "push"
   *        /   \
   *      5      8          layer: 1   ->  use "unshift"
   *    / \     / \
   *  1    4  7    9        layer: 2   ->  use "push" 
   */
  const result = []

  // Base case
  if (root == null) {
    return result
  }

  const queue = [root]
  // Set a flag to determine wether this layer needs to "zigzag"
  let zigzag = false
  while (queue.length) {
    const nodes = []

    // Memorize the current level size
    const levelSize = queue.length

    for (let i = 0; i < levelSize; i++) {
      // Determine "push" and "unshift"
      if (zigzag) {
        nodes.unshift(queue[0].val)
      } else {
        nodes.push(queue[0].val)
      }

      if (queue[0].left) {
        queue.push(queue[0].left)
      }

     if (queue[0].right) {
        queue.push(queue[0].right)
      }

      // Pop the first element
      queue.shift()
    }

    // Togle the zigzag flag after the current level finishes
    zigzag = !zigzag
    // Add the level to result
    result.push(nodes)
  }

  return result
}; 

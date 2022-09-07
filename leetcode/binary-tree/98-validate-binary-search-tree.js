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
var isValidBST = function(root) {
  // Solution: DFS recursion

  /**
   * Analysis:
   * The value on the right side is always bigger than the left side
   * We need to judge if the current node's value size is in the following order:
   * node.left.value < node.val < node.right.value
   */

  const dfs = (node, lowerLimit = -Infinity, upperLimit = Infinity) => {
    // Base case
    if (node == null) {
      return true
    }

    // False when the target node is smaller than lower bound or higher than upper bound
    if (lowerLimit >= node.val || upperLimit <= node.val) {
      return false
    }

    // Left first and then right
    return dfs(node.left, lowerLimit, node.val) && dfs(node.right, node.val, upperLimit)
  }

  return dfs(root)
};

var isValidBST_inorder = function(root) {
  // Solution: Non-recursion Inorder Traversal
  // For non-recursion DFS, we need to use a stack
  const stack = []

  // The smallest Integer in JS
  const inorder = -Infinity

  while (stack.length || root != null) {
    // Push all non-null left leaves into stack
    while (root != null) {
      stack.push(root)
      root = root.left
    }

    // Get the current top of the stack and pull it out from it
    root = stack.pop()
    
    // Check if left is bigger than root / right
    if (root.val <= inorder) {
      return false
    }

    // Save the current top value for next iteration comparison
    inorder = root.val

    // Move to right leaf
    root = root.right
  }

  return true
}

var isValidBST_inorder_recursion = function(root) {
  // For saving the previous node's value. Initial value should be the smallest
  let previousNodeValue = -Infinity
  // Save the result here
  let result = true

  const dfs = (node) => {
    // Base case
    if (node == null) {
      return
    }

    // Get left nodes
    dfs(node.left)

    // Check if the left side value is smaller than the right side
    if (previousNodeValue >= node.val) {
      result = false
      return
    }

    // Save the current value for the next recursion
    previousNodeValue = node.val

    // Get right nodes
    dfs(node.right)
  }

  dfs(root)

  return result
}


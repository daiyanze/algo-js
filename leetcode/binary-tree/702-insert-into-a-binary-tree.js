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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  // Solution: BFS
  /**
   * Analysis:
   * Loop through all of the tree nodes and compare with the current node.
   * If the value is smaller than it, insert it to the left leaf
   * If the value is bigger than it, insert it to the right leaf
   */

  // Start with a new node
  const node = new TreeNode(val)
  
  // Base case
  // If the tree is empty, make the node the root
  if (root == null) {
    return node
  }

  // We use a stack here as a condition of whether to continue the loop
  const stack = [root]
  while (stack.length) {
    const current = stack.pop()

    if (current.val > val) {
      // If the left node is null, insert the node
      if (!current.left) {
        current.left = node
        return root
      } else {
        // Continue to the next iteration
        stack.push(current.left)
      }
    } else {
      // If the right node is null, insert the node
      if (!current.right) {
        current.right = node
        return root
      } else {
        // Continue to the next iteration
        stack.push(current.right)
      }
    }
  }

  // Return the tree itself
  return root
};

var insertIntoBST_dfs = function(root, val) {
  // Soltion: DFS

  // Base
  // Return the node as root
  if (root == null) {
    return new TreeNode(val)
  }

  // Condition for the DFS recursion
  // val < left -> to the left
  // val > right -> to the right
  if (root.val >= val) {
    root.left = insertIntoBST(root.left, val)
  } else {
    root.right = insertIntoBST(root.right, val)
  }

  // Return the tree itself
  return root
}

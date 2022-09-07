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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  // Solution: DFS inroder traversal
  /**
   * Analysis:
   * The inorder traversal pattern is to handle operations between the left-traversal and right-traversal.
   * In this way, the left-side node can be prioritized
   * left -> operation -> right
   */

  const result = []

  // Deep first search
  const dfs = (node) => {
    if (node == null) return node

    // Get left node
    const left = dfs(node.left)
    
    // Append to the result
    result.push(node.val)

    // Get right node
    const right = dfs(node.right)

    return node
  }

  dfs(root)

  return result
};

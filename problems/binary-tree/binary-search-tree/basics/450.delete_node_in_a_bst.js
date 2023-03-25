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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {

  function getMinNode(node) {
    if (!node) return null

    while (node.left) {
      node = node.left
    }

    return node
  }

  function traverseDelete(node, key) {
    if (!node) return null

    if (node.val == key) {
      // delete target node

      // Case 1: no left but right
      if (!node.left) {
        return node.right
      }
      if (!node.right) {
        // Case 3: no right but left
        return node.left
      }

      // Case 4: both left and right
      // Find the smallest the node to attach to the current node for not breaking BST
      const minNode = getMinNode(node.right)

      // Delete the minNode from the existing sub right tree
      node.right = traverseDelete(node.right, minNode.val)

      minNode.left = node.left
      minNode.right = node.right

      node = minNode
    } else if (node.val > key) {
      node.left = traverseDelete(node.left, key)
    } else if (node.val < key) {
      node.right = traverseDelete(node.right, key)
    }

    return node
  }

  return traverseDelete(root, key)
};


module.exports = {
  func: deleteNode,
  argTypes: [
    'TreeNode',
    'Number',
  ],
  returnType: 'TreeNode',
  tests: [
    [
      [5, 4, 6, 2, null, null, 7],
      3
    ],
    [
      [5, 4, 6, 2, null, null, 7],
      0
    ],
    [
      [5, 3, 6, 2, 4, null, 7],
      4
    ],
    [
      [0],
      0
    ],
    [
      [],
      0
    ]
  ]
}

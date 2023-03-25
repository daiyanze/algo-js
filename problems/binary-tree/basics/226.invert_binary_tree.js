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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return root

  function traverse(root) {
    if (!root) return

    let temp = root.left
    root.left = root.right
    root.right = temp

    traverse(root.left)
    traverse(root.right)
  }

  traverse(root)

  return root
};


/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// var invertTree = function(root) {
//   if (!root) return root
//
//   function traverse(root) {
//     if (!root) return
//
//     const left = traverse(root.left)
//     const right = traverse(root.right)
//
//     root.left = right
//     root.right = left
//   }
//
//   traverse(root)
//
//   return root
// }


module.exports = {
  func: invertTree,
  argTypes: [
    'TreeNode',
  ],
  returnType: 'TreeNode',
  tests: [
    [
      [4,2,7,1,3,6,9],
    ],
    [
      [2,1,3],
    ],
  ]
}

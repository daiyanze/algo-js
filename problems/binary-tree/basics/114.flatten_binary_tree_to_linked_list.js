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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root) return null

  flatten(root.left)
  flatten(root.right)

  const left = root.left
  const right = root.right

  // unset left child
  root.left = null
  // attach left node to right
  root.right = left

  // We need to transform it into the following pattern
  //      root
  //      /
  //    left
  //       \
  //       right
  
  // attach right ones to the tail of current root right
  // root
  //    \
  //     ...(tail, not the end)
  //      \
  //       ...(tail, not the end)
  //        \
  //         tail
  let tail = root
  while (tail.right) {
    tail = tail.right
  }

  tail.right = right
};


module.exports = {
  func: flatten,
  argTypes: [
    'TreeNode',
  ],
  returnType: 'void',
  tests: [
    [
      [1,2,5,3,4,null,6],
    ],
    [
      [],
    ],
    [
      [0],
    ],
  ]
}

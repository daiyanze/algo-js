/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return root

  function populateRightPointer(left, right) {
    if (!left || !right) return
    
    left.next = right

    populateRightPointer(left.left, left.right)
    populateRightPointer(right.left, right.right)
    populateRightPointer(left.right, right.left)
  }

  populateRightPointer(root.left, root.right)

  return root
};


module.exports = {
  func: connect,
  argTypes: [
    'TreeNode',
  ],
  returnType: 'TreeNode',
  tests: [
    [
      [1,2,3,4,5,6,7],
    ],
    [
      [],
    ],
  ]
}

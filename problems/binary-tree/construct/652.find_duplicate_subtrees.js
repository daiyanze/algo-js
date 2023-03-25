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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  const map = new Map()
  const res = []

  function find(root) {
    // default null return
    if (!root) return '#'

    // postorder, reach to child nodes
    const left = find(root.left)
    const right = find(root.right)

    // serialize the value and put it in hashmap
    const idx = `${left},${right},${root.val}`

    // get the target combination count
    let cnt = map.get(idx)

    // push the node to result once the target has shown up twice
    if (cnt == 1) {
      res.push(root)
    }

    // add 1 to hash item value if it exists
    map.set(idx, (cnt || 0) + 1)

    return idx
  }

  find(root)

  return res
};


module.exports = {
  func: findDuplicateSubtrees,
  argTypes: [
    'TreeNode',
  ],
  returnType: 'Array',
  tests: [
    [
      [1,2,3,4,null,2,4,null,null,4],
    ],
    [
      [2,1,1],
    ],
  ]
}

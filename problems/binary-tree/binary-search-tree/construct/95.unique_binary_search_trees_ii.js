/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n == 0) return null

  function generate(low, high) {
    const res = []

    if (low > high) {
      res.push(null)
      return res
    }

    for (let i = low; i <= high; i++) {
      const left = generate(low, i - 1)
      const right = generate(i + 1, high)

      for (let l of left) {
        for (let r of right) {
          const root = new TreeNode(i)
          root.left = l
          root.right = r

          res.push(root)
        }
      }
    }

    return res
  }

  return generate(1, n)
};


module.exports = {
  func: generateTrees,
  argTypes: [
    'Number',
  ],
  returnType: 'TreeNode[]',
  tests: [
    [
      3,
    ],
    [
      1,
    ],
    [
      0,
    ],
  ]
}

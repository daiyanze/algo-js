function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const node5 = new TreeNode(5, null, null)
const node2 = new TreeNode(2, null, null)
const node3 = new TreeNode(3, node5, null)
const node1 = new TreeNode(1, node3, node2)

const _node7 = new TreeNode(7, null, null)
const _node4 = new TreeNode(4, null, null)
const _node3 = new TreeNode(3, null, _node7)
const _node1 = new TreeNode(1, null, _node4)
const _node2 = new TreeNode(2, _node1, _node3)

function mergeTrees(root1, root2) {
  if (!root1) return root2
  if (!root2) return root1

  root1.val += root2.val
  root1.left = mergeTrees(root1.left, root2.left)
  root1.right = mergeTrees(root1.right, root2.right)

  return root1
}

console.log(mergeTrees(node1, _node2))

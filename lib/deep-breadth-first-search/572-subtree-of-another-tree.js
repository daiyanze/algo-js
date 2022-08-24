function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

// root
const node2 = new TreeNode(2, null, null)
const node1 = new TreeNode(1, null, null)
const node5 = new TreeNode(5, null, null)
const node4 = new TreeNode(4, node1, node2)
const node3 = new TreeNode(3, node4, node5)

// sub
const node2_1 = new TreeNode(2, null, null)
const node1_1 = new TreeNode(1, null, null)
const node4_1 = new TreeNode(4, node1_1, node2_1)


function isEqual(node, subRoot) {
  if (!node && !subRoot) {
    return true
  } else if (!node || !subRoot) {
    return false
  } else {
    return node.val == subRoot.val && isEqual(node.left, subRoot.left) && isEqual(node.right, subRoot.right)
  }
}

function isSubtree(root, subRoot) {
  if (!root) return false
  return isEqual(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}

console.log(isSubtree(
  node3, node4_1
))

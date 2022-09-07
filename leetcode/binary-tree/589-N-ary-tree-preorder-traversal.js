function TreeNode(val, children) {
  this.val = (val===undefined ? 0 : val)
  this.children = children;
}

const node6 = new TreeNode(6, [])
const node5 = new TreeNode(5, [])
const node4 = new TreeNode(4, [])
const node3 = new TreeNode(3, [node5, node6])
const node2 = new TreeNode(2, [])
const node1 = new TreeNode(1, [node3, node2, node4])

function preorder(root) {
  const res = []

  function dfs(node) {
    if (!node) return null

    res.push(node.val)

    for (let i = 0; i < node.children.length; i++)  {
      dfs(node.children[i])
    }
  }

  dfs(root)

  return res
}

console.log(preorder(node1))

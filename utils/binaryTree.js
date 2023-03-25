/**
 * Helper classes to execute Binary-Tree test cases
 *
 *
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }

  toArray(treeNode) {
    // allow to use as static method
    let p = treeNode ? treeNode : this

    if (p) {
      return this._levelOrderTraverse(p)
    }

    return []
  }

  _levelOrderTraverse(treeNode) {
    let res = []
    const queue = [treeNode]

    while (queue.length) {
      const len = queue.length
      const cur = []

      for (let i = 0; i < len; i++) {
        const head = queue.shift()

        if (!head) {
          cur.push(null)
          continue
        }

        cur.push(head.val)

        if (head.left) {
          queue.push(head.left)
        } else {
          queue.push(null)
        }

        if (head.right) {
          queue.push(head.right)
        } else {
          queue.push(null)
        }
      }

      if (queue.length) {
        res = res.concat(cur)
      }
    }

    return res
  }

  _inorderTraverse(treeNode) {
    const res = []
    if (!treeNode) return res

    const root = treeNode

    function traverse(root) {
      if (!root) return

      traverse(root.left)

      if (root.left) {
        res.push(null)
      }

      res.push(root.val)

      if (root.right) {
        res.push(null)
      }

      traverse(root.right)
    }

    traverse(root)

    return res
  }
}

class BinaryTree {
  bNodes = null

  constructor(arr) {
    if (Array.isArray(arr)) {
      this.bNodes = this.fromArray(arr)
    }

    return this.bNodes
  }

  // Generate binary tree and return its head node
  fromArray(arr) {
    if (!arr.length) return null

    this.bNodes = this._insertLevelOrder(arr)

    return this.bNodes
  }

  // Generate in-order list of binary tree
  toArray(head) {
    if (!head) return []

    return this.head.toArray()
  }

  // Insert tree node in level order
  _insertLevelOrder(arr) {
    const root = new TreeNode(arr[0])
    const queue = [root]

    for (let i = 1; i < arr.length; i += 2) {
      const head = queue.shift()

      if (arr[i] != null) {
        head.left = new TreeNode(arr[i])

        queue.push(head.left)
      }

      if (i + 1 < arr.length && arr[i + 1] != null) {
        head.right = new TreeNode(arr[i + 1])

        queue.push(head.right)
      }
    }

    return root
  }
}

module.exports = {
  TreeNode,
  BinaryTree,
}

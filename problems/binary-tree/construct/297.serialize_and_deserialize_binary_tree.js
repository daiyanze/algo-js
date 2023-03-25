/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

///////////////////// Preoder ///////////////////////

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const res = []

  function traverse(root) {
    if (!root) {
      res.push('#')
      return
    }

    res.push(root.val)

    traverse(root.left)
    traverse(root.right)
  }

  traverse(root)

  return res.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data.length) return null
  const arr = data.split(',')
  let idx = 0

  function build() {
    const val = parseInt(arr[idx])

    if (isNaN(val)) {
      idx++
      return null
    }

    const root = new TreeNode(val)
    idx++
    root.left = build(root)
    root.right = build(root)

    return root
  }

  return build()
};

///////////////////// End of Preoder ///////////////////////



///////////////////// Postorder ///////////////////////

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const res = []

  function traverse(root) {
    if (!root) {
      res.push('#')
      return null
    }

    traverse(root.left)
    traverse(root.right)

    res.push(root.val)
  }

  traverse(root)

  return res.join(',')
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data.length) return null
  const arr = data.split(',')
  let idx = arr.length - 1

  function build() {
    const val = parseInt(arr[idx])

    if (isNaN(val)) {
      idx--
      return null
    }


    const root = new TreeNode(val)
    idx--
    root.right = build()
    root.left = build()

    return root
  }

  return build()
}

///////////////////// End of Postorder ///////////////////////


///////////////////// Levelorder ///////////////////////

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return ''

  const res = []
  const queue = [root]

  while (queue.length) {
    const cur = queue.shift()

    if (!cur) {
      res.push('#')
      continue
    } else {
      res.push(cur.val)
    }

    if (cur.left) {
      queue.push(cur.left)
    } else {
      queue.push(null)
    }

    if (cur.right) {
      queue.push(cur.right)
    } else {
      queue.push(null)
    }
  }

  return res.join(',')
}


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data.length) return null

  const arr = data.split(',')
  const root = new TreeNode(parseInt(arr[0]))
  const queue = [root]

  let i = 0
  while (i < arr.length - 1) {
    const cur = queue.shift()

    if (arr[++i] != '#') {
      cur.left = new TreeNode(parseInt(arr[i]))
      queue.push(cur.left)
    } else {
      cur.left = null
    }

    if (arr[++i] != '#') {
      cur.right = new TreeNode(parseInt(arr[i]))
      queue.push(cur.right)
    } else {
      cur.right = null
    }
  }

  return root
}

///////////////////// End of Levelorder ///////////////////////



/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */



module.exports = {
  func: function(input) {
    return deserialize(serialize(input))
  },
  argTypes: [
    'TreeNode',
  ],
  returnType: 'TreeNode',
  tests: [
    [
      [1,2,3,null,null,4,5],
    ],
    [
      [],
    ],
  ]
}

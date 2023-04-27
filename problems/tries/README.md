# Trie

## Basic 

```es6
var TrieMap = function() {
  // ASCII code count
  const R = 256
  // Total size of the trie tree
  this.size = 0

  function TrieNode(val) {
    this.val = val
    this.children = new Array(R)
  }

  const root = new TrieNode(null)

  function getNode(node, key) {
    let p = node

    for (let i = 0; i < key.length; i++) {
      // Stop searching if it reaches end
      if (p == null) {
        return null
      }

      // Search from the children
      const char = key[i].charCodeAt()
      p = p.children[char]
    }

    return p
  }

  this.get = function(key) {
    let x = getNode(root, key)

    if (x == null || x.val == null) {
      return null
    }

    return x.val
  }

  this.put = function(key, val) {
    if (!this.containsKey(key)) {
      this.size++
    }

    function put(node, key, val, idx) {
      if (node == null) {
        node = new TrieNode(null)
      }

      if (idx == key.length) {
        node.val = val
        return node
      }

      const char = key.charCodeAt(idx)

      node.children[char] = put(node.children[char], key, val, idx + 1)

      return node
    }

    root = put(root, key, val, 0)
  }

  this.remove = function(key) {
    if (!this.containsKey(key)) {
      return
    }

    function remove(node, key, idx) {
      if (node == null) {
        return
      }

      if (idx == key.length) {
        // We found the TriNode of the target key, now remove the value
        node.val = null
      } else {
        const char = key.charCodeAt(idx)
        // Remove the children recurrsively
        node.children[char] = remove(node, key, idx + 1)
      }

      // Postorder
      // Other TrieNodes on the Path which contains value, then we don't need to remove them
      if (node.val != null) {
        return node
      }

      // Check if the TrieNode has postfix
      for (let i = 0; i < R; i++) {
        // If there's one node with postfix, then we don't need to continue removing
        if (node.children[i]) {
          return node
        }
      }

      // Lone nodes needs to be removed
      return null
    }

    root = remove(root, key, 0)
    this.size--
  }

  this.containsKey = function(key) {
    return this.get(key) != null
  }

  this.hasKeyWithPrefix = function(prefix) {
    return getNode(root, prefix) != null
  }

  this.shortestPrefixOf = function(query) {
    let p = root
    for (let i = 0; i < query.length; i++) {
      if (p == null) {
        return ''
      }

      if (p.val != null) {
        return query.substring(0, i)
      }

      const char = query.charCodeAt(i)

      p = p.children[char]
    }

    if (p != null && p.val != null) {
      return query
    }

    return ''
  }

  this.longestPrefixOf = function(query) {
    let p = root
    let max = 0

    for (let i = 0; i < query.length; i++) {
      if (p == null) {
        continue
      }

      if (p.val != null) {
        // NOTE: If max++ is also viable?
        max = i
      }

      const char = query[i].charCodeAt()

      p = p.children[char]
    }

    if (p != null && p.val != null) {
      return query
    }

    return query.substring(0, max)
  }

  this.keysWithPrefix = function(pattern) {
    const res = []

    // This can quickly help us filter those non-existing patterns
    // Once it's found, we could start the searching 
    let x = getNode(root, pattern)

    if (x == null) {
      return res
    }

    // Backtrack, getting all pattern-like items
    function traverse(node, path = [pattern], res) {
      // It reaches the leave node
      if (node == null) {
        return
      }

      if (node.val != null) {
        res.push(path.toString())
      }

      for (let i = 0; i < R; i++) {
        path.push(String.fromCharCode(i))

        traverse(node.children[i], path, res)

        path.pop()
      }
    }

    traverse(x, [], res)

    return res
  }

  this.keysWithPattern = function(pattern, wildcardChar = ".") {
    const res = []

    function traverse(node, [], idx = 0, res) {
      if (node == null) {
        return
      }

      if (idx == pattern.length) {
        // 
        if (node.val != null) {
          res.push(path.toString())
        }

        return
      }

      const char = pattern.charCodeAt(idx)

      if (pattern[idx] == wildcardChar) {
        // Need to check all characters for matches
        for (let i = 0; i < R; i++) {
          path.push(String.fromCharCode(i))

          traverse(node.children[i], path, idx + 1, res)

          path.pop()
        }
      } else {
        path.push(pattern[idx])

        traverse(node.children[char], path, idx + 1, res)

        path.pop()
      }
    }

    traverse(root, pattern, [], idx, res)

    return res
  }

  this.hasKeyWithPattern = function(pattern, wildcardChar = ".") {

    function traverse(node, idx) {
      if (node == null) {
        return
      }

      if (idx == pattern.length) {
        // If the node val exists
        return node.val != null
      }

      const char = pattern.charCodeAt(idx)

      if (pattern[idx] != wildcardChar) {
        return traverse(node.children[char], idx + 1)
      } else {
        for (let i = 0; i < R; i++) {
          if (traverse(node.children[i], idx + 1)) {
            return true
          }
        }
      }

      return false
    }

    return traverse(node, 0)
  }
};

```

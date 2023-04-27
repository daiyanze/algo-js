
var Trie = function() {
  var TrieMap = function() {
    // lowercase English letters count
    const R = 26
    // Total size of the trie tree
    this.size = 0

    function TrieNode(val) {
      this.val = val
      this.children = new Array(R)
    }

    let root = new TrieNode(null)

    function getNode(node, key) {
      let p = node

      for (let i = 0; i < key.length; i++) {
        // Stop searching if it reaches end
        if (!p) {
          return null
        }

        // Search from the children
        const char = key[i].charCodeAt() - 97
        p = p.children[char]
      }

      return p
    }

    this.get = function(key) {
      let x = getNode(root, key)

      if (!x || !x.val) {
        return null
      }

      return x.val
    }

    this.put = function(key, val) {
      if (!this.containsKey(key)) {
        this.size++
      }

      function put(node, key, val, idx) {
        if (!node) {
          node = new TrieNode(null)
        }

        if (idx == key.length) {
          node.val = val
          return node
        }

        const char = key.charCodeAt(idx) - 97

        node.children[char] = put(node.children[char], key, val, idx + 1)

        return node
      }

      root = put(root, key, val, 0)
    }

    this.containsKey = function(key) {
      return this.get(key) != null
    }

    this.hasKeyWithPrefix = function(prefix) {
      return getNode(root, prefix) != null
    }

  }

  this.map = new TrieMap()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  this.map.put(word, 1)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  return this.map.containsKey(word)
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  return this.map.hasKeyWithPrefix(prefix)
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */


module.exports = {
  func: (actions, input) => {
    const trie = new Trie()

    const res = [null,]

    for (let i = 1; i < actions.length; i++) {
      const r = trie[actions[i]](input[i][0])
      res.push(r == undefined ? null : r)
    }

    return res
  },
  argTypes: [
    'Array',
    'Array',
  ],
  returnType: 'Array',
  tests: [
    [
      ["Trie", "insert", "search", "search", "startsWith", "insert", "search"],
      [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]],
    ],
  ]
}

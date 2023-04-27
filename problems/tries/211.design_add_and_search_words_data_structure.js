
var WordDictionary = function() {

  function Trie() {
    // 26 lowercase letters
    const R = 26
    this.size = 0

    function TrieNode(val) {
      this.val = val
      this.children = new Array(R)
    }

    let root = new TrieNode(null)

    function getNode(key) {
      let p = root

      for (let i = 0; i < key.length; i++) {
        if (p.val != null) {
          return p
        }

        const char = key.charCodeAt(i) - 97
        p = p.children[char]
      }

      return p
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

    this.get = function(key) {
      const node = getNode(root, key)

      if (!node || !node.val) {
        return null
      }

      return node
    }

    this.containsKey = function(key) {
      return this.get(key) != null
    }

    this.hasKeyWithPattern = function(pattern) {
      function traverse(node, idx) {
        if (node == null) {
          return false
        }

        if (idx == pattern.length) {
          return node.val != null
        }

        const char = pattern.charCodeAt(idx) - 97

        if (pattern[idx] != '.') {
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

      return traverse(root, 0)
    }
  }

  this.map = new Trie()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  this.map.put(word, 1)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  return this.map.hasKeyWithPattern(word)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */


module.exports = {
  func: (actions, input) => {
    const word = new WordDictionary(input[0])

    const res = [null,]

    for (let i = 1; i < actions.length; i++) {
      const r = word[actions[i]](input[i][0], input[i][0])
      res.push(r === undefined ? null : r)
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
      ["WordDictionary", "addWord", "addWord", "addWord", "search", "search", "search", "search"],
      [[], ["bad"], ["dad"], ["mad"], ["pad"], ["bad"], [".ad"], ["b.."]],
    ],
  ]
}

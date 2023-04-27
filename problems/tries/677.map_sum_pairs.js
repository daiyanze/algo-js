
var MapSum = function() {
  function Trie() {
    const R = 26
    this.size = 0

    function TrieNode(val) {
      this.val = val
      this.children = new Array(R)
    }

    let root = new TrieNode(null)

    function getNode(node, key) {
      let p = node

      for (let i = 0; i < key.length; i++) {
        if (!p) {
          return null
        }

        const char = key.charCodeAt(i) - 97
        p = p.children[char]
      }

      return p
    }

    this.get = function(key) {
      const node = getNode(root, key)

      if (node == null || node.val == null) {
        return null
      }

      return node.val
    }

    this.put = function(key, val) {
      if (!this.containsKey(key)) {
        this.size++
      }

      function put(node, idx) {
        if (!node) {
          node = new TrieNode(null)
        }

        if (idx == key.length) {
          node.val = val

          return node
        }

        const char = key.charCodeAt(idx) - 97

        node.children[char] = put(node.children[char], idx + 1)

        return node
      }


      put(root, 0)
    }

    this.containsKey = function(key) {
      return this.get(key) != null
    }

    this.keysWithPrefix = function(query) {
      const res = []

      let x = getNode(root, query)

      if (!x) {
        return []
      }

      function traverse(node, path = [query]) {
        if (!node) {
          return
        }

        if (node.val != null) {
          res.push(path.join(''))
        }

        for (let i = 0; i < R; i++) {
          path.push(String.fromCharCode(i + 97))

          traverse(node.children[i], path)

          path.pop()
        }

      }

      traverse(x)

      return res
    }
  }

  this.map = new Trie()
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  this.map.put(key, val)
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  const keys = this.map.keysWithPrefix(prefix)
  let sum = 0
  for (let k of keys) {
    sum += this.map.get(k)
  }

  return sum
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */


module.exports = {
  func: (actions, input) => {
    const map = new MapSum(input[0])

    const res = [null,]

    for (let i = 1; i < actions.length; i++) {
      const r = map[actions[i]](input[i][0], input[i][1])
      res.push(r === undefined ? null : r)
    }

    return res
  },
  argTypes: [
    'Array',
    'Array',
  ],
  returnType: 'String',
  tests: [
    [
      ["MapSum", "insert", "sum", "insert", "sum"],
      [[], ["apple", 3], ["ap"], ["app", 2], ["ap"]],
    ],
  ]
}

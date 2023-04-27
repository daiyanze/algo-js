/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {

  function Trie() {
    // 26 lowercase letters
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

        const char = key.charCodeAt(i)
        p = p.children[char]
      }

      return p
    }

    this.get = function(key) {
      let x = getNode(root, key)

      if (!x || !x.val) {
        return null
      }

      return x
    }

    this.containsKey = function(key) {
      return this.get(key) != null
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
          // Only the last leave shall have value so that we could indicate that this node is the end of the key
          node.val = val
          return node
        }

        const char = key.charCodeAt(idx) - 97

        node.children[char] = put(node.children[char], key, val, idx + 1)

        return node
      }

      root = put(root, key, val, 0)
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

        const char = query.charCodeAt(i) - 97

        p = p.children[char]
      }

      // The for loop above didn't include the last node for checking whether it's part of the prefix or not
      // This means the query itself maybe a valid prefix
      if (p && p.val) {
        return query
      }

      return ''
    }
  }

  const trie = new Trie()

  for (let i = 0; i < dictionary.length; i++) {
    trie.put(dictionary[i], i + 1)
  }

  const words = sentence.split(' ')

  for (let i = 0; i < words.length; i++) {
    const shortest = trie.shortestPrefixOf(words[i])

    if (shortest) {
      words[i] = shortest
    }
  }

  return words.join(' ')
};


module.exports = {
  func: replaceWords,
  argTypes: [
    'Array',
    'String',
  ],
  returnType: 'String',
  tests: [
    [
      ["cat", "bat", "rat"],
      "the cattle was rattled by the battery cat",
    ],
    [
      ["a", "b", "c"],
      "aadsfasf absbs bbab cadsfafs",
    ]
  ]
}

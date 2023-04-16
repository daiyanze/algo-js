/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  
  function createUnionFind(n) {
    let count = n
    const parent = new Array(n)
    for (let i = 0; i < n; i++) {
      parent[i] = i
    }

    function union(x, y) {
      const rootX = find(x)
      const rootY = find(y)

      if (rootX == rootY) return

      parent[rootX] = rootY

      // reduce components count
      count--
    }

    // Compress approach
    function find(x) {
      if (parent[x] == x) return x

      return find(parent[x])
    }

    function connected(x, y) {
      const rootX = find(x)
      const rootY = find(y)

      return rootX == rootY
    }
    
    return {
      get count() {
        return count
      },
      union,
      connected,
      find,
    }
  }

  const UF = createUnionFind(26)
  for (let e of equations) {
    // Connect characters when they equal
    if (e.charAt(1) == '=') {
      const x = e.charCodeAt(0) - 97
      const y = e.charCodeAt(3) - 97
      UF.union(x, y)
    }
  }

  for (let e of equations) {
    // Check if there're any conflicts
    if (e.charAt(1) == '!') {
      const x = e.charCodeAt(0) - 97
      const y = e.charCodeAt(3) - 97

      if (UF.connected(x, y)) {
        return false
      }
    }
  }

  return true
};


module.exports = {
  func: equationsPossible,
  argTypes: [
    'Array',
  ],
  returnType: 'Boolean',
  tests: [
    [
      ["a==b","b!=a"],
    ],
    [
      ["b==a","a==b"],
    ],
    [
      ["c==c","b==d","x!=z"],
    ],
    [
      ["a==b","b==c","c==a"],
    ],
  ]
}

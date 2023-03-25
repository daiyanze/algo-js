/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const memo = Array.from(new Array(n + 1), () => new Array(n + 1).fill(0))

  function count(low, high) {
    if (low > high) return 1
    let res = 0

    if (memo[low][high]) {
      res += memo[low][high]
      return res
    }

    for (let i = low; i <= high; i++) {
      const left = count(low, i - 1)
      const right = count(i + 1, high)
      res += left * right
    }

    memo[low][high] = res

    return res
  }

  return count(1, n)
};


module.exports = {
  func: numTrees,
  argTypes: [
    'Number',
  ],
  returnType: 'Number',
  tests: [
    [
      3,
    ],
    [
      1,
    ],
  ]
}

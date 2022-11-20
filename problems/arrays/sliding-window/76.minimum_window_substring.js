/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let left = 0
  let right = 0
  const sState = new Array(52).fill(0)
  const tState = new Array(52).fill(0)

  // initialize needle string map
  let tSize = 0
  for (let i = 0; i < t.length; i++) {
    let char = t.charCodeAt(i) - 97 + 26
    char = char < 0 ? t.charCodeAt(i) - 65 : char
    tState[char]++
    if (tState[char] == 1) {
      tSize++
    }
  }

  let matched = 0
  let start = left
  let len = Infinity
  while (right < s.length) {
    let c1 = s.charCodeAt(right) - 97 + 26
    c1 = c1 < 0 ? s.charCodeAt(right) - 65 : c1
    right++

    if (tState[c1]) {
      sState[c1]++

      if (tState[c1] == sState[c1]) {
        matched++
      }
    }

    while (matched == tSize) {
      // Set substring start & end
      if (right - left < len) {
        start = left
        len = right - left
      }

      let c2 = s.charCodeAt(left) - 97 + 26
      c2 = c2 < 0 ? s.charCodeAt(left) - 65 : c2
      left++

      if (tState[c2]) {
        if (tState[c2] == sState[c2]) {
          matched--
        }

        sState[c2]--
      }
    }
  }

  return len == Infinity ? "" : s.substr(start, len)
};

module.exports = {
  func: minWindow,
  argTypes: [
    'String',
    'String',
  ],
  returnType: 'String',
  tests: [
    [
      "ADOBECODEBANC",
      "ABC"
    ],
    [
      "a",
      "aa",
    ],
    [
      "aa",
      "aa",
    ],
    [
      "abc",
      "b",
    ],
    [
      "cabwefgewcwaefgcf",
      "cae",
    ],
    [
      "gehzduwqkzuyotckqcusdiqubeqglkvuocttzrllqfjhzorpqnjwxbqyfiesscmigicfzn",
      "qsvczwsslkhwg",
    ],
    [
      "ab",
      "A",
    ]
  ]
}

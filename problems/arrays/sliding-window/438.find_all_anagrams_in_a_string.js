/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let left = 0
  let right = 0
  const sMap = new Array(26).fill(0)
  const pMap = new Array(26).fill(0)

  let pSize = 0
  for (let i = 0; i < p.length; i++) {
    const char = p.charCodeAt(i) - 97
    pMap[char]++

    if (pMap[char] == 1) {
      pSize++
    }
  }

  const res = []
  let matched = 0
  while (right < s.length) {
    const c1 = s.charCodeAt(right) - 97
    right++

    if (pMap[c1]) {
      sMap[c1]++

      if (pMap[c1] == sMap[c1]) {
        matched++
      }
    }


    while (right - left >= p.length) {
      if (matched == pSize) {
        res.push(left)
      }

      const c2 = s.charCodeAt(left) - 97
      left++

      if (sMap[c2]) {
        if (sMap[c2] == pMap[c2]) {
          matched--
        }

        sMap[c2]--
      }
    }
  }

  return res
};

module.exports = {
  func: findAnagrams,
  argTypes: [
    'String',
    'String',
  ],
  returnType: 'Array',
  tests: [
    [
      'cbaebabacd',
      'abc',
    ],
    [
      'abab',
      'ab',
    ],
  ],
}

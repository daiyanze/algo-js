/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let left = 0
  let right = 0
  
  const s1Map = new Array(26).fill(0)
  const s2Map = new Array(26).fill(0)
  
  let s1Size = 0
  for (let i = 0; i < s1.length; i++) {
    const char = s1.charCodeAt(i) - 97
    s1Map[char]++

    if (s1Map[char] == 1) {
      s1Size++
    }
  }


  let matched = 0
  while (right < s2.length) {
    const c1 = s2.charCodeAt(right) - 97
    right++

    if (s1Map[c1]) {
      s2Map[c1]++
      
      if (s1Map[c1] == s2Map[c1]) {
        matched++
      }
    }

    while (right - left >= s1.length) {
      if (matched == s1Size) {
        return true
      }

      const c2 = s2.charCodeAt(left) - 97
      left++

      if (s2Map[c2]) {
        if (s1Map[c2] == s2Map[c2]) {
          matched--
        }

        s2Map[c2]--
      }
    }
  }

  return false
};

module.exports = {
  func: checkInclusion,
  argTypes: [
    'String',
    'String',
  ],
  returnType: 'Boolean',
  tests: [
    [
      'ab',
      'eidbaooo',
    ],
    [
      'ab',
      'eidboaoo',
    ],
  ],
}

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0
  let right = 0
  let max = 0
  const hash = {}

  while (right < s.length) {
    const c1 = s.charAt(right)
    right++

    hash[c1] = hash.hasOwnProperty(c1) ? hash[c1] + 1 : 1

    while (hash[c1] > 1) {
      const c2 = s.charAt(left)
      left++

      hash[c2] = hash.hasOwnProperty(c2) ? hash[c2] - 1 : 1
    }

    max = Math.max(max, right - left)
  }

  return max
};

module.exports = {
  func: lengthOfLongestSubstring,
  argTypes: [
    'String',
  ],
  returnType: Number,
  tests: [
    [
      'abcabcbb',
    ],
    [
      'bbbbb',
    ],
    [
      'pwwkew',
    ],
  ],
}

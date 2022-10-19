/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const s = x.toString()
  
  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (s[left++] != s[right--]) {
      return false
    }
  }

  return true
};

module.exports = {
  func: isPalindrome,
  argTypes: [
    'Number',
  ],
  returnType: 'Boolean',
  tests: [
    [
      121
    ],
    [
      -121
    ],
    [
      10
    ],
  ]
}


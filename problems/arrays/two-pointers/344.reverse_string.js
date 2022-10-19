/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    let temp = s[left]
    s[left++] = s[right]
    s[right--] = temp
  }

  return s
};

module.exports = {
  func: reverseString,
  argTypes: [
    'String',
  ],
  returnType: 'String',
  tests: [
    [
      ["h","e","l","l","o"],
    ],
    [
      ["H","a","n","n","a","h"],
    ],
  ]
}

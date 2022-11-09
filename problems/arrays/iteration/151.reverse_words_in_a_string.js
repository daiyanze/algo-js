/**
 * This solution is based on this one in the LeetCode discussion
 * https://leetcode.com/problems/reverse-words-in-a-string/discuss/975824/JavaScript-solution-(no-split-reverse-methods)
 *
 * Steps:
 *   1. Scan the string characters in reverse order
 *   2. push the character into a temp array
 *   3. clean the temp array if encountering space character
 *   4. join the temp array reversely into string and push to another storage array
 *   5. return storage array after joining into string
 *
 * Time complexity: O(n)
 * We just need to loop once to get all of the characters
 *
 * Space Complexity: O(n)
 * We need an extra array to store the scanned word temporarily.
 * This word size might be the same the the input string.
 *
 */


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const res = []
  const word = []
  
  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) == ' ') {
      // When the space is the end of a word
      if (word.length) {
        res.push(word.join(''))
      }

      word.length = 0
    } else {
      word.unshift(s.charAt(i))
    }
  }

  if (word.length) {
    res.push(word.join(''))
  }
  
  return res.join(' ')
};

module.exports = {
  func: reverseWords,
  argTypes: [
    'String',
  ],
  returnType: 'String',
  tests: [
    [
      "the sky is blue",
    ],
    [
      "  hello world  ",
    ],
    [
      "a good   example",
    ],
  ]
}

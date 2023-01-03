/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
  const stack = []
  // Stores each character count
  const count = new Array(256).fill(0)
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i)
    count[char]++
  }

  // Stores whether such character exists
  const inStack = new Array(256).fill(false)
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i)
    // Find such character and reduce count by 1
    count[char]--

    // Skip if current character has been processed
    if (inStack[char]) continue

    // pop stack if the top element is bigger than current `char`
    while (stack.length && stack[stack.length - 1].charCodeAt() > char) {
      if (count[stack[stack.length - 1].charCodeAt()] == 0) {
        break
      }

      inStack[stack.pop().charCodeAt()] = false
    }

    stack.push(s[i])
    inStack[char] = true
  }

  return stack.join('')
};


module.exports = {
  func: smallestSubsequence,
  argTypes: [
    'String',
  ],
  returnType: 'String',
  tests: [
    [
      'bacbc'
    ],
    [
      'cbacdcbc'
    ],
  ]
}

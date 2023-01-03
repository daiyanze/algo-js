/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  const stack = []
  const count = new Array(256).fill(0)
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i) 
    count[c]++
  }

  const inStack = new Array(256).fill(0)
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i)
    count[c]--

    if (inStack[c]) continue

    while (stack.length && stack[stack.length - 1].charCodeAt() > c) {
      if (count[stack[stack.length - 1].charCodeAt()] == 0) {
        break
      }
      inStack[stack.pop().charCodeAt()] = 0
    }

    stack.push(s[i])
    inStack[c] = 1
  }

  return stack.join('')
};


module.exports = {
  func: removeDuplicateLetters,
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

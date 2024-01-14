/**
 * 1-51
 * (sign) (num)   
 *   +      1     -    5    1
 *
 *       (sign) (num)
 * [+1]    -      5     1
 *
 *           (sign) (num)
 * [+1, -5]           1
 *
 *
 *           (sign) (num)
 * [+1, -51]          
 */


/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  // s -> array
  var helper = function(s) {
    const stack = []
    // num cache: default entrypoint as 0
    let num = 0
    // sign cache: default to positive numbers
    let sign = '+'

    while (s.length > 0) {
      const c = s.shift()
      // num is used as a cache which stores the previous character (i - 1)
      // e.g. 1-23
      // stack = [+1, -23]
      if (!isNaN(parseInt(c))) {
        // 10 * 2 + ('3' - '0')
        num = 10 * num + (c - '0')
      }

      if (c == '(') {
        num = helper(s)
      }

      // When `c` is a sign (excluding space) or it reaches the last character
      if (
        (isNaN(parseInt(c)) && c != ' ') ||
        !s.length
      ) {
        let prev
        switch (sign) {
          case '+':
            stack.push(num)
            break
          case '-':
            stack.push(-num)
            break
          case '*':
            // sequence: stack.top -> sign -> num -> s[i]
            // e.g. 1-23*3
            // [+1, -23]
            // pop -23 -> [+1]
            //
            // (stack.top)  (sign)  (num)
            // -23            *      3
            // stack.push(-23 * 3)
            prev = stack.pop()
            stack.push(prev * num)
            break
          case '/':
            prev = stack.pop()
            stack.push(prev / num)
            break
        }
        // update sign cache
        sign = c
        // clear num cache
        num = 0
      }

      // quit while loop and connect the parentheses
      if (c == ')') break
    }

    let res = 0
    while (stack.length) {
      res += stack.pop()
    }

    return res
  }

  return helper(s.split(''))
};

module.exports = {
  func: calculate,
  argTypes: [
    'String',
  ],
  returnType: 'Number',
  tests: [
    [
      '1 + 1'
    ],
    [
      ' 2-1 + 2'
    ],
    [
      '(1+(4+5+2)-3)+(6+8)'
    ],
    [
      '3 * (4 - 5 / 2) - 6'
    ]
  ]
}


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const Q = 1658598167
  const R = 26
  
  // Max multiple number of needle
  let RL = 1
  for (let i = 1; i < needle.length; i++) {
    RL = (RL * R) % Q
  }

  // The hash value of the "needle" string
  let needleHash = 0
  for (let i = 0; i < needle.length; i++) {
    needleHash = (needleHash * R + needle.charCodeAt(i) - 65) % Q
  }

  let left = 0
  let right = 0
  let windowHash = 0
  while (right < haystack.length) {
    // We set from a to z with number 0 to 25
    windowHash = ((windowHash * R) % Q + haystack.charCodeAt(right) - 65) % Q
    right++

    if (right - left == needle.length) {
      if (windowHash == needleHash) {
        if (needle == haystack.substring(left, right)) {
          return left
        }
      }

      windowHash = (windowHash - ((haystack.charCodeAt(left) - 65) * RL) % Q + Q) % Q
      left++
    }
  }

  return -1
};


module.exports = {
  func: strStr,
  argTypes: [
    'String',
    'String',
  ],
  returnType: 'Number',
  tests: [
    [
      'sadbutsad',
      'sad',
    ],
    [
      'leetcode',
      'leeto',
    ],
    [
      'hello',
      'll',
    ]
  ],
}

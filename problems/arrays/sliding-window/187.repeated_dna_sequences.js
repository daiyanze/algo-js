/**
 * Bruteforce
 *
 *
 *
 */
  
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  let left = 0
  let right = 0
  const len = 10
  const hash = {}
  const res = new Set()
  
  while(right < s.length) {
    right++
    
    while (right - left == len) {
      const str = s.substr(left, len)
      
      if (hash[str]) {
        res.add(str)
      } else {
        hash[str] = true
      }

      left++
    }
  }

  return Array.from(res)
};


/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  let left = 0
  let right = 0
  let len = 0
  const seen = new Set()
  const res = new Set()
  
  // array of custom hashing
  const nums = new Array(10).fill(0)
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i)
    if (char == 'A') {
      nums[i] = 0
    } else if (char == 'G') {
      nums[i] = 1
    } else if (char == 'C') {
      nums[i] = 2
    } else if (char == 'T') {
      nums[i] = 3
    }
  }
  
  const LEN = 10
  const RADIX = 4
  const MAX_HEAD_VAL = RADIX ** (LEN - 1)
  let hash = 0

  while (right < s.length) {
    hash = RADIX * hash + nums[right]

    right++

    while (right - left == LEN) {
      if (seen.has(hash)) {
        const str = s.substr(left, LEN)
        res.add(str)
      } else {
        seen.add(hash)
      }

      // Remove existing left pointer value out of hash
      hash -= nums[left] * MAX_HEAD_VAL
      left++
    }
  }

  return Array.from(res)
}


module.exports = {
  func: findRepeatedDnaSequences,
  argTypes: [
    'String',
  ],
  returnType: 'Array',
  tests: [
    [
      'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT',
    ],
    [
      'AAAAAAAAAAAAA',
    ],
  ],
}

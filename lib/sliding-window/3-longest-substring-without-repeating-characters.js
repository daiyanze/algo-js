// Brute force
function lengthOfLongestSubstring(str) {
  let res = 1
  for (let i = 0; i < str.length; i++) {
    let target = {}
    let cnt = 0
    let j = i
    while (j < str.length) {
      if (target[str[j]]) {
        j = str.length
      } else {
        target[str[j]] = 1
        cnt++
      }
      j++
    }

    res = res >= cnt ? res : cnt
  }

  return res
}


function lengthOfLongestSubstring(str) {
  let max = 0
  let left = 0
  let right = 0
  let target = {}

  while (right < str.length) {
    if (target[str[right]]) {
      target[str[left]] = 0
      left++
    } else {
      target[str[right]] = 1
      console.log(`left: ${str[left]}(${left}), right: ${str[right]}(${right})`)
      max = Math.max(max, right - left + 1)
      right++
    }
  }

  return max
}

// console.log(lengthOfLongestSubstring("abcabcbb"))
// console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))

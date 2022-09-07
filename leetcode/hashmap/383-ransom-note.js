function canConstruct(ransomNote, magazine) {
  const arr = new Array(26).fill(-1)
  
  for (let i = 0; i < magazine.length; i ++) {
    arr[magazine[i].charCodeAt() - 97]++
  }
  
  for (let i = 0; i < ransomNote.length; i++) {
    if (arr[ransomNote[i].charCodeAt() - 97] < 0) {
      return false
    } else {
      arr[ransomNote[i].charCodeAt() - 97]--
    }
  }
  
  return true
};

console.log(canConstruct(
  "a", "b"
))

console.log(canConstruct(
  "aa", "ab"
))

console.log(canConstruct(
  "aa", "aab"
))

function firstUniqChar(s) {
  const arr = new Array(26).fill(-1)

  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt() - 97]++
  }

  console.log(arr)

  for (let i = 0; i < s.length; i++) {
    if (!arr[s[i].charCodeAt() - 97]) return i
  }


  return -1
}


console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcode"))

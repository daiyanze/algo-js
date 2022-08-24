function findAnagrams(s, p) {
  let left = 0
  let right = 0
  let mapS = new Array(26).fill(0)
  let mapP = new Array(26).fill(0)
  const res = []

  for (let i = 0; i < p.length; i++) {
    mapP[p[i].charCodeAt() - 97]++
  }

  while (right < s.length) {
    const c = s[right].charCodeAt() - 97

    if (mapP[c]) {
      mapS[c]++
    }

    right++

    while (right - left >= p.length) {
      if (mapS.toString() == mapP.toString()) {
        res.push(left)
      }

      const d = s[left].charCodeAt() - 97

      if (mapP[d]) {
        mapS[d]--
      } 

      left++
    }
  }

  return res
}

console.log(findAnagrams(
   "cbaebabacd", "abc"
))

console.log(findAnagrams(
  "abab", "ab"
))

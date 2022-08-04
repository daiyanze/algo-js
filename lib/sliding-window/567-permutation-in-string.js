function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false
  
    let left = 0
    let right = 0
    const mapS1 = new Array(26).fill(0)
    const mapS2 = new Array(26).fill(0)
    
    for (let i = 0; i < s1.length; i++) {
      // Log number of appearance
      mapS1[s1[i].charCodeAt() - 97]++
    }
    
    while (right < s2.length) {
      let c = s2[right++].charCodeAt() - 97
      
      if (mapS1[c]) {
        mapS2[c]++
      }
      
      if (right - left >= s1.length) {
        if (mapS1.toString() == mapS2.toString()) {
          return true
        }
        
        let d = s2[left++].charCodeAt() - 97
        
        if (mapS1[d]) {
          mapS2[d]--
        }
      }
    }
  
    return false
}

console.log(checkInclusion("ab", "eidbaooo"))
console.log(checkInclusion("ab", "eidboaoo"))
console.log(checkInclusion("adc", "dcda"))
console.log(checkInclusion("kitten", "sitting"))

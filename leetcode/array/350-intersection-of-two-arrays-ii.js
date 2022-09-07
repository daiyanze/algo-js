function intersect(nums1, nums2) {
  const hash = {}
  for (let i = 0; i < nums1.length; i++) {
    if (hash[nums1[i]]) {
      hash[nums1[i]]++
    } else {
      hash[nums1[i]] = 1
    }
  }

  const res = []
  for (let i = 0; i < nums2.length; i++) {
    if (hash[nums2[i]]) {
      hash[nums2[i]]--
      res.push(nums2[i])
    }
  }

  return res
}

console.log(intersect([1,2,2,1], [2,2]))
console.log(intersect([4,9,5], [9,4,9,8,4]))

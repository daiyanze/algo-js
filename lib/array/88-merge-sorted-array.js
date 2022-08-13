function mergeSortedArray(nums1, m, nums2, n) {
  let temp = nums1[0]
  let i = m + n - 1
  m--
  n--
  
  console.log()
  while (m >= 0 && n >= 0) {
    console.log(`i:`, i, 'm:', m, 'n:', n)
    if (nums1[m] >= nums2[n]) {
      nums1[i--] = nums1[m--]
    } else {
      nums1[i--] = nums2[n--]
    }
  }

  while (n >= 0) {
    nums1[i--] = nums2[n--]
  }
  
  return nums1
}

console.log(mergeSortedArray([1,2,3,0,0,0,0], 3, [2,5,6,7], 4))
console.log(mergeSortedArray([1], 1, [], 0))
// console.log(mergeSortedArray([0], 0, [1], 1))
// console.log(mergeSortedArray([1,0], 1, [2], 1))
// console.log(mergeSortedArray([2,3,4,0], 3, [1], 1))
console.log(mergeSortedArray([0,0,3,0,0,0,0,0,0],3,[-1,1,1,1,2,3],6))
console.log(mergeSortedArray([0,3,0,0],2,[-1,2],2))

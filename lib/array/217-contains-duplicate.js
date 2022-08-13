function containDuplicate(nums) {
  if (nums.length == 1) return false

  return new Set(nums).size != nums.length
}

console.log(containDuplicate([1,1,2,3,4]))
console.log(containDuplicate([1,2,3,4]))

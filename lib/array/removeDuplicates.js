// Returns the dedup array length
// Solution: Double pointer
function removeDuplicates(nums) {
  if (!nums || !nums.length) return 0

  let left = 0, right = 1

  while(right < nums.length) {
    if (nums[left] != nums[right]) {
      nums[++left] = nums[right]
    }
    right++
  }

  return ++left
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

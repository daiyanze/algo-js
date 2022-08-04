function rotateArray(nums, k) {
  if (!nums || !nums.length) return nums
  
  function reverse(nums, from, to) {
    let temp = 0
    // swap numbers
    while (from < to) {
      temp = nums[from]
      nums[from++] = nums[to]
      nums[to--] = temp
    }

    return nums
  }

  // set k = 0 when k == nums.length
  // set k to mod when k > nums.length
  k %= nums.length

  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length -1)

  return nums
}

console.log(rotateArray([1,2,3,4,5,6,7], 3))
console.log(rotateArray([-1, -100, 3, 99], 2))

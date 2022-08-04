function sortedSquares(nums) {
  if (!nums || nums.length <= 1) return nums

  let left = 0
  let right = nums.length - 1

  let res = []
  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      res[i] = nums[left] * nums[left++]
    } else {
      res[i] = nums[right] * nums[right--]
    }

    console.log(`${i}: ${nums[i]} => ${res[i]}`)
  }

  return res
}

console.log(sortedSquares([-1, 0, 1, 2, 3]))
console.log(sortedSquares([-7, -3, 2, 3, 11]))

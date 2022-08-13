function largestPerimeter(nums) {
  nums = nums.sort((a, b) => a - b)

  for (let i = nums.length - 1; i >= 2; i--) {
    if (nums[i] < nums[i - 1] + nums[i - 2]) {
      return nums[i] + nums[i - 1] + nums[i - 2]
    }
  }

  return 0
}

console.log(largestPerimeter([2,1,2]))
console.log(largestPerimeter([1,2,1]))

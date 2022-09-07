function findPeakElement(nums) {
  let left = 0
  let right = nums.length - 1

  console.log()

  while (left < right) {
    const mid = ~~(left + (right - left) / 2)

    if (nums[mid] > nums[mid + 1]) {
      right = mid
    } else {
      left = mid + 1
    }
    console.log(left, right)
  }

  return left
}

console.log(findPeakElement([1,2,6,4,7]))
console.log(findPeakElement([1,2,3,1]))
console.log(findPeakElement([2,1]))
console.log(findPeakElement([2,1,3,4]))

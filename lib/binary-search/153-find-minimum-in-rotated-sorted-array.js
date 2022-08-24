function findMin(nums) {
  let left = 0
  let right = nums.length - 1

  if (nums[left] <= nums[right]) {
    return nums[left]
  }

  let target = nums[left]

  while (left <= right) {
    const mid = ~~(left + (right - left) / 2)

    if (nums[mid] == target) {
      left = mid + 1
      break
    }
    
    if (nums[mid] > target) {
      target = nums[mid]
      left = mid
    }

    if (nums[mid] < target) {
      right = mid
    }
  }

  return nums[left]
}

console.log(findMin([3,4,5,1,2]))
console.log(findMin([11,13,15,17]))
console.log(findMin([4,5,6,7,8,0,1,2]))
console.log(findMin([1,2,3,4,5,6,7,0]))
console.log(findMin([8,0,1,2,3,4,5,6,7]))

function twoSum(nums, target) {
  if (!nums || !nums.length) return []

  let left = 0
  let right = nums.length - 1

  while(left < right) {
    if (nums[left] + nums[right] == target) {
      return [left + 1, right + 1]
    } else if (nums[left] + nums[right] > target) {
      right--
    } else {
      left++
    }
    console.log(`left: ${nums[left]}(${left}), right: ${nums[right]}(${right})`)
  }

  return [left + 1, right + 1]
}

console.log([2, 7, 11, 15], 9, " => ", twoSum([2, 7, 11, 15], 9))
console.log([2, 7, 11, 15], 17, " => ", twoSum([2, 7, 11, 15], 17))
console.log([2, 7, 11, 15], 18, " => ",  twoSum([2, 7, 11, 15], 18))
console.log([2, 7, 11, 15], 19, " => ",  twoSum([2, 7, 11, 15], 19))
console.log([1, 2, 3, 4, 4], 7, " => ", twoSum([1, 2, 3, 4, 4], 7))
console.log([1, 2, 3, 4, 4], 8, " => ", twoSum([1, 2, 3, 4, 4], 8))
console.log([1, 2, 3, 4, 4], 9, " => ", twoSum([1, 2, 3, 4, 4], 9))

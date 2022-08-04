// Solution: double pointer
function binarySearch(nums, target) {
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    let mid = Math.ceil((start + end) / 2)

    if (target == nums[mid]) {
      return mid
    } else if (target < nums[mid]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }

  return -1
}

console.log(binarySearch([-1, 0, 3, 4, 6, 7, 9], 4))

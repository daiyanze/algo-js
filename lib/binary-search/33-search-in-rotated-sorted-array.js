function search(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = ~~(left + (right - left) / 2)
    console.log("left:", left, "right:", right)

    if (nums[mid] == target) {
      return mid
    }
    // The key point is to judge which section the target locates in
    // In the example of [4,5,6,7,0,1,2] & 0. There are bigger section [4,5,6,7] and smaller section [0,1,2]
    // The bigger section [4,5,6,7] can be skipped as 0 is smaller than any of them
    // So we just need to move the left cursor to "mid + 1" and then continue the binary search

    if (nums[left] <= nums[mid]) { 
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
      console.log("left section -- ", "left:", left, "right:", right)
    } 

    if (nums[mid] <= nums[right]) {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
      console.log("right section -- ", "left:", left, "right:", right)
    }

    console.log()
  }

  console.log()

  return -1
}

console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([4,5,6,7,0,1,2], 3))
console.log(search([1], 0))
console.log(search([5,1,2], 5))
console.log(search([4,5,6,7,8,1,2,3], 8))

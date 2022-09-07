// The range equals to
// [the first occurence of target, the first occurence of the number that's bigger than target)
function searchRange(nums, target) {

  function search(n) {
    let left = 0
    // can't assign right with nums.length - 1,
    // if so, then when nums.length == 1, left & right are both 0 which results in a wrong solution
    let right = nums.length

    while (left < right) {
      const mid = ~~(left + (right - left) / 2)

      console.log("left:", left, "right:", right)
      if (nums[mid] >= n) {
        right = mid
      } else {
        left = mid + 1
      }

      console.log("left:", left, "right:", right)
      console.log()
    }

    console.log()

    return left
  }

  // find the first occurrence of the target
  const start = search(target)

  // find the first occurence of the target+1 (or the number that's slightly bigger than target)
  const end = search(target + 1) - 1

  if (start > end) {
    return [-1, -1]
  }
  return [start, end]
}

// console.log(searchRange([5,7,7,8,8,10], 8))
// console.log(searchRange([5,7,7,8,8,10], 9))
// console.log(searchRange([9,9,9,9,9,9], 9))
console.log(searchRange([1], 1))
console.log(searchRange([1], 1))

function searchInsert(nums, target) {
  let start = 1
  let end = nums.length - 1
  
  while (start <= end) {
    const mid = ~~(start + (end - start) / 2)
    
    if (nums[mid] == target) {
      return mid
    } else if (nums[mid] > target) {
      end = mid - 1 
    } else {
      start = mid + 1
    }
  }

  console.log("start: ", start, "end: ", end)
  
  return nums[end] < target ? start : end
};

console.log(searchInsert([1,3,5,6], 0))

console.log(searchInsert([1,3,5,6], 2))

console.log(searchInsert([1,3,5,6], 6))

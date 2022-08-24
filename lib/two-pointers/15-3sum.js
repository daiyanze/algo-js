function threeSums(nums) {
  nums = nums.sort((a, b) => a - b)
  const res = []

  for (let i = 0; i < nums.length; i++) {
    // dedup
    if (nums[i] > 0) {
      continue
    } else {
      if (nums[i] == nums[i - 1]) continue
    }

    // 2 pointers
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      } else {
        res.push([nums[i], nums[left], nums[right]])
        while (nums[left] == nums[left + 1]) left++ 
        while (nums[right] == nums[right - 1]) right--
        left++
        right--
      }
    }
  }

  return res
}

console.log(threeSums([-1,0,1,2,-1,-4]))
console.log(threeSums([0,0,0,0]))
console.log(threeSums([-2,0,0,2,2]))
console.log(threeSums([0,1,2]))
console.log(threeSums([-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]))

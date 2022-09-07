// Greedy: choose the farthest step on every step
function canJump(nums) {
  const goal = nums.length - 1
  let farthestDistance = 0

  // fathest distance = index of current number + number value
  // This is to check if farthese distance reaches the last index

  let i = 0
  while (i <= farthestDistance) {
    farthestDistance = Math.max(i + nums[i], farthestDistance)
    console.log(i, nums[i], farthestDistance)
    
    if (farthestDistance >= goal) {
      return true
    }
    i++
  }

  return step == goal
}

console.log(canJump(
  [2,3,1,1,4]
))

console.log(canJump(
  [3,2,1,0,4]
))

console.log(canJump(
  [0, 1]
))

// Greedy
function canJump(nums) {
  const goal = nums.length - 1
  if (!goal) return 0

  /* stores temporary check point to increment steps */
  let cur = 0
  /* count of how many steps till the last index */
  let steps = 0
  /* max moves at current index */
  let max = 0

  for (let i = 0; i < goal; i++) {
    max = Math.max(i + nums[i], max)

    if (cur == i) {
      cur = max
      steps++
    }
  }

  return steps
}

console.log(canJump(
  [0]
))

console.log(canJump(
  [1,2,1,1,1]
))

console.log(canJump(
  [2,3,1,1,4]
))

console.log(canJump(
  [2,3,0,1,4]
))

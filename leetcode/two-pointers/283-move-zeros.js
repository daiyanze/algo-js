
function moveZeros(nums) {
  if (!nums || !nums.length || nums.length == 1) return nums

  let slow = 0
  let fast = 0
  let temp = nums[slow]

  while (fast < nums.length) {
    if (nums[slow] != 0) {
      slow++
    }

    if (nums[fast] == 0) {
      fast++
    } else {
      temp = nums[slow]
      nums[slow] = nums[fast]
      nums[fast++] = 0
    }

    console.log(`fast: ${nums[fast]}(${fast}), slow: ${nums[slow]}(${slow})`)
  }

  return nums
}

console.log(moveZeros([0,1,0,3,12]))
console.log(moveZeros([0, 15, 10, 0, 1, 0, 3, 12]))
console.log(moveZeros([0]))

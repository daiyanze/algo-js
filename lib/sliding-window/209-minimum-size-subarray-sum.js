function minSubArrayLen(target, nums) {
  let left = 0
  let right = 0
  let res = 0
  let cnt = Infinity

  while (right < nums.length) {
    res += nums[right++]

    while (res >= target) {
      cnt = Math.min(right - left, cnt)

      res -= nums[left++]
    }
  }

  return cnt == Infinity ? 0 : cnt
}

console.log(minSubArrayLen(
  7,
  [2,3,1,2,4,3]
))

console.log(minSubArrayLen(
  4,
  [1,4,4]
))

console.log(minSubArrayLen(
  11,
  [1,1,1,1,1,1,1,1]
))

console.log(minSubArrayLen(
  11,
  [1,2,3,4,5]
))

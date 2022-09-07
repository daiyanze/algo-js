function arraySign(nums) {
  let zero = 1
  let sign = 1

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0 && zero > 0) {
      zero--
      continue
    }

    if (nums[i] < 0) {
      sign *= -1
    }
  }

  return zero * sign
}

console.log(arraySign([-1,-2,-3,-4,3,2,1]))
console.log(arraySign([1,5,0,2,-3]))
console.log(arraySign([-1,1,-1,1,-1]))

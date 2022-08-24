function numSubarrayProductLessThanK(nums, k) {
  if (k <= 1) return 0

  let left = 0
  let cnt = 0
  let product = 1
  console.log()

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right]

    while (product >= k) {
      product /= nums[left++]
    }

    console.log("product:", product, `left(${left}):`, nums[left], `right(${right})`, nums[right], "count:", right - left + 1)

    cnt += right - left + 1
  }
  
  return cnt
}

console.log(numSubarrayProductLessThanK(
  [10,5,2,6],
  100
))

console.log(numSubarrayProductLessThanK(
  [1,2,3],
  0
))

console.log(numSubarrayProductLessThanK(
  [1,1,1],
  2
))

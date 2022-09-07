function maxArea(height) {
  let left = 0
  let right = height.length - 1
  let max = 0

  while (left < right) {
    let h = Math.min(height[left], height[right])
    let w = right - left
    console.log(`area(${h} x ${w}):`, h * w)
    max = Math.max(h * w, max)

    if (height[left] >= height[right]) {
      right--
    } else {
      left++
    }
  }

  return max
}

console.log(maxArea([
  1,8,6,2,5,4,8,3,7
]))

console.log(maxArea([
  2,3,4,5,18,17,6
]))

console.log(maxArea([
  1,1
]))

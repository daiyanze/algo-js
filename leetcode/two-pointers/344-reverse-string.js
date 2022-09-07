function reverseString(str) {
  let left = 0
  let right = str.length - 1
  let temp = str[left]
  const arr = str.split('')

  while (left < right) {
    temp = arr[left]
    arr[left++] = arr[right]
    arr[right--] = temp
    console.log(`left: ${arr[left]}(${left}), right: ${arr[right]}(${right})`)
  }
  
  str = arr.join('')

  // Have to return the `str` to print out in console.
  // The Leetcode's problem didn't ask you to return anything but to change the data in-place.
  return str
}

console.log(reverseString("helloworld"))
console.log(reverseString("thisisit"))

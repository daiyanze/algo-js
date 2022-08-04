function reverseWords(str) {
  if (str.length == 1) return str

  let temp = ""
  const arr = str.split(' ')
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i].split('')
    let left = 0
    let right = word.length - 1
    while (left < right) {
      temp = word[left]
      word[left++] = word[right]
      word[right--] = temp
    }

    console.log(word)

    arr[i] = word.join('')
  }

  return arr.join(' ')
}

console.log(reverseWords("Let's take LeetCode contest"))
console.log(reverseWords("God Ding"))

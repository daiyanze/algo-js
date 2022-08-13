function canMakeArithmeticProgression(arr) {
  arr = arr.sort((a, b) => b - a)

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] - arr[i - 1] !== arr[i + 1] - arr[i]) {
      return false
    }
  }

  return true
}

console.log(canMakeArithmeticProgression([1,4,6]))
console.log(canMakeArithmeticProgression([1,3,5]))
console.log(canMakeArithmeticProgression([20,30,40,10]))

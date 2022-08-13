function substractProductAndSum(n) {
  let sum = 0
  let product = 1

  while (n > 0) {
    let num = n % 10
    sum += num
    product *= num
    n = ~~(n / 10)
  }

  return product - sum
}

console.log(substractProductAndSum(234))

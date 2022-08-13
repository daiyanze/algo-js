function isHappy(n) {

  function calc(n) {
    let res = 0

    while (n) {
      let num = n % 10
      res += num ** 2
      n = (n - num) / 10
    }

    console.log(res)

    if (res != 1) {
      return calc(res)
    }

    return res
  }
  
  return calc(n)
}

// console.log(isHappy(19))
console.log(isHappy(2))

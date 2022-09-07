// Hashset
function isHappy(n) {
  function getNext(n) {
    let total = 0

    while (n > 0) {
      let num = n % 10
      n = ~~(n / 10)
      total += num ** 2
    }

    return total
  }

  let hash = new Set()

  while (n != 1 && !hash.has(n)) {
    hash.add(n)

    n = getNext(n)
  }

  console.log(n)

  return n == 1
}

// Slow & Fast pointer
function isHappy(n) {
  function getNext(n) {
    let total = 0

    while (n > 0) {
      let num = n % 10
      n = ~~(n / 10)
      total = num ** 2
    }

    return total
  }

  let slow = n
  let fast = getNext(n)
  while (slow != fast && fast != 1) {
    slow = getNext(slow)
    fast = getNext(getNext(fast))
  }

  return fast != 1
}

console.log(isHappy(
  7
))

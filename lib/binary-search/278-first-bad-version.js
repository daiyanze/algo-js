const bad = 4

function isBadVersion(n) {
  console.log('called')
  return n == bad
}

// Solution: binary search
// 
function firstBadVersion(isBadVersion) {
  return function(n) {
    let start = 1
    let end = n

    while (start <= end) {
      const mid = Math.ceil((start + end) / 2)

      if (isBadVersion(mid)) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }

    return start
  }
}

console.log(firstBadVersion(isBadVersion)(5))

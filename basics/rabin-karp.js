/**
 * X % Q == (X + Q) % Q
 * (X + Y) % Q == (X % Q + Y % Q) % Q
 */


/**
 * @param {string} str
 * @param {string} pat
 * @return {boolean}
 */
function rabinKarpSearch(str, pat) {
  // A bit prime number const Q = 1658598167
  // All legal ASCII characters count as radix
  const R = 256
  // The max multiple number of the "pat" string
  let RL = 1
  for (let i = 1; i < pat.length; i++) {
    RL = (RL * R) % Q
  }

  // Get hash value of the "pat" string
  let patHash = 0
  for (let i = 0; i < pat.length; i++) {
    patHash = ((R * patHash) % Q + pat.charCodeAt(i)) % Q
  }

  let windowHash = 0
  let left = 0
  let right = 0

  while (right < str.length) {
    // Move in the right character
    windowHash = ((R * windowHash) % Q + str.charCodeAt(right)) % Q
    right++

    if (right - left == pat.length) {
      // If current window hash value matches the "pat" hash value
      if (windowHash == RL) {
        if (pat == str.substring(left, pat.length)) {
          return true
        }
      }

      // Move out the left character
      // X - (leftASCiiCode * RL) + Q. Adding "Q" will make sure the remainder is a positive number
      windowHash = (windowHash - (str.charCodeAt(left) * RL) % Q + Q) % Q

      left++
    }
  }

  return false
}

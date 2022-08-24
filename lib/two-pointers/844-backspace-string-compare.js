function backspaceCompare(s, t) {

  // compare char if not #

  // move cursor to what's before the # and which is not reduced by backspace
  // compare char

  let indexS = s.length - 1
  let indexT = t.length - 1
  let poundCountS = 0
  let poundCountT = 0

  while (indexS >= 0 || indexT >= 0) {
    while (indexS >= 0 && (s[indexS] == '#' || poundCountS > 0)) {
      if (s[indexS] != '#') {
        poundCountS--
      } else {
        poundCountS++
      }
      indexS--
    }
    let charS = s[indexS]

    while (indexT >= 0 && (t[indexT] == '#' || poundCountT > 0)) {
      if (t[indexT] != '#') {
        poundCountT--
      } else {
        poundCountT++
      }
      indexT--
    }
    let charT = t[indexT]

    if (charS != charT) return false

    indexS--
    indexT--
  }

  return true
}

// console.log(backspaceCompare(
//   "ab#c", "ad#c"
// ))

// console.log(backspaceCompare(
//   "ab#d", "c#d#"
// ))

// console.log(backspaceCompare(
//   "a#c", "b"
// ))

// console.log(backspaceCompare(
//   "####c", "##b#c"
// ))

// console.log(backspaceCompare(
//   "####c", "###cd"
// ))

// console.log(backspaceCompare(
//   "#", "#"
// ))

console.log(backspaceCompare(
  "xywrrmp", "xywrrmu#p"
))

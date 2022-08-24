function reverseBits(n) {
  console.log(toBinary(n))
  let res = 0

  let i = 32
  while (i) {
    // res <<= 1 is the same to the following line
    res *= 2

    res += n & 1

    n >>= 1

    i--
  }

  return res
}

function toBinary(n) {
  return n.toString(2).padEnd(32, "0")
}

// Optimized (Divide and Conquer)
// step 0: 
//    abcd efgh ijkl mnop qrst uvwx yzAB CDEF
// step 1: swap by 16 bytes
//    qrst uvwx yzAB CDEF | abcd efgh ijkl mnop
// step 2: swap by 8 bytes
//    yzAB CDEF | qrst uvwx ijkl mnop | abcd efgh
// step 3: swap by 4 bytes
//    CDEF | yzAB uvwx | qrst mnop | ijkl efgh | abcd
// step 4: swap by 2 bytes
//    EF|CD AB|yz wx|uv st|qr op|mn kl|ij gh|ef cd|ab
// step 5: swap by 1 byte
//    F|ED|C B|Az|y x|wv|u t|sr|q po|nm l|kj|i h|gf|e d|cb|a
// Result:
//    FEDC BAzy xwvu tsrq ponm lkji hgfe dcba
function reverseBits(n) {
  console.log(toBinary(n))
  // swap by 16 bytes
  n = ((n & 0xFFFF0000) >>> 16) | ((n & 0x0000FFFF) << 16)
  // swap by 8 bytes
  n = ((n & 0xFF00FF00) >>> 8) | ((n & 0x00FF00FF) << 8)
  // swap by 4 bytes
  n = ((n & 0xF0F0F0F0) >>> 4) | ((n & 0x0F0F0F0F) << 4)
  // swap by 2 bytes
  n = ((n & 0xCCCCCCCC) >>> 2) | ((n & 0x33333333) << 2)
  // swap by 1 byte
  n = ((n & 0xAAAAAAAA) >>> 1) | ((n & 0x55555555) << 1)
  console.log(toBinary(n))

  return n >>> 0
}

console.log(reverseBits(43261596))

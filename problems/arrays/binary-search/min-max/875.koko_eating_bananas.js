/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  function getMinHours(eatingSpeed) {
    let min = 0

    let i = 0
    while (i < piles.length) {
      min += Math.ceil(piles[i++] / eatingSpeed)
    }

    return min
  } 

  let left = 1
  let right = 10 ** 9

  while (left <= right) {
    const mid = ~~(left + (right - left) / 2)

    if (getMinHours(mid) > h) {
      left = mid + 1
    } else if (getMinHours(mid) == h) {
      right = mid - 1
    } else if (getMinHours(mid) < h) {
      right = mid - 1
    }
  }

  return left
};


module.exports = {
  func: minEatingSpeed,
  argTypes: [
    'Array',
    'Number',
  ],
  returnType: 'Number',
  tests: [
    [
      [3,6,7,11],
      8,
    ],
    [
      [30,11,23,4,20],
      5,
    ],
    [
      [30,11,23,4,20],
      6,
    ],
  ],
}

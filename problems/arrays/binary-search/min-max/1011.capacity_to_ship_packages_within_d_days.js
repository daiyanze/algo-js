/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
  function getMinDays(carryingCapacity) {
    let min = 0

    let i = 0
    while (i < weights.length) {
      let cap = carryingCapacity

      // Carry cargo each day
      while (i < weights.length) {
        if (cap < weights[i]) {
          // quit adding cargo to ship because of not enough capacity
          break
        } else {
          cap -= weights[i]
        }

        i++
      }

      min++
    }

    return min
  }
  
  let left = 0
  let right = 0
  for (let i = 0; i < weights.length; i++) {
    left = Math.max(left, weights[i]

  return left
};


module.exports = {
  func: shipWithinDays,
  argTypes: [
    'Array',
    'Number',
  ],
  returnType: 'Number',
  tests: [
    [
      [1,2,3,4,5,6,7,8,9,10],
      5,
    ],
    [
      [3,2,2,4,1,4],
      3,
    ],
    [
      [1,2,3,1,1],
      4
    ]
  ],
}

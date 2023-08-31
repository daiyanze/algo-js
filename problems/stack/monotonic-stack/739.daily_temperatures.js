/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const n = temperatures.length
  const stack = []

  const res = []
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
      stack.pop()
    }

    res[i] = stack.length ? (stack[stack.length - 1] - i) : 0
    stack.push(i)
  }

  return res
};


module.exports = {
  func: dailyTemperatures,
  argTypes: [
    'Array',
  ],
  returnType: 'Array',
  tests: [
    [
      [73, 74, 75, 71, 69, 72, 76, 73],
    ],
    [
      [30, 40, 50, 60],
    ],
    [
      [30, 60, 90],
    ]
  ]
}


/**
 * It's a very basic two pointer (left-right pointer) question. We set 2 pointers at start and end of the array.
 * And move them toward the middle of the 2 pointers.
 *
 * 1, 2, 3, 4, 5, 6, 7 (12)
 *
 * l->             <-r    (sum = 8)
 * 1, 2, 3, 4, 5, 6, 7
 * 
 *    l->          <-r    (sum = 9)
 * 1, 2, 3, 4, 5, 6, 7
 * 
 * ... (2 more steps of calculation)
 *
 *             l-> <-r    (sum = 12)
 * 1, 2, 3, 4, 5, 6, 7
 * 
 * Time complexity: O(n)
 * Just loop the linked-list once
 *
 * Space Complexity: O(1)
 * We created 2 pointers
 * 
 */


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    if (numbers[left] + numbers[right] > target) {
      right--
    } else if (numbers[left] + numbers[right] < target) {
      left++
    } else {
      return [++left, ++right]
    }
  }

  return []
};


module.exports = {
  func: twoSum,
  argTypes: [
    'Array',
    'Number'
  ],
  returnType: 'Array',
  tests: [
    [
      [2,7,11,15],
      9
    ],
    [
      [2,3,4],
      6
    ],
    [
      [-1,0],
      -1
    ]
  ]
}

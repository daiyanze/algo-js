/**
 * We will use 2 pointers (slow-fast) to approach this problem.
 * Fast pointer moves first and check if the target value equals fast position value.
 * If equals, then move fast pointer ahead
 * If not, copy fast position value to slow position and move slow head
 *
 * Time complexity: O(n)
 * Just loop the array once
 *
 * Space Complexity: O(1)
 * We created 2 pointers
 *
 */



/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let slow = 0
  let fast = 0

  while (fast < nums.length) {
    if (nums[fast] != val) {
      nums[slow] = nums[fast]
      slow++
    }

    fast++
  }

  return slow
};

module.exports = {
  func: removeElement,
  argTypes: [
    'Array',
    'Number',
  ],
  returnType: 'Number',
  tests: [
    [
      [3,2,2,3],
      3
    ],
    [
      [0,1,2,2,3,0,4,2],
      2
    ],
  ]
}

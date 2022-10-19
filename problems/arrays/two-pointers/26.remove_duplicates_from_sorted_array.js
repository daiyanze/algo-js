/**
 * We will use 2 pointers (slow - fast) to approach this problem. 
 * The core logic is to copy the first different number to the target position
 * Steps:
 *    1. fast pointer moves first and check if the fast position number equals to slow position number
 *    2. If nums[fast] != nums[slow], we copy the fast position number to slow's next position as slow is on the position of non-duplicated number
 *    3. Otherwise, we let fast make the next move
 *
 * Time complexity: O(n)
 * Just loop the linked-list once
 *
 * Space Complexity: O(1)
 * We created 2 pointers
 *
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums.length) return 0

  let slow = 0
  let fast = 0

  while (fast < nums.length) {
    if (nums[slow] == nums[fast]) {
      fast++
    } else {
      nums[++slow] = nums[fast]
    }
  }

  return ++slow
};

module.exports = {
  func: removeDuplicates,
  argTypes: [
    'Array',
  ],
  returnType: 'Number',
  tests: [
    [
      [1,2,3],
    ],
    [
      [1,1,2],
    ],
    [
      [0,0,1,1,1,2,2,3,3,4],
    ],
  ]
}

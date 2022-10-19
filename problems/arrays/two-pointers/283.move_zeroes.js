
/**
 * Approach 1:
 * Combining LeetCode 27 removeElement, we remove 0 from the list. This will return the next index (== arr.length) of the end of modified array
 * And then replace the element of the array from that index with 0 until the end of the list
 *
 * Time complexity: O(n)
 * Just loop the array once
 *
 * Space Complexity: O(1)
 *
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  function removeElement(nums, target) {
    let slow = 0
    let fast = 0

    while (fast < nums.length) {
      if (nums[fast] != target) {
        nums[slow] = nums[fast]
        slow++
      }

      fast++
    }

    return slow
  }

  let until = removeElement(nums, 0)

  // assign the rest of the values to 0
  while (until < nums.length) {
    nums[until++] = 0
  }

  return nums
}


/**
 * Approach 2:
 * We can just simply use 2 pointers (slow-fast) for this problem.
 * Move fast pointer first, if fast position value is 0 then make fast pointer move on
 * Until fast reaches non-zero element position, swamp fast and slow element
 *
 * Time complexity: O(n)
 * Just loop the array once
 *
 * Space Complexity: O(1)
 * We declared 3 integer variables
 *
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let slow = 0
  let fast = 0
  let temp = 0

  while (fast < nums.length) {
    if (nums[fast] == 0) {
      fast++
    } else {
      temp = nums[slow]
      nums[slow++] = nums[fast]
      nums[fast++] = temp
    }
  }

  return nums
};

module.exports = {
  func: moveZeroes,
  argTypes: [
    'Array',
  ],
  returnType: 'Array',
  tests: [
    [
      [1,0,1],
    ],
    [
      [0,1,0,3,12],
    ],
    [
      [2,1]
    ],
    [
      [0],
    ],
    [
      [0,1,2,2,3,0,4,2],
    ],
  ]
}

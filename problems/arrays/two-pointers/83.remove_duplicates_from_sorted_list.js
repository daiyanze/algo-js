/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


/**
 * Similar to LeetCode 26 of removing duplicates from array.
 * Let fast pointer discover the different value, and change the slow.next pointer to fast
 *
 *
 * Time complexity: O(n)
 * Looped the linked-list once
 *
 * Space Complexity: O(1)
 * We created 2 pointer variables
 *
 */


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return null

  let slow = head
  let fast = head.next

  while (fast) {
    if (slow.val == fast.val) {
      fast = fast.next
    } else {
      slow.next = fast
      slow = slow.next
    }
  }

  // Make sure the last node doesn't link to any existing duplicated node
  slow.next = null

  return head
};

module.exports = {
  func: deleteDuplicates,
  argTypes: [
    'ListNode',
  ],
  returnType: 'ListNode',
  tests: [
    [
      [1,1,2,3,3],
    ],
    [
      [1,1,2],
    ],
  ]
}


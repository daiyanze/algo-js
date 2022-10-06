/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * We will use 2 pointers to approach this problem.
 * Make the fast pointer move 2 steps each time and slow pointer 1 step each time.
 * When fast pointer reaches the last node (not the null-ending pointer), slow pointer reaches the middle
 *
 *
 * Time complexity: O(n)
 * Just loop the linked-list once
 *
 * Space Complexity: O(1)
 * We created 2 pointers
 *
 */


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  console.log(fast)

  return slow
};

module.exports = {
  func: middleNode,
  argTypes: [
    'ListNode',
  ],
  returnType: 'ListNode',
  tests: [
    [
      [1,2,3,4,5],
    ],
    [
      [1,2,3,4,5,6],
    ],
    [
      [1]
    ]
  ]
}

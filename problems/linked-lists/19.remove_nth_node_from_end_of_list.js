/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * We use 2 pointers to handle this problem.
 * Allow the fast pointer traverse first by "n + 1" steps. Then let slow pointer start moving.
 * This can be achieved by reducing "n" value each iteration (n--).
 *
 * Suppose the length of the linked list is "k", then the slow pointer will reach "k - n - 1" when fast pointer reaches the end.
 * If We find the (k - n - 1)th node, then just do "node = node.next.next"
 *      n+1  n
 * 4 -> 3 -> 2 -> 1
 * 
 * 
 * Note the case of when k == n, the usual case is that we will remove the head node. In this case, n == 1
 * We should return head.next
 *
 *
 * Time complexity: O(n)
 * Just loop the linked-list once
 *
 * Space Complexity: O(1)
 * We created 2 pointers
 *
 *
 *
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let slow = head
  let fast = head

  // Set target movement steps for fast pointer to n + 1
  n = n + 1

  // Move pointers and make sure slow pointer reaches (k - n - 1)
  while (fast) {
    fast = fast.next

    if (n == 0) {
      slow = slow.next
    }

    if (n > 0) {
      n--
    }
  }

  if (n == 0) {
    // Handle when removing any nodes (except head node)
    slow.next = slow.next.next
  } else {
    // Handle when removing head node
    head = head.next
  }

  return head
};

module.exports = {
  func: removeNthFromEnd,
  argTypes: [
    'ListNode',
    'Number'
  ],
  returnType: 'ListNode',
  tests: [
    [
      [4,3,2,1],
      2
    ],
    [
      [2,1],
      1
    ],
  ]
}


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * We need a new head node in order to form a new linked list.
 * (It's optional to use 2 extra pointers to avoid mutating original arugment data)
 * By comparing the node value, we put the smaller node as the next, bigger one as the next.next
 *
 *
 *
 * Time complexity: O(n)
 * Looped linked lists once
 *
 *
 * Space Complexity: O(1)
 * We created a pointer and a new ListNode which the memory space is fixed
 *
 */


/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let head = new ListNode(null, null)
  let p = head

  while (list1 || list2) {
    // If list1 reaches the end. Continue with list2
    if (!list1) {
      p.next = list2
      list2 = list2.next
      p = p.next
      continue
    }

    // If list2 reaches the end. Continue with list1
    if (!list2) {
      p.next = list1
      list1 = list1.next
      p = p.next
      continue
    }

    // The smaller one will be arranged as the next node
    if (list1.val > list2.val) {
      p.next = list2
      list2 = list2.next
    } else {
      p.next = list1
      list1 = list1.next
    }

    p = p.next
  }

  return head.next
};

module.exports = {
  func: mergeTwoLists,
  argTypes: [
    'ListNode',
    'ListNode',
  ],
  returnType: 'ListNode',
  tests: [
    [
      [1,4,6,8],
      [2,3,5,7],
    ],
    [
      [2,4],
      [1,3],
    ],
  ]
}

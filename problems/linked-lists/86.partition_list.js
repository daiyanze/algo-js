/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


/**
 * We will use 3 pointers to approach this problem.
 *
 * The core concept is to separate 1 linked-list into 2. And then combine 2 into 1 later.
 * Here are some key notes:
 *  1. Make sure to create "null-head" to prevent errors under "empty cases"
 *  2. "Small" linked-list stores nodes which value is smaller than "x"
 *  3. "Big" linked-list stores nodes which value is bigger than "x"
 *  4. Join the 2 linked-list "Small" -> "Big"
 *  5. Return "small"->next
 *
 *
 * Time complexity: O(n)
 * Just loop the linked-list once
 *
 * Space Complexity: O(1)
 * We created 2 extra dummy nodes and reused those from the original data
 *
 */


/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  const small = new ListNode(null, null)
  const big = new ListNode(null, null)

  let p = head
  let ps = small
  let pb = big

  while (p) {
    if (p.val >= x) {
      pb.next = p
      pb = pb.next
    } else {
      ps.next = p
      ps = ps.next
    }

    // Need to remove the current node's next pointer so that it won't affect the result of adding nodes to the other linked list
    const next = p.next
    p.next = null
    p = next
  }

  ps.next = big.next

  return small.next
};

module.exports = {
  func: partition,
  argTypes: [
    'ListNode',
    'Number'
  ],
  returnType: 'ListNode',
  tests: [
    [
      [1,4,3,2,5,2],
      3
    ],
    [
      [2,1],
      2
    ],
  ]
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


/**
 * If we start with the base case: when m = 1, then it would be turned into a problem of reversing linked list until Nth node.
 * m              n
 * 1 -> 2 -> 3 -> 4 -> 5
 * 
 * In the give example, we could treat m node as head node. And save the succesor node (5)
 *      m         n
 * 1 -> 2 -> 3 -> 4 -> 5
 * 
 * After we reverse the linked-list, we relink the nodes
 * 1 -> reverse(2 -> 3 -> 4) -> 5
 * 1 -> 4 -> 3 -> 2 -> 5
 *
 *
 *
 * Time complexity: O(n)
 * Just loop the linked-list once
 *
 * Space Complexity: O(1)
 * We created 1 extra pointer for temp storage
 *
 *
 *
 */


/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {

  let successor = null
  function reverseN(node, n) {
    if (n == 1) {
      successor = node.next
      return node
    }

    const last = reverseN(node.next, n - 1)
    node.next.next = node
    node.next = successor

    return last
  }

  function reverseB(node, m, n) {
    // Base case: to reverse Linked list till Nth node
    if (m == 1) {
      return reverseN(node, n)
    }

    // reverseN will return a new head
    node.next = reverseB(node.next, m - 1, n - 1)

    return node
  }


  return reverseB(head, left, right)
};

module.exports = {
  func: reverseBetween,
  argTypes: [
    'ListNode',
    'Number',
    'Number',
  ],
  returnType: 'ListNode',
  tests: [
    [
      [1,2,3,4,5],
      2,
      4,
    ],
    [
      [5],
      1,
      1,
    ]
  ]
}

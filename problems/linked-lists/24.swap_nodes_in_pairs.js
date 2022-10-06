/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Same to 25.reverse_nodes_in_k_group but the second argument is 2
 * 
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  function reverseN(node, end) {
    let prev = null
    let cur = node

    while (cur != end) {
      let next = cur.next
      cur.next = prev
      prev = cur
      cur = next
    }

    return prev
  }

  function reverseGroup(node) {
    if (!node) {
      return null
    }

    let n = 2
    let start = node
    let end = node

    // [start, end)  => including start but excluding end
    while (n > 0) {
      if (!end) return node

      end = end.next

      n--
    }

    const newHead = reverseN(start, end)
    node.next = reverseGroup(end)

    return newHead
  }

  return reverseGroup(head)
};

module.exports = {
  func: swapPairs,
  argTypes: [
    'ListNode',
  ],
  returnType: 'ListNode',
  tests: [
    [
      [1,2,3,4],
    ],
    [
      [1,2,3],
    ],
    [
      [1]
    ]
  ]
}

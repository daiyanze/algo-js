/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * If a linked-list has N nodes, then we need to find the (N/2)th / (N/2 + 1)th nodes (as a linked-list length can be even and odd.)
 * even: N/2
 * odd: N/2 + 1
 *
 *           #(N/2)
 * 1 -> 2 -> 2 -> 1
 *                #(N/2 + 1)
 * 1 -> 2 -> 3 -> 2 -> 1
 *
 * The next step would be to reverse the rest of the linked-list starting from the target node till the end
 *
 * 1 -> 2 -> reverse(2 -> 1)
 * 1 -> 2 -> 1 -> 2
 *
 * 1 -> 2 -> 3 -> reverse(2 -> 1)
 * 1 -> 2 -> 3 -> 1 -> 2
 *
 * After "reversing", we could start comparing the nodes: f(n) == f(n + (n / 2))
 *
 * p1        p2     (p1 == p2 ? continue : return false)
 * 1 -> 2 -> 1 -> 2
 *
 *
 * p1             p2     (p1 == p2 ? continue : return false)
 * 1 -> 2 -> 3 -> 1 -> 2
 *
 *
 * Before the end, don't forget to reverse the linked-list back to its original state. It's optional but a better solution.
 *
 * 1 -> 2 -> reverse(1 -> 2)
 * 1 -> 2 -> 2 -> 1
 *
 *
 * Time complexity: O(n)
 * We looped linked-list in linear time
 *
 * Space Complexity: O(1)
 * We created several pointer variables
 *
 *
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  
  function reverse(node) {
    let prev = null
    let cur = node

    while (cur) {
      let next = cur.next
      cur.next = prev
      prev = cur
      cur = next
    }

    return prev
  }

  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // When it's odd number of nodes, fast pointer is the last node. In this case, we need to move the slow pointer one more step
  //           slow      fast
  // 1 -> 2 -> 3 -> 2 -> 1
  //                slow fast
  // 1 -> 2 -> 3 -> 2 -> 1
  if (fast) {
    slow = slow.next
  }

  // Reverse the linked-list from slow
  // 1 -> 2 -> 3 -> reverse(2 -> 1)
  // 1 -> 2 -> 3 -> 1 -> 2
  // left           right
  // 1 -> 2 -> 3 -> 1 -> 2
  let right = reverse(slow)
  let left = head
  
  let res = true
  while (right) {
    if (left.val != right.val) {
      res = false
    }
    left = left.next
    right = right.next
  }
  
  return res
};

module.exports = {
  func: isPalindrome,
  argTypes: [
    'ListNode',
  ],
  returnType: 'boolean',
  tests: [
    [
      [1,2,2,1],
    ],
    [
      [1,2,3],
    ],
  ]
}

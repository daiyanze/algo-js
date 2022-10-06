/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Approach 1: Iteration
 * We will use 3 pointers to solve this problem. 2 slow-fast pointers and 1 next pointer (storing the next pointer temporarily ).
 * For instance, 1 -> 2 -> 3 ...   As for the first step, the pointer of 2 -> 3 will be saved into next pointer
 *
 * 
 *   (slow)     (fast)   (next)
 * 1. null   ->   1   ->   2   ->   3
 * 
 *   (slow)     (fast)   (next)
 * 2. null   <-   1        2   ->   3
 * 
 *              (slow)
 *              (fast)   (next)
 * 3. null   <-   1        2   ->   3
 * 
 * 
 *              (slow)   (fast)    (next)
 * 4. null   <-   1        2   ->   3
 * 
 *              (slow)   (fast)    (next)
 * 5. null   <-   1   <-   2        3
 * 
 *                       (slow)    (fast)   (next)
 * 6. null   <-   1   <-   2   <-   3        null
 * 
 * 
 * 
 * Time complexity: O(n)
 * Just loop the linked-list once
 *
 * Space Complexity: O(1)
 * We created 2 pointers
 * 
 * 
 */


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let slow = null
  let fast = head

  while (fast) {
    let next = fast.next
    fast.next = slow

    // 3. move slow cursor to the current node
    slow = fast

    // 4. move cursor to the saved next node
    fast = next
  }

  return slow
};

/**
 * Approach 2: recurrsion
 * We could reach the last node first and reallocate the pointers. The functioning targets are only 2 pointers: head.next & head.next.next
 * For instance, ... -> 4 -> 5 -> null
 * 5 is the last node. 4 is the current node.
 *
 *
 * The steps are:
 *   1. Get the last node first which will be returned as new head node
 *   2. Change Pointer(5 -> null) to Pointer(5 -> 4)
 *   3. Change Pointer(4 -> 5) to Pointer(4 -> null)
 *
 * Note that we need to process the later node first to prevent losing the pointer
 *
 *
 * Time complexity: O(n)
 * Just loop the linked-list once
 *
 * Space Complexity: O(1)
 * We created 1 pointer
 *
 */
var reverseList = function(head) {
  function reverse(node) {
    if (!node || !node.next) {
      return node
    }

    const last = reverse(node.next)
    node.next.next = node
    node.next = null
  
    return last
  }

  return reverse(head)
}

module.exports = {
  func: reverseList,
  argTypes: [
    'ListNode',
  ],
  returnType: 'ListNode',
  tests: [
    [
      [1,2,3,4,5],
    ],
    [
      [1]
    ]
  ]
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 
 * We need to breakdown this problem into smaller problems.
 *   How to reverse a ranged linked-list
 *   How to judge wether the next sub linked-list is "reversable"
 *   How to connect the reversed linked-list
 * 
 * 1 -> 2 -> 3 -> 4 -> 5 
 * 
 * reverse(1 -> 2) -> 3 -> 4 -> 5
 * 
 * 1 <- 2   3 -> 4 -> 5
 * \___>___/ 
 * 
 * 2 -> 1 -> reverse(3 -> 4) -> 5
 * 
 *       /-->---\
 * 2 -> 1  3  <- 4   5
 *         \___>____/
 * 
 * 2 -> 1 -> 4 -> 3 -> 5
 * 
 * 
 * 
 * Time complexity: O(n)
 * Don't be frightened by the recursion and the while loop combination. The loop is constant time. So it's still linear
 *
 *
 * Space Complexity: O(1)
 * We declared some extra pointer variables
 * 
 */


/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  
  // Reverse the linked-list within start and end range
  function reverseBetween(start, end) {
    let pre = null
    let cur = start

    while (cur != end) {
      // Store the next pointer
      let next = cur.next
      // Reallocate pointer to previous node
      cur.next = pre

      // Move pointers to their next position
      pre = cur
      cur = next
    }

    return pre
  }

  // Reverse nodes recursively
  // This function returns 
  //    if next K nodes exists, the new Head
  //    else the origin node
  function reverseGroup(node, n = k) {
    if (!node) {
      return null
    }

    // The range should be [start, end). Including start but excluding end itself
    let start = node
    let end = node

    while (n > 0) {
      if (!end) return node

      end = end.next
      n--
    }

    const newHead = reverseBetween(start, end)

    start.next = reverseGroup(end)
    
    return newHead
  }

  return reverseGroup(head)
};

module.exports = {
  func: reverseKGroup,
  argTypes: [
    'ListNode',
    'Number',
  ],
  returnType: 'ListNode',
  tests: [
    [
      [1,2,3,4,5],
      2,
    ],
    [
      [1,2,3,4,5,6,7],
      3,
    ]
  ]
}

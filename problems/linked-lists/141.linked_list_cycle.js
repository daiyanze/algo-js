/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Approach:
 * We use 2 pointers (slow, fast) to help detect the cycle
 * once the 2 pointers meest each other then, there's a cycle in the list
 * 
 * 
 * Time complexity: O(n)
 * Just loop the linked-list less once
 *
 * Space Complexity: O(1)
 * We created 2 pointers
 * 
 * 
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow == fast) {
      return true
    }
  }

  return false
};

// TODO: add test module.exports

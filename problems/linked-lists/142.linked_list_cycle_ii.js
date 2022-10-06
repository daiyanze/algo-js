/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Approach:
 * We use 2 pointers to detect cycles. In order to know the start node of the cycle, we will do the following steps
 *   1. Check if there's a cycle. If there's no cycle, return
 *   2. Set the slow pointer to head
 *  3. Loop again and let them meet again. The node where they met is the start node
 *
 * Time complexity: O(n)
 * Just loop the linked-list in linear time.
 *
 * Space Complexity: O(1)
 * We created 2 pointers
 *
 */


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let slow = head
  let fast = head

  // Check if cyclic
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    // Break the loop if we detected a cycle
    if (slow == fast) {
      break
    }
  }

  // Check if the former while loop is terminated because of a cycle is detected
  if (!fast || !fast.next) {
    return null
  }

  // slow and fast has traversed for K steps. Suppose the start node and Kth node distance is M.
  // Then if we put slow pointer back to head, with both slow and fast moving K - M steps forward will eventually let them meet at the start node
  slow = head
  while (slow != fast) {
    slow = slow.next
    fast = fast.next
  }

  return slow
};

// TODO: add test module.exports

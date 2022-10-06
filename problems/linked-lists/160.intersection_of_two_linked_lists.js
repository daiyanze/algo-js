/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * We will use 2 pointers to handle this problem.
 * The 2 linked-list length may be different. The core technique is to make sure both pointers traverse the same distance.
 *
 * Approach 1:
 * When a linked list has reached to null pointer, continue traversing to the other linked list
 *   Linked list 1: a -> b -> c -> d -> e (continue) -> y -> c (program stopped here as they reached to same node)
 *   Linked list 2: y -> c -> d -> e (continue) -> a -> b -> c
 *
 * Time complexity: O(n)
 * Just loop the linked-list once
 *
 * Space Complexity: O(1)
 * We created 2 pointers
 *
 *
 *
 * Approach 2:
 * Get both of the linked-list length. Allow the longer linked-list move first for several steps. And then check if they share the same node.
 *   Linked list 1: a -> b -> c -> d -> e (length 5)
 *   Linked list 1: b -> c -> d -> e (length 4) (pointer moved to another node making the 2 lists under same length)
 *   Linked list 2: y -> c -> d -> e (length 4)
 * 
 * Time complexity: O(n)
 * There're several loops but all linear
 *
 * Space Complexity: O(1)
 * We declared some pointers and int variables
 *
 */


// Approach 1
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let p1 = headA
  let p2 = headB

  while (p1 != p2) {
    // linked list A
    // If reaches to the end, continue with B
    if (!p1) {
      p1 = headB
    } else {
      p1 = p1.next
    }

    // linked list B
    // If reaches to the end, continue with A
    if (!p2) {
      p2 = headA
    } else {
      p2 = p2.next
    }
  }

  return p1
};


// Approach 2
var getIntersectionNode = function(headA, headB) {
  let p1 = headA
  let p2 = headB

  let aLen = 0
  let bLen = 0

  for (p1 = headA; p1 != null; p1 = p1.next) {
    aLen++
  }

  for (p2 = headB; p2 != null; p2 = p2.next) {
    bLen++
  }

  // Reset pointers back to head
  p1 = headA
  p2 = headB

  let steps = aLen - bLen

  if (steps > 0) {
    while (steps > 0) {
      p1 = p1.next
      steps--
    }
  } else if (steps < 0) {
    while (steps < 0) {
      p2 = p2.next
      steps++
    }
  }
  
  while (p1 != p2) {
    p1 = p1.next
    p2 = p2.next
  }

  return p1
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var node5 = new ListNode(5, null)
var node4 = new ListNode(4, node5)
var node8 = new ListNode(8, node4)

var node1 = new ListNode(1, node8)
var node6 = new ListNode(6, node1)
var node5 = new ListNode(5, node6)


var node1_1 = new ListNode(1, node8)
var node4_1 = new ListNode(4, node1_1)

console.log(
  getIntersectionNode(
    node4_1,
    node5
  )
)

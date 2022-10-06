/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * LeetCode has provided the util of "MinPriorityQueue". Thus, we could directly adopt this solution and simplify our implementation
 * "MinPriorityQueue" time complexity is O(logn) whenever it adds or pops item. Refer to the following content:
 * https://github.com/datastructures-js/priority-queue#datastructures-jspriority-queue
 * 
 * We will iterate the lists first and put the head node input "MinPriorityQueue" and then each node will be arranged by descending order.
 * The rest of the steps are similar to "merge two sorted lists". We append popped node to the linked list
 * 
 * Time complexity: O(m * logn)
 * Priority queue is always O(logn). It's invoked during looping linked-list
 *
 * Space Complexity: O(n)
 * We need to put all elements into the priority queue
 *
 *
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let head = new ListNode(null, null)
  let p = head
  // Can use this class directly from LeetCode
  const queue = new MinPriorityQueue({ priority: n => n.val })

  for (const l of lists) {
    // The node should be non-null
    // And push only the head node of each list into priority queue
    l && queue.enqueue(l)
  }

  while(!queue.isEmpty()) {
    const node = queue.dequeue().element
    p.next = node

    // As the popped node is checked, push its next node to the queue
    node.next && queue.enqueue(node.next)

    p = p.next
  }

  return head.next
};


module.exports = {
  func: mergeKLists,
  argTypes: [
    'ListNode[]',
  ],
  returnType: 'ListNode',
  tests: [
    [
      [[1,4,5],[1,3,4],[2,6]],
    ],
    [
      []
    ],
  ]
}


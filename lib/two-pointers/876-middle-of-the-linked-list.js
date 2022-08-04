function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var node8 = new ListNode(8, null)
var node7 = new ListNode(7, node8)
// var node7 = new ListNode(7, null)
var node6 = new ListNode(6, node7)
var node5 = new ListNode(5, node6)
var node4 = new ListNode(4, node5)
var node3 = new ListNode(3, node4)
var node2 = new ListNode(2, node3)
var node1 = new ListNode(1, node2)

function middleNode(head) {
  let slow = head
  let fast = head

  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
    console.log(`slow: ${slow.val}, fast: ${fast.val}`)
  }

  if (fast.next) {
    return slow.next
  } else {
    return slow
  }

  return slow.next
}

console.log(middleNode(node1))

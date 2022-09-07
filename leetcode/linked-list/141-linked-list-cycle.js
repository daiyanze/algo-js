function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var node5 = new ListNode(5, node3)
var node4 = new ListNode(4, node5)
var node3 = new ListNode(3, node4)
var node2 = new ListNode(2, node3)
var node1 = new ListNode(1, node2)

function hasCycle(head) {
  let slow = head

  while (head && head.next) {
    slow = slow.next
    head = head.next.next

    console.log(slow, head)

    if (head == slow) return true
  }

  return false
}

console.log(hasCycle(node1))

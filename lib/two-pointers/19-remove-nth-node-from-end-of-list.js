function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var node8 = new ListNode(8, null)
var node7 = new ListNode(7, node8)
var node6 = new ListNode(6, node7)
var node5 = new ListNode(5, node6)
var node4 = new ListNode(4, node5)
var node3 = new ListNode(3, node4)
var node2 = new ListNode(2, node3)
var node1 = new ListNode(1, node2)

function removeNthFromEnd(head, n) {
  let slow = head
  let fast = head

  while (fast) {
    fast = fast.next

    if (n < 0) {
      slow = slow.next
    }

    n--
  }

  console.log(slow)

  if (n) {
    slow.next = slow.next.next
  } else {
    head = head.next
  }

  console.log(slow)

  return head
}

let res = removeNthFromEnd(node1, 0)

while(res) {
  console.log(res.val)
  res = res.next
}

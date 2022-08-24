function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var node6 = new ListNode(6, null)
var node5 = new ListNode(5, node6)
var node4 = new ListNode(4, node5)
var node3_2 = new ListNode(3, node4)
var node3_1 = new ListNode(3, node3_2)
var node2 = new ListNode(2, node3_1)
var node1 = new ListNode(1, node2)

var node1_2 = new ListNode(1, null)
var node1_1 = new ListNode(1, node1_1)

function deleteDuplicates(head) {
  let cur = new ListNode(null, head)
  let slow = cur

  while (head) {
    if (head.next && head.val == head.next.val) {
      while (head.next && head.val == head.next.val) {
        head = head.next
      }

      slow.next = head.next
    } else {
      slow = slow.next
    }

    head = head.next
  }

  return cur.next
}

let res = deleteDuplicates(node1_1)

while(res) {
  console.log(res.val)
  res = res.next
}

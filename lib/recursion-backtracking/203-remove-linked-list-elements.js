function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var node6_2 = new ListNode(6, null)
var node5 = new ListNode(5, node6_2)
var node4 = new ListNode(4, node5)
var node3 = new ListNode(3, node4)
var node6_1 = new ListNode(6, node3)
var node2 = new ListNode(2, node6_1)
var node1 = new ListNode(1, node2)

var node7_3 = new ListNode(7, null)
var node7_2 = new ListNode(7, node7_3)
var node7_1 = new ListNode(7, node7_2)

function removeElements(head, val) {
  let prev = new ListNode(null, head)
  let cur = prev.next
  
  while (cur) {
    if (cur.val == val) {
      prev.next = cur.next
    }

    console.log(cur)

    prev = cur
    cur = cur.next
  }
  
  return head
};

let res = removeElements(node7_1, 7)

while(res) {
  console.log(res.val)
  res = res.next
}

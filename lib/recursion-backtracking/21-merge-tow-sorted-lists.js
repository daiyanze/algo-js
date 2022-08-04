function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var node4 = new ListNode(4, null)
var node3 = new ListNode(3, node4)
var node1 = new ListNode(1, node3)

var _node4 = new ListNode(4, null)
var _node2 = new ListNode(2, _node4)
var _node1 = new ListNode(1, _node2)

function mergeTwoLists(list1, list2) {
  const head = new ListNode(-1)
  let prev = head

  while (list1 && list2) {
    if (list1.val < list2.val) {
      prev.next = list1
      list1 = list1.next
    } else {
      prev.next = list2
      list2 = list2.next
    }

    prev = prev.next
  }

  prev.next = list1 ? list1 : list2

  return head.next
}

console.log(mergeTwoLists(node1, _node1))

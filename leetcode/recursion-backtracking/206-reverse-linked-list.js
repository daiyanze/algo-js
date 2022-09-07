function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var node5 = new ListNode(5, null)
var node4 = new ListNode(4, node5)
var node3 = new ListNode(3, node4)
var node2 = new ListNode(2, node3)
var node1 = new ListNode(1, node2)

// Iteration
// null  ->  1  ->  2  ->  3  ->  4  -> 5
// prev     cur
//          prev<-cur
//                  prev<-cur
function reverseList(head) {
  let prev = null
  let cur = head

  while (cur) {
    // 1. save next pointer
    // 2. point cur.next pointer to prev
    // 3. move prev forward
    // 4. move cur forward
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }

  return prev
}

// Temp pointer
// Linked list should have a start with null pointer. This solution is just complement the missing pointer
function reverseList(head) {
  let cur = null

  while (head) {
    let next = head.next
    head.next = cur
    cur = head
    head = next
  }

  return cur
}

// Recursion
// 4 -> 5 -> null
// null -> 5 <-> 4
// null -> 5 -> 4
// 4 -> 3
function reverseList(head) {
  if (head && head.next) {
    const cur = reverseList(head.next)
    head.next.next = head
    // reset pointer to avoid circular pointer
    head.next = null
    return cur
  } else {
    return head
  }
}

// Stack
function reverseList(head) {
  const stack = []
  while (head) {
    stack.push(head)
    head = head.next
  }

  if (!stack.length) return null

  let cur = stack.pop()
  let temp = cur
  while (stack.length) {
    temp.next = stack.pop()
    temp = temp.next
  }

  temp.next = null

  return cur
}

console.log(reverseList(node1))

/**
 * Helper classes to execute linked-list test cases
 *
 *
 */

class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }

  toArray(linkedList) {
    // allow to use as static method
    let p = linkedList ? linkedList : this
    const res = []

    if (p) {
      while (p) {
        res.push(p.val)
        p = p.next
      }

      return res
    }

    return []
  }
}

class LinkedList {
  nodes = null

  constructor(arr) {
    if (Array.isArray(arr)) {
      // stores head pointer
      this.nodes = this.fromArray(arr)
    }

    return this.nodes
  }

  fromArray(arr) {
    const head = new ListNode()
    let p = head

    for (let a of arr) {
      const next = new ListNode(a, null)
      p.next = next
      p = p.next
    }

    return head.next
  }

  toArray(head) {
    // allow to use as static method
    let p = head ? head : this.nodes
    const res = []

    if (p) {
      while (p) {
        res.push(p.val)
        p = p.next
      }

      return res
    }

    return []
  }
}

module.exports = {
  LinkedList,
  ListNode,
}

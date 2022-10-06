# Linked List Study Notes

This study plan will make you more familiar about the following linked-list operations

- Merging sorted linked lists
- Decomposing linked lists
- Finding target node
- Check if linked-list is circular
- Reverse linked-list

## Linked-List techniques

### General Traversing
```js
// Recursion
function traverse(head) {
  // pre-order
  traverse(head.next)
  // post-order
}

// Iteration
function traverse(head) {
  while (head) {
    head = head.next
    // Do something 
  }
}
```

### Two pointers / Slow-fast pointers

If the linked-list length is even number, then fast pointer will be `null`. If odd, it's the last node.

```js
function twoPointers(head) {
  let slow = head
  let fast = head

  while (fast) {
    slow = slow.next
    fast = fast.next.next
  }
}

function twoPointers(head) {
  let slow = head
  let fast = head
  let count = 3

  while (fast) {
    if (count <= 0) {
      slow = slow.next
    }

    fast = fast.next

    count--
  }
}

function circular(head) {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next

    if (slow == fast) {
      // It's circular
    }
  }
}
```

### Reverse Linked-list (recursion)
```js
function reverse(head) {
  if (!head || !head.next) {
    return head
  }

  // Recursively get the last pointer as head pointer
  const last = reverse(head.next)

  /**
   * The core logic: Reallocate the pointer to current node 
   */ 
  head.next.next = head

  // Unset its pointer
  heax.next = null

  // Return the new head
  return last
}
```

### Reverse Linked-list until a target node
```js
function reverse(head, target) {
  let prev = null
  let cur = head
  let next = cur.next

  while (cur != target) {
    next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }

  return prev
}
```


### Reverse Linked-list first N nodes
```js
// This stores the (N + 1)th node which will be linked by the new head
let successor = null

function reverseN(head, n) {
  // Base case, memoize (N + 1)th node
  if (n == 1) {
    successor = head.next
    return head
  }

  const last = reverseN(head.next, n - 1)
  head.next.next = head
  head.next = successor

  return last
}
```


## LeetCode problems

### Basic

- [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
- [142. Linked List CycleII](https://leetcode.com/problems/linked-list-cycle-ii/)
- [160. Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)
- [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
- [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
- [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
- [86. Partition List](https://leetcode.com/problems/partition-list/)
- [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)

### Advanced

- [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
- [92. Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)
- [25. Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)
- [234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)
- [24. Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)

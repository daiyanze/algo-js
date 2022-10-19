# Array Two Pointers Study Notes

This study plan will help you master the 2 pointers techniques for array manipulations.

- Slow-fast pointers 
- Left-right pointers
- Deduplication
- Remove target elements

## Array techniques

### Two pointers: Slow-fast pointers
```js
function slowFast(arr) {
  let slow = 0
  let fast = 0

  while (fast != arr.length - 1) {
    // ...
  }
}
```

### Two pointers: Left-right pointers

```js
function leftRight(arr) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    // ...
  }
}
```

### N-sum

```js
function twoSum(nums, target) {
  let left = 0
  let right = nums.length - 1
  const res = []

  while (left < right) {
    // ...
  }

  return res
}

function NSum(nums, target, n, start) {
  const res = []

  if (n <= 2) {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
      // ...
    }
  } else {
    for (let i = start; i < nums.length; i++) {
      const temp = NSum(nums, target, n - 1, i + 1)

      for (let arr of temp) {
        arr.push(nums[i])
        res.push(arr)
      }

      while (i < nums.length && nums[i] == nums[i + 1]) i++
    }
  }

  return res
}
```

### Dedup

```js
function dedup(nums) {
  let slow = 0
  let fast = 0

  while (fast < nums.length) {
    if (nums[slow] == nums[fast]) {
      fast++
    } else {
      nums[++slow] = nums[fast]
    }
  }
}
```

### Remove target elements

```js
function removeElement(nums, target) {
  let slow = 0
  let fast = 0

  while (fast < nums.length) {
    if (nums[fast] != target) {
       nums[slow++] = nums[fast]
    }

    fast++
  }
}
```

## LeetCode Problems

### Two pointers

- [1. Two Sum](https://leetcode.com/problems/two-sum/)
- [15. 3Sum](https://leetcode.com/problems/3sum/)
- [18. 4Sum](https://leetcode.com/problems/4sum/)
- [167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
- [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
- [83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)
- [27. Remove Element](https://leetcode.com/problems/remove-element/)
- [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/)
- [344. Reverse String](https://leetcode.com/problems/reverse-string/)
- [9. Panlidrome Number](https://leetcode.com/problems/palindrome-number/)
- [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)




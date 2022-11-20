# Sliding window

## Sliding window technique

```sh
function slidingWindow(input) {
  let left = 0
  let right = 0
  const res = new Map()

  while (right < input.length) {
    res.add(source[right])
    right++
    // Data logic 1
    ...

    // Move left pointer to shrink window
    while (...) {
      res.remove(source[left])
      left++
      // Data logic 2
      ...
    }
  }
}
```

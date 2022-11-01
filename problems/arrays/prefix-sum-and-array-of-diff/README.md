# Array prefix sum & diff Study Notes

This study plan will help you master the prefix sum-diff techniques for array manipulations.

# Array techniques

## Prefix sum

```js
// 1-D array
function NumArray(nums) {
  this.prefixSum = new Array(nums.length + 1).fill(0)

  for (let i = 1; i <= nums.length; i++) {
    this.prefisSum[i] = this.prefisSum[i - 1] + nums[i - 1]
  }
}

NumArray.prototype.sumRange = function(left, right) {
  return this.prefixSum[right + 1] = this.prefixSum[left]
}

// 2-D array
function NumMatrix(matrix) {
  this.prefixSum = Array.from(Array(matrix.length + 1), () => new Array(matrix[0].length + 1).fill(0))

  for (let i = 1; i <= matrix.length; i++) {
    for (let j = 1; j <= matrix[0].length; j++) {
      this.prefixSum[i][j] = 
        matrix[i][i] +
        (this.prefixSum[i - 1][j] + this.prefixSum[i][j - 1] - this.prefixSum[i - 1][j - 1])
    }
  }
}

NumMatrix.prototype.sumRegion = function(x1, y1, x2, y2) {
  return this.prefixSum[x2 + 1, y2 + 1] - this.prefixSum[x2 + 1, y1] - this.prefixSum[x1, y2 + 1] + this.prefixSum[x1, y1]
}
```

## Array of difference

```js
function DiffArray(nums) {
  this.diff = new Array(nums.length).fill(0)
  this.diff[0] = nums[0]

  for (let i = 1; i < nums.length; i++) {
    this.diff[i] = nums[i] - nums[i - 1]
  }
}

DiffArray.prototype.increment = function(start, end, delta) {
  this.diff[start] += delta

  if (end + 1 < this.diff.length) {
    this.diff[end] -= delta
  }

  return this
}

DiffArray.prototype.result = function() {
  const res = [this.diff[0]]

  for (let i = 1; i < this.diff.length; i++) {
    res.push(this.diff[i] + res[i])
  }

  return res
}
```

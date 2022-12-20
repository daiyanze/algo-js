/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
  // Queue => [index, value]
  const nums2MaxQueue = new MaxPriorityQueue({ priority: (elm) => elm[1] })
  for (let i = 0; i < nums2.length; i++) {
    nums2MaxQueue.enqueue([i, nums2[i]])
  }
  
  // Ascending sort
  nums1 = nums1.sort((a, b) => a - b)

  let left = 0
  let right = nums1.length - 1
  const res = new Array(nums2.length)

  while (!nums2MaxQueue.isEmpty()) {
    const [idx, val] = nums2MaxQueue.dequeue().element
    
    if (val < nums1[right]) {
      res[idx] = nums1[right]
      right--
    } else {
      res[idx] = nums1[left]
      left++
    }
  }

  return res
};


module.exports = {
  func: advantageCount,
  argTypes: [
    'Array',
    'Array',
  ],
  returnType: 'Array',
  tests: [
    [
      [2,7,11,15],
      [1,10,4,11],
    ],
    [
      [12,24,8,32],
      [13,25,32,11],
    ],
  ]
}

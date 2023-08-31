var MedianFinder = function() {
  this.smallQueue = new MinPriorityQueue()
  this.largeQueue = new MaxPriorityQueue()
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  if (this.smallQueue.size() >= this.largeQueue.size()) {
    this.smallQueue.enqueue(num)
    this.largeQueue.enqueue(this.smallQueue.dequeue().element)
  } else {
    this.largeQueue.enqueue(num)
    this.smallQueue.enqueue(this.largeQueue.dequeue().element)
  }

};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  if (this.smallQueue.size() > this.largeQueue.size()) {
    return this.smallQueue.front().element
  } else if (this.smallQueue.size() < this.largeQueue.size()) {
    return this.largeQueue.front().element
  }

  const small = this.smallQueue.front().element
  const large = this.largeQueue.front().element

  return (small + (large - small) / 2.0)
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */


module.exports = {
  func: (actions, input) => {
    const median = new MedianFinder()

    const res = [null,]

    for (let i = 1; i < actions.length; i++) {
      const r = median[actions[i]](input[i][0])
      res.push(r === undefined ? null : r)
    }

    return res
  },
  argTypes: [
    'Array',
    'Array',
  ],
  returnType: 'Array',
  tests: [
    [
      ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"],
      [[], [1], [2], [], [3], []]
    ],
  ]
}

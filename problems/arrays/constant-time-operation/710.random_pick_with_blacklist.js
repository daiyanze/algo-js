/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function(n, blacklist) {
  this.n = n
  this.delta = n - blacklist.length
  this.hash = {}

  for (let b of blacklist) {
    this.hash[b] = 1
  }

  let idx = n - 1
  for (let b of blacklist) {
    if (b >= this.delta) continue

    while (this.hash[idx]) {
      idx--
    }

    this.hash[b] = idx--
  }
};

/**
 * @return {number}
 */
Solution.prototype.pick = function() {
  const rnd = ~~(Math.random() * this.n) % this.delta

  if (this.hash[rnd]) {
    return this.hash[rnd]
  }

  return rnd
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */


module.exports = {
  func: function(actions, input) {
    const [arr, ...sets] = input
    const nums = new Solution(arr[0], arr[1])

    const res = [null,]
    actions = actions.slice(1, actions.length)

    for (let i = 0; i < actions.length; i++) {
      res.push(nums[actions[i]](sets[i][0]))
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
      ["Solution", "pick", "pick", "pick", "pick", "pick", "pick", "pick"],
      [[7, [2, 3, 5]], [], [], [], [], [], [], []],
    ],
    [
      ["Solution", "pick", "pick", "pick", "pick", "pick", "pick", "pick"],
      [[10, [1, 3, 5, 7, 9]], [], [], [], [], [], [], []],
    ],
    [
      ["Solution","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick","pick"],
      [[5,[2,1,0]],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    ]
  ]
}


var RandomizedSet = function() {
  this.arr = []
  this.hash = {}
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (!this.hash.hasOwnProperty(val)) {
    this.arr.push(val)
    this.hash[val] = this.arr.length - 1

    return true
  }

  return false
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.hash.hasOwnProperty(val)) return false

  // get index from map
  const idx = this.hash[val]

  // swap with the last element of array
  let temp = this.arr[idx]
  this.arr[idx] = this.arr[this.arr.length - 1]
  this.arr[this.arr.length - 1] = temp
  this.hash[this.arr[idx]] = idx


  // Pop the last element
  this.arr.pop()
  
  // remove val from map
  delete this.hash[val]

  return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const rnd = ~~(Math.random() * 10) % this.arr.length
  return this.arr[rnd]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */


module.exports = {
  func: function(actions, input) {
    const [arr, ...sets] = input
    const nums = new RandomizedSet(arr[0])

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
      ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"],
      [[], [1], [2], [2], [], [1], [2], []],
    ],
    [
      ["RandomizedSet", "insert", "insert", "insert", "insert", "insert", "insert", "getRandom"],
      [[], [1], [2], [3], [4], [1], [5], [6]],
    ],
  ]
}

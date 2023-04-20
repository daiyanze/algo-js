/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.keyToFreq = new Map()
  this.keyToVal = new Map()
  this.freqToKey = new Map()
  this.cap = capacity
  this.min = 0

  this.updateFreq = function(key) {
    // This must exist
    const freq = this.keyToFreq.get(key)

    // Update keyToFreq
    this.keyToFreq.set(key, freq + 1)

    // Create a new set if not exists for the specific frequency
    if (!this.freqToKey.has(freq + 1)) {
      this.freqToKey.set(freq + 1, new Set())
    }

    // Add key to the new frequency
    this.freqToKey.get(freq + 1).add(key)

    // Remove key from the earlier frequency
    this.freqToKey.get(freq).delete(key)

    // Remove the set once it's empty after the above removal
    if (this.freqToKey.get(freq).size == 0) {
      this.freqToKey.delete(freq)
      if (freq == this.min) {
        this.min++
      }
    }

    return
  }

  this.deleteLeastUsed = function() {
    const keyList = this.freqToKey.get(this.min)
    const key = keyList.values().next().value

    keyList.delete(key)

    // Remove the set once it's empty after the above removal
    if (keyList.size == 0) {
      this.freqToKey.delete(this.min)
    }

    this.keyToVal.delete(key)
    this.keyToFreq.delete(key)
  }
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
  if (!this.keyToVal.has(key)) {
    return -1
  }

  this.updateFreq(key)

  return this.keyToVal.get(key)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
  // Base case
  if (this.cap <= 0) return

  // If exists, just update frequency and value
  if (this.keyToVal.has(key)) {
    this.keyToVal.set(key, value)
    this.updateFreq(key)
    return
  }

  // Not exist, but exceeds capability
  if (this.keyToVal.size >= this.cap) {
    // Delete one
    this.deleteLeastUsed()
  }

  // Insert to maps
  this.keyToVal.set(key, value)
  this.keyToFreq.set(key, 1)

  if (!this.freqToKey.has(1)) {
    this.freqToKey.set(1, new Set())
  }

  this.freqToKey.get(1).add(key)
  this.min = 1

  return
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


module.exports = {
  func: (actions, input) => {
    const lfuCache = new LFUCache(input[0])

    const res = [null,]

    for (let i = 1; i < actions.length; i++) {
      const r = lfuCache[actions[i]](input[i][0], input[i][1])
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
      ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"],
      [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]],
    ],
  ]
}

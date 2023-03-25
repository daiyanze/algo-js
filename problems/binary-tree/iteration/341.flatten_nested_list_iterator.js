/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  this.list = Array.from(nestedList)
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  // Use hasNext to prepare the result array
  while (this.list.length && !this.list.get(0).isInteger()) {
    const list = this.list.shift()
    
    // [1,2] 3 [4,5]
    //
    // unshift [1,2] from list
    // 3 [4,5]
    //
    // prepend 2 to head
    // 2 3 [4,5]
    //
    // prepend 1 to head
    // 1 2 3 [4, 5]
    //
    // When we use iterator.next(), 1,2,3 elements are removed
    // [4,5]
    // unshift [4,5] from list
    // (empty)
    // prepend 5 to head
    // 5
    // prepend 4 to head
    // 4 5
    for (let i = list.length - 1; i >= 0; i--) {
      this.list.unshift(list[i])
    }

  }

  return !!this.list.length
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  // Use next to return the result target
  return this.list.shift()
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/


module.exports = {
  func: (args) => {
    const iterator = new NestedIterator(args)
    const res = []

    while (iterator.hasNext()) {
      res.push(iterator.next())
    }

    return res
  },
  argTypes: [
    'Array',
  ],
  returnType: 'Array',
  tests: [
    [
      [[1, 1], 2, [1, 1]],
    ],
    [
      [1, [4, [6]]],
    ],
  ]
}

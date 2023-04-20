/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cap = capacity
  this.map = new Map()
  this.list = new DoubleList()

  // The class to save node info
  function CacheNode(key, value) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }

  function DoubleList() {
    let size = 0
    // Initialize head and tail nodes
    // They're as dummy nodes to help find/operate the target first and last node
    // head.next is the least used
    // tail.prev is the most recently used
    const head = new CacheNode(0, 0)
    const tail = new CacheNode(0, 0)
    // head <-> tail
    head.next = tail
    tail.prev = head

    function addLast(node) {
      // The target is to put a node between head and tail
      // As long as we get the tail's prev node, we could operate its pointers to insert the node
      // head <-> tail
      // head <-> node <-> tail
      // tail.prev is head
      // tail.prev.next is node
      node.prev = tail.prev
      node.next = tail
      tail.prev.next = node
      tail.prev = node

      // Always sync the size
      size++
    }

    function remove(node) {
      // Link the prev and next to remove the target node
      // head <- prev.node.next -> tail
      // head <-> tail
      node.prev.next = node.next
      node.next.prev = node.prev

      size--
    }

    function removeFirst() {
      // Skipp if the list is not yet updated
      if (head.next == tail) {
        return null
      }

      // The next from head is the actual first node
      const first = head.next

      // Just reuse the existing method to remove the node
      remove(first)

      return first
    }

    return {
      addLast,
      remove,
      removeFirst,
      get size() {
        return size
      }
    }
  }

  // We will create some APIs to avoid directly manipulating the map and list in "get" and "put" methods
  this.updateToRecently = function(key) {
    const node = this.map.get(key)

    this.list.remove(node)
    this.list.addLast(node)

    return node
  }

  this.addRecently = function(key, val) {
    const node = new CacheNode(key, val)

    this.map.set(key, node)
    this.list.addLast(node)

    return node
  }

  this.deleteKey = function(key) {
    const node = this.map.get(key)
    this.list.remove(node)
    this.map.delete(key)

    return node
  }

  this.removeLeastRecently = function() {
    const node = this.list.removeFirst()
    this.map.delete(node.key)

    return node
  }

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.map.get(key)) {
    return -1
  }

  const node = this.updateToRecently(key)

  return node.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // If the key exists, we just need to re-add this node into LRU
  if (this.map.get(key)) {
    this.deleteKey(key)
    this.addRecently(key, value)
    return
  }

  // When the list reaches its capability, remove the least used node and add new one
  if (this.list.size >= this.cap) {
    this.removeLeastRecently()
  }

  this.addRecently(key, value)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */



module.exports = {
  func: (actions, input) => {
    const lruCache = new LRUCache(input[0])

    const res = [null,]

    for (let i = 1; i < actions.length; i++) {
      const r = lruCache[actions[i]](input[i][0], input[i][0])
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
      ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"],
      [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]],
    ],
  ]
}

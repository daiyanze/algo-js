const { ListNode, LinkedList } = require('./linkedList')
const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require('@datastructures-js/priority-queue')

global.ListNode = ListNode
global.LinkedList = LinkedList
global.PriorityQueue = PriorityQueue
global.MinPriorityQueue = MinPriorityQueue
global.MaxPriorityQueue = MaxPriorityQueue

module.exports = {
  ListNode,
  LinkedList
}
const { ListNode, LinkedList } = require('./linkedList')
const { TreeNode, BinaryTree } = require('./binaryTree')
const { deepClone, deepCloneObject } = require('./clone')
const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require('@datastructures-js/priority-queue')

global.ListNode = ListNode
global.LinkedList = LinkedList
global.TreeNode = TreeNode
global.BinaryTree = BinaryTree
global.PriorityQueue = PriorityQueue
global.MinPriorityQueue = MinPriorityQueue
global.MaxPriorityQueue = MaxPriorityQueue

module.exports = {
  ListNode,
  LinkedList,
  TreeNode,
  BinaryTree,
  deepClone,
  deepCloneObject,
}

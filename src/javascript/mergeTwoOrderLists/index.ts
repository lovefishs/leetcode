/**
将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
示例：
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'
import arrayToLinkedList from '../util/arrayToLinkedList'
import linkedListToArray from '../util/linkedListToArray'
import iterative from './iterative'
import recursive from './recursive'

/**
 * @param {SinglyLinkedListNode} l1
 * @param {SinglyLinkedListNode} l2
 * @return {SinglyLinkedListNode}
 */
const main = (l1: SinglyLinkedListNode, l2: SinglyLinkedListNode): SinglyLinkedListNode => {
  console.log('l1', JSON.stringify(linkedListToArray(l1)))
  console.log('l2', JSON.stringify(linkedListToArray(l2)))

  const list = iterative(l1, l2)
  // const list = recursive(l1, l2)

  console.log('new list', JSON.stringify(linkedListToArray(list)))
  return list
}

main(arrayToLinkedList([1, 2, 4]), arrayToLinkedList([1, 3, 4]))

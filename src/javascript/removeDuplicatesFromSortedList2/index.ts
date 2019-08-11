/*
给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现的数字。

示例 1:
输入: 1->2->3->3->4->4->5
输出: 1->2->5

示例 2:
输入: 1->1->1->2->3
输出: 2->3
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'
import arrayToLinkedList from '../util/arrayToLinkedList'
import iterative from './iterative'

const main = (head: SinglyLinkedListNode): SinglyLinkedListNode => {
  const ret = iterative(head)

  return ret
}

const head1 = arrayToLinkedList([1, 2, 3, 3, 4, 4, 5])
const head2 = arrayToLinkedList([1, 1, 1, 2, 3])

console.log('head1 before:', JSON.stringify(head1))
console.log('head1 after:', JSON.stringify(main(head1)))
console.log('head2 before:', JSON.stringify(head2))
console.log('head2 after:', JSON.stringify(main(head2)))

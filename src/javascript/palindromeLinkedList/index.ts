/*
请判断一个链表是否为回文链表。

示例 1:
输入: 1->2
输出: false

示例 2:
输入: 1->2->2->1
输出: true

进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'
import arrayToLinkedList from '../util/arrayToLinkedList'
import fastSlowPointer from './fastSlowPointer'

const main = (head: SinglyLinkedListNode): boolean => {
  const ret = fastSlowPointer(head)

  return ret
}

const head1 = arrayToLinkedList([])
const head2 = arrayToLinkedList([1])
const head3 = arrayToLinkedList([1, 2])
const head4 = arrayToLinkedList([1, 2, 1])
const head5 = arrayToLinkedList([1, 2, 2, 1])

console.log('head1', main(head1))
console.log('head2', main(head2))
console.log('head3', main(head3))
console.log('head4', main(head4))
console.log('head5', main(head5))

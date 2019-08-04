/*
删除链表中等于给定值 val 的所有节点。

示例:
输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'
import arrayToLinkedList from '../util/arrayToLinkedList'
import linkedListToArray from '../util/linkedListToArray'
import iterative from './iterative'
import recursive from './recursive'

const main = (head: SinglyLinkedListNode, val: any): null | SinglyLinkedListNode => {
  const ret = iterative(head, val)
  // const ret = recursive(head, val)

  return ret
}

const head1 = arrayToLinkedList([])
const head2 = arrayToLinkedList([6])
const head3 = arrayToLinkedList([6, 6])
const head4 = arrayToLinkedList([1, 2, 6, 3, 4, 5, 6])
const head5 = arrayToLinkedList([1, 6, 6, 6, 4, 5, 6])

console.log('head1', linkedListToArray(head1), 'val=6', linkedListToArray(main(head1, 6)))
console.log('head2', linkedListToArray(head2), 'val=6', linkedListToArray(main(head2, 6)))
console.log('head3', linkedListToArray(head3), 'val=6', linkedListToArray(main(head3, 6)))
console.log('head4', linkedListToArray(head4), 'val=6', linkedListToArray(main(head4, 6)))
console.log('head5', linkedListToArray(head5), 'val=6', linkedListToArray(main(head5, 6)))

/*
编写一个程序，找到两个单链表相交的起始节点。

示例 1:
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Reference of the node with value = 8
输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。

示例 2:
输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Reference of the node with value = 2
输入解释：相交节点的值为 2 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。

示例 3:
输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：null
输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
解释：这两个链表不相交，因此返回 null。

注意:
如果两个链表没有交点，返回 null.
在返回结果后，两个链表仍须保持原有的结构。
可假定整个链表结构中没有循环。
程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'
import arrayToLinkedList from '../util/arrayToLinkedList'
import linkedListToArray from '../util/linkedListToArray'
import iterative from './iterative'

const main = (headA: SinglyLinkedListNode, headB: SinglyLinkedListNode): null | SinglyLinkedListNode => {
  const ret = iterative(headA, headB)

  return ret
}

const head1A = arrayToLinkedList([4, 1, 8, 4, 5])
const head1B = arrayToLinkedList([5, 0, 1, 8, 4, 5])
head1A.next.next = head1B.next.next.next

const head2A = arrayToLinkedList([4, 1, 8, 4, 5])
const head2B = head2A

const head3A = arrayToLinkedList([2, 4, 6])
const head3B = arrayToLinkedList([1, 5])

// console.log('head1A', JSON.stringify(head1A))
// console.log('head1B', JSON.stringify(head1B))
console.log(
  'head1A',
  linkedListToArray(head1A),
  'head1B',
  linkedListToArray(head1B),
  'intersectVal=8',
  linkedListToArray(main(head1A, head1B))
)

// console.log('head2A', JSON.stringify(head2A))
// console.log('head2B', JSON.stringify(head2B))
console.log(
  'head2A',
  linkedListToArray(head2A),
  'head2B',
  linkedListToArray(head2B),
  'intersectVal=4',
  linkedListToArray(main(head2A, head2B))
)

console.log(
  'head3A',
  linkedListToArray(head3A),
  'head3B',
  linkedListToArray(head3B),
  'intersectVal=0',
  linkedListToArray(main(head3A, head3B))
)

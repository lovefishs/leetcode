/*
给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
说明：不允许修改给定的链表。

示例 1:
输入：head = [3,2,0,-4], pos = 1
输出：tail connects to node index 1
解释：链表中有一个环，其尾部连接到第二个节点。

示例 2:
输入：head = [1,2], pos = 0
输出：tail connects to node index 0
解释：链表中有一个环，其尾部连接到第一个节点。

示例 3:
输入：head = [1], pos = -1
输出：no cycle
解释：链表中没有环。
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'
import arrayToLinkedList from '../util/arrayToLinkedList'
import pointer from './pointer'
import useMap from './useMap'

const main = (head: SinglyLinkedListNode): null | SinglyLinkedListNode => {
  const cycle = pointer(head)
  // const cycle = useMap(head)

  console.log('head', head)
  console.log('cycle', cycle)
  console.log()

  return cycle
}

const head1 = arrayToLinkedList([3, 2, 0, -4])
head1.next.next.next.next = head1.next // -4 -> 2
// console.log(head1.next.next.next.next === head1.next)

const head2 = arrayToLinkedList([1, 2])
head2.next.next = head2 // 2 -> 1
// console.log(head2.next.next === head2)

const head3 = arrayToLinkedList([1])

main(head1) // head1.next
main(head2) // head1
main(head3) // null

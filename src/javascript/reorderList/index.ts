/*
https://leetcode-cn.com/problems/reorder-list/
给定一个单链表 L：L0→L1→…→Ln-1→Ln，将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例 1:
给定链表 1->2->3->4, 重新排列为 1->4->2->3.

示例 2:
给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.

分析:
1. 找到中点, 分割链表(快慢指针)
2. 逆转后半部分链表
3. 把前半部分与逆转后的后半部分进行拼接
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'
import arrayToLinkedList from '../util/arrayToLinkedList'

const main = (head: SinglyLinkedListNode): SinglyLinkedListNode => {
  if (head === null || head.next === null) {
    return head
  }

  // 分割链表
  let head1 = head
  let head2 = head
  while (head2.next !== null && head2.next.next !== null) {
    head1 = head1.next
    head2 = head2.next.next
  }
  // 遍历结束时 head1 指向中点
  head2 = head1.next // 后半段链表头指向前半段链表的下一个节点
  head1.next = null // 断开链表
  head1 = head // 重置前半段链表头节点

  // 逆转链表
  let curr = head2
  let next = null
  // 不断取出和向后移动头节点
  // 并将头节点连接到新头节点后面
  while (head2.next !== null) {
    next = head2.next
    head2.next = next.next
    next.next = curr
    curr = next
  }
  head2 = curr

  // 链表合并
  let next1 = null
  let next2 = null
  while (head2 !== null) {
    next1 = head1.next
    next2 = head2.next

    head1.next = head2
    head2.next = next1

    head1 = next1
    head2 = next2
  }

  return head
}

const list1 = arrayToLinkedList([1, 2, 3, 4])
const list2 = arrayToLinkedList([1, 2, 3, 4, 5])

console.log('list1 before:', JSON.stringify(list1))
console.log('list1 after:', JSON.stringify(main(list1)))
console.log('list2 before:', JSON.stringify(list2))
console.log('list2 after:', JSON.stringify(main(list2)))

/*
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例:
给定 1->2->3->4, 你应该返回 2->1->4->3.

分析:
1. 以 2 为步长分隔链表
2. 对分隔链表进行指针交换操作
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'
import arrayToLinkedList from '../util/arrayToLinkedList'

const main = (head: SinglyLinkedListNode): SinglyLinkedListNode => {
  if (head === null || head.next === null) {
    return head
  }

  const pre = new SinglyLinkedListNode(0)
  pre.next = head // 便于循环构造首节点

  let temp = pre

  while (temp.next !== null && temp.next.next !== null) {
    let start = temp.next
    let end = temp.next.next

    temp.next = end // 移动交换节点 2 为交换节点 1
    start.next = end.next // 调整 start.next 指向下一分隔节点
    end.next = start // 移动交换节点 1 next 指针指向 交换节点 2
    temp = start // 调整 temp 指向下一分隔节点为起始点
  }

  return pre.next
}

const head1 = arrayToLinkedList([1, 2, 3, 4])
const head2 = arrayToLinkedList([1, 2, 3, 4, 5])

console.log('head1 before:', JSON.stringify(head1))
console.log('head1 after:', JSON.stringify(main(head1)))
console.log('head2 before:', JSON.stringify(head2))
console.log('head2 after:', JSON.stringify(main(head2)))

/*
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：
给定一个链表: 1->2->3->4->5, 和 n = 2.
当删除了倒数第二个节点后，链表变为 1->2->3->5.

说明：
给定的 n 保证是有效的。

进阶：
你能尝试使用一趟扫描实现吗？

分析:
1. 先计算列表长度 len
2. 删除第 len - n + 1 号节点
3. 返回原节点
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'
import arrayToLinkedList from '../util/arrayToLinkedList'

const main = (head: SinglyLinkedListNode, n: number): SinglyLinkedListNode => {
  if (head === null) {
    return head
  }

  // 定义一个虚拟节点, 用来应对极端情况(比如删除头节点)
  const dummy = new SinglyLinkedListNode(0)
  let len = 0
  let curr = head

  dummy.next = head

  while (curr !== null) {
    curr = curr.next
    len++
  }

  // // 找到 len - n 号节点
  let i = 0
  curr = dummy

  while (i < len - n) {
    curr = curr.next
    i++
  }

  curr.next = curr.next.next

  return dummy.next
}

const head1 = arrayToLinkedList([1, 2, 3, 4, 5])
const head2 = arrayToLinkedList([1])
const head3 = arrayToLinkedList([1, 2])

console.log('head1 before:', JSON.stringify(head1))
console.log('head1 after:', JSON.stringify(main(head1, 2)))
console.log('head2 before:', JSON.stringify(head2))
console.log('head2 after:', JSON.stringify(main(head2, 1)))
console.log('head3 before:', JSON.stringify(head3))
console.log('head3 after:', JSON.stringify(main(head3, 2)))

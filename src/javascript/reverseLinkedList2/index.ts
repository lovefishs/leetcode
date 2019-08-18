/*
反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
1 ≤ m ≤ n ≤ 链表长度。

示例:
输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL

示例:
输入: 1->2->3->NULL, m = 2, n = 3
输出: 1->3->2->NULL

分析:
1. 通过遍历找到交换头结点
2. 通过遍历相邻节点两两交换
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'
import arrayToLinkedList from '../util/arrayToLinkedList'

const main = (head: SinglyLinkedListNode, m: number, n: number): SinglyLinkedListNode => {
  if (head === null || head.next === null) {
    return head
  }

  // 构造 dummy 节点连上 head
  const dummy = new SinglyLinkedListNode(0)
  let pre = dummy

  dummy.next = head

  // 首先找到交换节点头
  for (let i = 0; i < m - 1; i++) {
    pre = pre.next
  }

  let curr = pre.next // 当前节点

  // 从头结点开始两两交换
  for (let j = m; j < n; j++) {
    let temp = curr.next

    curr.next = temp.next
    temp.next = pre.next
    pre.next = temp
  }

  return dummy.next
}

const head1 = arrayToLinkedList([1, 2, 3, 4, 5])
const head2 = arrayToLinkedList([1, 2, 3])
const head3 = arrayToLinkedList([1, 2, 3, 4])

console.log('head1 before:', JSON.stringify(head1), `m: 2, n: 4`)
console.log('head1 after:', JSON.stringify(main(head1, 2, 4)))
console.log('head2 before:', JSON.stringify(head2), `m: 2, n: 3`)
console.log('head2 after:', JSON.stringify(main(head2, 2, 3)))
console.log('head3 before:', JSON.stringify(head3), `m: 3, n: 4`)
console.log('head3 after:', JSON.stringify(main(head3, 3, 4)))

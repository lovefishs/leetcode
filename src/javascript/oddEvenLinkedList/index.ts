/*
给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

示例 1:
输入: 1->2->3->4->5->NULL
输出: 1->3->5->2->4->NULL

示例 2:
输入: 2->1->3->5->6->4->7->NULL
输出: 2->3->6->7->1->5->4->NULL

说明:
应当保持奇数节点和偶数节点的相对顺序。
链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。

原地算法（in-place algorithm）基本上不需要额外辅助的数据结构,然而,允许少量额外的辅助变量来转换数据的算法。
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'
import arrayToLinkedList from '../util/arrayToLinkedList'

const main = (head: SinglyLinkedListNode): SinglyLinkedListNode => {
  if (head === null || head.next === null) {
    return head
  }

  // 双指针解法
  // 把链表拆分为 奇数 与 偶数 两个链表, 使用中间变量存储 偶数 链表的头指针
  // 然后把奇数链表的 next 指向 偶数链表头指针
  // 奇数链表头指针与原始链表头指针一致, 没有变化, 所以可以省略
  let oddCurr = head
  let evenCurr = head.next
  let eventHead = evenCurr

  while (evenCurr && evenCurr.next) {
    oddCurr.next = evenCurr.next
    oddCurr = oddCurr.next
    evenCurr.next = oddCurr.next
    evenCurr = evenCurr.next
  }

  oddCurr.next = eventHead

  return head
}

const head1 = arrayToLinkedList([1, 2, 3, 4, 5])
const head2 = arrayToLinkedList([2, 1, 3, 5, 6, 4, 7])
const head3 = arrayToLinkedList([1, 2])
const head4 = arrayToLinkedList([1, 2, 3])

console.log('head1 before:', JSON.stringify(head1))
console.log('head1 after:', JSON.stringify(main(head1)))
console.log('head2 before:', JSON.stringify(head2))
console.log('head2 after:', JSON.stringify(main(head2)))
console.log('head3 before:', JSON.stringify(head3))
console.log('head3 after:', JSON.stringify(main(head3)))
console.log('head4 before:', JSON.stringify(head4))
console.log('head4 after:', JSON.stringify(main(head4)))

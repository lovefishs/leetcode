/*
解题思路:
1. 先判断是否有环, 使用快慢指针算法查找(原理: 如果是有环的链表, 快慢指针必定会在某一次比对中相等)
2. 如果无环直接返回 null
3. 如果有环, 重新设置一个指针指向头节点, 然后与相遇节点同时移动, 当新指针与相遇节点指针相遇时, 相遇点即为入环口(原理: https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/huan-xing-lian-biao-ii-by-leetcode)
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'

const pointer = (head: SinglyLinkedListNode): null | SinglyLinkedListNode => {
  let slow = head
  let fast = head
  let cycle = head

  while (slow.next !== null && fast.next.next !== null) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      while (cycle && fast) {
        // 先判断再移动
        if (cycle === fast) {
          return cycle
        }

        cycle = cycle.next
        fast = fast.next
      }

      break
    }
  }

  return null
}

export default pointer

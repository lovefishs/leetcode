/*
解题思路:
1. null 与长度为 1 的链表直接判定为 true
2. 使用快慢指针算法找到链表中间位置(快指针指向末尾时, 慢指针指向中间位置(先不考虑环形链表的情况))
3.
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'

const fastSlowPointer = (head: SinglyLinkedListNode): boolean => {
  if (!head || head.next === null) {
    return true
  }

  let slow = head
  let fast = head

  // 找到中间节点
  // 如果链表长度为 2, 则中间节点为 head
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  // 翻转后半部分链表
  let prev = null
  let middleHead = null
  let curr = slow.next
  while (curr !== null) {
    let next = curr.next

    if (next === null) {
      middleHead = curr
    }

    curr.next = prev
    prev = curr
    curr = next
  }

  // console.log(head)
  // console.log(middleHead)
  // 从头比对
  while (middleHead !== null) {
    if (head.val !== middleHead.val) {
      return false
    }

    middleHead = middleHead.next
    head = head.next
  }

  return true
}

export default fastSlowPointer

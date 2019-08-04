/*
解这道题之前，我们需要首先明确一个概念:
如果两个单链表有共同的节点，那么从第一个共同节点开始，后面的节点都会重叠，直到链表结束。
这个概念很重要, 千万不要与 数组 互为混淆!!!
解题思路:
1. 遍历数组得到两个链表的长度差及长短链表
2. 遍历长链表消除长度差, 然后长短链表节点做等式判断, 如果相等则相交, 否则不相交
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'

const iterative = (headA: SinglyLinkedListNode, headB: SinglyLinkedListNode): null | SinglyLinkedListNode => {
  if (headA === null || headB === null) {
    return null
  }

  let headACurr = headA
  let headBCurr = headB
  let headLong = null
  // let longLength = 0
  let dLengthValue = 0

  // 找出长链表并且得出两个链表的长度差
  while (headACurr !== null && headBCurr !== null) {
    // longLength++
    headACurr = headACurr !== null ? headACurr.next : headACurr
    headBCurr = headBCurr !== null ? headBCurr.next : headBCurr

    if (headACurr === null || headBCurr === null) {
      // 如果两个链表同时为 null, 则长度差为 0, 否则加 1
      dLengthValue = headACurr === null && headBCurr === null ? 0 : dLengthValue + 1

      // 只做一次长链表赋值
      if (headLong === null) {
        headLong = headACurr === null ? headB : headA
      }
    }
  }

  // console.log('dLengthValue', dLengthValue)
  // console.log('longLength', longLength)

  // 根据长链表得到短链表
  let headShort = headLong === headA ? headB : headA
  let ret = null
  let moveLength = 0

  while (headLong) {
    if (moveLength >= dLengthValue) {
      if (headLong === headShort) {
        ret = headLong
        break
      }

      headShort = headShort.next
    }

    moveLength++
    headLong = headLong.next
  }

  return ret
}

export default iterative

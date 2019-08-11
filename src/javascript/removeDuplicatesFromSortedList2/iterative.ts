/*
分析:
没有限制时间复杂度与空间复杂度, 可以使用 2 次循环进行解题
1. 第一次循环对所有的值进行计数
2. 第二次循环匹配计数, 链接所有不大于 1 的节点
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'

/**
 * @param {SinglyLinkedListNode} head
 * @return {SinglyLinkedListNode}
 */
const iterative = (head: SinglyLinkedListNode): SinglyLinkedListNode => {
  if (head === null || head.next === null) {
    return head
  }

  const valueCountMap = {}
  let curr = head

  while (curr) {
    if (valueCountMap[curr.val]) {
      valueCountMap[curr.val]++
    } else {
      valueCountMap[curr.val] = 1
    }

    curr = curr.next
  }

  let ret = null
  let prev = null
  curr = head

  while (curr) {
    if (valueCountMap[curr.val] === 1) {
      if (prev === null) {
        ret = curr
        prev = ret
      } else {
        prev.next = curr
        prev = prev.next
      }
    }

    curr = curr.next
  }

  return ret
}

export default iterative

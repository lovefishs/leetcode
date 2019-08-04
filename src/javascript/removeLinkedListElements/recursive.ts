/*
使用递归方式查找下一个与 val 不相等的节点
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'

const recursive = (head: SinglyLinkedListNode, val: any): null | SinglyLinkedListNode => {
  if (head === null) {
    return head
  }

  head.next = recursive(head.next, val)

  return head.val !== val ? head : head.next
}

export default recursive

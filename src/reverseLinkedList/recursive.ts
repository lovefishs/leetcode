import LinkedListNode from './LinkedListNode'
import { cloneDeep } from './util'

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const recursive = (head: LinkedListNode): LinkedListNode => {
  // 看不懂
  if (head == null || head.next == null) {
    return head
  }

  const p: LinkedListNode = recursive(head.next)

  head.next.next = head
  head.next = null

  return p
}

export default recursive

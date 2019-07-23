import LinkedListNode from '../util/LinkedListNode'
import cloneDeep from '../util/cloneDeep'

/**
 * @param {ListNode} head
 * @param {boolean} isRecursiveCall
 * @return {ListNode}
 */
const recursive = (head: LinkedListNode, isRecursiveCall: boolean = false): LinkedListNode => {
  // 非递归调用做深拷贝, 防止改变原对象
  const curr = !isRecursiveCall ? cloneDeep(head) : head

  if (curr == null || curr.next == null) {
    return curr
  }

  const p: LinkedListNode = recursive(curr.next, true)

  curr.next.next = curr
  curr.next = null

  return p
}

export default recursive

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'
import cloneDeep from '../util/cloneDeep'

/**
 * @param {SinglyLinkedListNode} head
 * @param {boolean} isRecursiveCall
 * @return {SinglyLinkedListNode}
 */
const recursive = (head: SinglyLinkedListNode, isRecursiveCall: boolean = false): SinglyLinkedListNode => {
  // 非递归调用做深拷贝, 防止改变原对象
  const curr = !isRecursiveCall ? cloneDeep(head) : head

  if (curr == null || curr.next == null) {
    return curr
  }

  const p: SinglyLinkedListNode = recursive(curr.next, true)

  curr.next.next = curr
  curr.next = null

  return p
}

export default recursive

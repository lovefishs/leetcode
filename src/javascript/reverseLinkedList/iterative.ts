import LinkedListNode from '../util/LinkedListNode'
import cloneDeep from '../util/cloneDeep'

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const iterative = (head: LinkedListNode): LinkedListNode => {
  let prev = null
  let curr = cloneDeep(head)

  while (curr != null) {
    const nextTemp = curr.next

    curr.next = prev
    prev = curr
    curr = nextTemp
  }

  return prev
}

export default iterative

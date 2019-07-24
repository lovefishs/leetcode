import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'
import cloneDeep from '../util/cloneDeep'

/**
 * @param {SinglyLinkedListNode} head
 * @return {SinglyLinkedListNode}
 */
const iterative = (head: SinglyLinkedListNode): SinglyLinkedListNode => {
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

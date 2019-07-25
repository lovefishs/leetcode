import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'

/**
 * @param {SinglyLinkedListNode} l1
 * @param {SinglyLinkedListNode} l2
 * @return {SinglyLinkedListNode}
 */
const recursive = (l1: SinglyLinkedListNode, l2: SinglyLinkedListNode): SinglyLinkedListNode => {
  if (l1 === null || l2 === null) {
    return l1 === null ? l2 : l1
  }

  if (l1.val < l2.val) {
    // 使用递归思路移动小值节点指针, 作为新参数传入, 再次比较
    l1.next = recursive(l1.next, l2)
    return l1
  } else {
    l2.next = recursive(l1, l2.next)
    return l2
  }
}

export default recursive

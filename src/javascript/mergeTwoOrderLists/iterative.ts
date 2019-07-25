import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'

/**
 * @param {SinglyLinkedListNode} l1
 * @param {SinglyLinkedListNode} l2
 * @return {SinglyLinkedListNode}
 */
const iterative = (l1: SinglyLinkedListNode, l2: SinglyLinkedListNode): SinglyLinkedListNode => {
  // 容错处理
  if (l1 === null || l2 === null) {
    return l1 === null ? l2 : l1
  }

  // 定义一个 head 用来最终返回
  const fakeHead: SinglyLinkedListNode = new SinglyLinkedListNode(null)
  let curr = fakeHead // 定义一个活动节点

  while (l1 !== null && l2 !== null) {
    // 比较节点的值, 并且移动小值节点指针
    if (l1.val < l2.val) {
      curr.next = l1
      l1 = l1.next
    } else {
      curr.next = l2
      l2 = l2.next
    }

    // 移动活动节点, 为下一次 next 指针赋值准备
    curr = curr.next

    // 任意节点为 null, 直接链接到另一节点, 并且跳出循环
    if (l1 === null || l2 === null) {
      curr.next = l1 === null ? l2 : l1
      break
    }
  }

  return fakeHead.next
}

export default iterative

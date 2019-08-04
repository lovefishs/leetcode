/*
使用遍历迭代方式求解
空间复杂度会增加
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'

const iterative = (head: SinglyLinkedListNode, val: any): null | SinglyLinkedListNode => {
  if (head === null || (head.next === null && head.val === val)) {
    return null
  }

  const retHead = new SinglyLinkedListNode(null)
  let moveHead = retHead
  let curr = head

  while (curr !== null) {
    if (curr.val !== val) {
      moveHead.next = new SinglyLinkedListNode(curr.val)
      moveHead = moveHead.next
    }

    curr = curr.next
  }

  return retHead.next
}

export default iterative

/*
不新增内存空间解法
*/
export const iterative2 = (head: SinglyLinkedListNode, val: any): null | SinglyLinkedListNode => {
  if (head === null || (head.next === null && head.val === val)) {
    return null
  }

  let header = head.next
  let curr = header

  while (curr.next !== null) {
    if (curr.next.val == val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }

  return header

  // let parent = head
  // let ret = parent
  // let curr = parent.next

  // while (curr) {
  //   // console.log('curr.val', curr.val)
  //   if (curr.val !== val) {
  //     parent.next = curr
  //     parent = parent.next
  //   }

  //   curr = curr.next
  // }

  // return ret
}

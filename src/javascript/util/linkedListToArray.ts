import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'

const linkedListToArray = (head: SinglyLinkedListNode): any[] => {
  const arr = []

  let curr: SinglyLinkedListNode = head

  while (curr) {
    arr.push(curr.val)
    curr = curr.next
  }

  return arr
}

export default linkedListToArray

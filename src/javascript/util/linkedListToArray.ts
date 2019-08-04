import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'

const linkedListToArray = (head: SinglyLinkedListNode): any[] => {
  if (head === null) {
    return null
  }

  const arr = []
  let curr: SinglyLinkedListNode = head

  while (curr) {
    arr.push(curr.val)
    curr = curr.next
  }

  return arr
}

export default linkedListToArray

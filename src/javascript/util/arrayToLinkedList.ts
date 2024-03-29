import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'

const arrayToLinkedList = (arr: any[]): null | SinglyLinkedListNode => {
  if (arr.length === 0) {
    return null
  }

  const head: SinglyLinkedListNode = new SinglyLinkedListNode(arr[0])
  let curr = head
  let index = 1

  while (index < arr.length) {
    curr.next = new SinglyLinkedListNode(arr[index])
    curr = curr.next
    index++
  }

  return head
}

export default arrayToLinkedList

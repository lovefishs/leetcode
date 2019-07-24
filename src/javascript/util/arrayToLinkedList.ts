import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'

const arrayToLinkedList = (arr: any[]): SinglyLinkedListNode => {
  if (arr.length === 0) {
    return new SinglyLinkedListNode(null)
  }

  const head: SinglyLinkedListNode = new SinglyLinkedListNode(arr[0])
  let curr = head
  let index = 1

  while (arr[index]) {
    curr.next = new SinglyLinkedListNode(arr[index])
    curr = curr.next
    index++
  }

  return head
}

export default arrayToLinkedList

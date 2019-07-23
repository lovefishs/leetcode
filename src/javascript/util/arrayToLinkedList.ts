import LinkedListNode from './LinkedListNode'

const arrayToLinkedList = (arr: any[]): LinkedListNode => {
  if (arr.length === 0) {
    return new LinkedListNode(null)
  }

  const head: LinkedListNode = new LinkedListNode(arr[0])
  let curr = head
  let index = 1

  while (arr[index]) {
    curr.next = new LinkedListNode(arr[index])
    curr = curr.next
    index++
  }

  return head
}

export default arrayToLinkedList

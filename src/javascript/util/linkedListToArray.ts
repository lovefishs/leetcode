import LinkedListNode from './LinkedListNode'

const linkedListToArray = (head: LinkedListNode): any[] => {
  const arr = []

  let curr: LinkedListNode = head

  while (curr) {
    arr.push(curr.val)
    curr = curr.next
  }

  return arr
}

export default linkedListToArray

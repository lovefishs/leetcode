import LinkedListNode from './LinkedListNode'
import iterative from './iterative'
// import recursive from './recursive'

const main = (type = 'iterative') => {
  // const reverseList = type === 'iterative' ? iterative : recursive
  const reverseList = iterative
  const node1 = new LinkedListNode(1)
  const node2 = new LinkedListNode(2)
  const node3 = new LinkedListNode(3)

  node1.next = node2
  node2.next = node3

  const reverseNode1 = reverseList(node1)

  console.log('node1', node1)
  console.log('reverseNode1', reverseNode1)
}

main()


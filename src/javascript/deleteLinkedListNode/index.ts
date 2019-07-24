import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'
import arrayToLinkedList from '../util/arrayToLinkedList'

/*
输入: head = [4,5,1,9], node = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
*/

/**
 * @param {SinglyLinkedListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const main = (node: SinglyLinkedListNode): void => {
  node.val = node.next.val
  node.next = node.next.next
}

const head = arrayToLinkedList([4, 5, 1, 9])
const node = head.next.next

console.log('delete before', JSON.stringify(head))
main(node)
console.log('delete after', JSON.stringify(head))

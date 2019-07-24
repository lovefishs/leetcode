import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'
import arrayToLinkedList from '../util/arrayToLinkedList'
import linkedListToArray from '../util/linkedListToArray'

import iterative from './iterative'
import recursive from './recursive'

const main = (arr: any[] = [], type = 'iterative') => {
  const reverseList = type === 'iterative' ? iterative : recursive
  const head: SinglyLinkedListNode = arrayToLinkedList(arr)
  const reverseHead: SinglyLinkedListNode = reverseList(head)
  const reverseArr: any[] = linkedListToArray(reverseHead)

  console.log(`----------${type}----------`)
  console.log('head', JSON.stringify(head))
  console.log('reverseHead', JSON.stringify(reverseHead))
  console.log('arr', arr)
  console.log('reverseArr', reverseArr)
  console.log('')

  return reverseArr
}

main([1, 2, 3, 4, 5])
main([1, 2, 3, 4, 5], 'recursive')

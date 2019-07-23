import LinkedListNode from '../util/LinkedListNode'
import arrayToLinkedList from '../util/arrayToLinkedList'
import linkedListToArray from '../util/linkedListToArray'

import iterative from './iterative'
import recursive from './recursive'

const main = (arr: any[] = [], type = 'iterative') => {
  const reverseList = type === 'iterative' ? iterative : recursive
  const head: LinkedListNode = arrayToLinkedList(arr)
  const reverseHead: LinkedListNode = reverseList(head)
  const reverseArr: any[] = linkedListToArray(reverseHead)

  console.log(`----------${type}----------`)
  console.log('head', JSON.stringify(head))
  console.log('reverseHead', JSON.stringify(reverseHead))
  console.log('arr', arr)
  console.log('reverseArr', reverseArr)
  console.log('')
}

main([1, 2, 3, 4, 5])
main([1, 2, 3, 4, 5], 'recursive')

/*
合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:
输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6

分析:
1. 使用笨方法解题: 遍历所有链表填充到一个数组, 对数组进行排序, 把数组转为结果链表
2. 不做转化, 仅通过遍历: 把链表数组通过遍历合并为一个长链表, 然后对长链表使用二分法排序
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'
import arrayToLinkedList from '../util/arrayToLinkedList'
import linkedListToArray from '../util/linkedListToArray'

const flatten = (arr = []) => {
  return Array.prototype.concat.apply([], arr)
}

const main = (lists: SinglyLinkedListNode[]): SinglyLinkedListNode => {
  if (lists.length === 0) {
    return null
  }

  const arr = flatten(lists.map((item) => linkedListToArray(item)))

  return arrayToLinkedList(arr.sort((a, b) => a - b))
}

const list1 = arrayToLinkedList([1, 4, 5])
const list2 = arrayToLinkedList([1, 3, 4])
const list3 = arrayToLinkedList([2, 6])
const lists = [list1, list2, list3]

console.log('lists before:', JSON.stringify(lists))
console.log('lists after:', JSON.stringify(main(lists)))

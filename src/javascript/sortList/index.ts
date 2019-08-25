/*
https://leetcode-cn.com/problems/sort-list/
在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。

示例 1：
输入: 4->2->1->3
输出: 1->2->3->4

示例 2：
输入: -1->5->3->4->0
输出: -1->0->3->4->5

分析:
1. 没想到太好的方法, 只能想到 插入排序, 二分查找
2. 使用插入排序实现

TODO: 后续再补充其他方式
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'
import arrayToLinkedList from '../util/arrayToLinkedList'

const main = (head: SinglyLinkedListNode): SinglyLinkedListNode => {
  if (head === null || head.next === null) {
    return head
  }

  // 定义一个虚拟节点, 用来应对极端情况(比如头节点移动)
  const dummy = new SinglyLinkedListNode(null)
  dummy.next = head

  let prev = head
  let curr = head.next

  while (curr !== null) {
    if (curr.val >= prev.val) {
      // 顺序正确
      prev = prev.next
      curr = curr.next
    } else {
      // 顺序错误
      let first = dummy
      let sec = dummy.next

      prev.next = curr.next // 摘除 curr 节点

      // 从头节点开始办理查找第一个大于 curr 的节点
      while (sec !== null && curr.val > sec.val) {
        first = first.next
        sec = sec.next
      }
      first.next = curr
      curr.next = sec
      curr = prev.next
    }
  }

  return dummy.next
}

const list1 = arrayToLinkedList([4, 2, 1, 3])
const list2 = arrayToLinkedList([-1, 5, 3, 4, 0])

console.log('list1 before:', JSON.stringify(list1))
console.log('list1 after:', JSON.stringify(main(list1)))
console.log('list2 before:', JSON.stringify(list2))
console.log('list2 after:', JSON.stringify(main(list2)))

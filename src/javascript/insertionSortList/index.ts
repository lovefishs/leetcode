/*
https://leetcode-cn.com/problems/insertion-sort-list/
对链表进行插入排序。

![img](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。
每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。

插入排序算法：
插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
重复直到所有输入数据插入完为止。

示例 1：
输入: 4->2->1->3
输出: 1->2->3->4

示例 2：
输入: -1->5->3->4->0
输出: -1->0->3->4->5

分析:
1. 设置 prev 与 curr 节点, 分别对应 head 与 head.next
2. 比较二者, 如果 curr 大于或等于 prev 表示顺序正确, 不需要交换, 则对应更新 prev 与 curr 节点未知信息, 进入下一轮比对
3. 如果 curr 小于 prev 表示顺序不对, 需要更新节点信息, 把 prev.next 指向 curr.next, 摘除 curr 节点, 然后进入二层循环, 从 dummy 开始遍历, 找到第一个比 curr 大的元素, 把 curr 插入到这个元素前面
4. 继续第一轮循环，直到链表末尾
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

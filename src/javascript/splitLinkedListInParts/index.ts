/*
给定一个头结点为 root 的链表, 编写一个函数以将链表分隔为 k 个连续的部分。

每部分的长度应该尽可能的相等: 任意两部分的长度差距不能超过 1，也就是说可能有些部分为 null。

这k个部分应该按照在链表中出现的顺序进行输出，并且排在前面的部分的长度应该大于或等于后面的长度。

返回一个符合上述规则的链表的列表。

举例： 1->2->3->4, k = 5 // 5 结果 [ [1], [2], [3], [4], null ]

输入:
root = [1, 2, 3], k = 5
输出: [[1],[2],[3],[],[]]
解释:
输入输出各部分都应该是链表，而不是数组。
例如, 输入的结点 root 的 val= 1, root.next.val = 2, \root.next.next.val = 3, 且 root.next.next.next = null。
第一个输出 output[0] 是 output[0].val = 1, output[0].next = null。
最后一个元素 output[4] 为 null, 它代表了最后一个部分为空链表。

输入:
root = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 3
输出: [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]
解释:
输入被分成了几个连续的部分，并且每部分的长度相差不超过1.前面部分的长度大于等于后面部分的长度。

提示:
root 的长度范围： [0, 1000]
输入的每个节点的大小范围：[0, 999]
k 的取值范围： [1, 50]

分析:
1. 首先通过遍历得到链表长度
2. 通过长度与 k 得到分隔链表的长度, 需要注意的是当分隔断无法整除时需要计算出前多少个链表长度要加一, 这里使用取余的思路巧妙的获得这个值
3. 通过 fill 方法使用 null 初始化数组
4. 双循环遍历, 在循环中需要注意的是增加对链表移动指针的判断, 否则会导致 curr = curr.next 的赋值失败程序退出
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'
import arrayToLinkedList from '../util/arrayToLinkedList'

const main = (root: SinglyLinkedListNode, k: number): SinglyLinkedListNode[] => {
  let listLen = 0
  let curr = root

  while (curr) {
    listLen++
    curr = curr.next
  }

  const partListSize = listLen / k
  let mod = listLen % k // 长度是否能整除, 不能的情况需要在链表前半段加长, 而得到的余数就是需要加长链表的段数
  let pre = null // 中间变量记录链尾, 用来断链
  const ret = Array(k).fill(null) // 先填充后覆盖
  curr = root

  for (let i = 0; i < listLen && curr; i++) {
    let currListSize = partListSize
    ret[i] = curr

    if (mod > 0) {
      mod-- // 加长段链表个数递减
      currListSize++ // 当前分隔断链表真实长度
    }

    // 填充段链表
    for (let j = 0; j < currListSize && curr; j++) {
      pre = curr
      curr = curr.next
    }

    pre.next = null // 断链
  }

  return ret
}

const head1 = arrayToLinkedList([1, 2, 3, 4])
const head2 = arrayToLinkedList([1, 2, 3])
const head3 = arrayToLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

console.log('head1:', JSON.stringify(head1))
console.log('head1 ret:', JSON.stringify(main(head1, 5)))
console.log('head2:', JSON.stringify(head2))
console.log('head2 ret:', JSON.stringify(main(head2, 5)))
console.log('head3:', JSON.stringify(head3))
console.log('head3 ret:', JSON.stringify(main(head3, 3)))

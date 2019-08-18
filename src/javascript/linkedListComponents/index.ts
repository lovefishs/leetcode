/*
给定一个链表（链表结点包含一个整型值）的头结点 head。

同时给定列表 G，该列表是上述链表中整型值的一个子集。

返回列表 G 中组件的个数，这里对组件的定义为：链表中一段最长连续结点的值（该值必须在列表 G 中）构成的集合。

示例 1：
输入:
head: 0->1->2->3
G = [0, 1, 3]

输出: 2
解释: 链表中,0 和 1 是相连接的，且 G 中不包含 2，所以 [0, 1] 是 G 的一个组件，同理 [3] 也是一个组件，故返回 2。

示例 2：
输入:
head: 0->1->2->3->4
G = [0, 3, 1, 4]
输出: 2
解释: 链表中，0 和 1 是相连接的，3 和 4 是相连接的，所以 [0, 1] 和 [3, 4] 是两个组件，故返回 2。

注意:
如果 N 是给定链表 head 的长度，1 <= N <= 10000。
链表中每个结点的值所在范围为 [0, N - 1]。
1 <= G.length <= 10000
G 是链表中所有结点的值的一个子集.

分析:
1. 首先理解题意, 这里是指 G 中元素可以组成最长子链表的次数(重复元素无影响)
2. 保存 G 中的元素到 set(消除重复)
3. 遍历链表, 当节点值出现在 set 中时, 继续遍历链表的下一节点, 直到到末尾节点 null 或者节点元素不在 set 中, 此时子链次数加 1
4. 返回子链次数 ret
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'
import arrayToLinkedList from '../util/arrayToLinkedList'

const main = (head: SinglyLinkedListNode, G: number[]): number => {
  if (G.length === 0) {
    return 0
  }

  let ret = 0
  let valSet = new Set(G)
  let curr = head

  while (curr !== null) {
    if (valSet.has(curr.val)) {
      // 当前节点在 set 中, 移动到下一节点继续判断
      curr = curr.next

      // 如果到达链尾或者节点值不在 set 中, 则子链次数加 1
      if (curr === null || !valSet.has(curr.val)) {
        ret++
      }
    } else {
      curr = curr.next
    }
  }

  return ret
}

const head1 = arrayToLinkedList([0, 1, 2, 3])
const g1 = [0, 1, 3]
const head2 = arrayToLinkedList([0, 1, 2, 3, 4])
const g2 = [0, 3, 1, 4]

console.log('head1 before:', JSON.stringify(head1), JSON.stringify(g1))
console.log('head1 after:', JSON.stringify(main(head1, g1)))
console.log('head2 before:', JSON.stringify(head2), JSON.stringify(g2))
console.log('head2 after:', JSON.stringify(main(head2, g2)))

/*
解题思路:
1. 使用 Map 可以存储 对象 作为键值的特性来检查 map 对象中是否存在已有的值, 如果有则存在的对象 key 即为入环节点
注意: 使用 WeakMap 的用意在于使用 WeakMap 只能使用 对象 作为键名, 且键名所指向的对象不计入垃圾回收机制, 防止出现循环引用(http://es6.ruanyifeng.com/#docs/set-map)
扩展: 同理可以使用 Set 与 WeakSet 来作为存储对象
*/

import SinglyLinkedListNode from '../struct/SinglyLinkedListNode'

const useMap = (head: SinglyLinkedListNode): null | SinglyLinkedListNode => {
  const wm = new WeakMap()
  let temp = head
  let ret = null

  if (head === null || head.next === null) {
    return ret
  }

  while (temp !== null) {
    if (wm.has(temp)) {
      ret = temp
      break
    }

    wm.set(temp, true)
    temp = temp.next
  }

  return ret
}

export default useMap

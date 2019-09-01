/*
https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/
给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
找到所有在 [1, n] 范围之间没有出现在数组中的数字。
您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

示例:
输入:
[4,3,2,7,8,2,3,1]
输出:
[5,6]

分析:
1. 先理解题意, 以示例为例, 数组长度为 8, 则需要在数组中寻找值不在 1-8 范围内的数值(未出现的数值)
2. 利用 Set 求差集的思路解题
3. 把传入的数组初始化为 set, 根据 n 生成一个 1-n 的数组, 遍历此数组, 借助 set 的 has 方法判断是否出现过相关值, 未出现过则保存
*/

const findDisappearedNumbers = (nums: number[]): number[] => {
  const len = nums.length

  if (len === 0) {
    return nums
  }

  const set = new Set(nums)

  return [...Array(len).keys()].map((item) => item + 1).filter((item) => !set.has(item))
}

const list: number[] = [4, 3, 2, 7, 8, 2, 3, 1]

console.log('list result:', findDisappearedNumbers(list))

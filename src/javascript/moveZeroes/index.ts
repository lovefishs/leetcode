/*
https://leetcode-cn.com/problems/move-zeroes/

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]

说明:
必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

分析:
1. 如果可以创建而外的数组, 那么很简单, 过滤所有数值为 0 的子项组成一个新数组, 然后拼接数组则可
2. 不拷贝数组的方法, 想到使用 遇 0 删除末尾加 0 的方式
*/

const moveZeroes = (nums: number[]): number[] => {
  const len = nums.length

  if (len === 0) {
    return nums
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
    }
  }

  return nums
}

console.log('[0, 1, 0, 3, 12] result:', moveZeroes([0, 1, 0, 3, 12]))

/*
https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/
给定一个整数数组 A，只有我们可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。

形式上，如果我们可以找出索引 i+1 < j 且满足 (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1]) 就可以将数组三等分。

示例 1：
输出：[0,2,1,-6,6,-7,9,1,2,0,1]
输出：true
解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1

示例 2：
输入：[0,2,1,-6,6,7,9,-1,2,0,1]
输出：false

示例 3：
输入：[3,3,6,5,-2,2,5,1,-9,4]
输出：true
解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4

分析:
1. 计算总和 sum, 判断是否能被 3 整除, 不能则返回 false, 能则计算平均数 average
2. 遍历数组, 子项相加, 统计子项相加的和等于平均数 average 的次数 count
3. count 等于 3 则返回 true, 否则为 false
*/

const canThreePartsEqualSum = (list: number[]): boolean => {
  const PARTITION_NUM = 3 // 分割长度

  if (list.length < PARTITION_NUM) {
    return false
  }

  const sum = list.reduce((a, b) => a + b, 0)

  if (sum % PARTITION_NUM !== 0) {
    return false
  }

  const average = sum / PARTITION_NUM
  let count = 0
  let tempSum = 0

  for (const item of list) {
    tempSum += item

    if (tempSum === average) {
      count++
      tempSum = 0
    }
  }

  return count === PARTITION_NUM
}

const list1 = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]
const list2 = [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]
const list3 = [3, 3, 6, 5, -2, 2, 5, 1, -9, 4]

console.log('list1 result:', canThreePartsEqualSum(list1))
console.log('list2 result:', canThreePartsEqualSum(list2))
console.log('list3 result:', canThreePartsEqualSum(list3))

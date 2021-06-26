/*  动态规划+滚动数组
    https://leetcode-cn.com/problems/house-robber/solution/da-jia-jie-she-by-leetcode-solution/
    1.偷窃第 kk 间房屋，那么就不能偷窃第 k-1k−1 间房屋，偷窃总金额为前 k-2k−2 间房屋的最高总金额与第 kk 间房屋的金额之和.
    2.不偷窃第 kk 间房屋，偷窃总金额为前 k-1k−1 间房屋的最高总金额。

*/

// var rob = function(nums) {   //不知道问题在哪里
//   let len = nums.length
//   let total1 = 0, total2 = 0
//   for(let i = 0; i < len; i++) {
//     if(i & 1 == 0) {
//       total1 += nums[i]
//     } else{
//       total2 += nums[i]
//     }
//   }
//   return Math.max(total1,total2)
// };

var rob = function(nums) {
  if(nums == null || nums.length == 0) return 0
  let len = nums.length
  if(len == 1) return nums[0]
  let dp = new Array(len);    //数组储存
  dp[0] = nums[0], 
  dp[1] = Math.max(nums[0], nums[1]);
  for(let i = 2; i < len; i++){
    dp[i] = Math.max(dp[i-2]+nums[i], dp[i-1])
  }
  return dp[len-1]
}

var rob = function(nums) {
  if(nums == null || nums.length == 0) return 0
  let len = nums.length
  if(len == 1) return nums[0]
  let first = nums[0], 
      second = Math.max(nums[0], nums[1]);
  for(let i = 2; i < len; i++){
    let temp = second   //滚动储存
    second = Math.max(first+nums[i], second)
    first = temp
  }
  return second
}
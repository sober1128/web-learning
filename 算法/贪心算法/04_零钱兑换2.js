// 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。   https://leetcode-cn.com/problems/coin-change-2/

// 超棒解析：https://leetcode-cn.com/problems/coin-change-2/solution/ling-qian-dui-huan-iihe-pa-lou-ti-wen-ti-dao-di-yo/

var change = function(amount, coins) {
  let dp = new Array(amount+1).fill(0)
  dp[0] = 1
  for(let coin of coins) {    // 注意排列和组合问题！
    for(let i = 0; i <= amount; i++) {
      if(i - coin >= 0) {
        dp[i] += dp[i - coin]
      }
    }
  }
  return dp[amount]
};
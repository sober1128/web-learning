/*
518.给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。
请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。
假设每一种面额的硬币有无限个。 

*/

// 通过动态规划的方法计算可能的组合数。用dp[x] 表示金额之和等于 x 的硬币组合数，目标是求dp[amount]。dp[0]=1。只有当不选取任何硬币时，金额之和才为 0，因此只有 1 种硬币组合。
var change = function(amount, coins) {
  let dp = new Array(amount+1).fill(0);
  dp[0] = 1;
  for(const coin of coins) {
    for(let i = coin; i <= amount; i++) {
      dp[i] += dp[i-coin];
    }
  }
  return dp[amount];
}
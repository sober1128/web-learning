// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
// 你可以认为每种硬币的数量是无限的。

var coinChange = function(coins, amount) {
  //最多的硬币情况是全部是1元，共有amount个硬币，共有amount+1个状态，amount+1个金额,必须将所有的dp赋最大值，因为要找最小值
  let dp = new Array(amount+1).fill(amount+1);
  dp[0] = 0;//自底向上，金额为0，最小硬币数为0
  for(let i = 1; i <= amount; i++) {
    for(let coin of coins) {
      if(i >= coin) {
        dp[i] = Math.min(dp[i], dp[i-coin] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
}
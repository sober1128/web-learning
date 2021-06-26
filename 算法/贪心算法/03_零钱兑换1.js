/*给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
你可以认为每种硬币的数量是无限的。-----332题

链接：https://leetcode-cn.com/problems/coin-change  */


var coinChange = function(coins, amount) {
  let dp = new Array(amount+1).fill(Infinity);
  dp[0] = 0
  for(let i = 1; i <= amount; i++) {
    for(let coin of coins) {
      if(i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i-coin] + 1)
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}

/*用dp[i] 来表示组成i块钱，需要最少的硬币数，那么
    第j个硬币我可以选择不拿 这个时候， 硬币数 = dp[i]
    第j个硬币我可以选择拿 这个时候， 硬币数 = dp[i - coins[j]] + 1
    
    和背包问题不同， 硬币是可以拿任意个
    对于每一个 dp[i] 我们都选择遍历一遍 coin， 不断更新 dp[i]

作者：fe-lucifer
链接：https://leetcode-cn.com/problems/coin-change/solution/322-ling-qian-dui-huan-you-hua-dong-tai-gui-hua-c-/
*/

// 用dp[i] 来表示组成i块钱，需要最少的硬币数，那么
// 第j个硬币我可以选择不拿 这个时候， 硬币数 = dp[i]
// 第j个硬币我可以选择拿 这个时候， 硬币数 = dp[i - coins[j]] + 1
// 和背包问题不同， 硬币是可以拿任意个
// 对于每一个 dp[i] 我们都选择遍历一遍 coin， 不断更新 dp[i]

var coinChange = function(coins, amount) {
  if(amount === 0) return 0
  const dp = new Array(amount+1).fill(Number.MAX_VALUE)
  dp[0] = 0
  for(let i = 1; i <= amount; i++) {
    for(let j = 0; j < coins.length; j++) {
      if(i - coins[j] > 0) {
        dp[i] = Math.min(dp[i], dp[i-coins[j]]+1)
      }
    }
  }
  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount]
}


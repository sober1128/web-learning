/*  122题
笨猪： https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/solution/shou-hua-tu-jie-xiang-jie-duo-chong-jie-fa-mai-mai/
*/

// 动态规划    时间复杂度：O(n2)  空间复杂度：O(n2)
var maxProfit = function(prices) {
  const n = prices.length
  let dp = new Array(n).fill(0).map(v => new Array(2).fill(0))
  dp[0][0] = 0, dp[0][1] = -prices[0]
  for(let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i])
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i])
  }
  return dp[n-1][0]
}

/* 每一天的状态只与前一天的状态有关，不必存储无关的状态，只需将 dp[i-1][0]，dp[i-1][1] 存放在两个变量中，通过它们计算出 dp[i][0]，dp[i][1] 并存回对应的变量，以便于第 i+1天的状态转移即可。

时间复杂度：O(n)，其中 n 为数组的长度。一共有 2n 个状态，每次状态转移的时间复杂度为O(1)，因此时间复杂度为 O(2n)=O(n)。

空间复杂度：O(n)。我们需要开辟 O(n) 空间存储动态规划中的所有状态。如果使用空间优化，空间复杂度可以优化至 O(1)。
*/

var maxProfit = function(prices) {
  const n = prices.length
  let dp0 = 0, dp1 = -prices[0]
  for(let i = 1; i < n; i++) {
    let newDp0 = Math.max(dp0, dp1 + prices[i])
        newDp1 = Math.max(dp1, dp0 - prices[i])
    dp0 = newDp0
    dp1 = newDp1
  }
  return dp0;
}


//贪婪算法 ------ 时间复杂度：O(n)，其中 n 为数组的长度。我们只需要遍历一次数组即可。-----空间复杂度：O(1)。只需要常数空间存放若干变量。
var maxProfit = function(prices) {
  let res = 0, n = prices.length;
  for(let i = 1; i < n; i++) {
    res += Math.max(0, prices[i] - prices[i-1])
  }
  return res;
}

var maxProfit = function(prices) {
  let buy = Number.MIN_SAFE_INTEGER, sell = 0;
  // 因为需要多次买卖，所以每天都要尝试是否能获得更多利润
  for(let i = 0; i < prices.length; i++) {
    let buynow = Math.max(buy, sell - prices[i]);
    let sellnow = Math.max(sell, buy + prices[i]);
    buy = buynow;
    sell = sellnow;
  }
  return sell;
}
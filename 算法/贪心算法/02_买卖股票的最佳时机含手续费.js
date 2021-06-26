var maxProfit = function(prices, fee) {
  let n = prices.length
  let dp = new Array(n)
  for(let i = 0; i < n; i++) {
    dp[i] = new Array(2).fill(0)
  }
  dp[0][1] = -prices[0]
  for(let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i] -fee)
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i])
  }
  return dp[n-1][0]
};

var maxProfit = function(prices, fee) {
  let n = prices.length
  let dp0 = 0, dp1 = -prices[0]
  for(let i = 1; i < n; i++) {
    let newDp0 = Math.max(dp0, dp1 + prices[i] - fee)
        newDp1 = Math.max(dp1, dp0 - prices[i])
    dp0 = newDp0
    dp1 = newDp1
  }
  return dp0
}

// 贪心算法
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solution/mai-mai-gu-piao-de-zui-jia-shi-ji-han-sh-rzlz/
var maxProfit = function(prices, fee) {
  let n = prices.length
  let buy = prices[0] + fee, profit = 0
  for(let i = 0; i < n; i++) {
    if(prices[i] + fee < buy) {
      buy = prices[i] + fee
    } else if (prices[i] > buy) {
      profit = prices[i] - buy
      buy = prices[i]
    }
  }
  return profit
}
// [4,1,3,2,6,8,4,9]
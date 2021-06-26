/*
给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

链接：121题   https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock

*/
// 暴力法----时间复杂度：O(n^2)---空间复杂度：O(1)只使用了常数个变量。

var maxProfit = function(prices) {
  let maxProfit = 0
  for(let i = 0; i < prices.length; i++) {
    for(let j = i; j < prices.length; j++) {
      let profit = prices[j] - prices[i]
      if(profit > maxProfit) {
        maxProfit = profit
      }
    }
  }
  return maxProfit
};

/*  DP  Time: O(n) + Space: O(n)
    dp[i] 前i天卖出的最大利润
    min : prices 前i项中的最小值
    prices[i] - min: 当前位置卖出可得最大利润
    dp[i - 1] : 前i-1项目卖出可得的最大利润
    [7, 1, 5, 3, 6, 4] => dp[i] = Math.max( dp[i - 1], prices[i] - min )
*/
var maxProfit = function(prices) {
  if(!prices || !prices.length) return 0;
  const len = prices.length
  const dp = new Array(len).fill(0)
  let min = prices[0]
  for(let i = 1; i < len; i++) {
    min = Math.min(min, prices[i])
    dp[i] = Math.max(dp[i-1], prices[i] - min)
  }
  return dp[len-1]
}

 /* 
  思路三 DP + 常量级变量 min max Time - O(n) + Space - O(1)
  精简 我们只关心 max 与 min 故不需要再构建dp 数组
*/

var maxProfit = function(prices) {
  if(!prices || !prices.length) return 0;
  let min = Number.MAX_SAFE_INTEGER, max = 0;     //min = Infinity
  for(let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    max = Math.max(max, prices[i] - min)
  }
  return max
}

var maxProfit = function(prices) {
  if(!prices || !prices.length) return 0;
  let buy = Number.MIN_SAFE_INTEGER, sell = 0; 
  for(let i = 0; i < prices.length; i++) {
    buy = Math.max(buy, -prices[i])
    sell = Math.max(sell, buy + prices[i])
  }
  return max
}
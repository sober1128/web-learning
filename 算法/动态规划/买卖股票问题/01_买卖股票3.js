/*  123题
    最多两笔交易
    https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/solution/mai-mai-gu-piao-de-zui-jia-shi-ji-iii-by-wrnt/
    
*/

/*  一天结束时，可能有持股、可能未持股、可能卖出过1次、可能卖出过2次、也可能未卖出过
所以定义状态转移数组dp[天数][当前是否持股][卖出的次数]
https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/solution/tong-su-yi-dong-de-dong-tai-gui-hua-jie-fa-by-marc/
*/

// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/solution/123-mai-mai-gu-piao-de-zui-jia-shi-ji-ii-zfh9/
// 时间复杂度：O(n)   空间复杂度：O(n * 5)
var maxProfit = function(prices) {
  let n = prices.length;
  const dp = new Array(n).fill(0).map(v => new Array(5).fill(0));
  dp[0][1] = -prices[0], dp[0][3] = -prices[0];
  for(let i = 1; i < n; i++) {
    dp[i][0] = dp[i-1][0];
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
    dp[i][2] = Math.max(dp[i-1][2], dp[i-1][1] + prices[i]);
    dp[i][3] = Math.max(dp[i-1][3], dp[i-1][2] - prices[i]);
    dp[i][4] = Math.max(dp[i-1][4], dp[i-1][3] + prices[i]);
  }
  return dp[n-1][4];
}

var maxProfit = function(prices) {
  const dp = new Array(4).fill(0);
  dp[0] = dp[2] = -prices[0];  
  // dp[0]进行一次买   dp[1]进行一次买卖  dp[2]进行第二次买   dp[3]完成两笔交易
  for(let i = 1; i < prices.length; i++) {
    dp[0] = Math.max(dp[0], -prices[i]);
    dp[1] = Math.max(dp[1], dp[0] + prices[i]);
    dp[2] = Math.max(dp[2], dp[1] - prices[i]);
    dp[3] = Math.max(dp[3], dp[2] + prices[i]);
  }
  return dp[3];
}

// 动态规划  时间复杂度：O(n)，其中 n 是数组 prices 的长度。空间复杂度：O(1)
var maxProfit = function(prices) {
 let n = prices.length;
 let buy1 = -prices[0], sell1 = 0, buy2 = -prices[0], sell2 = 0;
 for(let i = 1; i < n; i++) {
   buy1 = Math.max(buy1, -prices[i]);
   sell1 = Math.max(sell1, buy1 + prices[i]);
   buy2 = Math.max(buy2, sell1 - prices[i]);
   sell2 = Math.max(sell2, buy2 + prices[i]);
 }
 return sell2;
}


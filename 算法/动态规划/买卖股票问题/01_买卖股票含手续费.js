var maxProfit = function(prices, fee) {
  const n = prices.length;
  const dp = new Array(n).fill(0).map(v => new Array(2).fill(0));
  dp[0][0] = 0, dp[0][1] = -prices[0];
  for(let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i] - fee);
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
  }
  return dp[n-1][0];
}

// dp[i][0] 和 dp[i][1] 只会从 dp[i-1][0] 和 dp[i−1][1] 转移而来，因此我们不必使用数组存储所有的状态，而是使用两个变量sell 以及 buy 分别表示 dp[..][0] 和 dp[..][1] 直接进行状态转移即可。
var maxProfit = function(prices, fee) {
  const n = prices.length;
  let buy = -prices[0], sell = 0;
  for(let i = 1; i < n; i++) {
    sell = Math.max(sell, buy + prices[i] - fee);   // 卖出时进行计算；
    buy = Math.max(buy, sell - prices[i]);
  }
  return sell;
}


//  贪心算法  将手续费在买入时进行计算
// buy 表示在最大化收益的前提下，如果我们手上拥有一支股票，那么它的最低买入价格是多少
// 当我们卖出一支股票时，我们就立即获得了以相同价格并且免除手续费买入一支股票的权利。
var maxProfit = function(prices, fee) {
  const n = prices.length;
  let buy = prices[0] + fee;
  let profit = 0;
  for(let i = 1; i < n ; i++) {
    if(prices[i] + fee < buy) {
      buy = prices[i] + fee;
    } else if(prices[i] > buy){
      profit += prices[i] - buy;
      buy = prices[i];
    }
  }
  return profit;
}

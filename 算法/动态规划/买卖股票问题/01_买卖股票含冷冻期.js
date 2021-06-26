var maxProfit = function(prices) {
  if(prices.length == 0) return 0;
  let n = prices.length;
  let dp = new Array(n).fill(0).map(v => new Array(3).fill(0));
  dp[0][0] = -prices[0];
  for(let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][2] - prices[i]);    // 持有股票的状态
    dp[i][1] = dp[i-1][0] + prices[i];      // 不持有股票，处于冷冻期  第i-1天一定持有，并且卖掉了
    dp[i][2] = Math.max(dp[i-1][2], dp[i-1][1]);  // 不持有股票，不处于冷冻期
  }
  return Math.max(dp[n-1][1], dp[n-1][2]);
};

// dp[i] 只与 dp[i-1]有关。将数据储存起来
var maxProfit = function(prices) {
  if(prices.length == 0) return 0;
  let n = prices.length;
  let dp0 = -prices[0],
      dp1 = 0, dp2 = 0;
  for(let i = 1; i < n; i++) {
    let newDp0 = Math.max(dp0, dp2 - prices[i]),
        newDp1 = dp0 + prices[i];
        newDp2 = Math.max(dp2, dp1);
    dp0 = newDp0;
    dp1 = newDp1;
    dp2 = newDp2;
  }
  return Math.max(dp1, dp2);
}
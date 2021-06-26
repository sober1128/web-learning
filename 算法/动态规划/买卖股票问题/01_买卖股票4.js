/*  188题
    最多k笔交易
    https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/solution/javayi-ge-si-lu-da-bao-suo-you-gu-piao-t-pd1p/

    https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/solution/mai-mai-gu-piao-zui-jia-shi-ji-6dao-ti-jie-by-xi-2/
*/

var maxProfit = function(prices) {
  if(!prices.length) return 0;
  const n = prices.length;
  k = Math.min(k, (n/2)|0);
  const buy = new Array(n).fill(0).map(() => new Array(k+1).fill(0));
  const sell = new Array(n).fill(0).map(() => new Array(k+1).fill(0));

  buy[0][0] = -prices[0];
  sell[0][0] = 0;
  for(let i = 1; i <= k; i++) {
    buy[0][i] = sell[0][i] = -Number.MAX_VALUE;   //设置为非常小的值，表示不合法的状态
  }

  for(let i = 1; i < n; i++) {
    buy[i][0] = Math.max(buy[i-1][0], sell[i-1][0] - prices[i]);
    for(let j = 1; j <= k; j++) {
      buy[i][j] = Math.max(buy[i-1][j], sell[i-1][j] - prices[i]);
      sell[i][j] = Math.max(sell[i-1][j], buy[i-1][j-1] + prices[i]);
    }
  }
  return Math.max(...sell[n-1]);
}

// 时间复杂度：O(nmin(n,k))，其中 nn 是数组prices 的大小，即我们使用二重循环进行动态规划需要的时间。

// 空间复杂度：O(nmin(n,k)) 或 O(min(n,k))，取决于我们使用二维数组还是一维数组进行动态规划。

var maxProfit = function(prices) {
  if(!prices.length) return 0;
  const n = prices.length;
  k = Math.min(k, Math.floor(n/2));
  const buy = new Array(k+1).fill(0);
  const sell = new Array(k+1).fill(0);

  buy[0] = -prices[0];
  sell[0] = 0;
  for(let i = 1; i <= k; i++) {
    buy[i] = sell[i] = -Number.MAX_VALUE;
  }

  for(let i = 1; i < n; i++) {
    buy[0] = Math.max(buy[0], sell[0] - prices[i]);
    for(let j = 1; j <= k; j++) {
      buy[j] = Math.max(buy[j], sell[j] - prices[i]);
      sell[j] = Math.max(sell[j], buy[j-1] + prices[i]);
    }
  }
  return Math.max(...sell);
}


var maxProfit = function(k, prices) {
  if(k < 1){
      return 0;
  }
  let len = prices.length;
  let buy = new Array(k).fill(-prices[0]);
  let sell = new Array(k).fill(0);
  for(let i = 1; i < len; i++){
      for(let j = 0; j < k; j++){
          if(j === 0){
              buy[j] = Math.max(buy[j], -prices[i]);
              sell[j] = Math.max(sell[j], buy[j] + prices[i]);
          }
          else{
              buy[j] = Math.max(buy[j], sell[j - 1] - prices[i]);
              sell[j] = Math.max(sell[j], buy[j] + prices[i]);
          }
      }
  }
  return sell[k - 1];
};

var maxProfit = function(k, prices) {
    const n = prices.length;
    let buy = new Array(k + 1).fill(-prices[0]);
    let sell = new Array(k + 1).fill(0);
    for(let i = 1; i < n; i++){
        buy[1] = Math.max(buy[1], -prices[i]);
        sell[1] = Math.max(sell[1], buy[1] + prices[i]);
        for(let j = 2; j <= k; j++){
            buy[j] = Math.max(buy[j], sell[j - 1] - prices[i]);
            sell[j] = Math.max(sell[j], buy[j] + prices[i]);
        }
    }
    return sell[k];
};
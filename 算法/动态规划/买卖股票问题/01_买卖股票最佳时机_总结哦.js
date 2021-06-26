// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/solution/mai-mai-gu-piao-zui-jia-shi-ji-6dao-ti-jie-by-xi-5/
// 核心代码
for(let i = 1; i < n; i++) {
  // 买入时利润： 求最大值(上次买入时的利润， 本次买入时的利润)
  profit_in = Math.max(profit_in,  - prices[i]);
  // buy = Math.max(buy, -prices[i]);

  // 卖出时利润： 求最大值(上次交易卖出时利润， 本次交易卖出时利润)
  profit_out = Math.max(profit_out, profit_in + prices[i]);
  // sell = Math.max(sell, buy + prices[i]);
}

// 买卖股票的最佳时机 I ---------一次交易
var maxProfit = function(prices) {
  const n = prices.length;
  let buy = -prices[0], sell = 0;
  for(let i = 1; i < n; i++) {
    //k=1时，及交易次数为1时， 买入时的利润都是 -prices[i]
    buy = Math.max(buy, -prices[i]);
    sell = Math.max(sell, buy + prices[i]);
  }
  return sell;
}

// 买卖股票的最佳时机 II  ---------多次交易
var maxProfit = function(prices) {
  const n = prices.length;
  let buy = -prices[0], sell = 0;
  for(let i = 1; i < n; i++) {
    buy = Math.max(buy, sell - prices[i]);
    sell = Math.max(sell, buy + prices[i]);
  }
  return sell;
}

// 买卖股票的最佳时机 III  ---------至多两次交易
var maxProfit = function(prices) {
  const n = prices.length;
  let buy1 = -prices[0], sell1 = 0,
      buy2 = -prices[0], sell2 = 0;
  for(let i = 1; i < n; i++) {
    buy1 = Math.max(buy1, -prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);
    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }
  return sell2;
}

// 买卖股票的最佳时机 IV    ---------k笔交易
var maxProfit = function(k, prices) {
  let n = prices.length;
  k = Math.min(k, Math.floor(n/2));

}

// 最佳买卖股票时机含冷冻期
var maxProfit = function(prices) {
  let n = prices.length;
  let buy = -prices[0], sell = 0;
  let freeze = 0;   // 冻结时的利润
  for(let i = 1; i < n; i++) {
    let temp = sell;
    //买入时的利润= 上次冻结时的利润 - 当天价格
    buy = Math.max(buy, freeze - prices[i]);
    sell = Math.max(sell, buy + prices[i]);
    //冻结时的利润 = 上次卖出时的利润
    freeze = temp;
  }
}
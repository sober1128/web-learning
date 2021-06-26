// https://leetcode-cn.com/problems/nge-tou-zi-de-dian-shu-lcof/solution/java-dong-tai-gui-hua-by-zhi-xiong/

var dicesProbability = function(n) {
  let dp = [1/6, 1/6, 1/6, 1/6, 1/6, 1/6];
  for(let i = 2; i <= n; i++) {   //骰子的个数
    const temp = []
    for(let j = 1; j <= 6; j++) {   //骰子的点数
      for(let k = 0; k < dp.length; k++) {
        const sum = k + j - 1   //下标索引
        temp[sum] = (temp[sum] || 0) + dp[k] * 1/6;
        // 这里(temp[sum] || 0)  存在取 temp[sum] 不存在取0
      }
    }
    dp = temp
  }
  return dp
};

// 1049  https://leetcode-cn.com/problems/last-stone-weight-ii/solution/zui-hou-yi-kuai-shi-tou-de-zhong-liang-i-95p9/

var lastStoneWeightII = function(stones) {
  let sum = 0;
  for(const stone of stones) {
    sum += stone;
  }
  const n = stones.length, m = Math.floor(sum/2);
  const dp = new Array(n+1).fill(0).map(v => new Array(m+1).fill(false));
  dp[0][0] = true;
  for(let i = 0; i < n; i++) {
    for(let j = 0; j <= m; j++) {
      if(j < stones[i]) {
        dp[i+1][j] = dp[i][j];
      } else {
        dp[i+1][j] = dp[i][j] || dp[i][j-stones[i]];
      }
    }
  }
  for(let j = m; j > 0; j--) {
    if(dp[n][j]) {
      return sum - j*2;
    }
  }
}

var lastStoneWeightII = function(stones) {
  let sum = 0, n = stones.length;
  for(const stone of stones) {
    sum += stone;
  }
  let neg = Math.floor(sum/2);
  let dp = new Array(neg+1).fill(0);
  dp[0] = 1;
  for(let stone of stones) {
    for(let j = neg; j >= stone; j--) {
        dp[j] = dp[j] + dp[j-stone];    
    }
  }
  // console.log(dp);
  for(let j = neg; j >= 0; j--) {
    if(dp[j]) {
      // console.log(j)
      return sum - j*2;
    }
  }
};

var lastStoneWeightII = function(stones) {
  const sum = stones.reduce((a,b) => a+b, 0);
  const n = stones.length;
  const neg = Math.floor(sum/2);
  const dp = new Array(neg+1).fill(0);
  for(let stone of stones) {
    for(let j = neg; j >= stone; j--) {
      dp[j] = Math.max(dp[j], dp[j-stone] + stone);
    }
  }
  return sum - dp[neg]*2;
}
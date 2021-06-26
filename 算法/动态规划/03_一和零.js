//  474  给你一个二进制字符串数组 strs 和两个整数 m 和 n 。
// 请你找出并返回 strs 的最大子集的大小，该子集中 最多 有 m 个 0 和 n 个 1 。
// 如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。

/*
  物品：数组元素
  体积：数组元素的长度
  价值：二维费用，消耗的0的个数，1的个数
*/
var findMaxForm = function(strs, m, n) {
  const len = strs.length;
  const dp = new Array(len+1).fill(0).map(() => new Array(m+1).fill(0).map(() => new Array(n+1).fill(0)));
  const getZoresOnes = (str) => {
    let ones = 0;
    for(let ch of str) {
      if(ch === '1') ones++;
    }
    return [str.length - ones, ones];
  }
  for(let i = 1; i <= len; i++) {
    const zerosOnes = getZoresOnes(strs[i-1]);
    let s0 = zerosOnes[0], s1 = zerosOnes[1];
    for(let j = 0; j <= m; j++) {
      for(let k = 0; k <= n; k++) {
        dp[i][j][k] = dp[i-1][j][k];
        if(j >= s0 && k >= s1) {    
          dp[i][j][k] = Math.max(dp[i][j][k], dp[i-1][j-s0][k-s1]+1);
        }
      }
    }
  }
  return dp[len][m][n];
}


var findMaxForm = function(strs, m, n) {
  const map = {};
  for(let str of strs) {    // 预处理每个物品的费用
    let ones = 0;
    for(let ch of str) {
      if(ch === '1') ones++;
    }
    map[str] = [str.length - ones, ones];    // 储存每个元素 0和1 的数量
  }

  const N = strs.length;  // 数组元素个数
  // const dp = new Array(m+1);
  // for(let i = 0; i < m+1; i++) {
  //   dp[i] = new Array(n+1).fill(0);
  // }
  const dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0));
  for(let i = 0; i < N; i++) {
    const [v0, v1] = map[strs[i]];
    for(let j = m; j >= v0; j--) {    // 0的个数
      for(let k = n; k >= v1; k--) {   // 1的个数
        dp[j][k] = Math.max(dp[j][k], dp[j-v0][k-v1] + 1);
      }
    }
  }
  return dp[m][n];
}
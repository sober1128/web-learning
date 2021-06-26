/*
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
  // let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  // for(let i = 0; i < m; i++) {
  //   dp[i][0] = 1
  // }
  // for(let j = 0; j < n; j++) {
  //   dp[0][j] = 1
  // }

  let dp = new Array(m).fill(1).map(() => new Array(n).fill(1));  // 直接填充1
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }

  return dp[m-1][n-1]
};


var uniquePaths = function(m, n) {
  let pre = new Array(n).fill(1);
  let cur = new Array(n).fill(1);
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      cur[j] = cur[j-1] + pre[j];
    }
    pre = cur;    // 用pre来储存上一行的值
  }
  return pre[n-1];
};

var uniquePaths = function(m, n) {
  let cur = new Array(n).fill(1);
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      cur[j] = cur[j-1] + cur[j];
    }
  }
  return cur[n-1];
};
/*
方法一：动态规划 解析看连接

链接：https://leetcode-cn.com/problems/minimum-path-sum/solution/zui-xiao-lu-jing-he-by-leetcode-solution/

*/

var minPathSum = function(grid) {
  if(grid == null || grid.length == 0 || grid[0].length) {
    return 0
  }
  let m = grid.length, n = grid[0].length;
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  dp[0][0] = grid[0][0];
  for(let i = 1; i < m; i++) {
    dp[i][0] = dp[i-1][0] + grid[i][0];
  }
  for(let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j-1] + grid[0][j];
  }
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
    }
  }
  console.log(dp);
  return dp[m-1][n-1];
};
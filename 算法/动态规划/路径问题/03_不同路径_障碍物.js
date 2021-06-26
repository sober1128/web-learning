/*
https://leetcode-cn.com/problems/unique-paths-ii/solution/shou-hua-tu-jie-dp-si-lu-by-hyj8/
*/

var uniquePathsWithObstacles = function(obstacleGrid) {
  if(obstacleGrid[0][0] == 1) return 0;   //出发点就是障碍物被堵住
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  let dp = new Array(m)
  for(let i = 0; i < m; i++) {
    dp[i] = new Array(n)
  }
  dp[0][0] = 1  //出发点就是终点
  for(let i = 1; i < m; i++) {    //第一列其余的case
    dp[i][0] = obstacleGrid[i][0] == 1 || dp[i-1][0] == 0 ? 0 : 1
  }
  for(let j = 1; j < n; j++) {
    dp[0][j] = obstacleGrid[0][j] == 1 || dp[0][j-1] == 0 ? 0 : 1
  }

  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      dp[i][j] = obstacleGrid[i][j] == 1 ? 0 : dp[i-1][j] + dp[i][j-1]
    }
  }
  return dp[m-1][n-1]
};

var uniquePathsWithObstacles = function(obstacleGrid) {
  var n = obstacleGrid.length;
  var m = obstacleGrid[0].length;
  var result = new Array(m).fill(0);
  for(var i = 0;i < n;i++){
    for(var j = 0;j < m;j++){
      if(i == 0 && j == 0) {
        result[j] = 1;
      }
      if(obstacleGrid[i][j] == 1) {
        result[j] = 0;
      } else if( j > 0) {
        result[j] += result[j-1];
      }
    }
  }
  return result[m-1];
};
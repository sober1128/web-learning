var islandPerimeter = function(grid) {
  let m = grid.length, n = grid[0].length;
  const dfs = (i, j) => {
    if(i < 0 || i > m || j < 0 || j > n) {
      return 1;   //边界情况
    }
    if(grid[i][j] == 0) {
      return 1;
    }
    if(grid[i][j] == 2) {
      return 0;     // 已经访问过了
    }
    grid[i][j] = 2;   // 标记已访问；
    return dfs(i-1, j) + dfs(i+1, j) + dfs(i, j-1) + dfs(i, j+1);
  }

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j] == 1) {
        dfs(i, j);
      }
    }
  }
  return 0;
}
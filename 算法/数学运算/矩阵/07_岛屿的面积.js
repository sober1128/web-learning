var maxAreaOfIsland = function(grid) {
  let row = grid.length, col = grid[0].length;
  const dfs = (r, c) => {
    if(r < 0 || r >= row || c < 0 || c >= col) return 0;    // 注意边界条件！
    if(grid[r][c] != 1) return 0;
    grid[r][c] = 2;     // 标记已访问
    return 1 + dfs(r-1, c) + dfs(r+1, c) + dfs(r, c-1) + dfs(r, c+1);
  }

  let max = 0; 
  for(let i = 0; i < row; i++) {
    for(let j = 0; j < col; j++) {
      if(grid[i][j] == 1) {
        let area = dfs(i, j);
        max = Math.max(max, area);
      }
    }
  }
  return max;
}
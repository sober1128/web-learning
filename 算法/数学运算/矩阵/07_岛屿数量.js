// https://leetcode-cn.com/problems/number-of-islands/solution/dao-yu-lei-wen-ti-de-tong-yong-jie-fa-dfs-bian-li-/

// 0 —— 海洋格子
// 1 —— 陆地格子（未遍历过）
// 2 —— 陆地格子（已遍历过）

// 网格 DFS 遍历的框架代码：
const dfs = (grid, r, c) => {
  if(r < 0 || r > grid.length || c < 0 || c > grid[0].length) {
    return;  // 超出网格范围 判断 base case
  }

  if(grid[r][c] != 1) {
    return;   // 如果这个格子不是岛屿，直接返回
  }

  grid[r][c] = 2;   // 将格子标记为「已遍历过」

  dfs(grid, r-1, c);
  dfs(grid, r+1, c);
  dfs(grid, r, c-1);
  dfs(grid, r, c+1);
}
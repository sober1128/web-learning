// https://leetcode-cn.com/problems/island-perimeter/solution/shou-hua-tu-jie-463-dao-yu-de-zhou-chang-by-xiao_b/

// 总周长 = 4 * 土地个数 - 2 * 接壤边的条数。
const islandPerimeter = (grid) => {
  let land = 0, border = 0;
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
      if(grid[i][j] == 1) {
        land++;
        if(i < grid.length - 1 && grid[i+1][j] == 1) {    // 下面是岛屿
          border++;
        }
        if(j < grid[0].length && grid[i][j+1] == 1) {
          border++;
        }
      }
    }
  }
  return 4 * land - 2 * border;
}

// 方法2-----DFS  土地-土地:0  土地-海洋:1  土地-边界:1  访问过的土地标记
const islandPerimeter = (grid) => {
  const dfs = (i, j) => {
    if(i < 0 || i >= grid.length || j < 0 || j <= grid[0].length) {
      return 1;   // 当前正好越界，说明穿过了一个边界，周长+1
    }
    if(grid[i][j] == 0) {   // 从土地来到海水，说明穿越了一个边界，周长+1
      return 1;
    }
    if(grid[i][j] == 2) {   // 之前访问过，直接返回0
      return 0;
    }
    // 到此，当前节点设置为2，代表已访问
    grid[i][j] = 2;
    return dfs(i-1, j) + dfs(i+1, j) + dfs(i, j-1) + dfs(i, j+1);
  }

  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
      if(grid[i][j] == 1) {
        return dfs(i, j);   // dfs的入口，第一个土地。
      }
    }
  }
  return 0;
}

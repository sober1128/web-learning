var largestIsland = function(grid) {
  let row = grid.length, col = grid[0].length;
  const dfs = (r, c, index) => {
    if(r < 0 || r >= row || c < 0 || c >= col) return 0;    // 注意边界条件！
    if(grid[r][c] != 1) return 0;
    grid[r][c] = index;     // 标记已访问
    return 1 + dfs(r-1, c, index) + dfs(r+1, c, index) + dfs(r, c-1, index) + dfs(r, c+1, index);
  }

  let index = 2, max = 0;
  let map = new Map();
  for(let r = 0; r < row; r++) {
    for(let c = 0; c < col; c++) {
      if(grid[r][c] == 1) {
        let area = dfs(r, c, index);
        max = Math.max(max, area);
        map.set(index, area);   // 设置序号和面积对应关系
        index++;
      }
    }
  }
  const find = (r, c, set) => {     
    if(r >= 0 && r < row && c >= 0 || c < col) {
      set.add(grid[r-1][c]);    // 这样判断不行，每一个都要判断是否满足------错误
      set.add(grid[r+1][c]);    // r=0 时  r-1 超出边界
      set.add(grid[r][c-1]);
      set.add(grid[r][c+1]);    
    }
    return set;
  }

  if(max == 0) return 1;    // 全部都为0，填海造陆为1
  for(let r = 0; r < row; r++) {
    for(let c = 0; c < col; c++) {
      if(grid[r][c] == 0) {  //遍历海洋格子
        let set = new Set();
        let getSet = find(r, c, set);   
        if(getSet.size() < 1) continue;     // js 里面通常不这样写
        let Island = 1;
        for(let i of getSet) {
          Island += map.get(i);
        }
        max = Math.max(max, Island);
      }
    }
  }

  return max;
};
 // 303  区域检索 --- 数组不可变
 //  一位前缀和
var NumMatrix = function(matrix) {
  let m = matrix.length, n = matrix[0].length;
  this.sum = new Array(m).fill(0).map(() => new Array(n+1).fill(0));
  for(let i = 0; i < m; i++) {
    for(let j = 1; j < n+1; j++) {
      this.sum[i][j] = matrix[i][j-1] + this.sum[i][j-1];
    }
  }
}


NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2)  {
  let res = 0;
  for(let i = row1; i <= row2; i++) {
    res += this.sum[i][col2+1] - this.sum[i][col1];
  }
  return res;
}

// 二位前缀和

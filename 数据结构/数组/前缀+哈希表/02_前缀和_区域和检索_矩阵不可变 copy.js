// 304 给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。

var NumMatrix = function(matrix) {
  let m = matrix.length, n = matrix[0].length;
  this.sum = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0));
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < m; j++) {
      this.sum[i+1][j+1] = this.sum[i+1][j] + this.sum[i][j+1] - this.sum[i][j] + matrix[i][j];
    }
  }
}

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2)  {
  return this.sum[row2+1][col2+1] - this.sum[row1][col2+1] - this.sum[row2+1][col1] + this.sum[row1][col1];
}

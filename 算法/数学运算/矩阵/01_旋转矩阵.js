// https://leetcode-cn.com/problems/rotate-matrix-lcci/

// 对于矩阵中第 ii 行的第 jj 个元素，在旋转后，它出现在倒数第 ii 列的第 jj 个位置
// 使用辅助数组
var rotate = function(matrix) {
  const n = matrix.length;
  const matrix_new = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      matrix_new[j][n-1-i] = matrix[i][j]
    }
  }
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      matrix[i][j] = matrix_new[i][j]
    }
  }
}

// 原地旋转
var rotate = function(matrix) {
  const n = matrix.length;
  for(let i = 0; i < Math.floor(n / 2); i++) {
    for(let j = 0; j < Math.floor((n+1) / 2); j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n-1-j][i]
      matrix[n-1-j][i] = matrix[n-1-i][n-1-j]
      matrix[n-1-i][n-1-j] = matrix[j][n-1-i]
      matrix[j][n-1-i] = temp;
    }
  }
}

// 用翻转代替旋转   上下-主对角线  左右-幅对角线
var rotate = function(matrix) {
  const n = matrix.length;
  // 水平翻转
  for(let i = 0; i < Math.floor(n / 2); i++) {
    for(let j = 0; j < n; j++) {
      const temp = matrix[i][j]     // 一个个的替换
      matrix[i][j] = matrix[n-1-i][j]
      matrix[n-1-i][j] = temp
    }
  }
  // 主对角线翻转
  for(let i = 0; i < n; i++) {    //右上角
    for(let j = 0; j < i; j++) {
      [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
    }
  }
}

 var rotate = function(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let i = 0, j = n - 1;

  while (i < j) {
      let tmp = matrix[i];
      matrix[i] = matrix[j];
      matrix[j] = tmp;
      i++;
      j--;
  }
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          if (i < j) {
              let tmp = matrix[i][j];
              matrix[i][j] = matrix[j][i];
              matrix[j][i] = tmp;
          }
      }
  }
  return matrix;
};
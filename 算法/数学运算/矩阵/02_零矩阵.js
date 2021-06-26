// https://leetcode-cn.com/problems/zero-matrix-lcci/

// 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。

// 1.用两个标记数组分别记录每一行和每一列是否有零出现。
// 时间复杂度：O(mn).空间复杂度：O(m+n)
var setZeroes = function(matrix) {
  const m = matrix.length,
        n =   matrix[0].length
  const row = new Array(m).fill(false),
        col = new Array(n).fill(false);
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(matrix[i][j] === 0) {
        row[i] = col[j] = true;
      }
    }
  }
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }
}

/* 2.使用两个标记变量
  用两个标记变量记录第一行和第一列是否包含0，
  用矩阵的第一行和第一列代替方法1中的两个标记数组
  时间复杂度：O(mn).空间复杂度：O(1)
*/
var setZeroes = function(matrix) {
  const m = matrix.length,
        n =   matrix[0].length
  let flagCol = false, flagRow = false;
  // 查看第一列中是否有0，有0保存
  for(let i = 0; i < m; i++) {
    if(matrix[i][0] === 0) {
      flagCol = true
    }
  }
  for(let j = 0; j < n; j++) {
    if(matrix[0][j] === 0) {
      flagRow = true
    }
  }
  // 用第一行和第一列记录是否包含0
  for(let i = 1; i < m; i++) {
    for(let j = 1; j <n; j++) {
      if(matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }
  // 遍历，置0
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      if(matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if(flagCol) {
    for(let i = 0; i < m; i++) {
      matrix[i][0] = 0
    }
  }
  if(flagRow) {
    for(let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }
}

/*  3.用一个变量标记
    对方法2优化，只使用一个标记变量记录第一列是否存在0，这样，第一列的第一个元素即可以用来标记第一行是否出现0。
*/
var setZeroes = function(matrix) {
  const m = matrix.length,
        n =   matrix[0].length
  let flagCol = false
  for(let i = 0; i < m; i++) {
    if(matrix[i][0] === 0) {
      flagCol = true      //记录第一列是否存在0
    }
    for(let j = 1; j < n; j++) {
      if(matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0
      }
    }
  }  
  for(let i = m - 1; i >= 0; i--) {
    for(let j = 1; j < n; j++) {
      if(matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
    if(flagCol) matrix[i][0] = 0;
  }
}
// https://leetcode-cn.com/problems/pascals-triangle-ii/solution/shou-hua-tu-jie-119yang-hui-san-jiao-ii-d09dc/

var getRow = function(rowIndex) {
  const matrix = new Array(rowIndex);
  for(let i = 0; i <= rowIndex; i++) {
    matrix[i] = new Array(i+1).fill(1)
    for(let j = 1; j < i; j++) {
      matrix[i][j] = matrix[i-1][j-1] + matrix[i-1][j]
    }
  }
  return matrix[rowIndex]
}

// 优化：----滚动数组----
// 注意到对第 i+1 行的计算仅用到了第 i 行的数据，因此可以使用滚动数组的思想优化空间复杂度。
var getRow = function(rowIndex) {
  let pre = [], cur = [];
  for(let i = 0; i <= rowIndex; i++) {
    cur = new Array(i+1).fill(1)
    for(let j = 1; j < i; j++) {
      cur[j] = pre[j - 1] + pre[j]
    }
    pre = cur
  }
  return pre
}

// 动态规划   res[j] = res[j] + res[j-1]；要保证等式右边的两个，是上一行的旧值。如果内层遍历是从左往右，会出现res[j-1]是本行的上一轮迭代求出的新值，不是上一行的旧值。所以，内层遍历的方向取从右往左。这样保证了计算新值时，等号右边都是旧值。
var getRow = function(rowIndex) {
  const res = new Array(rowIndex+1);
  res[0] = 1;

  for(let i = 1; i < rowIndex+1; i++) {
    res[0] = res[i] = 1
    for(let j = i - 1; j >= 1; j--) {
      res[j] = res[j] + res[j-1]
    }
  }
  return res;
}

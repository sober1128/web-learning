// https://leetcode-cn.com/problems/max-sum-of-rectangle-no-larger-than-k/solution/javacong-bao-li-kai-shi-you-hua-pei-tu-pei-zhu-shi/

// 划分左右边界，并求出在此边界下，每行的总和
// 通过二分法找不超过K的矩阵

var maxSumSubmatrix = function(matrix, k) {
  let m = matrix.length, n = matrix[0].length;
  let max = Number.MIN_VALUE;
  for(let l = 0; l < n; l++) {   // 枚举左边界
    let rowSum = new Array(m).fill(0);   // 左边界改变才算区域重新开始
    for(let r = l; r < n; r++) {    // 枚举右边界
      for(let i = 0; i < m; i++) {  //按每一行累加
        rowSum[i] += matrix[i][r];
      }
      // 求 rowSum 连续子数组的和最大值 不超过k
      max = Math.max(max, dpmax(rowSum, k));
      console.log('第r = '+ rowSum + '-----');
    }
  }
  console.log('max = ' + max)
  return max;
};

function dpmax(arr, k) {
  let max = Number.MIN_VALUE;
  for(let i = 0; i < arr.length; i++) {
    let sum = 0;
    for(let j = i; j < arr.length; j++) {
      sum += arr[j];
      if(sum > max && sum <= k) {
        max = sum;
      }
    }
  }
  console.log('-------------' + '满足的值 = ' + max)
  return max;
}

let matrix = [[2,2,-1]], k = 0;
maxSumSubmatrix(matrix, k);
let matrix2 = [[1,0,1],[0,-2,3]], k2 = 2
maxSumSubmatrix(matrix2, k2);
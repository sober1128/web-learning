// 枚举左右边界
var numSubmatrixSumTarget = function(matrix, target) {
  let m = matrix.length, n = matrix[0].length;
  let count = 0;
  for(let i = 0; i < n; i++) {
    let rowSum = new Array(m).fill(0);
    for(let j = i; j < n; j++) {
      for(let k = 0; k < m; k++) {
        rowSum[k] += matrix[k][j];
      }
      count += Counter(rowSum, target);
    }
  }
  return count;
};

function Counter(arr, k) {
  let map = new Map();
  map.set(0, 1);
  let sum = 0, count = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if(map.has(sum - k)) {
      count += map.get(sum - k);
    } 
    if(map.has(sum)) {
      map.set(sum, map.get(sum)+1);
    } else {
      map.set(sum, 1);
    }
  }
  return count;
}


// 枚举上下边界

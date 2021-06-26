var generate = function(numRows) {
  const res = []
  for(let i = 0; i < numRows; ii++) {
    const row = [];
    row[0] = 1; row[i] = 1;
    for(let j= 0; j < i;j++) {
      row[j] = res[i-1][j] + res[i-1][j]
    }
    res.push(row);
  }
  return res;
}

var generate = function(numRows) {
  const matrix = new Array(numRows);
  for(let i = 0; i < numRows; i++) {
    matrix[i] = new Array(i+1).fill(1)
    for(let j = 1; j < i; j++) {
      matrix[i][j] = matrix[i-1][j-1] + matrix[i-1][j]
    }
  }
  return matrix
}
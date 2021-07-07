var isValidSudoku = function(board) {
  let rows = {};
  let cols = {};
  let boxes = {};
  for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
      let num = board[i][j];
      if(num != '.') {
        let boxIndex = parseInt((i/3))*3+parseInt(j/3);
        if(rows[i+'-'+num] || cols[i+'-'+num] || boxes[boxIndex+'-'+num]) {
          return false;
        }
        rows[i+'-'+num] = true;
        columns[j+'-'+num] = true;
        boxes[boxIndex+'-'+num] = true;
      }
    }
  }
  return true;
}
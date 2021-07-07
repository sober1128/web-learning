// https://leetcode-cn.com/problems/sudoku-solver/solution/shou-hua-tu-jie-jie-shu-du-hui-su-suan-fa-sudoku-s/

const solveSudoku = (board) => {
  const hasConflit = (r, c, val) => {
    for(let i = 0; i < 9; i++) {
      if(board[i][c]==val || board[r][i]==val) {    // 行列是否有该值
        return true;
      }
    }
    const rowStart = Math.floor(r/3)*3;   // 对于小框，行开始索引0,3,6
    const colStart = Math.floor(c/3)*3;
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        if(val == board[rowStart+i][colStart+j]) {
          return true;
        }
      }
    }
    return false;
  }
  const fill = (i,j) => {
    if(j == 9) {  // 列越界，说明填完了一行，填下一行的第一格
      i++;
      j = 0;
      if(i==9) return true;
    }
    if(board[i][j] != '.') return fill(i,j+1);
    for(let num = 1; num <= 9; num++) {
      if(hasConflit(i,j,String(num))) continue;
      
    }
  }
}
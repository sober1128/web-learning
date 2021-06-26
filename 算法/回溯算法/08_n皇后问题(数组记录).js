// 本题必须记录之前放置皇后的位置，才能结合约束条件去做剪枝。
// 我每次都调用 isValid 遍历一遍前面的格子，效率是不优的。
// 最好是用三个数组或 Set 去记录出现过皇后的列们、正对角线们、反对角线们，用空间换取时间。

const solveNQueens = (n) => {
  const board = new Array(n);
  for(let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.');
  }

  const cols = new Set();   //列集，记录出现过的皇后的列
  const diag1 = new Set();  // 正对角线集
  const diag2 = new Set();  // 负对角线集
  const res = [];   //存放结果的集合

  const helper = (row) => {
    if(row == n) {
      const stringsBoard = board.slice();
      for(let i = 0; i < n; i++) {
        stringsBoard[i] = stringsBoard[i].join('');
      }
      res.push(stringsBoard);
      return
    }

    for(let col = 0; col < n; col++) {
      // 如果当前点的所在的列，所在的对角线都没有皇后，即可选择，否则跳过
      if(!cols.has(col) && !diag1.has(row+col) && !diag2.has(row-col)){
        board[row][col] = 'Q';
        cols.add(col);          // 记录放了皇后的列
        diag1.add(row + col);   // 记录放了皇后的正对角线
        diag2.add(row - col);   // 记录放了皇后的负对角线
        helper(row+1);    //继续递归

        board[row][col] = '.';
        cols.delete(col);
        diag1.delete(row+col);
        diag2.delete(row-col);
      }
    }
  }

  helper(0);
  return res;
}

console.log(solveNQueens(4));
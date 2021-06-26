// n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

// https://leetcode-cn.com/problems/n-queens/solution/shou-hua-tu-jie-cong-jing-dian-de-nhuang-hou-wen-t/

/*  回溯法：
    递归深度达到最后一层：达到一个符合条件的解，向上回溯，向结果中添加当前的皇后位置列表
    循环所有同级向深层递归，将每一层皇后的位置进行记录
    当前位置在已放好皇后的攻击范围内，当前位置不能防止皇后
    没有命中上面的规则，说明当前位置可放置皇后，向更深层递归
    将结果进行可视化绘制    
*/

var solveNQueens = (n) => {
  // 棋盘的初始化
  const board = new Array(n);
  for(let i = 0; i < n; i++) {   
    board[i] = new Array(n).fill('.');
  }
  const res = [];

  // 判断是否符合条件
  const isValid = (row, col) => {
    for(let i = 0; i < row; i++) {    // 之前的行
      for(let j = 0; j < n; j++) {    // 所有的列
        // 皇后的走法是：可以横直斜走，格数不限。因此要求皇后彼此之间不能相互攻击，等价于要求任何两个皇后都不能在同一行、同一列以及同一条斜线上。
        if(board[i][j] == 'Q' && (j == col || i+j === row + col || i-j === row - col)) {  // 发现了皇后，并且和自己同列/同对角线
          return false; // 不合法的选择
        }
      }
    }
    return true;
  }

  const helper = (row) => { //放置当前的皇后
    if(row == n) {    // 递归的出口，超出了最后一行
      const stringsBoard = board.slice();   //拷贝一份board
      for(let i = 0; i < n; i++) {
        stringsBoard[i] = stringsBoard[i].join(''); //将每一行字符串拼接起来
      }
      res.push(stringsBoard);
      return
    }

    for(let col = 0; col < n; col++) {  //枚举所有选择
      if(isValid(row, col)) {   // 剪掉无效的选择
        board[row][col] = 'Q';    // 做出选择，放置皇后
        helper(row + 1);    // 继续选择，向下递归
        board[row][col] = '.' //撤销当前选择
      }
    }
  }

  helper(0);    //入口：从第0行开始
  return res;
}

console.log(solveNQueens(4));



const solveNQueens = (n) => {
  const board = new Array(n).map(() => new Array(n).fill('.'));
  const res = [];
  const isValid = (row, col) => {
    for(let i = 0; i < row; i++) {
      for(let j = 0; j < n; j++) {
        if(board[i][j] == 'Q' && (j==col || i+j == row+col || i-j == row-col)) {
          return false;
        }
      }
    }
    return true;
  }

  const dfs = (row) => {
    if(row == n){
      const stringsBoard = board.slice(); // 拷贝
      for(let i = 0; i < n; i++) {
        stringsBoard[i] = stringsBoard[i].join('');
      }
      res.push(stringsBoard);
      return;
    }

    for(let col = 0; col < n; col++) {
      if(isValid(row, col)) {
        board[row][col] = 'Q';
        dfs(row+1);
        board[row][col] = '.';
      }
    }
  }
  dfs(0);
  return res;
}


// 用三个数组或 Set 去记录出现过皇后的列们、正对角线们、反对角线们，用空间换取时间。
const solveNQueens = (n) => {
  const board = new Array(n).map(() => new Array(n).fill('.'));
  const cols = new Set();   // 列集，记录出现过皇后的列
  const diag1 = new Set();  // 正对角线集
  const diag2 = new Set();  // 反对角线集
  const res = [];

  const dfs = (row) => {
    if(row == n) {
      const stringsBoard = board.slice();
      for(let i = 0; i < n; i++) {
        stringsBoard[i] = stringsBoard[i].join('');
      }
      res.push(stringsBoard);
      return;
    }

    for(let col = 0; col < n; col++) {
      // 如果当前点的所在的列，所在的对角线都没有皇后，即可选择，否则，跳过
      if(!cols.has(col) && !diag1.has(row+col) && !diag2.has(row-col)) {
        board[row][col] = 'Q';
        cols.add(col);        // 记录放了皇后的列
        diag1.add(row+col);   // 记录放了皇后的正对角线
        diag2.add(row-col);   // 记录放了皇后的负对角线
        dfs(row+1);
        board[row][col] = '.';  // 撤销该点的皇后
        cols.delete(col);       // 对应的记录也删一下
        diag1.delete(row+col);
        diag2.delete(row-col);
      }
    }
  }
  dfs(0);
  return res;
}

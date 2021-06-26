// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

var generateParenthesis = function (n) {
  const res = [];
  const dfs = (lRemain, rRemain, str) => {
    if(str.length == n*2) {
      res.push(str);
      return;
    }
    if(lRemain > 0) {
      dfs(lRemain-1, rRemain, str+'(');
    }
    if(rRemain > lRemain) {   // 注意判断！
      dfs(lRemain, rRemain-1, str+')');
    }
  }
  dfs(n, n, '');
  return res;
}

var generateParenthesis = function (n) {
  const res = [];
  const dfs = (left, right, n, str) => {
    if(left == n && right == n) {
      res.push(str);
      return;
    }
    if(left < right) return;    // 条件判断  有效承兑出现的括号
    if(left < n) {
      dfs(left+1, right, n, str+'(');
    }
    if(right < n) {
      dfs(left, right+1, n, str+')');
    }
  }
  dfs(0, 0, n, '');
  return res;
}
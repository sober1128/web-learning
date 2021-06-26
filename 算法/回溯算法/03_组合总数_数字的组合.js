// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

const combine = (n, k) => {
  const res = [];

  const dfs = (index, path) => {    // index是枚举选择的七点，path是当前构造的路径
    if(path.length == k) {
      res.push([...path]);    // 拷贝path到res里
      return    // 结束当前递归
    }

    for(let i = index; i <= n; i++) {   // 枚举出所有选择
      path.push(i);
      dfs(i+1, path);     // 向下继续选择
      path.pop();   // 撤销选择
    }
  }

  dfs(1, []);   // 递归的入口，从数字1开始
  return res;
}

console.log(combine(4,2));
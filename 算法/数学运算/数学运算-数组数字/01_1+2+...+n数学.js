// 求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）

const Sum = (n) => {
  // return n && (n + Sum(n - 1));  // 使用递归，使用&&短路来终止递归
  return (Math.pow(n, 2) + n) >> 1;
  // 求和公式为 n(n+1)/2 = (n方+n)/2
  // 可以用Math.pow函数求n方，用位运算代替除法
}

console.log(Sum(10));

// 递归  && 来判断
const Sum = (n) => {
  n && (n += Sum(n-1))
  return n
}
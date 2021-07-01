/* 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

返回被除数 dividend 除以除数 divisor 得到的商。

整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2
*/

// 整理了一下思路，可以简单概括为： 60/8 = (60-32)/8 + 4 = (60-32-16)/8 + 2 + 4 = 1 + 2 + 4 = 7

var divide = function (dividend, divisor) {
  let res = 0;
  let sign = dividend > 0 ? (divisor > 0 ? '' : '-') : (divisor > 0 ? '-' : '');
  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);
  let str = dividend.toString();  // 被除数 dividend
  let quot = '', remain = '';   // 字符串记录，最后判断溢出
  for(let i = 0; i < str.length; i++) {
    remain += str[i];
    let temp = 0;
    let m = parseInt(remain);
    while(divisor <= m) {
      m = m - divisor;
      temp++;
    }
    quot += temp;
    remain = m.toString();
  }
  res = parseInt(sign + quot);
  if(res > Math.pow(2,31)-1 || res < Math.pow(-2,31)) {
    return Math.pow(-2,31)
  } else {
    return res;
  }
}

var divide = function(dividend, divisor) {
  let a = dividend, b = divisor;
  let flag = 1;   // 符号位
  if((a<0 && b>0) || (a>0 && b<0)) {
    flag = -1;
  }
  a = Math.abs(a);
  b = Math.abs(b);
  let res = 0;
  if(b == 1) res = a;
  if(b != 1) res = div(a,b);
  res = flag == -1 ? -res : res;
  if(res > Math.pow(2,31)-1 || res < Math.pow(-2,31)) {
    res = Math.pow(2,31)-1;   //如果结果溢出，返回2^31 − 1
  }
  return res;

  function div(a,b) {
    // base case
    if(a < b) return 0;
    let count = 1;    // 倍数
    let tb = b;
    while(tb+tb < a) {
      // 这么写 tb加倍跟count绑定 所以加倍的tb应该符合条件 所以要预检测下tb+tb<=a
      tb+=tb // 相当于*2 加倍
      count += count;
    }
    let n = div(a-tb, b);
    return count+n;
  }
}
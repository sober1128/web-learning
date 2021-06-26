// 写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。

/*#思路
  将加法拆解成三步：
    1.不进位相加
    2.计算进位
    3.进位与不进位结果进行相加
    重复这三步，直到进位值为0
*/
// 可将和分为 非进位和n 与 进位c 两部分 可推导出 s（和） = n（非进位和） + c（进位）

// 递归
var add = function(num1, num2) {
  if(num2 === 0) {
    return num1
  }
  return add(num1 ^ num2 , (num1&num2)<<1)
}

// 非递归
var add = function(num1, num2) {
  while(num2 != 0) {
    const exc1 = num1 ^ num2
    const carry = (num1 & num2) << 1
    num1 = exc1
    num2 = carry
  }
  return num1
}

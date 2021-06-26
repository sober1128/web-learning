// https://leetcode-cn.com/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof/

/*  根据题意，有以下四种字符需要考虑：
    1.首部空格：删除
    2.符号位：三种情况---即"+" "-" "无符号";
             新建一个变量保存符号位，返回前判断正负即可。
    3.非数字字符：遇到首个非数字的字符时，应立即返回
    4.数字字符：(1)字符转数字："此数字的ASCII码" - "0的ASCII码" 即可
              (2)数字拼接：若从左向右遍历数字，设当前位字符为c，当前位数字为x，
              数字结果为res，则数字拼接公式为：
                res = 10 * res + x
                x = ASCII(c) - ASCII('0')
*/

var strToInt = function(str) {
  /* 
        解法一 步步为营
        1、过滤前方空格
        2、确定正负号
        3、计算值部分
        4、得到值 且判断是否越界
    */
  if(!str.length) return 0
  let i = 0,       // i 当前索引 
      sign = 1,    //sign 正负号
      total = 0,   // 数字部分
      num
  const len = str.length,
        min = -(2 ** 31),
        max = (2 ** 31) - 1
  // const INT_MAX = Math.pow(2,31) - 1
  // const INT_MIN = -Math.pow(2,31)

  //1. 剩余前方空格
  while(str.charAt(i) === ' ' && i < len) i++;

  // 2.确定正负号
  if(str.charAt(i) === '+' || str.charAt(i) === '-') {
    sign = str.charAt(i) === '+' ? 1 : -1
    i++
  }

  // 3.计算数字部分
  while(i < len) {
    // 遇到字符不在[0-9]则退出循环
    if(str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) {
      break
    } else {
      // 更新 total 巧用 - '0' 隐式转换  [0-9]字符
      total = 10 * total + (str.charAt(i++) - '0')
    }
  }
  num = sign * total

  return num <= min ? min : num >= max ? max : num
}

//  ------正则表达式-------
var strToInt = function(str) {
  const num = str.trim().match(/^[+-]?\d+/)
  if(!num) return 0

  const min = - (2 ** 31), max = (2 ** 31) - 1
  return num <= min ? min : num >= max ? max : num
}


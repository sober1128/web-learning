// 数值的整数次方:给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

function Power(base, exponent) {
  if(exponent === 0) {
    return 1
  } else {
    if(exponent > 0) {
      let result = 1
      for(let i = 0; i < exponent; i++) {
        result *= base
      }
      return result
      // return Math.pow(base, exponent)
    } else if (exponent < 0) {
      let result = 1
      for(let i = 0; i < Math.abs(exponent); i++) {
        result *= base
      }
      return result ? 1 / result : false;
    }
  }

}
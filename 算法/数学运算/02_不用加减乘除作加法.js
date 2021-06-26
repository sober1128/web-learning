function Add(num1, num2) {
  if(num2 === 0) {
    return num1
  }
  return Add(num1 ^ num2 , (num1 & num2) << 1)
}

function Add(num1, num2) {
  while(num2 != 0) {
    const exc1 = num1 ^ num2;   //二进制异或操作和不进位相加得到的结果相同
    const carry = (num1 & num2) << 1;  //二进制与操作后左移和进位结果相同
    num1 = excl;
    num2 = carry;
  }
  return num1;
}
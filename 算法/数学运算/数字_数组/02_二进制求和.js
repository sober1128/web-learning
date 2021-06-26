var addBinary = function(a, b) {
  let res = "";
  let carry = 0;
  let m = a.length, n = b.length;
  for(let i = m-1, j = n-1; i >= 0 || j >= 0 ; i--, j--) {
    let sum = carry;
    sum += i >= 0 ? parseInt(a[i]) : 0;
    sum += j >= 0 ? parseInt(b[j]) : 0;
    res += sum % 2;
    carry = sum >= 2 ? 1 : 0;
  }
  res += carry == 1 ? carry : ""; 
  return ans.split("").reverse().join("")
    // split() 方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，
    // 以一个指定的分割字串来决定每个拆分的位置。reverse()翻转。

}
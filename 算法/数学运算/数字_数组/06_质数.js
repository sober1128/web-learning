// 暴力法：枚举筛选
var countPrimes = function(n) {
  let count = 0;
  for(let i = 2; i < n; i++) {
    count += isPrimes(i);
  }
  return count;
}

function isPrimes(num) {
  for(let i = 2; i * i <= num; i++) {
    if(num % i == 0) {
      return false;
    }
  }
  return true;
}
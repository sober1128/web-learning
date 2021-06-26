// 633 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。

// sqrt函数
/*
  时间复杂度：O(\sqrt{c}))。枚举 a 的时间复杂度为 O(\sqrt{c})，
    对于每个 aa 的值，可在 O(1)O(1) 的时间内寻找 bb。
  空间复杂度：O(1)
*/
var judgeSquareSum = function(c) {
  for(let a = 0; a * a <= c; a++) {
    const b = Math.sqrt(c - a*a);
    if(b === parseInt(b)) return true;
  }
  return false;
}

// 双指针
var judgeSquareSum = function(c) {
  let a = 0, b = Math.floor(Math.sqrt(c));
  while(a <= b) {
    const sum = a*a + b*b;
    if(sum === c) return true;
    else if(sum < c) a++;
    else b--;
  }
  return false;
}

var findNthDigit = function(n) {
  let digit = 1, start = 1, count = 9;
  while(n > count) {
    n -= count
    start *= 10
    digit += 1
    count = 9 * start * digit
  }
  // 数字排序第一位是0，规律从1~9,10~99...  减去第一个
  let num = start + Math.floor((n-1) / digit)
      index = (n-1) % digit
  // return num.toString()[index]
      num = num.toString()
  return num[index]
};
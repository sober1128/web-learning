// https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/solution/javadi-gui-by-xujunyi/

var countDigitOne = function(n) {
  const count = (n) => {
    if(n <= 0) return 0;
    let s = n + '';
    let high = s.charAt(0) - '0',
        pow = Math.pow(10, s.length-1),
        last = n % (high * pow)
    if(high == 1) {
      return count(pow-1) + last + 1 + count(last)
    } else {
      return pow + high * count(pow-1) + count(last)
    }
  }
  return count(n)
};


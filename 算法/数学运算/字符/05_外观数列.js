/*
  核心思想：
  创建慢指针和快指针 left、right 来确定每个字符的重复数量。

  具体思路：
  当 left 和 right 所指字符相同时，right 向右移动一位，直到 right 所指与 left 不同。
  确定相同字符的个数，既 right - left 的值，该值表示的即是 left 所指字符的个数。
  将结果转为以字符的形式储存。
  继续历遍，因为 left 和 right 之间的字符已经历遍过了，所以更新指针 left 至 right。
  当 right 超出字符范围时，结束循环。
*/

//递归 + 双指针
var countAndSay = function (n) {
  if(n === 1) return "1";
  let pre = countAndSay(n - 1);
  let res = "", left = 0, right = 0;
  while(right < pre.length) {
    while(pre[left] === pre[right] && right < pre.length) {
      right++;
    }
    res += (right - left).toString() + pre[left];
    left = right;
  }
  return res;
}

//滚动数组
var countAndSay = function (n) {
  let pre = "1", cur = "1";
  for(let i = 1; i < n; i++) {
    pre = cur;
    cur = "";
    let left = 0, right = 0;
    while(pre[left] === pre[right] && right < pre.length) {
      right++;
    }
    cur += (right - left).toString() + pre[left];
    left = right;
  }
  return cur;
}

// https://leetcode-cn.com/problems/string-rotation-lcci/

// 字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。

var isFlipedString = function(s1, s2) {
  // return s1.length === s2.length && (s2 + s2).includes(s1)；
  if(s1.length != s2.length) return false;
  return (s2+s2).includes(s1);
};

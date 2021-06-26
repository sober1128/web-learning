/* 面试题 01.04. 回文排列
给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。
回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。
回文串不一定是字典当中的单词。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindrome-permutation-lcci
*/
var canPermutePalindrome = function(s) {
  let map = {}
  let count = 0;
  for(let i = 0; i < s.length; i++) {
    if(!map[s[i]]) {
      map[s[i]] = 1
    } else {
      map[s[i]]++
    }
  }
  for(let c in map) {
    if(map[c] % 2 !== 0){
      count++
    }
  }
  return count <= 1
};

var canPermutePalindrome = function(s) {      //-----错误-------
  let set = new Set()
  let count = 0;
  for(let i = 0; i < s.length; i++) {
    if(!set.has(s[i])) {
      set.add(s[i])
      count++
    } else {
      count--
    }
  }
  return count <= 1
};

var canPermutePalindrome = function(s) {
  let obj = {}
  for(let i = 0; i < s.length; i++) {
    let char = s[i]
    if(obj[char]) {
      delete obj[char]
    } else {
      obj[char] = 1;
    }
  }
  return Object.keys(obj).length <= 1;
}

var canPermutePalindrome = function(s) {      //---------错误--------
  // 位运算 或---同为0，异为1
  let mark = 0
  for(let char of s) {
    const c = char.charCodeAt()
    mark = mark ^ (1 << c)    //异或
  }
  mark = (mark - 1) & mark
  return mark == 0
};
 
// 测试案例  "AaBb//a"----误


// 给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

// 转换为数组，排序比较
var CheckPermutation = function(s1, s2){
  return s1.split('').sort().toString() === s2.split('').sort().toString()
}

// 使用map
var CheckPermutation = function(s1, s2) {
  if(s1.length !== s2.length) return false;
  let map = {}
  for(let i = 0; i < s1.length; i++) {
    let c = s1[i];
    if(!map[c]) {
      map[c] = 1
    } else {
      map[c]++
    }
  }

  for(let i = 0; i < s2.length; i++) {
    let c = s2[i];
    if(!map[c]) {
      return false
    } else {
      map[c]--;
    }
  }

  for(let c in map) {
    if(map[c] !== 0) {
      return false
    } else {
      return true
    }
  }
};
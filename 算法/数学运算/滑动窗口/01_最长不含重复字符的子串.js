/*思路很简单，用一个滑动窗口装没有重复的字符，枚举字符记录最大值即可
对于遇到重复字符如何收缩窗口大小？
我们可以秒用 map 维护字符的索引，遇到相同的字符，把左边界移动过去即可
挪动的过程中记录最大长度
*/


// 滑动窗口+哈希表
var lengthOfLongestSubstring = function(s) {
  let map = new Map()
  let i = -1, res = 0, n = s.length
  for(let j = 0; j < n; j++) {
    if(map.has(s[j])) {
      i = Math.max(i, map.get(s[j]))    //更新s[j]的索引
    }
    res = Math.max(res, j - i)    // 更新长度
    map.set(s[j], j)
  }
  return res
}
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/zhu-xing-jie-shi-hua-dong-chuang-kou-shu-gqdj/

// 滑动窗口  使用滑动窗口算法；
// 当遇到重复字符的时候删除重复字符前面（包括这个重复字符）的所有字符；
// 记录达到不重复的最长子字符长度；
// 循坏之后有更长的不重复子串就更新我们的不重复最大子字符串长度；
var lengthOfLongestSubstring = function(){
  let str = [], maxlength = 0, len = s.length;
  for(let i = 0; i < len; i++) {
    let index = str.indexOf(s[i])
    if(index != -1){    //说明找到了重复的
      str.splice(0, index+1)    //截掉重复之前的
    }
    str.push(s[i])
    maxlength = Math.max(maxlength, str.length);
  }
  return maxlength
}

var lengthOfLongestSubstring = function() {
  let map = new Map()
  let res =0, temp = '';
  for(let i = 0; i < len; i++) {
    let index = temp.indexOf(s[i])
    if(index == -1) {
      temp += s[i]
      res = Math.max(res, temp.length)
    } else {
      temp = temp.slice(index+1)
      temp += s[i]
    }
  }
  return res;
}


let n = s.length;
    let res = '';
    let dp = Array.from(new Array(n),() => new Array(n).fill(0));   //生成一个包含n个元素的数组，每个元素又是一个包含n个0的数组

    for(let i = n-1;i >= 0;i--){
        for(let j = i;j < n;j++){
            dp[i][j] = s[i] == s[j] && (j - i <2  || dp[i+1][j-1]);
            if(dp[i][j] && j - i + 1 > res.length){
                res = s.slice(i, j+1)
            }
        }
    }
    return res;


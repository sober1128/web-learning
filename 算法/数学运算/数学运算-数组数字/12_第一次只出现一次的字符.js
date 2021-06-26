/*解答：使用Map
使用 map 两次遍历即可：

遍历字符串，将每个字符的值与出现次数记录到 map 中
再次遍历 map.keys() ，获取 map 中每个字符出现的次数，判断是否仅仅只有 1 次，返回第一个仅出现一次的字符

时间复杂度：O(n)
空间复杂度：O(n)
*/

var firstUniqChar = function(s) {
  if(!s) return " "
  let map = {}, len = s.length
  for(let i = 0; i < len; i++) {
    map[s[i]] ? map[s[i]]++ :  map[s[i]] = 1
    // map[s[i]] = map[s[i]] ? map[s[i]]++ : 1
    // 错误  一开始map[s[i]]不一定存在
  }
  for(let k in map) {
    if(map[k] == 1) {
      return k
    }
  }
  return " "
}


// 用数组储存---错误？
var firstUniqChar = function(s) {
  if(!s) return " "
  let arr = []
  for(let c of s){
    arr[c - 'a'] ++
  }
  for(let c of s) {
    if(arr[c - 'a'] == 1) {
      return c
    }
  }
  return " "
}

var firstUniqChar = function(s) {
  let len = s.length
  let dic = [];
  for(let i = 0; i < len; i++) {
    if(dic[s[i]]) {
      dic[s[i]]= false
    } else if(dic[s[i]] == null) {
      dic[s[i]] = true
    }
  }
  for(let i = 0; i < len; i++) {
    if(dic[s[i]]) {
      return s[i]
    }
  }
  return " "
}
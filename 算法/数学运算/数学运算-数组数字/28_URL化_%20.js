/*URL化。编写一种方法，将字符串中的空格全部替换为%20。假定该字符串尾部有足够的空间存放新增字符，并且知道字符串的“真实”长度。（注：用Java实现的话，请使用字符数组实现，以便直接在数组上操作。）

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/string-to-url-lcci
*/

var replaceSpaces = function(S, length) {
  // substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
  // return S.substr(0, length).split(' ').join('%20')
  
  const str = S.split('').slice(0, length)
  for(let i = 0; i < length; i++) {
    if(str[i] === ' ') {
      str.splice(i, 1, '%20')
    }
  }
  return str.join('')
}

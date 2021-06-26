// 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

// 字符串切片
var reverseLeftWords = function(s, n) {
  let left = s.slice(0, n),
      right = s.slice(n)
    return right.concat(left)
};

// 列表遍历拼接   先向res添加n+1位至末位的，再添加首尾至n位的
var reverseLeftWords = function(s, n) {
  let res = '', sLen = s.length
  for(let i = n; i < sLen; i++) {
    res += s[i]
  }
  for(let i = 0; i < n; i++) {
    res += s[i]
  }
  return res
}

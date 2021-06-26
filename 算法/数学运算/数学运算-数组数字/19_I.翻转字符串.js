var reverseWords = function(s) {
  let arr = s.trim().replace(/\s+/g,' ').split(' ')
  // 先去掉前后两头的空格，再用正则去选择所有空格（一个或连续多个空格），用一个空格符代替，然后就是拆分成数组，更换位置再重组
  let l = 0, r = arr.length - 1
  while(l < r) {
    let temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp
    l++
    r--
  }
  return arr.join(' ')
}

var reverseWords = function(s) {
  const n = s.length
  let newString = ''    //声明newString存放新字符
  let word = ''
  for(let i = 0; i < n; i++) {
    if(s[i] === ' '){
      //如果当前字符是空格，跳出循环
      continue
    } else {
      word += s[i]    //如果不是空格，将当前字符存入word
    }
    if(!s[i+1] || s[i+1] === ' ') {
      // 如果 s[i + 1] 不存在或者 s[i + 1] 为空格，将 word 存入当前字符串
      // s[i+1] 不存在，代表字符串遍历结束
      // s[i+1] 为空格，代表当前单词遍历结束
      newString = word + ' ' + newString
      word = ''
    }
  }
  return newString
  return newString.slice(0, -1)
}
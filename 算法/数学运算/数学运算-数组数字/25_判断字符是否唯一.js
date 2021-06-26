// 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

// 1.暴力
var isUnique = function(astr) {
  const len = astr.length 
  for(let i = 0; i < len; i++) {
    for(let j = i+1; j < len; j++) {
      if(astr[i] === astr[j]) {
        return false
      } 
    }
  }
  return true
}

var isUnique = function(astr) {
  let arr = astr.split("").sort();
  for(let i = 1; i < arr.length; i++) {
    if(arr[i-1] === arr[i]) {
      return false
    }
  }
  return true
}

// 2.set集合
var isUnique = function(astr) {
  let set = new Set(astr.split(''))
  return set.size === astr.length
}

var isUnique = function(astr) {
  let set = new Set()
  for(let i = 0; i < astr.length; i++) {
    if(set.has(astr[i])) {
      return false
    } else {
      set.add(astr[i])
    }
  }
  return true
}

var isUnique = function(astr) {
  let map = {}
  for(let i = 0; i < astr.length; i++) {
    let c = astr[i]
    if(!map[c]) {
      map[c] = 1
    } else {
      return false
    }
  }
  return true
}

// 3.位运算
var isUnique = function(astr) {
  let mark = 0;
  for(let char of astr) {
    // 需要左移的位数
    const c = char.charCodeAt() - 97;
    // mark 与 左移结果进行与运算，如果不是0，说明其中有一位都是1，说明重复
    if((mark & (1 << c)) !== 0) {
      return false;
    }
    // 不重复，mark 与 左移结果 进行或运算，相当于保存该值
    mark = mark | (1 << c)
  }
  return true
}
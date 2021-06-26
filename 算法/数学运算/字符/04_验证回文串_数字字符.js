var isPalindrome = function(s) {
  // 利用正则表达式将字符串恢复为可判断回文字符串
  let a = s.toLocaleLowerCase().match(/[A-Za-z0-9]+/g);
  if(!a) return true;
  let slong = a.join("");
  let left = 0, right = slong.length-1;
  while(left < right) {
    if(slong[left] == slong[right]){
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

var isPalindrome = function(s) {
  // \W：匹配非 字母、数字、下划线。等价于 '[^A-Za-z0-9_]'
  let str = s.replace(/(\W|_)/g, '').toLocaleLowerCase();   // 字符串
  let arr = s.toLowerCase().replace(/[^a-z0-9]/g,"").split("");   // 数组

  let left = 0, right = str.length - 1;
  while(left < right) {
    if(str[left] == str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};

// 不用正则，匹配双指针
var isPalindrome = function(s) {
  s = s.toUpperCase();    // 先转换为大写
  let i = 0, j = s.length-1;

  const isValid = (c) => {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');
  };
  
  while(i < j) {
    if (!isValid(s[i])) {
      i++;
      continue;
    }
    if (!isValid(s[j])) {
      j--;
      continue;
    }
    if(s[i] == s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}
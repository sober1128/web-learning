var oneEditAway = function(first, second) {
  const len1 = first.length,
        len2 = second.length;
  if(Math.abs(len2-len1) > 1) return false;
  let isContinue = true;
  for(let i=0, j=0; i<len1 && j <len2;) {
    if(first[i++] !== second[j++]) {    // 这里i++  j++了
      if(!isContinue) return false;
      isContinue = false
      if(len1 < len2) i--;
      else if(len1 > len2) j--
    }
  }
  return true
};

var oneEditAway = function(first, second) {
  const len1 = first.length,
        len2 = second.length;
  if(Math.abs(len2-len1) > 1) return false;
  let isContinue = true;      // 使用一个标志来表示只编辑一次！！
  for(let i=0, j=0; i<len1 && j <len2;) {
    if(first[i] !== second[j]) {
      if(!isContinue) return false;
      isContinue = false
      if(len1 < len2) j++;      //插入
      else if(len1 > len2) i++; //删除
      else {      // 替换
        i++;
        j++
      }
    } else {      //相等，指针后移
      i++;
      j++
    }
  }
  return true
};